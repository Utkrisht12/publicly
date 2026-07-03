"use client";

import { useState } from "react";
import Reveal from "@/components/reveal";
import { Field, PillGroup, inputClass } from "@/components/form";

const WORK_TYPES = [
  "Content",
  "DevRel",
  "Product Marketing",
  "Design",
  "Engineering",
];

const BUILDER_UPSIDES = [
  ["Paid pilots", "From day one"],
  ["Real products", "Not spec work"],
  ["Public portfolio", "Every post counts"],
  ["Distribution", "Your reach grows too"],
];

export default function BuilderApplication() {
  const [canPost, setCanPost] = useState<string[]>([]);
  const [work, setWork] = useState<string[]>([]);

  return (
    <section id="apply" className="border-t border-hairline py-22 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        {/* Mirrored composition: form left, copy right */}
        <div className="grid grid-cols-12 items-start gap-x-8 gap-y-14">
          <div className="order-2 col-span-12 lg:order-1 lg:col-span-7">
            <Reveal delay={80}>
              <form
                className="space-y-8 rounded-[4px] border border-hairline p-6 md:p-8"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-8 sm:grid-cols-2">
                  <Field label="Name" htmlFor="a-name">
                    <input
                      id="a-name"
                      type="text"
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Email" htmlFor="a-email">
                    <input
                      id="a-email"
                      type="email"
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </Field>
                </div>
                <Field label="Location / timezone" htmlFor="a-location">
                  <input
                    id="a-location"
                    type="text"
                    placeholder="Lisbon, UTC+1"
                    className={inputClass}
                  />
                </Field>
                <Field label="Content style and formats" htmlFor="a-style">
                  <textarea
                    id="a-style"
                    rows={3}
                    placeholder="Build logs, 30s demos, launch threads, YouTube Shorts. Whatever you actually ship."
                    className={inputClass}
                  />
                </Field>
                <Field label="Technical fluency" htmlFor="a-tech">
                  <input
                    id="a-tech"
                    type="text"
                    placeholder="React, AI APIs, Figma"
                    className={inputClass}
                  />
                </Field>
                <Field label="Portfolio and best posts" htmlFor="a-portfolio">
                  <input
                    id="a-portfolio"
                    type="url"
                    placeholder="Links to the work you are proudest of"
                    className={inputClass}
                  />
                </Field>
                <Field
                  label="Social links, with reach if you have it"
                  htmlFor="a-social"
                >
                  <input
                    id="a-social"
                    type="text"
                    placeholder="x.com/you (8K), youtube.com/@you (2K subs)"
                    className={inputClass}
                  />
                </Field>
                <Field label="Can you post publicly 3 to 5 times per week?">
                  <PillGroup
                    label="Can you post publicly 3 to 5 times per week?"
                    options={["Yes", "No"]}
                    selected={canPost}
                    onToggle={(option) => setCanPost([option])}
                  />
                </Field>
                <Field label="Preferred work">
                  <PillGroup
                    label="Preferred work"
                    options={WORK_TYPES}
                    selected={work}
                    onToggle={(option) =>
                      setWork((prev) =>
                        prev.includes(option)
                          ? prev.filter((t) => t !== option)
                          : [...prev, option],
                      )
                    }
                  />
                </Field>
                <div className="grid gap-8 sm:grid-cols-2">
                  <Field label="Availability" htmlFor="a-availability">
                    <input
                      id="a-availability"
                      type="text"
                      placeholder="15 hrs/week"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Short video intro" htmlFor="a-video" optional>
                    <input
                      id="a-video"
                      type="file"
                      accept="video/*"
                      className="w-full rounded-[4px] border border-hairline bg-transparent px-3 py-2 font-mono text-[11px] text-ink-secondary file:mr-3 file:rounded-full file:border file:border-hairline file:bg-transparent file:px-3 file:py-1 file:font-mono file:text-[10px] file:uppercase file:tracking-[0.12em] file:text-ink"
                    />
                  </Field>
                </div>
                <button
                  type="submit"
                  className="rounded-[4px] bg-accent px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.15em] text-canvas transition-opacity duration-[120ms] ease-signature hover:opacity-85"
                >
                  Apply as a Public Builder
                </button>
              </form>
            </Reveal>
          </div>

          <div className="order-1 col-span-12 lg:order-2 lg:col-span-5">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-secondary">
                For Public Builders
              </p>
              <h2 className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl">
                Become a Public Builder.
              </h2>
              <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-ink-secondary">
                Work with early startups, understand real products deeply, get
                paid, and turn your work into a public portfolio.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <dl className="mt-10 divide-y divide-hairline border-y border-hairline">
                {BUILDER_UPSIDES.map(([term, detail]) => (
                  <div
                    key={term}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink">
                      {term}
                    </dt>
                    <dd className="font-mono text-[11px] text-ink-secondary">
                      {detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
