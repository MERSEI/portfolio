import type { Dictionary } from "@/lib/dictionaries";

export function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="font-mono text-sm text-warm-accent">{dict.about.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {dict.about.title}
        </h2>

        <div className="mt-8 max-w-2xl space-y-4">
          {dict.about.body.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
