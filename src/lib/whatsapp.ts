import { site } from "./site";

export type WhatsAppMessage = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message: string;
};

export function buildWhatsAppUrl(input: string | WhatsAppMessage): string {
  const text =
    typeof input === "string" ? input : formatStructuredMessage(input);
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

function formatStructuredMessage(m: WhatsAppMessage): string {
  const lines = [
    "🙏 Pranam Guru Didi,",
    "",
    "I'd like to connect with Mahakali Vedic Healing Shelter.",
    "",
  ];
  if (m.name) lines.push(`Name: ${m.name}`);
  if (m.email) lines.push(`Email: ${m.email}`);
  if (m.phone) lines.push(`Phone: ${m.phone}`);
  if (m.service) lines.push(`Service of interest: ${m.service}`);
  lines.push("", `Message: ${m.message}`);
  return lines.join("\n");
}

export const quickMessages = {
  appointment: "🙏 Pranam Guru Didi, I would like to book an appointment.",
  consultation:
    "🙏 Pranam Guru Didi, I would like to schedule a telephonic consultation.",
  general: "🙏 Pranam Guru Didi, I have a question about your services.",
};
