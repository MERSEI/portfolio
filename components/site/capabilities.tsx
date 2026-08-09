import type { Dictionary } from "@/lib/dictionaries";

export function Capabilities({ dict }: { dict: Dictionary }) {
  return (
    <section id="capabilities" className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="font-mono text-sm text-warm-accent">{dict.capabilities.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {dict.capabilities.title}
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border/70 bg-border/70 sm:grid-cols-2">
          {dict.capabilities.items.map((item, i) => (
            <div key={item.title} className="bg-background p-6 sm:p-8">
              <span className="font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-medium text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
