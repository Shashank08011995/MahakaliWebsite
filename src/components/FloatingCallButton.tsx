"use client";

import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingCallButton() {
  return (
    <a
      href={`tel:${site.contact.phoneRaw}`}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label={`Call ${site.contact.phone}`}
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}