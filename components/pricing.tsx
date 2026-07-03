import Reveal from "@/components/reveal";

type Package = {
  name: string;
  price: string;
  blurb: string;
  features: string[];
  featured: boolean;
};

const PACKAGES: Package[] = [
  {
    name: "Pilot Sprint",
    price: "$1,500 to $3,000 / month",
    blurb: "One Public Builder embedded with your team, posting every week.",
    features: [
      "1 Public Builder",
      "10 to 20 hrs/week",
      "Weekly product demos",
      "3 to 5 public posts per week",
      "Short-form video content",
      "Final case study",
      "Startup can repost all content",
    ],
    featured: false,
  },
  {
    name: "Launch Sprint",
    price: "$5,000 to $8,000 / month",
    blurb: "A small builder team running your launch window at full volume.",
    features: [
      "2 to 3 Public Builders",
      "More frequent content",
      "Launch-week push",
      "Product demos",
      "Founder clips",
      "Case study",
      "Analytics summary",
    ],
    featured: true,
  },
];

// The one DARK inverted contrast block on the page (design-system.md §4).
// Bright lime is permitted here only.
export default function Pricing() {
  return (
    <section id="pricing" className="bg-dark py-22 text-dark-ink md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-dark-ink/60">
                Pilot packages
              </p>
              <h2 className="mt-5 max-w-[22ch] font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl">
                Two ways to run your first sprint.
              </h2>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-dark-ink/60">
              30-day pilots · no retainers
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-8">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 120}>
              <article
                className={`rounded-[4px] border p-6 md:p-8 ${
                  pkg.featured ? "border-dark-ink/40" : "border-dark-ink/15"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-2xl font-medium tracking-tight">
                    {pkg.name}
                  </h3>
                  {pkg.featured && (
                    <span className="rounded-full bg-lime-bright px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-dark">
                      Most momentum
                    </span>
                  )}
                </div>
                <p className="mt-4 font-mono text-lg text-dark-ink">
                  {pkg.price}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-dark-ink/60">
                  {pkg.blurb}
                </p>
                <ul className="mt-6 divide-y divide-dark-ink/10 border-t border-dark-ink/10">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="py-2.5 text-sm">
                      <span className="text-dark-ink/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className={`mt-8 inline-block rounded-[4px] px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.15em] transition-opacity duration-[120ms] ease-signature hover:opacity-85 ${
                    pkg.featured
                      ? "bg-lime-bright text-dark"
                      : "border border-dark-ink/25 text-dark-ink"
                  }`}
                >
                  Join the waitlist
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.15em] text-dark-ink/60">
            Pricing available for selected early-access startups.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
