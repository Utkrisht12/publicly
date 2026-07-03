const LINKS = [
  { label: "For Startups", href: "#waitlist" },
  { label: "For Public Builders", href: "#apply" },
  { label: "How It Works", href: "#how-it-works" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-canvas/85 backdrop-blur-sm">
      <nav
        className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-5 md:px-8"
        aria-label="Main"
      >
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Publicly
          </span>
          <span
            className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent"
            aria-hidden="true"
          />
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-secondary transition-colors duration-[120ms] ease-signature hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#waitlist"
          className="rounded-[4px] bg-accent px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-canvas transition-opacity duration-[120ms] ease-signature hover:opacity-85"
        >
          Join Waitlist
        </a>
      </nav>
    </header>
  );
}
