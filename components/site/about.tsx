import type { Dictionary } from "@/lib/dictionaries";

export function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div data-reveal>
            <p className="font-mono text-sm text-warm-accent">{dict.about.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              {dict.about.title}
            </h2>
            <div className="mt-8 space-y-4">
              {dict.about.body.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {dict.about.principlesTitle}
            </p>
            <ol className="mt-4 divide-y divide-border border-y border-border">
              {dict.about.principles.map((p, i) => (
                <li key={p.title} className="flex gap-5 py-6">
                  <span className="font-mono text-sm text-warm-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-medium text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm leading-relaxed text-foreground">{dict.about.availability}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
