export type Story = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  quote: string;
};

export const stories: Story[] = [
  {
    slug: "victim-1",
    title: "Victim 1 — Overcoming Sudden Health Decline",
    summary:
      "A woman found relief from chronic illness after the hidden impact of black magic was identified and addressed.",
    image: "/images/story-1.jpg",
    quote: "I finally felt safe in my own body again.",
  },
  {
    slug: "victim-2",
    title: "Victim 2 — Rebuilding a Marriage",
    summary:
      "A couple reunited after years of unexplained separation and negative influence.",
    image: "/images/story-2.jpg",
    quote: "Our relationship was reborn with peace.",
  },
  {
    slug: "victim-3",
    title: "Victim 3 — New Beginnings After Career Block",
    summary:
      "A professional stuck in repeated job failure discovered the missing spiritual support behind her stagnation.",
    image: "/images/story-3.jpg",
    quote: "I could finally move forward without fear.",
  },
  {
    slug: "victim-4",
    title: "Victim 4 — Protection for a Newborn",
    summary:
      "A young family sought energetic shielding for their newborn when the atmosphere around them grew heavy.",
    image: "/images/story-4.jpg",
    quote: "We raised our child in calm strength.",
  },
  {
    slug: "victim-5",
    title: "Victim 5 — Finding Strength After Loss",
    summary:
      "Someone grieving a sudden loss found a way to connect with peace instead of falling into despair.",
    image: "/images/story-5.jpg",
    quote: "I discovered light in the darkest moment.",
  },
  {
    slug: "victim-6",
    title: "Victim 6 — Clearing a Home of Negative Energy",
    summary:
      "A house suffering from constant argument and illness was restored to harmony.",
    image: "/images/story-6.jpg",
    quote: "Our home became a place of peace again.",
  },
  {
    slug: "victim-7",
    title: "Victim 7 — Success After Court Case Stress",
    summary:
      "A long-running legal battle found relief when the right spiritual counsel was applied.",
    image: "/images/story-7.jpg",
    quote: "The pressure finally eased and clarity returned.",
  },
  {
    slug: "victim-8",
    title: "Victim 8 — Moving Past a Broken Relationship",
    summary:
      "A trapped love story found a new path after healing rituals and guidance.",
    image: "/images/story-8.jpg",
    quote: "I was able to heal and choose again.",
  },
  {
    slug: "victim-9",
    title: "Victim 9 — Peace from Paranormal Disturbance",
    summary:
      "A family haunted by strange events regained calm through protective ritual work.",
    image: "/images/story-9.jpg",
    quote: "The house finally felt like ours again.",
  },
  {
    slug: "victim-10",
    title: "Victim 10 — A New Life After Black Magic",
    summary:
      "Persistent failure in business and love was transformed after a careful removal protocol.",
    image: "/images/story-10.jpg",
    quote: "I could finally breathe again.",
  },
  {
    slug: "victim-11",
    title: "Victim 11 — Stability After Saturn Trouble",
    summary:
      "Long-term Saturn struggles softened with focused mantra and remedy work.",
    image: "/images/story-11.jpg",
    quote: "The tension in my life eased slowly but surely.",
  },
  {
    slug: "victim-12",
    title: "Victim 12 — Healing from Repeated Failures",
    summary:
      "When nothing seemed to help, spiritual guidance revealed the root issue.",
    image: "/images/story-12.jpg",
    quote: "I finally understood what was blocking me.",
  },
  {
    slug: "victim-13",
    title: "Victim 13 — Overcoming Family Conflict",
    summary:
      "A family burdened by tension and separation found a path to understanding.",
    image: "/images/story-13.jpg",
    quote: "We began to speak with love again.",
  },
  {
    slug: "victim-14",
    title: "Victim 14 — Restoring Energy After Exhaustion",
    summary:
      "A caregiver burned out by work and worry got a new sense of strength and balance.",
    image: "/images/story-14.jpg",
    quote: "The heavy cloud over me lifted.",
  },
  {
    slug: "victim15",
    title: "Victim 15 — Confidence Reclaimed",
    summary:
      "A seeker struggling with self-doubt rediscovered their inner strength through mantra and support.",
    image: "/images/story-15.jpg",
    quote: "My courage returned one day at a time.",
  },
  {
    slug: "victim-16",
    title: "Victim 16 — A Family Reunited",
    summary:
      "Years of separation and misunderstanding ended as the family learned to release old energy.",
    image: "/images/story-16.jpg",
    quote: "We chose love over fear.",
  },
  {
    slug: "victim-17",
    title: "Victim 17 — Finding a New Spiritual Home",
    summary:
      "A seeker who had tried every method found the right spiritual support at the shelter.",
    image: "/images/story-17.jpg",
    quote: "I finally found where I belonged.",
  },
  {
    slug: "victim-19",
    title: "Victim 19 — Breaking a Cycle of Comparison",
    summary:
      "A young person freed themselves from constant comparison and found their own path.",
    image: "/images/story-19.jpg",
    quote: "I learned to trust my own journey.",
  },
  {
    slug: "victim-22",
    title: "Victim 22 — From Despair to Devotion",
    summary:
      "Wearing the weight of loss, a seeker learned how devotion could transform grief into strength.",
    image: "/images/story-22.jpg",
    quote: "I found meaning in the healing process.",
  },
  {
    slug: "victim-23",
    title: "Victim 23 — A Business Turned Around",
    summary:
      "When a business was failing despite effort, the right remedy brought new momentum.",
    image: "/images/story-23.jpg",
    quote: "Everything began to shift for the better.",
  },
  {
    slug: "victim-24",
    title: "Victim 24 — Harmony After Legal Struggle",
    summary:
      "A client regained confidence and peace after a long legal dispute.",
    image: "/images/story-24.jpg",
    quote: "I no longer felt trapped by the case.",
  },
  {
    slug: "victim-25",
    title: "Victim 25 — A Spiritual Awakening",
    summary:
      "What began as a search for help became a deeper commitment to a spiritual life.",
    image: "/images/story-25.jpg",
    quote: "My life shifted from surviving to thriving.",
  },
];

export function getStoryBySlug(slug: string) {
  return stories.find((story) => story.slug === slug);
}
