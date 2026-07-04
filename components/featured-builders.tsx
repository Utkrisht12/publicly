"use client";

import { useState } from "react";
import Reveal from "@/components/reveal";
import { IconArrowUpRight, IconLink, IconPlay } from "@/components/icons";

const FILTERS = [
  "All",
  "Content",
  "DevRel",
  "Product Marketing",
  "Design",
  "Engineering",
] as const;

type Filter = (typeof FILTERS)[number];

type Builder = {
  name: string;
  tag: string;
  category: Exclude<Filter, "All">;
  pitch: string;
  formats: string;
  cadence: string;
  stack: string[];
  availability: string;
  bestFor: string;
  price: string;
};

const BUILDERS: Builder[] = [
  {
    name: "Aarav Mehta",
    tag: "Content",
    category: "Content",
    pitch:
      "Turns weekly product progress into demos, X threads, and LinkedIn updates, and knows the stack well enough to build the demos himself.",
    formats: "Build logs · product demos · launch threads",
    cadence: "5 posts/week · 22K combined reach",
    stack: ["React", "Next.js", "AI APIs"],
    availability: "15 hrs/week",
    bestFor: "AI SaaS, internal tools, dashboards",
    price: "From $1,800/mo",
  },
  {
    name: "Maya Okafor",
    tag: "DevRel",
    category: "DevRel",
    pitch:
      "Ships teardown threads and live walkthroughs that make an API feel obvious, then repackages them as docs-adjacent content startups keep reusing.",
    formats: "API walkthroughs · teardown threads · livestream clips",
    cadence: "4 posts/week · 31K combined reach",
    stack: ["TypeScript", "GraphQL", "Postgres"],
    availability: "12 hrs/week",
    bestFor: "Devtools, APIs, infra",
    price: "From $2,200/mo",
  },
  {
    name: "Jonas Keller",
    tag: "Product Marketing",
    category: "Product Marketing",
    pitch:
      "Translates weekly releases into positioning: changelog posts, comparison pages, and short founder-voice updates that compound.",
    formats: "Changelog posts · comparison pages · founder updates",
    cadence: "3 posts/week + 1 long-form",
    stack: ["SQL", "Amplitude", "Webflow"],
    availability: "10 hrs/week",
    bestFor: "B2B SaaS, PLG products",
    price: "From $1,500/mo",
  },
  {
    name: "Priya Raghavan",
    tag: "AI",
    category: "Content",
    pitch:
      "Turns model updates and eval results into plain-English demo videos people actually finish, with the receipts to back every claim.",
    formats: "Demo videos · eval write-ups · X threads",
    cadence: "4 posts/week · 45K combined reach",
    stack: ["Python", "PyTorch", "Eval harnesses"],
    availability: "15 hrs/week",
    bestFor: "AI SaaS, ML tooling",
    price: "Invite only",
  },
  {
    name: "Sam Whitfield",
    tag: "Frontend",
    category: "Engineering",
    pitch:
      "Films UI build logs and before-and-after interaction clips, the kind of visual progress that makes a product feel alive week over week.",
    formats: "UI build logs · interaction clips · YouTube Shorts",
    cadence: "3 videos/week",
    stack: ["React", "Tailwind", "Motion"],
    availability: "8 hrs/week",
    bestFor: "Consumer apps, design tools",
    price: "From $1,600/mo",
  },
  {
    name: "Lucía Ferreira",
    tag: "Design",
    category: "Design",
    pitch:
      "Documents design decisions as short visual breakdowns and Figma walkthroughs, turning process into the most shareable content a team has.",
    formats: "Design breakdowns · Figma walkthroughs · carousels",
    cadence: "4 posts/week · 18K combined reach",
    stack: ["Figma", "Rive", "Webflow"],
    availability: "12 hrs/week",
    bestFor: "Design tools, consumer SaaS",
    price: "From $1,700/mo",
  },
  {
    name: "Daniel Cho",
    tag: "Content",
    category: "Content",
    pitch:
      "Cuts weekly releases into YouTube Shorts and 30-second demo clips, and scripts them from the actual codebase so nothing gets oversold.",
    formats: "YouTube Shorts · 30s demos · launch recaps",
    cadence: "5 clips/week · 60K monthly views",
    stack: ["React", "Remotion", "FFmpeg"],
    availability: "15 hrs/week",
    bestFor: "Devtools, AI products",
    price: "From $2,000/mo",
  },
  {
    name: "Nadia Haddad",
    tag: "DevRel",
    category: "DevRel",
    pitch:
      "Writes launch-week threads with docs-level accuracy and records API walkthroughs that double as onboarding material.",
    formats: "Launch threads · API walkthroughs · quickstart clips",
    cadence: "4 posts/week",
    stack: ["TypeScript", "REST APIs", "Docker"],
    availability: "10 hrs/week",
    bestFor: "APIs, platforms, SDKs",
    price: "From $2,400/mo",
  },
];

