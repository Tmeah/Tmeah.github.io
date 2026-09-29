type RateLimiter = {
  limit(options: { key: string }): Promise<{ success: boolean }>;
};

type Env = {
  RESEND_API_KEY: string;
  TO_EMAIL: string;
  FROM_EMAIL: string;
  ALLOWED_ORIGINS: string;
  CONTACT_LIMIT?: RateLimiter;
};

type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

const limits = { name: 100, email: 254, message: 5000 };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function corsHeaders(origin: string | null, env: Env): Record<string, string> {
  const allowed = env.ALLOWED_ORIGINS.split(",").map((value) => value.trim());
  if (!origin || !allowed.includes(origin)) {
    return {};
  }
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function json(body: Record<string, unknown>, status: number, headers: Record<string, string>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...headers, "Content-Type": "application/json" },
  });
}

function readMessage(body: unknown): ContactMessage | null {
  if (typeof body !== "object" || body === null) {
    return null;
  }
  const { name, email, message } = body as Record<string, unknown>;
  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return null;
  }
  const clean = { name: name.trim(), email: email.trim(), message: message.trim() };
  if (
    !clean.name ||
    !clean.message ||
    clean.name.length > limits.name ||
    clean.email.length > limits.email ||
    clean.message.length > limits.message ||
    !emailPattern.test(clean.email)
  ) {
    return null;
  }
  return clean;
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => `&#${character.charCodeAt(0)};`);

async function sendEmail({ name, email, message }: ContactMessage, env: Env) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.FROM_EMAIL,
      to: [env.TO_EMAIL],
      reply_to: email,
      subject: `Portfolio message from ${name.replace(/[\r\n]+/g, " ")}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(email)}</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    }),
  });
  if (!response.ok) {
    throw new Error(`Resend responded ${response.status}: ${await response.text()}`);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const cors = corsHeaders(request.headers.get("Origin"), env);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: cors["Access-Control-Allow-Origin"] ? 204 : 403, headers: cors });
    }
    if (request.method !== "POST") {
      return json({ error: "Method not allowed" }, 405, cors);
    }
    if (!cors["Access-Control-Allow-Origin"]) {
      return json({ error: "Origin not allowed" }, 403, cors);
    }

    const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";
    if (env.CONTACT_LIMIT && !(await env.CONTACT_LIMIT.limit({ key: ip })).success) {
      return json({ error: "Too many messages, try again in a minute" }, 429, cors);
    }

    const body: unknown = await request.json().catch(() => null);
    // Bots fill every field, including the visually hidden one.
    if (typeof body === "object" && body !== null && (body as Record<string, unknown>).website) {
      return json({ ok: true }, 200, cors);
    }
    const contact = readMessage(body);
    if (!contact) {
      return json({ error: "Please fill in your name, a valid email, and a message" }, 400, cors);
    }

    try {
      await sendEmail(contact, env);
    } catch (error) {
      console.error(error);
      return json({ error: "Could not send right now" }, 502, cors);
    }
    return json({ ok: true }, 200, cors);
  },
};
