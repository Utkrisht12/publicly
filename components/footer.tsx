const LINKS = [
  { label: "For Startups", href: "#waitlist" },
  { label: "For Public Builders", href: "#apply" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Join Waitlist", href: "#waitlist" },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline py-14">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="flex flex-wrap items-baseline justify-between gap-8">
          <div>
            <p className="font-display text-lg font-semibold tracking-tight text-ink">
              Publicly
            </p>
            <p className="mt-1 text-sm text-ink-secondary">
              Hire Public Builders.
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-8 gap-y-3"
          >
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-secondary transition-colors duration-[120ms] ease-signature hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
          <p className="font-mono text-[11px] text-ink-secondary">
            © 2026 Publicly
          </p>
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-secondary">
            <span
              className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent"
              aria-hidden="true"
            />
            Building in public since day one
          </p>
        </div>
      </div>
    </footer>
  );
}
