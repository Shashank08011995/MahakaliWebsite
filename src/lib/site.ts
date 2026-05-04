export const site = {
  name: "Mahakali Vedic Healing Shelter",
  tagline: "A Spiritual Healing Zone",
  shortName: "Mahakali",
  url: "https://mahakalivedichealingshelter.com",
  description:
    "Vedic spiritual guidance, healing, and protection rooted in the wisdom of Goddess Mahakali. Founded by Guru Didi Shweta Ji.",
  founder: {
    name: "Guru Didi Shweta Ji",
    title: "Founder & Spiritual Guide",
  },
  contact: {
    phone: "+91 78382 37702",
    phoneRaw: "+917838237702",
    whatsapp: "917838237702",
    email: "shwetasarojinimahakali@gmail.com",
    skype: "shwetabisht16",
    viber: "+917838237702",
  },
  socials: {
    facebook:
      "https://www.facebook.com/Mahakali-vedic-healing-shelter-1666018480283192",
    twitter: "https://twitter.com/shweta_kaliji",
    linkedin:
      "https://www.linkedin.com/in/shweta-bisht-gurudidi-shwetaji-7366aa5b/",
    youtube: "https://www.youtube.com/channel/UCslOEClWwb7bMh7TMl1E8fA",
  },
  consultationRates: [
    { duration: "10 minutes", inr: "₹5,100", usd: "$87" },
    { duration: "20 minutes", inr: "₹11,000", usd: "$189" },
    { duration: "30 minutes", inr: "₹16,000", usd: "$275" },
  ],
  values: [
    "Authenticity rooted in Vedic tradition",
    "Compassion without judgement",
    "Confidentiality with every soul",
    "Money cannot buy our moral values",
  ],
} as const;

export type SiteConfig = typeof site;
