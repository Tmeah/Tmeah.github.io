"use client";

import emailjs from "@emailjs/browser";
import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/content/site";

const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";

type FormStatus = "idle" | "loading" | "success" | "fallback";

function openMailtoFallback(name: string, email: string, message: string) {
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`,
  );
  window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("user_name") ?? "");
    const email = String(formData.get("user_email") ?? "");
    const message = String(formData.get("message") ?? "");

    const emailJsConfigured =
      publicKey.length > 0 && serviceId.length > 0 && templateId.length > 0;

    if (!emailJsConfigured) {
      setStatus("fallback");
      openMailtoFallback(name, email, message);
      return;
    }

    setStatus("loading");
    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("fallback");
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
        <textarea className="input" id="message" name="message" required />
      </div>
      <button
        type="submit"
        className="form__submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Send it my way"}
      </button>
      <p className="form__status" role="status" aria-live="polite">
        {status === "success" ? (
          <span className="form__status--success">
            Thanks for the message! Looking forward to speaking to you soon.
          </span>
        ) : null}
        {status === "fallback"
          ? "Opening your email app with the message filled in."
          : null}
      </p>
    </form>
  );
}
