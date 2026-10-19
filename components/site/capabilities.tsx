import type { Dictionary } from "@/lib/dictionaries";

export function Capabilities({ dict }: { dict: Dictionary }) {
  return (
    <section id="capabilities" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div data-reveal>
          <p className="font-mono text-sm text-warm-accent">{dict.capabilities.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            {dict.capabilities.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {dict.capabilities.items.map((item, i) => (
            <div
              key={item.title}
              data-reveal
              style={{ "--reveal-delay": `${(i % 2) * 80}ms` } as React.CSSProperties}
              className="bg-background p-6 sm:p-8"
            >
              <span className="font-mono text-xs text-warm-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
