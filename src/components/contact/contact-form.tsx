import { useState, type FormEvent } from "react";
import { siteConfig } from "@/content/site";

type FormStatus =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success" }
  | { kind: "error"; message: string }
  | { kind: "fallback" };

function openMailtoFallback(name: string, email: string, message: string) {
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ kind: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("user_name") ?? "");
    const email = String(formData.get("user_email") ?? "");
    const message = String(formData.get("message") ?? "");
    const website = String(formData.get("website") ?? "");

    setStatus({ kind: "loading" });
    try {
      const response = await fetch(siteConfig.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });
      if (response.ok) {
        setStatus({ kind: "success" });
        form.reset();
        return;
      }
      if (response.status === 400 || response.status === 429) {
        const { error } = (await response.json().catch(() => ({}))) as { error?: string };
        setStatus({ kind: "error", message: error ?? "Please check the form and try again." });
        return;
      }
      throw new Error(`Contact endpoint responded ${response.status}`);
    } catch {
      setStatus({ kind: "fallback" });
      openMailtoFallback(name, email, message);
    }
  }

  return (
    <form onSubmit={onSubmit} id="contact__form">
      <div className="form__item">
        <label className="form__item--label" htmlFor="user_name">
          Name
        </label>
        <input
          className="input"
          id="user_name"
          name="user_name"
          type="text"
          autoComplete="name"
          required
        />
      </div>
      <div className="form__item">
        <label className="form__item--label" htmlFor="user_email">
          Email
        </label>
        <input
          className="input"
          id="user_email"
          name="user_email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="form__item">
        <label className="form__item--label" htmlFor="message">
          Message
        </label>
        <textarea className="input" id="message" name="message" maxLength={5000} required />
      </div>
      <div className="form__trap" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button
        type="submit"
        className="form__submit"
        disabled={status.kind === "loading"}
      >
        {status.kind === "loading" ? "Sending…" : "Send it my way"}
      </button>
      <p className="form__status" role="status" aria-live="polite">
        {status.kind === "success" ? (
          <span className="form__status--success">
            Thanks for the message! Looking forward to speaking to you soon.
          </span>
        ) : null}
        {status.kind === "error" ? status.message : null}
        {status.kind === "fallback" ? "Opening your email app with the message filled in." : null}
      </p>
    </form>
  );
}
