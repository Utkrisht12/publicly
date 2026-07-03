"use client";

import Reveal, { useInView } from "@/components/reveal";
import {
  IconHeart,
  IconPlay,
  IconReply,
  IconRepost,
  IconThumbsUp,
} from "@/components/icons";

type Milestone = {
  label: string;
  live: boolean;
  items: string[];
};

const MILESTONES: Milestone[] = [
  {
    label: "Day 01",
    live: false,
    items: [
      "onboarded into the team",
      "first build-log post",
      "content calendar set",
    ],
  },
  {
    label: "Day 07",
    live: false,
    items: [
      "weekly demo video",
      "5 public posts",
      "one hands-on product tweak, filmed for a clip",
    ],
  },
  {
    label: "Launch Day",
    live: true,
    items: [
      "launch thread",
      "founder clip",
      "full launch-week content push",
      "case study",
    ],
  },
];

function Avatar({ initials }: { initials: string }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline bg-ink/[0.05] font-mono text-[11px] text-ink-secondary">
      {initials}
    </span>
  );
}

export default function SprintTimeline() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section id="sprint" className="border-t border-hairline py-22 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-secondary">
            Example 30-day sprint
          </p>
          <h2 className="mt-5 max-w-[24ch] font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl">
            A month of progress, logged like a changelog.
          </h2>
        </Reveal>

        {/* Timeline: horizontal path on md+, vertical on mobile */}
        <div ref={ref} className="relative mt-14">
          <div
            className="absolute left-0 top-[3px] hidden h-px w-full origin-left bg-hairline transition-transform duration-[800ms] ease-signature md:block"
            style={{ transform: inView ? "scaleX(1)" : "scaleX(0)" }}
            aria-hidden="true"
          />
          <div
            className="absolute left-[3px] top-1 h-full w-px origin-top bg-hairline transition-transform duration-[800ms] ease-signature md:hidden"
            style={{ transform: inView ? "scaleY(1)" : "scaleY(0)" }}
            aria-hidden="true"
          />
          <ol className="grid gap-y-12 md:grid-cols-3 md:gap-x-8">
            {MILESTONES.map((milestone, i) => (
              <li
                key={milestone.label}
                className={`relative pl-8 transition-all duration-[320ms] ease-signature md:pl-0 md:pt-8 ${
                  inView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: `${200 + i * 140}ms` }}
              >
                <span
                  className={`absolute left-0 top-1 h-1.5 w-1.5 rounded-full md:top-0 ${
                    milestone.live ? "animate-pulse-dot bg-accent" : "bg-amber"
                  }`}
                  aria-hidden="true"
                />
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink">
                  {milestone.label}
                </h3>
                <ul className="mt-4 space-y-2">
                  {milestone.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-xs leading-relaxed text-ink-secondary"
                    >
                      <span
                        className={
                          milestone.live ? "text-accent" : "text-ink-secondary"
                        }
                      >
                        +
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        {/* What the sprint looks like from the outside: real-structure embeds */}
        <Reveal delay={120} className="mt-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-secondary">
            What it looks like from the outside
          </p>
        </Reveal>
        <div className="mt-6 grid items-start gap-5 md:grid-cols-3">
          {/* X post */}
          <Reveal delay={160}>
            <article className="rounded-[4px] border border-hairline bg-ink/[0.02] p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar initials="AM" />
                  <div>
                    <p className="text-sm font-medium text-ink">Aarav Mehta</p>
                    <p className="font-mono text-[11px] text-ink-secondary">
                      @aaravships · Day 30 · 09:12
                    </p>
                  </div>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-secondary">
                  X
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink">
                Day 30. We shipped. Every demo, teardown, and build log from a
                month of building this in public, with the numbers behind it.
                (1/9)
              </p>
              <div className="mt-4 flex items-center gap-5 border-t border-hairline pt-3 font-mono text-[11px] text-ink-secondary">
                <span className="inline-flex items-center gap-1.5">
                  <IconReply size={13} /> 48
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <IconRepost size={13} /> 212
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <IconHeart size={13} /> 1.4K
                </span>
              </div>
            </article>
          </Reveal>

          {/* YouTube Short */}
          <Reveal delay={240} className="md:mt-10">
            <article className="overflow-hidden rounded-[4px] border border-hairline bg-ink/[0.02]">
              <div className="grid-texture relative flex aspect-[4/5] items-center justify-center border-b border-hairline">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-hairline bg-canvas/80 text-ink">
                  <IconPlay size={18} className="ml-0.5" />
                </span>
                <span className="absolute bottom-2 right-2 rounded-[4px] bg-canvas/90 px-1.5 py-0.5 font-mono text-[10px] text-ink">
                  0:34
                </span>
                <span className="absolute left-2 top-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-secondary">
                  YouTube · Short
                </span>
              </div>
              <div className="flex items-start gap-3 p-4">
                <Avatar initials="JK" />
                <div>
                  <p className="text-sm font-medium leading-snug text-ink">
                    30s walkthrough: the new onboarding flow
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-ink-secondary">
                    12K views · Day 07
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          {/* LinkedIn post */}
          <Reveal delay={320} className="md:mt-4">
            <article className="rounded-[4px] border border-hairline bg-ink/[0.02] p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar initials="MO" />
                  <div>
                    <p className="text-sm font-medium text-ink">Maya Okafor</p>
                    <p className="font-mono text-[11px] text-ink-secondary">
                      Public Builder · Day 14 · 1w
                    </p>
                  </div>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-secondary">
                  LinkedIn
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink">
                Two weeks embedded with the team. Shipped the weekly demo
                video, five posts, and one small product fix I filmed for a
                clip. Public updates land differently when the person posting
                actually understands the product.
              </p>
              <div className="mt-4 flex items-center gap-2 border-t border-hairline pt-3 font-mono text-[11px] text-ink-secondary">
                <IconThumbsUp size={13} />
                <span>327 · 41 comments · 18 reposts</span>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
