"use client";

import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingCallButton() {
  return (
    <a
      href={`tel:${site.contact.phoneRaw}`}
      className="fixed bottom-5 left-5 z-50 inline-flex items-center justify-center w-14 h-14 bg-sindoor hover:bg-sindoor-dark text-white rounded-full shadow-glow transition-all duration-300 hover:scale-110 animate-halo sm:bottom-6 sm:left-6"
      aria-label={`Call ${site.contact.phone}`}
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
