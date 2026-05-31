export type ProductCategory = "energized" | "beauty-1" | "beauty-2";

export type Product = {
  slug: string;
  title: string;
  category: ProductCategory;
  short: string;
  long: string;
  details: string[];
  image: string;
  pricing?: string;
};

export const productCategoryMeta: Record<
  ProductCategory,
  { label: string; description: string }
> = {
  energized: {
    label: "Spiritually Energized Products",
    description:
      "Sacred objects and talismans energized in the shelter for protection, abundance, and healing.",
  },
  "beauty-1": {
    label: "Spiritual Beauty Products 1",
    description:
      "Care rituals and packs infused with spiritual energy for glowing health and radiance.",
  },
  "beauty-2": {
    label: "Spiritual Beauty Products 2",
    description:
      "Advanced beauty and wellness products created with sacred energy and subtle balance.",
  },
};

export const products: Product[] = [
  {
    slug: "divine-paintings",
    title: "Divine Paintings",
    category: "energized",
    short: "Sacred artwork charged with protective and healing energy.",
    long: "Each painting is consecrated with mantras and prayer, then energised to support peace, protection, and spiritual uplift in your home or workplace.",
    details: [
      "Blessings for the space where it is displayed",
      "Helps calm family energy and reduce conflict",
      "Suitable for home altars, offices, or meditation rooms",
    ],
    image: "/images/divine-paintings.jpg",
    pricing: "Ask for pricing",
  },
  {
    slug: "american-diamond",
    title: "American Diamond",
    category: "energized",
    short: "A spiritually energised decorative stone for abundance and clarity.",
    long: "This carefully crafted American Diamond is charged to support wealth, clarity, and confidence — particularly useful for businesses and homes seeking an energetic boost.",
    details: ["Promotes confidence and clarity", "Energises workspaces", "Ideal as a gift or altar offering"],
    image: "/images/american-diamond.jpg",
  },
  {
    slug: "maa-kalis-silver-locket",
    title: "Maa Kali's Silver Locket",
    category: "energized",
    short: "A sacred silver locket energized with Maa Kali's protection.",
    long: "Worn close to the heart, this locket is prepared with specific mantras to support courage, protection and spiritual connection.",
    details: ["Blessed for protection", "Ideal for daily wear", "Helps steady the emotional field"],
    image: "/images/maa-kalis-silver-locket.jpg",
  },
  {
    slug: "shani-jis-ring-locket",
    title: "Shani Ji's Ring Locket",
    category: "energized",
    short: "A sacred talisman for the strong, balancing energy of Lord Shani.",
    long: "Created for those seeking relief from Saturn's pressure, this ring-locket is energised to bring steadiness, discipline, and long-term protection.",
    details: ["Strengthens Saturn energy", "Supports career stability", "Calms anxiety and pressure"],
    image: "/images/shani-ring-locket.jpg",
  },
  {
    slug: "hanuman-jis-silver-locket",
    title: "Hanuman Ji’s Silver Locket",
    category: "energized",
    short: "A protective locket blessed in the name of Lord Hanuman.",
    long: "Hanuman Ji is the protector of the devotee who faces fear, hostility or spiritual attack. This locket carries his strength wherever you go.",
    details: ["Inspires courage and protection", "Supports safe travel", "Suitable for daily use"],
    image: "/images/hanuman-silver-locket.jpg",
  },
  {
    slug: "silver-key-ring",
    title: "Silver Key Ring",
    category: "energized",
    short: "A small but powerful spiritual talisman for daily protection.",
    long: "This key ring is energized to guard your entry points and keep your commuting energy steady and safe.",
    details: ["Protects homes and vehicles", "Ideal for travellers", "Blessed to reduce everyday disturbances"],
    image: "/images/silver-key-ring.jpg",
  },
  {
    slug: "energized-dhoop-batti-and-camphor",
    title: "Energized Dhoop Batti and Camphor",
    category: "energized",
    short: "Ritual incense and camphor prepared for clearing energy and welcoming grace.",
    long: "Use this specially energized dhoop and camphor in your home or puja space to remove heaviness and invite light energy.",
    details: ["Purifies home energy", "Creates a sacred atmosphere", "Supports worship and meditation"],
    image: "/images/energized-dhoop-batti.jpg",
  },
  {
    slug: "energized-puja-bell",
    title: "Energized Puja Bell (Puja Ghanti)",
    category: "energized",
    short: "A sacred bell energized to open the doorway between your space and the divine.",
    long: "The sound of a bell clears the atmosphere and invites auspicious consciousness. This bell is energized with mantras before delivery.",
    details: ["Clears the space before puja", "Supports daily worship", "Promotes restful energy"],
    image: "/images/energized-puja-bell.jpg",
  },
  {
    slug: "energized-wealth-tortoise",
    title: "Energized Wealth Tortoise",
    category: "energized",
    short: "A symbolic talisman for wealth stability and calm prosperity.",
    long: "The tortoise holds wealth steadily. This energized figurine is prepared to support long-term abundance and protection.",
    details: ["Stabilises wealth", "Attracts steady prosperity", "Blessed for home and business"],
    image: "/images/energized-wealth-tortoise.jpg",
  },
  {
    slug: "energized-kalp-vrikshya",
    title: "Energized Kalp Vrikshya",
    category: "energized",
    short: "A sacred wish-fulfilling symbol energized for your intentions.",
    long: "Kalp Vrikshya is the divine wish tree. This energized symbol is intended to support your sincere wishes with focused spiritual energy.",
    details: ["Supports heartfelt intentions", "Energized for manifestation", "Suitable for home altars"],
    image: "/images/energized-kalp-vrikshya.jpg",
  },
  {
    slug: "energized-kamdhenu-cow",
    title: "Energized Kamdhenu Cow",
    category: "energized",
    short: "A spiritual symbol of fulfilment and blessings.",
    long: "Kamdhenu is the divine cow of abundance and completion. This energized statue is prepared to bring a sense of fulfilment to your home or altar.",
    details: ["Invokes grace and completion", "Supports family blessings", "Best placed in prayer space"],
    image: "/images/energized-kamdhenu-cow.jpg",
  },
  {
    slug: "maa-lakshmi-jis-locket",
    title: "Maa Lakshmi Ji’s Locket",
    category: "beauty-1",
    short: "A sacred locket to support wealth, grace, and nourishment.",
    long: "Blessed in the name of Maa Lakshmi, this locket is intended to nurture abundance and inner grace.",
    details: ["Supports wealth energy", "Carries feminine grace", "Suitable for everyday wear"],
    image: "/images/maa-lakshmi-locket.jpg",
  },
  {
    slug: "spiritually-energized-face-wash",
    title: "Spiritually Energized Face Wash",
    category: "beauty-1",
    short: "A facial cleanser charged with calming and balancing energy.",
    long: "This face wash is prepared with spiritually charged herbs and prayers to cleanse both your skin and your subtle field.",
    details: ["Cleanses skin gently", "Balances facial energy", "Supports a calm, radiant complexion"],
    image: "/images/energized-face-wash.jpg",
  },
  {
    slug: "spiritually-energized-face-pack",
    title: "Spiritually Energized Face Pack",
    category: "beauty-1",
    short: "A nourishing pack for glow and subtle energetic clearing.",
    long: "This face pack combines traditional ingredients with energetic charging to support healthy skin and subtle confidence.",
    details: ["Nourishes skin", "Balances facial energy", "Helps remove dullness"],
    image: "/images/energized-face-pack.jpg",
  },
  {
    slug: "spiritually-energized-anti-aging-face-pack",
    title: "Spiritually Energized Anti Aging Face Pack",
    category: "beauty-2",
    short: "A rejuvenating face pack prepared to restore youthful radiance.",
    long: "Designed for mature or tired skin, this pack is energized to support vitality, freshness, and inner confidence.",
    details: ["Supports skin renewal", "Restores youthful energy", "Brings a sense of glow"],
    image: "/images/energized-anti-aging-face-pack.jpg",
  },
  {
    slug: "spiritually-energized-rose-face-pack",
    title: "Spiritually Energized Rose Face Pack",
    category: "beauty-2",
    short: "A gentle floral pack for calmness, softness, and radiance.",
    long: "Made with rose energy, this pack soothes the senses and supports a soft, balanced complexion.",
    details: ["Soothes and calms skin", "Supports glow", "Balances emotional energy"],
    image: "/images/energized-rose-face-pack.jpg",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((item) => item.slug === slug);
}

export const allProductCategories = Object.keys(productCategoryMeta) as ProductCategory[];
