export type ServiceCategory =
  | "protection"
  | "healing"
  | "growth"
  | "solutions"
  | "spiritual"
  | "remedies";

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  short: string;
  long: string;
  image: string;
};

export const categoryMeta: Record<
  ServiceCategory,
  { label: string; description: string }
> = {
  protection: {
    label: "Protection",
    description:
      "Shielding loved ones, livelihoods, and homes from negative energies.",
  },
  healing: {
    label: "Healing & Cleansing",
    description:
      "Removing curses, negative influences, and energetic blockages.",
  },
  growth: {
    label: "Growth & Career",
    description:
      "Vedic guidance for advancement in career, business, and public life.",
  },
  solutions: {
    label: "Life Solutions",
    description:
      "Compassionate remedies for love, marriage, court, money, and health.",
  },
  spiritual: {
    label: "Spiritual Guidance",
    description: "Akashic readings, gemstones, vastu, and inner-path counsel.",
  },
  remedies: {
    label: "Quick Remedies",
    description:
      "Energetic corrections to your name, signature, mobile, and surroundings.",
  },
};

export const services: Service[] = [
  // Protection
  {
    slug: "newborn-protection",
    title: "Newborn Child Protection",
    category: "protection",
    short:
      "A protective Vedic shield for infants in their most vulnerable months.",
    long: "Newborns absorb the energies that surround them. Our newborn protection ritual draws on ancient Vedic mantras and yantra-based protection to surround the child with a calm, defended energetic field — guarding against the evil eye (nazar), restless sleep, and unsettled aura.",
    image: "/images/baglamukhi-mata.jpg",
  },
  {
    slug: "pregnancy-protection",
    title: "Protection for Expecting Mothers",
    category: "protection",
    short:
      "Energetic and spiritual care for mother and child through the journey.",
    long: "Pregnancy is a sacred passage. We perform protective mantras, prescribe simple daily rituals, and offer counsel to help expecting mothers carry their child in calm, joyful, and spiritually defended energy through every trimester.",
    image: "/images/baglamukhi-mata.jpg",
  },
  {
    slug: "vehicle-protection",
    title: "Vehicle Protection",
    category: "protection",
    short: "Vedic blessing for safe travel — for cars, two-wheelers, and fleets.",
    long: "Long roads carry long karma. We bless and energise your vehicle with protective mantras to guard you against accidents, mechanical sudden failures, and journeys gone wrong. Suited for personal vehicles, commercial fleets, and pilots/drivers.",
    image: "/images/SHIV.jpg",
  },
  {
    slug: "pet-protection",
    title: "Pet Protection",
    category: "protection",
    short: "Healing energy for the silent companions in your home.",
    long: "Pets feel the disturbances of the home before we do. Our protection blessing surrounds them with calm, healing energy — easing anxiety, illness recovery, and the unseen weight they often carry on behalf of their families.",
    image: "/images/iskcon_diya.gif",
  },
  {
    slug: "saas-bahu-harmony",
    title: "Saas–Bahu Harmony",
    category: "protection",
    short:
      "Restoring peace in mother-in-law and daughter-in-law relationships.",
    long: "When the heart of a household is at war, every prayer in it is heard differently. Through Vedic guidance, dialogue, and energetic correction, we help families heal the saas–bahu rishta — gently, and without taking sides.",
    image: "/images/mata-trinity.jpg",
  },

  // Healing
  {
    slug: "black-magic-removal",
    title: "Black Magic Removal",
    category: "healing",
    short:
      "Identification and complete removal of black magic, curses, and crossed energies.",
    long: "Black magic is real, and so is the freedom that follows its removal. Through proven Vedic diagnostic methods, energetic cleansing, and protective rituals, we identify the source, dismantle its hold, and reseal your aura — so you and your home can breathe again.",
    image: "/images/kali.jpg",
  },
  {
    slug: "spiritual-healing",
    title: "Spiritual Healing",
    category: "healing",
    short: "Deep aura cleansing, chakra alignment, and energetic restoration.",
    long: "Most exhaustion is not of the body — it is of the spirit. Spiritual healing sessions identify where your energy is leaking, where it is congested, and where it has been wounded. We then gently restore flow with Vedic mantras and personal practice.",
    image: "/images/Spiritual-Healing.jpg",
  },
  {
    slug: "naag-dosh-removal",
    title: "Naag Dosh / Sarpa Dosh Removal",
    category: "healing",
    short: "Releasing ancestral serpent karma carried across generations.",
    long: "Naag Dosh manifests as repeated obstacles in marriage, fertility, finances, and progeny. Through targeted yagna, mantra, and ancestral remedies, we help release the karmic weight your bloodline has been carrying — clearing the path for the next generation.",
    image: "/images/SHIV.jpg",
  },
  {
    slug: "paranormal-help",
    title: "Paranormal Disturbance Help",
    category: "healing",
    short: "Calm, professional response to unexplained disturbances at home or work.",
    long: "If your home or workplace is troubled by unexplained presences, recurring nightmares, or disturbances no one else can name — you are not imagining it. We offer discreet, no-judgement diagnosis and Vedic resolution rooted in Mahakali's protective grace.",
    image: "/images/durga.jpg",
  },

  // Growth
  {
    slug: "career-growth",
    title: "Career Growth",
    category: "growth",
    short: "Vedic remedies aligned with your dharma and natural talents.",
    long: "When effort is not enough, alignment is what's missing. Through your birth chart, we identify what your career path is truly seeking and prescribe remedies — daily mantras, gemstones, or rituals — that move the unseen blocks holding you back.",
    image: "/images/LAXMI.jpg",
  },
  {
    slug: "business-growth",
    title: "Business Growth",
    category: "growth",
    short: "Energetic alignment for entrepreneurs, founders, and family businesses.",
    long: "Businesses carry the karma of their founders and the energy of their first day. We assess your business's chart, advise on auspicious decisions, correct names/logos where needed, and perform prosperity pujas to keep Lakshmi flowing.",
    image: "/images/LAXMI.jpg",
  },
  {
    slug: "job-growth",
    title: "Job & Promotion",
    category: "growth",
    short:
      "Targeted remedies for stalled promotions, difficult workplaces, and job transitions.",
    long: "When your work is good but your growth is not, the answer often lies outside performance reviews. Our remedies smooth politics, soften difficult superiors, and align you with the right opportunities at the right moment.",
    image: "/images/ganesha.jpg",
  },
  {
    slug: "political-growth",
    title: "Political & Public Life",
    category: "growth",
    short: "Vedic counsel for those serving in public roles and leadership.",
    long: "Public life carries public karma. We guide leaders, candidates, and aspirants with discretion — through chart analysis, ritual, and the subtle energetic timing that public life demands.",
    image: "/images/baglamukhi-mata.jpg",
  },

  // Solutions
  {
    slug: "love-problems",
    title: "Lost Love & Relationship Healing",
    category: "solutions",
    short:
      "Rebuilding trust, restoring connection, or releasing what is no longer yours.",
    long: "Sometimes the answer is reunion. Sometimes it is release. Through compassionate Vedic guidance and reading, we help you understand the true nature of your bond — and then offer the rituals or practices that bring peace either way.",
    image: "/images/iskcon_diya.gif",
  },
  {
    slug: "marriage-issues",
    title: "Marriage Difficulties",
    category: "solutions",
    short: "Healing for marriages under strain, and help finding the right partner.",
    long: "Whether you are struggling within a marriage or struggling to find one, the Vedas offer real, ancient remedies. We perform compatibility readings, conduct dosha-removing rituals, and provide ongoing counsel to families ready to rebuild.",
    image: "/images/mata-trinity.jpg",
  },
  {
    slug: "court-cases",
    title: "Court Case Resolution",
    category: "solutions",
    short:
      "Spiritual support for those caught in long-running legal battles.",
    long: "Justice has a karmic dimension. While we never replace your lawyer, we offer Vedic remedies — Baglamukhi-led rituals especially — that have brought clarity, swifter rulings, and unexpected resolutions to clients who came to us drained from years in court.",
    image: "/images/baglamukhi-mata.jpg",
  },
  {
    slug: "money-problems",
    title: "Financial Difficulties",
    category: "solutions",
    short: "Restoring flow when money keeps slipping through your hands.",
    long: "Money is energy, and energy responds to attention. We diagnose the leak — past karma, vastu, name energy, or planetary affliction — and prescribe remedies that have helped clients move from chronic shortage to steady abundance.",
    image: "/images/LAXMI.jpg",
  },
  {
    slug: "health-problems",
    title: "Persistent Health Issues",
    category: "solutions",
    short:
      "Spiritual support alongside (never replacing) medical care for chronic conditions.",
    long: "When doctors have done their work and the body is still not at ease, the disturbance often lives elsewhere. We offer Mahamrityunjaya jaap, healing rituals, and energy work as a companion to your medical treatment — never as a substitute.",
    image: "/images/SHIV.jpg",
  },
  {
    slug: "depression-stress",
    title: "Depression & Stress",
    category: "solutions",
    short:
      "Compassionate, confidential support for those carrying heavy burdens.",
    long: "If you have lost the will to begin a day, you are not alone. We offer gentle Vedic practices, mantra prescription, and compassionate counsel — alongside your therapist or doctor — to help you find the floor again.",
    image: "/images/Spiritual-Healing.jpg",
  },
  {
    slug: "parental-issues",
    title: "Parent–Child Relationships",
    category: "solutions",
    short: "Healing the silence and storm between parents and children.",
    long: "Some of the deepest karma we carry is with those who raised us — or those we are raising. Our counsel helps both sides understand the karmic conversation between them, and the small daily practices that begin to soften it.",
    image: "/images/mata-trinity.jpg",
  },

  // Spiritual
  {
    slug: "akashic-readings",
    title: "Akashic Record Reading",
    category: "spiritual",
    short:
      "A reading of your soul's history — past lives, lessons, and current path.",
    long: "The Akashic records hold the imprint of every soul. In a personal reading, we read what your soul has come here to learn, the patterns repeating from past lives, and the dharma you are quietly being called toward in this one.",
    image: "/images/durga.jpg",
  },
  {
    slug: "gemstone-consultation",
    title: "Gemstone Consultation",
    category: "spiritual",
    short:
      "Personalised gemstone prescription based on your full birth chart.",
    long: "Gemstones are powerful — and the wrong one is just as powerful as the right one. We never prescribe by zodiac sign alone. Each recommendation is rooted in your full chart, the stones you should wear, what to avoid, and how to energise them.",
    image: "/images/oum.jpg",
  },
  {
    slug: "vastu-correction",
    title: "Vastu Correction",
    category: "spiritual",
    short: "Aligning your home or workplace with the natural flow of energy.",
    long: "Vastu is not superstition — it is the architecture of energy. We diagnose blockages in your home, office, or shop and prescribe corrections that work without major construction. Many clients feel the shift within days.",
    image: "/images/Spiritual-Healing.jpg",
  },
  {
    slug: "communication-departed",
    title: "Communication With Departed",
    category: "spiritual",
    short:
      "Sacred sittings to convey messages, complete unfinished words, and offer peace.",
    long: "Grief is heavier when something was left unsaid. Through traditional Vedic practice, we help families convey the words left behind — and where appropriate, receive what the departed soul still wishes to communicate.",
    image: "/images/iskcon_diya.gif",
  },
  {
    slug: "exam-success",
    title: "Exam Success Remedies",
    category: "spiritual",
    short:
      "Saraswati-rooted practices for students preparing for major exams.",
    long: "Exams test memory, focus, and luck — three energies that respond to ritual. Our students follow simple Saraswati and Ganesha-based practices in the weeks before their exams, often with marked improvement in clarity, recall, and result.",
    image: "/images/ganesha.jpg",
  },
  {
    slug: "foreign-travel",
    title: "Foreign Travel & Settlement",
    category: "spiritual",
    short:
      "Vedic remedies for visa, immigration, and settlement abroad.",
    long: "If foreign travel feels permanently blocked despite eligibility, the obstacle is often not paperwork. Through chart analysis and targeted remedies, we have helped clients break through repeated rejections and build new lives abroad.",
    image: "/images/panchmukh.jpg",
  },

  // Remedies
  {
    slug: "name-correction",
    title: "Name Correction",
    category: "remedies",
    short: "Subtle adjustments to align your name with your soul's vibration.",
    long: "Your name is repeated thousands of times in your life — by you, by others, by yourself in thought. A name that is energetically misaligned slowly drains you. We offer minor numerological corrections that keep your identity but shift the vibration.",
    image: "/images/oum.jpg",
  },
  {
    slug: "signature-correction",
    title: "Signature Correction",
    category: "remedies",
    short:
      "Reshaping your signature so the energy of your name supports your work.",
    long: "Every signature is a sigil. We analyse yours, identify where it is dragging you down, and guide you to a corrected version that supports your money, career, and relationships.",
    image: "/images/oum.jpg",
  },
  {
    slug: "mobile-number-correction",
    title: "Lucky Mobile Number",
    category: "remedies",
    short:
      "Choosing or correcting a mobile number whose energy supports your life.",
    long: "Mobile numbers carry numerology. We help you choose a number whose digits add up to a vibration that supports your career, relationships, and prosperity — or correct an existing number's misaligned energy.",
    image: "/images/oum.jpg",
  },
  {
    slug: "logo-correction",
    title: "Logo Correction",
    category: "remedies",
    short:
      "Adjusting business logos so they carry a prosperous, supportive energy.",
    long: "A logo is a business's face. We assess yours for hidden energy traps — dead corners, breaking lines, misaligned colours — and recommend the smallest possible changes that quietly transform how your business is received.",
    image: "/images/LAXMI.jpg",
  },
  {
    slug: "color-therapy",
    title: "Color Therapy",
    category: "remedies",
    short:
      "Personalised guidance on colours to wear, surround yourself with, and avoid.",
    long: "Colour is the most accessible energy correction available to us. Based on your chart and current planetary positions, we prescribe daily colour practices — wardrobe, walls, accessories — that quietly recalibrate your day.",
    image: "/images/oum.jpg",
  },
];

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const allCategories = Object.keys(categoryMeta) as ServiceCategory[];
