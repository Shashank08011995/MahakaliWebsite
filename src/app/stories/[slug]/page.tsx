import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { stories, getStoryBySlug } from "@/data/stories";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return { title: "Story not found" };
  return {
    title: story.title,
    description: story.summary,
  };
}

export default async function StoryDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  return (
    <>
      <section className="bg-white pt-12 pb-10 sm:pt-20 sm:pb-12">
        <div className="container-wide">
          <Link
            href="/stories"
            className="inline-flex items-center gap-1 text-sm font-semibold text-saffron-700 hover:text-saffron-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to stories
          </Link>
          <p className="eyebrow mt-6">Story</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
            {story.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
            {story.summary}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-start">
          <article>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-cream-deep shadow-soft">
              <Image
                src={story.image}
                alt={story.title}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-8 space-y-6 text-ink-soft leading-relaxed prose prose-lg">
              <p>{story.quote}</p>
              <p>
                This story is an example of how sincere spiritual service can
                bring healing to those who are suffering.
              </p>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 rounded-3xl border border-saffron-200/60 bg-white p-6 shadow-soft">
            <p className="font-serif text-xl font-semibold text-sindoor">
              Seek your own healing
            </p>
            <p className="mt-3 text-ink-soft leading-relaxed">
              If this story resonates with you, contact Guru Didi for a
              personalised consultation.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
