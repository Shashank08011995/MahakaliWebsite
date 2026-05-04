import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";
import { buildWhatsAppUrl, quickMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact & Book a Consultation",
  description:
    "Reach Guru Didi Shweta Ji on WhatsApp, phone, or email. Telephonic and personal consultations available worldwide.",
};

const contactCards = [
  {
    label: "WhatsApp",
    value: "Direct line to Guru Didi",
    href: buildWhatsAppUrl(quickMessages.appointment),
    icon: MessageCircle,
    primary: true,
    cta: "Open chat",
    external: true,
  },
  {
    label: "Phone",
    value: site.contact.phone,
    href: `tel:${site.contact.phoneRaw}`,
    icon: Phone,
    cta: "Call now",
    external: false,
  },
  {
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    icon: Mail,
    cta: "Send email",
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-cream pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Connect With Us</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            Begin a conversation with <span className="text-sindoor">Guru Didi</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Write to us on WhatsApp for the fastest response. Telephonic
            consultations are scheduled in advance — share your time zone and
            preferred slot when you reach out.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-wide">
          <div className="grid gap-4 sm:grid-cols-3">
            {contactCards.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className={`group flex flex-col gap-3 rounded-2xl border p-6 shadow-soft transition hover:-translate-y-0.5 ${
                    c.primary
                      ? "border-[#25D366]/40 bg-[#25D366]/5 hover:border-[#25D366]"
                      : "border-saffron-200/60 bg-white hover:border-saffron-400"
                  }`}
                >
                  <div
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${
                      c.primary
                        ? "bg-[#25D366] text-white"
                        : "bg-saffron-100 text-saffron-700"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-ink-muted">
                      {c.label}
                    </div>
                    <div className="mt-1 font-serif text-lg font-semibold text-ink">
                      {c.value}
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-saffron-700 group-hover:text-saffron-800">
                    {c.cta} →
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-start">
            <div>
              <p className="eyebrow">Send a Message</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-balance">
                Tell Guru Didi what you are carrying.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Fill in the form below. When you submit, your message will
                open in WhatsApp — already addressed to us. You can review it
                and press send. Nothing is sent without your final confirmation.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-saffron-200/60 bg-white p-6 shadow-soft">
                <h3 className="font-serif text-xl font-semibold text-sindoor">
                  Telephonic consultation
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Confidential one-on-one sessions with Guru Didi. Slots are
                  reserved on WhatsApp.
                </p>
                <ul className="mt-4 divide-y divide-saffron-100 text-sm">
                  {site.consultationRates.map((r) => (
                    <li
                      key={r.duration}
                      className="flex items-baseline justify-between py-2.5"
                    >
                      <span className="font-medium text-ink">{r.duration}</span>
                      <span className="text-ink-soft">
                        {r.inr}{" "}
                        <span className="text-ink-muted">/ {r.usd}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-cream-deep/60 p-6">
                <h3 className="font-serif text-lg font-semibold text-sindoor">
                  A note on confidentiality
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  What is shared with Guru Didi remains strictly between you
                  and her. We do not record, share, or store your
                  conversations on this website.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
