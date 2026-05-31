type Props = {
  className?: string;
  variant?: "lotus" | "om" | "trishul";
};

export function Ornament({ className = "", variant = "lotus" }: Props) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden
    >
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--accent)]/40 sm:w-20" />
      <OrnamentIcon variant={variant} />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--accent)]/40 sm:w-20" />
    </div>
  );
}

function OrnamentIcon({ variant }: { variant: "lotus" | "om" | "trishul" }) {
  if (variant === "om") {
    return (
      <span className="font-devanagari text-2xl text-sindoor sm:text-3xl leading-none">
        ॐ
      </span>
    );
  }
  if (variant === "trishul") {
    return (
      <svg
        className="h-6 w-6 text-sindoor sm:h-7 sm:w-7"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 1.5a.75.75 0 0 1 .75.75v3.18l2.04-2.04a.75.75 0 1 1 1.06 1.06l-2.62 2.62a3 3 0 0 1 .82 2.06v.74h3a.75.75 0 0 1 0 1.5h-3v1.5h2.25a.75.75 0 0 1 0 1.5H13v8.88a.75.75 0 0 1-1.5 0v-8.88H9.25a.75.75 0 0 1 0-1.5H11.5V11.4h-3a.75.75 0 0 1 0-1.5h3v-.74c0-.77.31-1.51.82-2.06L9.7 4.45a.75.75 0 1 1 1.06-1.06l2.04 2.04V2.25A.75.75 0 0 1 12 1.5Z" />
      </svg>
    );
  }
  // lotus (default)
  return (
    <svg
      className="h-6 w-6 text-sindoor sm:h-7 sm:w-7"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2.4c.7 1 1.1 2.1 1.1 3.4 0 1.3-.4 2.6-1.1 3.7-.7-1.1-1.1-2.4-1.1-3.7 0-1.3.4-2.4 1.1-3.4Zm-6.5 4.8c.9.4 1.7 1.1 2.3 2 .6.9 1 2 1.1 3.2-1.3-.1-2.5-.6-3.3-1.6-.9-1-1.2-2.4-.1-3.6Zm13 0c1 1.2.7 2.6-.1 3.6-.9 1-2 1.5-3.4 1.6.1-1.2.4-2.3 1.1-3.2.6-.9 1.4-1.5 2.4-2Zm-8 6.4c.9.6 1.5 1.4 1.8 2.3-.9-.1-1.7-.5-2.4-1.1-.7-.6-1.2-1.4-1.4-2.3 0 0 1.1.5 2 1.1Zm5 .1c.9-.6 2-1.1 2-1.1-.2.9-.7 1.7-1.4 2.3-.7.6-1.5 1-2.4 1.1.3-.9.9-1.7 1.8-2.3ZM12 13.5c.6.7 1 1.5 1 2.4 0 .9-.4 1.7-1 2.4-.6-.7-1-1.5-1-2.4 0-.9.4-1.7 1-2.4Zm0 6.4a3 3 0 0 1 1.5 2.6h-3A3 3 0 0 1 12 19.9Z" />
    </svg>
  );
}
