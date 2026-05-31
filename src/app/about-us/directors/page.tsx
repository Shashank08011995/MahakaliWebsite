import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { Ornament } from "@/components/Ornament";

export const metadata: Metadata = {
  title: "Directors — About Us",
  description:
    "Meet the leadership of Mahakali Vedic Healing Shelter Pvt. Ltd. — Shweta Bisht, President, and Mrs. Sarojini Bisht, Director.",
};

type Director = {
  name: string;
  role: string;
  image?: string;
  initials: string;
  body: string[];
};

const directors: Director[] = [
  {
    name: "Shweta Bisht",
    role: "President & Owner",
    image: "/images/didi-photo-006.jpg",
    initials: "SB",
    body: [
      "Known to clients as Guru Didi Shweta Ji, she is a lifelong devotee of Goddess Kali and the founder of Mahakali Vedic Healing Shelter Pvt. Ltd.",
      "Her work is driven by a single mission — to establish Goddess Kali in every household temple and create a No Exploitation Zone for women who are misled by fake spiritual practitioners.",
      "She personally leads the diagnosis, ritual prescription, and follow-through for every case handled by the shelter, and continues to work towards the founding of the Mahakali Ashram and Temple.",
    ],
  },
  {
    name: "Mrs. Sarojini Bisht",
    role: "Director",
    initials: "SB",
    body: [
      "Holds an M.A. in Vocal Music and was for many years a music teacher at a leading college in Chandigarh.",
      "A respected radio performer and long-standing devotee of Goddess Saraswati and Goddess Kali.",
      "Provides organisational and spiritual oversight, and is a steady presence behind the integrity of the shelter's daily operations.",
    ],
  },
];

export default function DirectorsPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 animate-soft-rise">
        <div className="container-wide max-w-3xl">
          <p className="font-devanagari text-sindoor">ॐ क्रीं कालिकायै नमः</p>
          <p className="eyebrow mt-3">Directors</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Leadership rooted in devotion, music, and decades of service.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty">
            Mahakali Vedic Healing Shelter Pvt. Ltd. is led by a mother and
            daughter — both lifelong devotees, both committed to a No
            Exploitation Zone for women and a faithful representation of Goddess
            Kali in the modern home.
          </p>
        </div>
      </section>

      <Section eyebrow="Our leaders" title="The people who guide the shelter">
        <Ornament variant="lotus" className="mb-8" />
        <div className="grid gap-8 lg:grid-cols-2 stagger-children">
          {directors.map((d) => (
            <article
              key={d.name}
              className="overflow-hidden rounded-3xl border border-saffron-200/60 bg-white shadow-soft"
            >
              <div className="relative aspect-[4/3]">
                {d.image ? (
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cream-deep via-white to-cream-deep">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white border border-saffron-200/60 shadow-soft">
                      <span className="font-serif text-4xl font-semibold text-sindoor">
                        {d.initials}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-7">
                <p className="text-sm uppercase tracking-[0.18em] text-ink-muted">{d.role}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-sindoor">{d.name}</h3>
                <div className="mt-4 space-y-3 text-ink-soft leading-relaxed">
                  {d.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-saffron-200/60 bg-cream-deep/40 p-7 shadow-soft text-center">
          <p className="font-serif text-xl italic text-sindoor-dark">
            &ldquo;Money cannot buy our moral values.&rdquo;
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-ink-muted">
            Jai Maha Kali
          </p>
        </div>
      </Section>
    </>
  );
}
