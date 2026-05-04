export type Book = {
  slug: string;
  title: string;
  author: string;
  format: "Print" | "E-Book" | "Audio Book";
  synopsis: string;
  cover: string;
};

export const books: Book[] = [
  {
    slug: "corporate-chick-spiritual-healer",
    title: "Corporate Chick Turns Into a Spiritual Healer",
    author: "Guru Didi Shweta Ji",
    format: "Print",
    synopsis:
      "A semi-autobiographical account of Guru Didi's journey from corporate professional to spiritual healer. The first half details her years trapped under black magic — when no one believed her condition was paranormal rather than psychological. A book for anyone whose suffering has not been understood, and for those who suspect it but have nowhere to turn.",
    cover: "/images/book-corporate-chick.jpg",
  },
  {
    slug: "how-black-magic-can-destroy-your-love-life",
    title: "How Black Magic Can Destroy Your Love Life",
    author: "Guru Didi Shweta Ji",
    format: "E-Book",
    synopsis:
      "Ten case studies — five premarital, five post-marital — documenting how black magic silently infiltrates romantic relationships. Each chapter shows how the disturbance was identified, what was done, and how the couples found their way back. Essential reading for those whose relationships keep breaking without explanation.",
    cover: "/images/book-black-magic-love.jpg",
  },
  {
    slug: "unidentified-health-problems",
    title: "Unidentified Health Problems",
    author: "Mahakali Vedic Healing Shelter",
    format: "Audio Book",
    synopsis:
      "An audio companion for those whose chronic health symptoms have never received a clear medical diagnosis. Explores the spiritual and energetic dimensions of unexplained illness, with examples and Vedic remedies — a guide for the long-suffering.",
    cover: "/images/Spiritual-Healing.jpg",
  },
  {
    slug: "ketu-voice-of-the-voiceless-soulmate",
    title: "Ketu: Voice of the Voiceless Soulmate",
    author: "Mahakali Vedic Healing Shelter",
    format: "Print",
    synopsis:
      "An exploration of Ketu — the shadow planet of detachment, spirituality, and karmic completion — and its often-overlooked role in the silent suffering of soulmates separated across lifetimes.",
    cover: "/images/puja-ketu.jpg",
  },
];
