export type PujaCategory = "deity" | "homam" | "planetary" | "ancestral";

export type Puja = {
  slug: string;
  title: string;
  sanskrit?: string;
  category: PujaCategory;
  short: string;
  long: string;
  benefits: string[];
  recommended: string;
  image: string;
  pricing?: { inr: string; usd: string };
};

export const pujaCategoryMeta: Record<
  PujaCategory,
  { label: string; description: string }
> = {
  deity: {
    label: "Deity Pujas",
    description:
      "Devotional rituals to specific gods and goddesses, performed for protection, prosperity, and grace.",
  },
  homam: {
    label: "Homam & Havan",
    description:
      "Sacred fire rituals where mantras are offered with ghee and herbs into the holy flame.",
  },
  planetary: {
    label: "Planetary Pujas (Grah)",
    description:
      "Rituals to soften the influence of difficult planets in your birth chart.",
  },
  ancestral: {
    label: "Ancestral & Lineage",
    description:
      "Rituals to honour and free the karmic burdens carried from previous generations.",
  },
};

export const pujas: Puja[] = [
  {
    slug: "goddess-lakshmi-puja",
    title: "Goddess Lakshmi Puja",
    sanskrit: "श्री लक्ष्मी पूजा",
    category: "deity",
    short:
      "A devotional ritual to Maa Lakshmi to invoke wealth, abundance, and stability.",
    long: "This puja invokes the grace of Goddess Lakshmi — the divine mother of wealth, fortune, and prosperity. Performed with traditional Vedic mantras and offerings, it gradually clears the energetic blocks around money in your life. Recommended annually for households and businesses seeking stable, growing prosperity.",
    benefits: [
      "Generates and stabilises wealth in your life",
      "Helps wealth-related problems begin to dissolve",
      "Improves monetary flow and saving",
      "Strengthens the energy of your home or business",
    ],
    recommended:
      "Once a year — ideally around Diwali, Akshaya Tritiya, or Navratri.",
    image: "/images/LAXMI.jpg",
    pricing: { inr: "₹21,000", usd: "$500" },
  },
  {
    slug: "goddess-saraswati-puja",
    title: "Goddess Saraswati Puja",
    sanskrit: "श्री सरस्वती पूजा",
    category: "deity",
    short:
      "Devotional ritual to Maa Saraswati for clarity of mind, learning, and creative power.",
    long: "Goddess Saraswati embodies wisdom, speech, and the arts. This puja is performed for students, artists, scholars, and anyone whose work depends on clarity, memory, and inspired thought. Held during Navratri or Vasant Panchami for full effect.",
    benefits: [
      "Clears mental fog and supports concentration",
      "Strengthens memory for students preparing for exams",
      "Removes obstacles in learning, writing, and creative work",
      "Restores confidence in speech and self-expression",
    ],
    recommended:
      "For students before major exams, or annually during Vasant Panchami / Navratri.",
    image: "/images/puja-saraswati.jpg",
    pricing: { inr: "₹16,000", usd: "$400" },
  },
  {
    slug: "lord-ganesha-puja",
    title: "Lord Ganesha Puja",
    sanskrit: "श्री गणेश पूजा",
    category: "deity",
    short:
      "The traditional first puja for new beginnings, business launches, and obstacle removal.",
    long: "No new venture in the Vedic tradition begins without invoking Ganesha first. This puja removes Vighna (obstacles) from a path you are about to walk — a marriage, a new home, a business, an exam, a journey. Performed with sankalpa (intention) for the specific endeavour ahead.",
    benefits: [
      "Removes obstacles before a new beginning",
      "Sanctifies new homes, offices, and ventures",
      "Auspicious for marriages, exams, and journeys",
      "Calls in supportive energies before a major step",
    ],
    recommended:
      "Before any major beginning — wedding, gruhapravesh, business launch, surgery, journey.",
    image: "/images/ganesha.jpg",
    pricing: { inr: "₹11,000", usd: "$250" },
  },
  {
    slug: "shree-kuber-puja",
    title: "Shree Kuber Puja",
    sanskrit: "श्री कुबेर पूजा",
    category: "deity",
    short:
      "Invokes the treasurer of the gods to draw and protect wealth in homes and businesses.",
    long: "Kuber is the keeper of the divine treasury and the lord of wealth retention — the energy that keeps money from leaking out as fast as it comes in. Where Lakshmi brings wealth, Kuber holds it. This puja is especially recommended for businesses and households where money flows in but does not stay.",
    benefits: [
      "Strengthens retention of wealth that comes in",
      "Stabilises business cash flow",
      "Protects against unexpected losses",
      "Auspicious for opening new offices, lockers, and safes",
    ],
    recommended:
      "Annually for businesses; on Dhanteras and Akshaya Tritiya for households.",
    image: "/images/puja-kuber.jpg",
    pricing: { inr: "₹16,000", usd: "$400" },
  },
  {
    slug: "lord-panchmukhi-hanumanji-puja",
    title: "Lord Panchmukhi Hanumanji Puja",
    sanskrit: "श्री पंचमुखी हनुमान पूजा",
    category: "deity",
    short:
      "The five-faced form of Hanuman — invoked for protection from severe negative forces.",
    long: "Panchmukhi Hanuman is the most protective form of Hanumanji, with five faces facing five directions, guarding all approaches at once. This puja is performed for those facing severe black magic, paranormal disturbance, recurring nightmares, or attacks from unknown forces. It surrounds the devotee with an unbreakable shield.",
    benefits: [
      "Powerful protection against black magic and negative forces",
      "Calms recurring nightmares and night-time disturbances",
      "Restores courage and inner strength",
      "Shields the entire household",
    ],
    recommended: "When under sustained negative attack or severe paranormal disturbance.",
    image: "/images/panchmukh.jpg",
    pricing: { inr: "₹21,000", usd: "$500" },
  },
  {
    slug: "goddess-baglamukhi-puja",
    title: "Goddess Baglamukhi Puja with Homam",
    sanskrit: "श्री बगलामुखी पूजा",
    category: "deity",
    short:
      "Maa Baglamukhi stills the tongues of enemies and the obstacles of court cases.",
    long: "Goddess Baglamukhi is the stiller of speech and motion — She paralyses the harmful intentions of those who would harm you. This puja, performed with full homam, has historically been invoked by those caught in long court cases, business sabotage, and political adversity. She does not destroy enemies; She quiets them.",
    benefits: [
      "Stills the harmful actions and speech of opponents",
      "Powerful aid in long-running court cases",
      "Protection from political and professional sabotage",
      "Calms aggressors without confrontation",
    ],
    recommended:
      "When facing legal battles, political opposition, or coordinated sabotage.",
    image: "/images/baglamukhi-mata.jpg",
    pricing: { inr: "₹51,000", usd: "$1,200" },
  },
  {
    slug: "lord-ganesha-lakshmi-kuber-prosperity-puja",
    title: "Ganesha–Lakshmi–Kuber Prosperity Puja",
    sanskrit: "श्री गणेश-लक्ष्मी-कुबेर प्रसन्नता पूजा",
    category: "deity",
    short:
      "The trinity puja — obstacle removal, wealth attraction, and wealth retention together.",
    long: "This is a complete prosperity ritual combining the three energies that govern abundance: Ganesha removes the obstacles, Lakshmi attracts the wealth, and Kuber holds it. Performed together, it creates a stable, flowing relationship with money. Strongly recommended at the opening of new businesses or after a long period of financial difficulty.",
    benefits: [
      "Combined obstacle removal and prosperity activation",
      "Especially effective for new business launches",
      "Restores stability after a period of financial loss",
      "Creates lasting, balanced wealth energy",
    ],
    recommended:
      "Business openings, after a difficult financial year, on Diwali.",
    image: "/images/mata-trinity.jpg",
    pricing: { inr: "₹31,000", usd: "$750" },
  },
  {
    slug: "kamdhenu-cow-puja",
    title: "Kamdhenu Cow Puja",
    sanskrit: "श्री कामधेनु पूजा",
    category: "deity",
    short:
      "Honouring the celestial wish-fulfilling cow — for completion of long-held desires.",
    long: "Kamdhenu is the celestial cow whose milk grants every wish her devotees offer with sincerity. This puja is performed for long-standing desires that have not yet manifested — a child, a marriage, a home, a healing — when the practitioner has done all they can do and now seeks divine intervention.",
    benefits: [
      "Activates fulfilment of long-held sincere wishes",
      "Especially supportive for fertility and family-building",
      "Brings abundance in unexpected forms",
      "Honours the sacredness of the cow in Vedic tradition",
    ],
    recommended:
      "When a sincere wish has remained unmet despite effort and faith.",
    image: "/images/puja-kamdhenu.jpg",
    pricing: { inr: "₹21,000", usd: "$500" },
  },

  // Homams
  {
    slug: "sri-rudra-homam",
    title: "Sri Rudra Homam (Havan)",
    sanskrit: "श्री रुद्र होमम्",
    category: "homam",
    short:
      "The fierce, purifying form of Lord Shiva — invoked for deep cleansing and dissolution of karma.",
    long: "Sri Rudra Homam is one of the most ancient and powerful havans in the Vedic tradition. The fire is consecrated with the Rudram chant, and offerings are made to invoke Shiva in his Rudra form — the cosmic transformer. It dissolves accumulated karmic debt, severe ill health, and persistent obstacles that other rituals have not been able to move.",
    benefits: [
      "Dissolves accumulated negative karma",
      "Supports recovery from chronic ill health",
      "Removes obstacles that have resisted other remedies",
      "Deeply purifies the practitioner's energy field",
    ],
    recommended:
      "When a heavy karmic load is suspected, or for chronic health/legal issues.",
    image: "/images/SHIV.jpg",
    pricing: { inr: "₹51,000", usd: "$1,200" },
  },
  {
    slug: "maha-sudharshana-homam",
    title: "Maha Sudharshana Homam (Havan)",
    sanskrit: "महा सुदर्शन होमम्",
    category: "homam",
    short:
      "The divine discus of Vishnu — invoked to cut through severe obstacles and protect from harm.",
    long: "The Sudarshana Chakra is the divine weapon of Lord Vishnu — a wheel of pure light that cuts through what cannot otherwise be cut. This homam is performed when a person or family faces severe and persistent attack — black magic, chronic illness, or a stretch of misfortune that simply will not lift.",
    benefits: [
      "Cuts through severe and stubborn obstacles",
      "Protects the entire family from harmful forces",
      "Lifts long, dark patches of life",
      "Restores momentum to a stalled life",
    ],
    recommended:
      "Severe black magic, family-wide misfortune, prolonged ill health.",
    image: "/images/puja-sudarshana.jpg",
    pricing: { inr: "₹51,000", usd: "$1,200" },
  },
  {
    slug: "shastra-chandi-paath",
    title: "Shastra Chandi Paath with Homam",
    sanskrit: "शस्त्र चण्डी पाठ",
    category: "homam",
    short:
      "Recitation of the Durga Saptashati with sacred fire — invokes Devi's full warrior protection.",
    long: "The Chandi Paath is the recitation of the seven hundred verses of the Durga Saptashati — the scripture that recounts Goddess Durga's victories over demonic forces. Performed with homam and a full Sankalpa, it is one of the most powerful protective rituals in the Vedic canon. Especially recommended during Navratri.",
    benefits: [
      "Invokes Devi's full warrior energy for protection",
      "Powerful aid against organised negative forces",
      "Cleanses the entire household's energy field",
      "Auspicious during Navratri",
    ],
    recommended: "Navratri, or when facing organised opposition or attack.",
    image: "/images/durga.jpg",
    pricing: { inr: "₹51,000", usd: "$1,200" },
  },
  {
    slug: "navaratras-sapthsathi-paath",
    title: "Navaratras Sapthsathi Paath with Homam",
    sanskrit: "नवरात्र सप्तशती पाठ",
    category: "homam",
    short:
      "The nine-night Saptashati recitation honouring the nine forms of Devi.",
    long: "Across the nine nights of Navratri, this ritual recites the Saptashati while honouring each of the nine forms of Goddess Durga — Shailputri to Siddhidatri. Performed with homam, it is an immersion in the full feminine power of the Vedic tradition. Especially recommended for families.",
    benefits: [
      "Honours all nine forms of the Divine Mother",
      "Strengthens the spiritual foundation of the entire family",
      "Removes obstacles across all nine days",
      "Most auspicious time of the Vedic year for spiritual growth",
    ],
    recommended: "Performed during the nine nights of Navratri (twice yearly).",
    image: "/images/durga.jpg",
    pricing: { inr: "₹51,000", usd: "$1,200" },
  },

  // Planetary
  {
    slug: "nav-grah-puja",
    title: "Nav Grah Puja with Homam",
    sanskrit: "नवग्रह पूजा",
    category: "planetary",
    short:
      "Pacifies the influence of all nine planets in your birth chart at once.",
    long: "The nine planets — Surya, Chandra, Mangal, Budh, Guru, Shukra, Shani, Rahu, Ketu — each cast their influence on different aspects of your life. When several are afflicted in your birth chart at once, individual remedies are not enough. The Nav Grah Puja addresses all nine together, gently softening their influence and rebalancing the chart.",
    benefits: [
      "Softens the impact of multiple afflicted planets",
      "Recommended when several life areas are simultaneously stuck",
      "Rebalances the karmic blueprint of your chart",
      "Lifts the heaviness of long, difficult astrological phases",
    ],
    recommended:
      "When multiple life areas are afflicted simultaneously, or during a difficult dasha.",
    image: "/images/puja-nav-grah.jpg",
    pricing: { inr: "₹31,000", usd: "$750" },
  },
  {
    slug: "grah-dosh-puja",
    title: "Grah Dosh Puja",
    sanskrit: "ग्रह दोष पूजा",
    category: "planetary",
    short:
      "Targeted ritual to remove specific planetary afflictions from your chart.",
    long: "When a single planet — Mars, Saturn, Rahu, or another — is the primary source of difficulty in your chart, a focused ritual is more effective than a full Nav Grah. After analysing your birth chart, Guru Didi prescribes the specific Grah Dosh remedy your situation calls for.",
    benefits: [
      "Targets the specific planet causing your difficulty",
      "More precise than a full Nav Grah remedy",
      "Customised after personal chart analysis",
      "Often used alongside gemstone or mantra prescriptions",
    ],
    recommended:
      "When a single planet is identified as the primary source of difficulty.",
    image: "/images/puja-grah-dosh.jpg",
    pricing: { inr: "₹16,000", usd: "$400" },
  },
  {
    slug: "planet-rahu-puja",
    title: "Planet Rahu Puja",
    sanskrit: "राहु पूजा",
    category: "planetary",
    short:
      "Pacifies Rahu — the shadow planet of obsession, foreign matters, and sudden disturbance.",
    long: "Rahu rules obsession, foreign lands, sudden upheavals, and the unseen. When badly placed, it brings confusion, addiction, immigration trouble, and inexplicable disturbance. This puja softens Rahu's influence and redirects its powerful energy toward your benefit rather than your detriment.",
    benefits: [
      "Calms obsessive thoughts and confusion",
      "Supports foreign travel and immigration matters",
      "Lifts addictions and unhealthy attachments",
      "Reduces sudden disturbances",
    ],
    recommended: "Rahu mahadasha, foreign travel issues, recurring addictions.",
    image: "/images/puja-rahu.jpg",
    pricing: { inr: "₹16,000", usd: "$400" },
  },
  {
    slug: "planet-ketu-puja",
    title: "Planet Ketu Puja",
    sanskrit: "केतु पूजा",
    category: "planetary",
    short:
      "Pacifies Ketu — the shadow planet of detachment, spirituality, and ancestral karma.",
    long: "Ketu's energy is detached, mystical, and inward — but when afflicted it brings sudden losses, isolation, and unexplained spiritual unrest. This puja channels Ketu's energy toward genuine spiritual progress rather than dispersion and confusion.",
    benefits: [
      "Stabilises an unsettled or anxious mind",
      "Reduces sudden, inexplicable losses",
      "Supports genuine spiritual progress",
      "Lifts the energy of unexplained isolation",
    ],
    recommended:
      "Ketu mahadasha, sudden inexplicable losses, spiritual confusion.",
    image: "/images/puja-ketu.jpg",
    pricing: { inr: "₹16,000", usd: "$400" },
  },
  {
    slug: "planet-venus-puja",
    title: "Planet Venus (Shukra) Puja with Homam",
    sanskrit: "शुक्र पूजा",
    category: "planetary",
    short:
      "Strengthens Shukra — the planet of love, beauty, partnership, and material refinement.",
    long: "Venus governs partnership, beauty, the arts, and material refinement. When afflicted, Venus brings difficulties in marriage, repeated relationship breakdowns, and a distance from the gentler pleasures of life. This puja restores Venus's grace and softens its difficulty.",
    benefits: [
      "Supports happy partnerships and marriage",
      "Restores creativity and refined enjoyment",
      "Heals relationship patterns",
      "Often performed for those struggling to marry",
    ],
    recommended:
      "Marital difficulty, repeated relationship breakdowns, Venus mahadasha.",
    image: "/images/puja-venus-puja.jpg",
    pricing: { inr: "₹21,000", usd: "$500" },
  },

  // Ancestral
  {
    slug: "pitra-dosh-puja",
    title: "Pitra Dosh Puja with Homam",
    sanskrit: "पितृ दोष पूजा",
    category: "ancestral",
    short:
      "Honours and frees ancestral souls — the cure for pitra dosh in the chart.",
    long: "Pitra Dosh appears when ancestors of the lineage have left without complete shanti. It manifests in the descendants as repeated obstacles in marriage, fertility, finances, and progeny. This puja, performed with homam and tarpan, completes what was left undone — releasing ancestors and the bloodline together.",
    benefits: [
      "Releases the karmic burden of ancestors",
      "Lifts repeated obstacles around marriage and progeny",
      "Brings peace to the lineage",
      "Often performed during Pitru Paksha",
    ],
    recommended:
      "Pitru Paksha, after recurring obstacles in marriage/fertility, when chart shows pitra dosh.",
    image: "/images/puja-pitra-dosh.jpg",
    pricing: { inr: "₹31,000", usd: "$750" },
  },
];

export function getPujasByCategory(category: PujaCategory): Puja[] {
  return pujas.filter((p) => p.category === category);
}

export function getPujaBySlug(slug: string): Puja | undefined {
  return pujas.find((p) => p.slug === slug);
}

export const allPujaCategories = Object.keys(pujaCategoryMeta) as PujaCategory[];
