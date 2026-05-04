export type Jaap = {
  slug: string;
  title: string;
  sanskrit?: string;
  short: string;
  long: string;
  mantra?: string;
  benefits: string[];
  recommended: string;
  image: string;
  pricing?: { inr: string; usd: string };
};

export const jaaps: Jaap[] = [
  {
    slug: "maha-mrityunjaya-jaap",
    title: "Maha Mrityunjaya Jaap",
    sanskrit: "महा मृत्युंजय जाप",
    short:
      "The great death-conquering mantra — recited for healing, longevity, and protection.",
    long: "The Maha Mrityunjaya mantra is one of the most ancient and powerful healing mantras in the Vedic tradition. Recited as a continuous jaap, it works gently on the energetic body — supporting recovery from chronic illness, surgery, accidents, and prolonged anxiety. It is the mantra one turns to when life itself feels under threat.",
    mantra:
      "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् | उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् ||",
    benefits: [
      "Supports recovery from serious illness or surgery",
      "Calms chronic anxiety and fear of death",
      "Strengthens longevity and vitality",
      "A foundation mantra in any healing protocol",
    ],
    recommended:
      "During severe illness, recovery from accident, chronic anxiety, or as a daily protective practice.",
    image: "/images/puja-maha-mrityunjaya.jpg",
    pricing: { inr: "₹16,000", usd: "$350" },
  },
  {
    slug: "maha-mrityunjaya-jaap-with-homam",
    title: "Maha Mrityunjaya Jaap with Homam",
    sanskrit: "महा मृत्युंजय जाप होमम्",
    short:
      "The death-conquering mantra performed with sacred fire — for the most severe situations.",
    long: "When the situation is severe — major surgery, life-threatening illness, or an accumulation of crises — the Maha Mrityunjaya jaap is amplified by performing it alongside homam. Each mantra recitation is offered into the consecrated fire, dramatically increasing its energetic effect.",
    mantra:
      "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् | उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् ||",
    benefits: [
      "Maximum-strength version of the death-conquering ritual",
      "Performed for life-threatening or severe situations",
      "Combines mantra and sacred fire for amplified effect",
      "Often performed for elders or after major surgeries",
    ],
    recommended:
      "Life-threatening illness, major surgery, severe accident recovery.",
    image: "/images/puja-maha-mrityunjaya-homam.jpg",
    pricing: { inr: "₹31,000", usd: "$750" },
  },
  {
    slug: "goddess-kali-jaap",
    title: "Goddess Kali Jaap",
    sanskrit: "श्री काली जाप",
    short:
      "Continuous recitation of the Kali mantra — for fierce protection and removal of evil.",
    long: "Goddess Kali is the most fiercely protective form of the Divine Mother. Her jaap is performed when ordinary remedies are not enough — when one is under attack from black magic, dark energies, or coordinated negativity. Her name itself dissolves what would harm Her devotee.",
    mantra: "ॐ क्रीं कालिकायै नमः",
    benefits: [
      "Powerful protection against black magic",
      "Removes severe and stubborn negativity",
      "Restores fearlessness and inner strength",
      "The core practice of those devoted to Maa Kali",
    ],
    recommended:
      "When facing severe negativity or as a daily devotional practice.",
    image: "/images/kali1.jpg",
    pricing: { inr: "₹21,000", usd: "$500" },
  },
  {
    slug: "goddess-bagalamukhi-jaap",
    title: "Goddess Bagalamukhi Jaap",
    sanskrit: "श्री बगलामुखी जाप",
    short:
      "The mantra that stills the harmful speech and motion of opponents.",
    long: "The Bagalamukhi jaap is invoked when one is caught in a long battle — court cases, political opposition, business sabotage, or coordinated harassment. Continuous recitation gently stills the harmful energies pointed at the practitioner, without confrontation.",
    benefits: [
      "Stills harmful speech and action of opponents",
      "Aids in long court cases",
      "Calms aggressive workplace politics",
      "Effective against coordinated negativity",
    ],
    recommended: "Long-running legal cases, political adversity, sabotage.",
    image: "/images/baglamukhi-mata.jpg",
    pricing: { inr: "₹31,000", usd: "$750" },
  },
  {
    slug: "planet-saturn-jaap",
    title: "Planet Saturn (Shani) Jaap",
    sanskrit: "शनि जाप",
    short:
      "Continuous Shani mantra to soften the influence of Saturn during a difficult dasha.",
    long: "Saturn is the great teacher — strict, slow, and unrelenting. When Shani's mahadasha or sade-sati is active, life can feel like wading through mud. The Shani jaap, recited continuously across thousands of repetitions, gently softens Saturn's hand and turns His teaching from harsh to merciful.",
    benefits: [
      "Softens difficult Saturn periods (sade-sati, dhaiya, mahadasha)",
      "Brings clarity in slow, frustrating phases of life",
      "Restores patience and resilience",
      "Often paired with Shani gemstone and Saturday charity",
    ],
    recommended: "During sade-sati, dhaiya, or Saturn mahadasha.",
    image: "/images/puja-saturn-jaap.jpg",
    pricing: { inr: "₹16,000", usd: "$400" },
  },
  {
    slug: "planet-jupiter-jaap",
    title: "Planet Jupiter (Guru) Jaap",
    sanskrit: "गुरु जाप",
    short:
      "Strengthens Guru — the planet of wisdom, marriage, children, and dharma.",
    long: "Jupiter governs wisdom, dharma, marriage, children, and good fortune. A weak Jupiter shows up as repeated obstacles in marriage, difficulty conceiving, lack of mentorship, or a sense of being adrift from one's purpose. The Guru jaap strengthens Brihaspati's grace in your chart.",
    benefits: [
      "Supports marriage and conception when delayed",
      "Brings the right teachers and mentors into your life",
      "Strengthens connection with your dharma",
      "Often performed before major life decisions",
    ],
    recommended:
      "Marriage delays, fertility challenges, before major life decisions.",
    image: "/images/puja-jupiter-jaap.jpg",
    pricing: { inr: "₹16,000", usd: "$400" },
  },
  {
    slug: "planet-mangal-jaap",
    title: "Planet Mars (Mangal) Jaap",
    sanskrit: "मंगल जाप",
    short:
      "Pacifies Mars — for those carrying mangal dosh or chronic anger.",
    long: "Mars rules courage, drive, and conflict. When Mars is afflicted — particularly as Mangal Dosh in the marriage house — it brings repeated arguments, marital discord, and a difficulty marrying at all. The Mangal jaap softens Mars's fire and redirects it toward constructive action.",
    benefits: [
      "Removes Mangal Dosh effects on marriage",
      "Calms chronic anger and reactivity",
      "Supports physical recovery and surgery",
      "Strengthens healthy courage and drive",
    ],
    recommended: "Mangal Dosh in chart, marital discord, before surgeries.",
    image: "/images/puja-mars-jaap.jpg",
    pricing: { inr: "₹16,000", usd: "$400" },
  },
  {
    slug: "planet-venus-shukra-jaap",
    title: "Planet Venus (Shukra) Jaap",
    sanskrit: "शुक्र जाप",
    short:
      "Strengthens Shukra — for love, partnership, beauty, and material refinement.",
    long: "Where the Venus Puja is a single event, the Venus Jaap is sustained mantra recitation that gradually restores Shukra's grace in your life over time. Often performed alongside the Venus puja for those facing repeated obstacles in love and marriage.",
    benefits: [
      "Sustained restoration of Venus's grace",
      "Supports the manifestation of marriage",
      "Restores creativity and refined pleasure",
      "Heals deep relationship patterns over time",
    ],
    recommended:
      "Long-standing marital difficulty, after the Venus Puja for sustained effect.",
    image: "/images/puja-venus-jaap.jpg",
    pricing: { inr: "₹16,000", usd: "$400" },
  },
];

export function getJaapBySlug(slug: string): Jaap | undefined {
  return jaaps.find((j) => j.slug === slug);
}