const PROOFS = [
  { label: "Post examples", icon: IconLink },
  { label: "Demo video", icon: IconPlay },
  { label: "Portfolio", icon: IconArrowUpRight },
];

export default function FeaturedBuilders() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible =
    filter === "All"
      ? BUILDERS
      : BUILDERS.filter((b) => b.category === filter);

  return (
    <section
      id="builders"
      className="border-t border-hairline py-22 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-secondary">
                Featured builders
              </p>
              <h2 className="mt-5 max-w-[22ch] font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl">
                A small, curated roster. Not a gig board.
              </h2>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-secondary">
              08 builders · early roster
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div
            className="mt-10 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter builders by specialty"
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors duration-[120ms] ease-signature ${
                  filter === f
                    ? "border-accent text-accent"
                    : "border-hairline text-ink-secondary hover:text-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((builder, i) => (
            <Reveal key={builder.name} delay={(i % 3) * 80}>
              <article className="group relative overflow-hidden rounded-[4px] border border-hairline bg-ink/[0.02] p-5 transition-colors duration-[120ms] ease-signature hover:border-accent/50 hover:bg-ink/[0.04]">
                {/* 1px accent underline that slides in on hover */}
                <span
                  className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-[120ms] ease-signature group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-medium tracking-tight">
                    {builder.name}
                  </h3>
                  <span className="shrink-0 rounded-full border border-hairline px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-secondary">
                    {builder.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink">
                  {builder.pitch}
                </p>
                <p className="mt-4 font-mono text-[11px] leading-relaxed text-ink-secondary">
                  {builder.formats}
                  <br />
                  {builder.cadence}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {builder.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-hairline px-2 py-0.5 font-mono text-[10px] text-ink-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-3 font-mono text-[11px] text-ink-secondary">
                  Understands the product. Makes the progress visible.
                </p>
                <dl className="mt-4 divide-y divide-hairline border-t border-hairline font-mono text-[11px]">
                  <div className="flex justify-between gap-3 py-2">
                    <dt className="uppercase tracking-[0.12em] text-ink-secondary/80">
                      Availability
                    </dt>
                    <dd className="text-ink">{builder.availability}</dd>
                  </div>
                  <div className="flex justify-between gap-3 py-2">
                    <dt className="shrink-0 uppercase tracking-[0.12em] text-ink-secondary/80">
                      Best for
                    </dt>
                    <dd className="text-right text-ink-secondary">
                      {builder.bestFor}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3 py-2">
                    <dt className="uppercase tracking-[0.12em] text-ink-secondary/80">
                      Starting at
                    </dt>
                    <dd className="text-ink">{builder.price}</dd>
                  </div>
                </dl>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {PROOFS.map((proof) => (
                    <span
                      key={proof.label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-2.5 py-1 font-mono text-[10px] text-ink-secondary transition-colors duration-[120ms] ease-signature group-hover:text-ink"
                    >
                      <proof.icon size={11} />
                      {proof.label}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
