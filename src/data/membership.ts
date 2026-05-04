export type MembershipTier = {
  name: string;
  pricing: { inr: string; usd: string };
  tagline: string;
  benefits: string[];
  highlight?: boolean;
};

export const membershipTiers: MembershipTier[] = [
  {
    name: "Silver",
    pricing: { inr: "₹11,000", usd: "$180" },
    tagline: "A devotional foundation for the family.",
    benefits: [
      "Navratri Puja performed twice yearly for the family",
      "Annual Diwali Puja",
      "One packet of energised incense sticks (complimentary)",
    ],
  },
  {
    name: "Gold",
    pricing: { inr: "₹21,000", usd: "$344" },
    tagline: "Devotion plus household protection.",
    highlight: true,
    benefits: [
      "Navratri Puja twice yearly with family names taken",
      "Annual Diwali ritual",
      "Evil Eye Protection covering the entire household",
      "Energised deity photograph for your home temple",
      "One packet each of energised incense and purification smoke",
    ],
  },
  {
    name: "Platinum",
    pricing: { inr: "₹51,000", usd: "$835" },
    tagline: "Full-spectrum protection and prosperity for home and work.",
    benefits: [
      "Biannual Navratri ceremonies with family participation",
      "Annual Diwali prosperity ritual",
      "Energised (Mantrit) Maa Kali photograph for spiritual space",
      "Household protection from negative influences",
      "Energised Shree Kuber Yantra for workplace or office",
      "Energised wealth tortoise for goal achievement",
      "One complimentary email consultation",
      "Two packets each of incense, purification smoke, and related products",
    ],
  },
];
