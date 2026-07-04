"use client";

import { useEffect, useState } from "react";

type FeedEntry = {
  time: string;
  name: string;
  action: string;
  live: boolean;
};

const FEED: FeedEntry[] = [
  {
    time: "09:41",
    name: "Maya O.",
    action: "posted a launch thread on X",
    live: true,
  },
  {
    time: "10:07",
    name: "Aarav M.",
    action: "recorded a 30s feature walkthrough",
    live: true,
  },
  {
    time: "11:23",
    name: "Jonas K.",
    action: "shipped this week's build-log video",
    live: true,
  },
  {
    time: "12:02",
    name: "Priya R.",
    action: "pushed a small demo fix, then filmed it",
    live: false,
  },
  {
    time: "13:18",
    name: "Sam W.",
    action: "published a LinkedIn progress update",
    live: true,
  },
  {
    time: "14:36",
    name: "Lucía F.",
    action: "cut a YouTube Short from Friday's demo",
    live: true,
  },
  {
    time: "15:12",
    name: "Daniel C.",
    action: "drafted the launch-week content calendar",
    live: false,
  },
];

const VISIBLE_ROWS = 5;

export default function Hero() {
  const [rows, setRows] = useState(() =>
    FEED.slice(0, VISIBLE_ROWS).map((entry, i) => ({ entry, seq: i })),
  );

  useEffect(() => {
    let next = VISIBLE_ROWS;
    const id = setInterval(() => {
      setRows((prev) =>
        [{ entry: FEED[next % FEED.length], seq: next }, ...prev].slice(
          0,
          VISIBLE_ROWS,
        ),
      );
      next += 1;
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div
        className="hero-glow pointer-events-none absolute -top-16 left-0 h-[480px] w-[720px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1200px] px-5 py-22 md:px-8 md:py-32">
        <div className="grid grid-cols-12 items-start gap-x-8 gap-y-14">
          {/* Statement, ~60% */}
          <div className="col-span-12 lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-secondary">
              Hire Public Builders
            </p>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[1.04] tracking-tight md:text-6xl">
              We help startups turn building into marketing.
            </h1>
            <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-ink-secondary md:text-lg">
              Public Builders embed with your team, understand what you are
              shipping, and turn weekly progress into demos, build logs, short
              videos, and launch momentum.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#waitlist"
                className="rounded-[4px] bg-accent px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.15em] text-canvas transition-opacity duration-[120ms] ease-signature hover:opacity-85"
              >
                Join Startup Waitlist
              </a>
              <a
                href="#apply"
                className="rounded-[4px] border border-hairline px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.15em] text-ink transition-colors duration-[120ms] ease-signature hover:border-accent/60"
              >
                Apply as a Public Builder
              </a>
            </div>
            <p className="mt-5 font-mono text-[11px] text-ink-secondary">
              Early access is opening soon for startups ready to build in public
              and Public Builders ready to join them.
            </p>
          </div>

          {/* Live build-log feed, ~40% */}
          <div className="col-span-12 lg:col-span-5">
            <div className="overflow-hidden rounded-[4px] border border-hairline">
              <div className="grid-texture flex items-center justify-between border-b border-hairline px-4 py-3">
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-secondary">
                  <span
                    className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  Shipped today
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-secondary">
                  live feed
                </span>
              </div>
              <ul>
                {rows.map((row, i) => (
                  <li
                    key={row.seq}
                    className={`flex animate-feed-in items-baseline gap-3 border-b border-hairline px-4 py-3 last:border-b-0 ${
                      i >= 3 ? "max-sm:hidden" : ""
                    }`}
                  >
                    <span className="shrink-0 font-mono text-[11px] text-ink-secondary">
                      {row.entry.time}
                    </span>
                    <span
                      className={`relative -top-px h-1.5 w-1.5 shrink-0 self-center rounded-full ${
                        row.entry.live
                          ? "animate-pulse-dot bg-accent"
                          : "bg-amber"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-snug">
                      <span className="font-medium text-ink">
                        {row.entry.name}
                      </span>{" "}
                      <span className="text-ink-secondary">
                        {row.entry.action}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-3 text-right font-mono text-[11px] uppercase tracking-[0.15em] text-ink-secondary">
              Real progress, turned into public updates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
