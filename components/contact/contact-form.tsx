"use client";

import emailjs from "@emailjs/browser";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/content/site";

const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";

type FormStatus = "idle" | "loading" | "success" | "error";

function openMailtoFallback(name: string, email: string, message: string) {
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`,
  );
  window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("user_name") ?? "");
    const email = String(formData.get("user_email") ?? "");
    const message = String(formData.get("message") ?? "");

    setStatus("loading");
    setErrorMessage(null);

    const emailJsConfigured =
      publicKey.length > 0 && serviceId.length > 0 && templateId.length > 0;

    if (!emailJsConfigured || typeof emailjs === "undefined") {
      setStatus("error");
      openMailtoFallback(name, email, message);
      return;
    }

    try {
      emailjs.init({ publicKey });
      await emailjs.sendForm(serviceId, templateId, form);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Email service unavailable. Opening your mail app with the message prefilled.",
      );
      openMailtoFallback(name, email, message);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <div className="space-y-2">
        <Label htmlFor="user_name">Name</Label>
        <Input
          id="user_name"
          name="user_name"
          required
          autoComplete="name"
          className="border-0 border-b border-white/40 bg-transparent text-white shadow-none"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="user_email">Email</Label>
        <Input
          id="user_email"
          name="user_email"
          type="email"
          required
          autoComplete="email"
          className="border-0 border-b border-white/40 bg-transparent text-white shadow-none"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          className="border-0 border-b border-white/40 bg-transparent text-white shadow-none"
        />
      </div>
      <Button type="submit" disabled={status === "loading"} className="mt-2 bg-[#0074d9] text-white hover:bg-transparent hover:text-white">
        {status === "loading" ? "Sending…" : "Send message"}
      </Button>
      {status === "success" ? (
        <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400" role="status">
          Thanks for the message—I will get back to you soon.
        </p>
      ) : null}
      {errorMessage ? (
        <p className="text-sm text-muted-foreground" role="status">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
