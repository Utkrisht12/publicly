import Reveal from "@/components/reveal";

export default function Problem() {
  return (
    <section className="border-t border-hairline py-22 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-secondary">
            The problem
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 max-w-[24ch] font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink-secondary md:text-6xl">
            Early startups do not fail because they cannot write ads.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-[24ch] font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink md:ml-[16%] md:text-6xl">
            They fail because no one sees the product being built.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-12 max-w-[52ch] text-base leading-relaxed text-ink-secondary md:ml-[16%] md:text-lg">
            People trust visible progress, real demos, honest updates, and
            proof that a team is shipping. Public Builders make that progress
            visible.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
