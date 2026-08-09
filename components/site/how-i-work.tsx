import type { Dictionary } from "@/lib/dictionaries";

export function HowIWork({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="font-mono text-sm text-warm-accent">{dict.howIWork.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {dict.howIWork.title}
        </h2>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dict.howIWork.steps.map((step) => (
            <li key={step.number} className="border-l-2 border-warm-accent/40 pl-4">
              <span className="font-mono text-sm text-warm-accent">{step.number}</span>
              <h3 className="mt-1 font-medium text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
