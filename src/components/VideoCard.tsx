import type { Video } from "@/data/videos";
import { VideoPlayer } from "./VideoPlayer";

export function VideoCard({
  video,
  priority = false,
}: {
  video: Video;
  priority?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-saffron-200/60 bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow">
      <VideoPlayer video={video} priority={priority} />
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.22em] text-ink-muted">
          YouTube · Mahakali Vedic Healing Shelter
        </p>
        <h3 className="mt-3 font-serif text-lg font-semibold text-ink leading-snug line-clamp-2">
          {video.title.replace(/#\S+/g, "").trim()}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft line-clamp-3">
          {video.description}
        </p>
      </div>
    </article>
  );
}
