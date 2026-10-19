import type { Dictionary } from "@/lib/dictionaries";

export function HowIWork({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div data-reveal>
          <p className="font-mono text-sm text-warm-accent">{dict.howIWork.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            {dict.howIWork.title}
          </h2>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dict.howIWork.steps.map((step, i) => (
            <li
              key={step.number}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              className="border-t-2 border-warm-accent pt-4"
            >
              <span className="font-mono text-sm text-warm-accent">{step.number}</span>
              <h3 className="mt-2 font-display text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
