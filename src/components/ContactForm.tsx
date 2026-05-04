"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { services } from "@/data/services";

const inputClass =
  "w-full rounded-xl border border-saffron-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-muted shadow-sm transition focus:border-saffron-500 focus:outline-none focus:ring-2 focus:ring-saffron-200";
const labelClass = "block text-sm font-semibold text-ink mb-1.5";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const url = buildWhatsAppUrl({
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      service: String(data.get("service") || "").trim(),
      message: String(data.get("message") || "").trim(),
    });
    // Brief feedback, then open WhatsApp.
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setSubmitting(false);
    }, 200);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-saffron-200/60 bg-white p-6 sm:p-8 shadow-soft"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Full name"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone (with country code)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="e.g. +91 98765 43210"
            className={inputClass}
          />
        </div>
      </div>
      <div className="mt-5">
        <label className={labelClass} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>
      <div className="mt-5">
        <label className={labelClass} htmlFor="service">
          Service of interest (optional)
        </label>
        <select id="service" name="service" className={inputClass}>
          <option value="">Select if you have one in mind…</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet — please advise</option>
        </select>
      </div>
      <div className="mt-5">
        <label className={labelClass} htmlFor="message">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Share what you are facing. Whatever you write here will be sent to Guru Didi on WhatsApp."
          className={inputClass}
        />
      </div>

      <p className="mt-5 text-xs leading-relaxed text-ink-muted">
        On submit, your message will open in WhatsApp pre-filled. Press{" "}
        <strong>send</strong> there to deliver it to Guru Didi. We do not
        store your information on this website.
      </p>

      <button type="submit" disabled={submitting} className="btn-whatsapp mt-6 w-full">
        <MessageCircle className="h-4 w-4" />
        {submitting ? "Opening WhatsApp…" : "Send via WhatsApp"}
      </button>
    </form>
  );
}
