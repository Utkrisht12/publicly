"use client";

import { useEffect, useRef, useState } from "react";

const COLUMNS = [
  "Role",
  "Technical depth",
  "Embedded in your team",
  "Creates public marketing",
];

const ROWS = [
  {
    role: "Influencer",
    values: ["No", "No", "Yes"],
    highlight: false,
  },
  {
    role: "Agency / freelance marketer",
    values: ["Shallow", "No", "Yes"],
    highlight: false,
  },
  {
    role: "Public Builder",
    values: ["Yes", "Yes", "Yes"],
    highlight: true,
  },
];

function cellInk(value: string, highlight: boolean) {
  if (highlight) return "text-accent";
  return value === "Yes" ? "text-ink" : "text-ink-secondary";
}

export default function WhatIsAPublicBuilder() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const reveal = () =>
    `transition-all duration-[320ms] ease-signature ${
      inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
    }`;

  return (
    <section
      ref={sectionRef}
      className="border-t border-hairline bg-canvas py-22 text-ink md:py-32"
      aria-labelledby="what-is-a-public-builder"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        {/* Asymmetric 12-col composition: copy left, spec sheet right */}
        <div className="grid grid-cols-12 gap-x-8 gap-y-14">
          {/* Copy, 5 cols */}
          <div
            className={`col-span-12 lg:col-span-5 ${reveal()}`}
            style={{ transitionDelay: inView ? "0ms" : undefined }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-secondary">
              What is a Public Builder
            </p>
            <h2
              id="what-is-a-public-builder"
              className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl"
            >
              A Public Builder is not just an influencer and not just a
              freelance marketer.
            </h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-ink-secondary md:text-lg">
              A Public Builder embeds with your team, understands the product
              well enough to talk about it honestly, and spends most of their
              time turning your progress into demos, build logs, short videos,
              and launch updates. They get hands-on with the product where it
              counts, so the content is never faked from the outside.
            </p>
            <p className="mt-8 border-l border-hairline pl-5 text-sm leading-relaxed text-ink md:text-base">
              Only the Public Builder is both credible enough to get the
              product right and embedded enough to move with your team.
            </p>
          </div>

          {/* Spec sheet, 7 cols */}
          <div className="col-span-12 lg:col-span-7">
            {/* Table at md+ */}
            <div
              className={`hidden overflow-hidden rounded-[4px] border border-hairline md:block ${reveal()}`}
              style={{ transitionDelay: inView ? "120ms" : undefined }}
            >
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-hairline">
                    {COLUMNS.map((col, i) => (
                      <th
                        key={col}
                        scope="col"
                        className={`px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-ink-secondary ${
                          i === 0 ? "w-[34%]" : ""
                        }`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row, rowIndex) => (
                    <tr
                      key={row.role}
                      className={`${
                        rowIndex < ROWS.length - 1
                          ? "border-b border-hairline"
                          : ""
                      } ${
                        row.highlight ? "bg-ink/[0.03]" : ""
                      } ${reveal()}`}
                      style={{
                        transitionDelay: inView
                          ? `${200 + rowIndex * 80}ms`
                          : undefined,
                      }}
                    >
                      <th
                        scope="row"
                        className={`px-5 text-sm font-medium ${
                          row.highlight
                            ? "border-l-2 border-l-accent py-6 text-base text-ink"
                            : "py-4 text-ink-secondary"
                        }`}
                      >
                        {row.role}
                      </th>
                      {row.values.map((value, i) => (
                        <td
                          key={COLUMNS[i + 1]}
                          className={`px-5 font-mono text-sm ${
                            row.highlight ? "py-6" : "py-4"
                          } ${cellInk(value, row.highlight)}`}
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Stacked spec cards below md */}
            <div className="space-y-3 md:hidden">
              {ROWS.map((row, rowIndex) => (
                <div
                  key={row.role}
                  className={`rounded-[4px] border border-hairline p-5 ${
                    row.highlight
                      ? "border-l-2 border-l-accent bg-ink/[0.03]"
                      : ""
                  } ${reveal()}`}
                  style={{
                    transitionDelay: inView
                      ? `${120 + rowIndex * 80}ms`
                      : undefined,
                  }}
                >
                  <p
                    className={`text-base font-medium ${
                      row.highlight ? "text-ink" : "text-ink-secondary"
                    }`}
                  >
                    {row.role}
                  </p>
                  <dl className="mt-3 space-y-2">
                    {row.values.map((value, i) => (
                      <div
                        key={COLUMNS[i + 1]}
                        className="flex items-baseline justify-between gap-4"
                      >
                        <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-secondary">
                          {COLUMNS[i + 1]}
                        </dt>
                        <dd
                          className={`font-mono text-sm ${cellInk(
                            value,
                            row.highlight,
                          )}`}
                        >
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>

            <p
              className={`mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-secondary ${reveal()}`}
              style={{ transitionDelay: inView ? "440ms" : undefined }}
            >
              Fig. 01: only one role clears all three
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
