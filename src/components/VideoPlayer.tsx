"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import type { Video } from "@/data/videos";

type Props = {
  video: Video;
  priority?: boolean;
};

export function VideoPlayer({ video, priority = false }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden bg-black">
      {!playing ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${video.title}`}
          className="group relative h-full w-full"
        >
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            priority={priority}
            sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent transition group-hover:from-black/35" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-sindoor shadow-glow transition group-hover:scale-110 sm:h-20 sm:w-20">
              <Play className="h-7 w-7 translate-x-0.5 fill-current sm:h-9 sm:w-9" />
            </span>
          </div>
        </button>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="h-full w-full"
        />
      )}
    </div>
  );
}
