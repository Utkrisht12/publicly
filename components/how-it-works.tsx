import Reveal from "@/components/reveal";

type Step = {
  title: string;
  body: string;
};

const TRACKS: { label: string; steps: Step[] }[] = [
  {
    label: "Track 01 / For startups",
    steps: [
      {
        title: "Tell us what you are building.",
        body: "Share your product, stage, and the kind of public momentum you want.",
      },
      {
        title: "Get matched.",
        body: "We pair you with a Public Builder who can understand your product and turn its progress into content.",
      },
      {
        title: "Ship in public.",
        body: "They embed in your workflow, create demos, post updates, and turn progress into distribution.",
      },
    ],
  },
  {
    label: "Track 02 / For Public Builders",
    steps: [
      {
        title: "Apply.",
        body: "Show your content, previous work, and your technical fluency.",
      },
      {
        title: "Get matched.",
        body: "We connect you with early startups that need your content style and credibility.",
      },
      {
        title: "Build your portfolio publicly.",
        body: "Get paid, work with real products, and create visible proof of work.",
      },
    ],
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-hairline py-22 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-secondary">
            How it works
          </p>
          <h2 className="mt-5 max-w-[24ch] font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl">
            Three steps on each side of the marketplace.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-8">
          {TRACKS.map((track, trackIndex) => (
            <Reveal key={track.label} delay={trackIndex * 120}>
              <div className="rounded-[4px] border border-hairline p-6 md:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-secondary">
                  {track.label}
                </p>
                <ol className="mt-8">
                  {track.steps.map((step, i) => (
                    <li
                      key={step.title}
                      className="grid grid-cols-[56px_1fr] gap-x-2"
                    >
                      <div className="relative">
                        <span className="font-mono text-2xl text-ink-secondary/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {i < track.steps.length - 1 && (
                          <span
                            className="absolute bottom-2 left-[13px] top-10 w-px bg-hairline"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <div
                        className={i < track.steps.length - 1 ? "pb-9" : ""}
                      >
                        <h3 className="font-display text-xl font-medium tracking-tight">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
