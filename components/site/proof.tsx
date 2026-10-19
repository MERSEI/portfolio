import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProofGrid, type GridCase } from "@/components/site/proof-grid";
import { cases } from "@/lib/cases";
import { getMeta } from "@/lib/case-meta";
import type { Locale } from "@/app/[locale]/layout";
import type { Dictionary } from "@/lib/dictionaries";

export function Proof({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const featured = cases.filter((c) => getMeta(c.slug).featured);
  const rest: GridCase[] = cases
    .filter((c) => !getMeta(c.slug).featured)
    .map((c) => ({
      slug: c.slug,
      title: c.title,
      tagline: c[locale].tagline,
      stack: c.stack.slice(0, 3),
      isPrivateScope: c.isPrivateScope,
      hasLive: Boolean(c.links.live),
      category: getMeta(c.slug).category,
    }));

  const categoryLabels = dict.proof.categories;

  return (
    <section id="work" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div data-reveal>
          <p className="font-mono text-sm text-warm-accent">{dict.proof.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-5xl">
            {dict.proof.title}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{dict.proof.sub}</p>
        </div>

        <p className="mt-14 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {dict.proof.featured}
        </p>
        <div className="mt-4 grid gap-5 lg:grid-cols-2">
          {featured.map((c, i) => {
            const copy = c[locale];
            const meta = getMeta(c.slug);
            return (
              <Link
                key={c.slug}
                href={`/${locale}/work/${c.slug}`}
                data-reveal
                style={{ "--reveal-delay": `${(i % 2) * 90}ms` } as React.CSSProperties}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-warm-accent sm:p-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-warm-accent">
                    {categoryLabels[meta.category]}
                  </span>
                  {c.isPrivateScope ? (
                    <Lock className="size-4 text-muted-foreground" aria-label={dict.proof.privateNote} />
                  ) : (
                    <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-warm-accent" />
                  )}
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight sm:text-3xl">
                  {c.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/90">{copy.tagline}</p>

                {meta.metrics && (
                  <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                    {meta.metrics.slice(0, 3).map((m) => (
                      <div key={m.value + m.en}>
                        <dd className="font-display text-xl font-medium sm:text-2xl">{m.value}</dd>
                        <dt className="mt-1 text-xs leading-snug text-muted-foreground">{m[locale]}</dt>
                      </div>
                    ))}
                  </dl>
                )}

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {c.stack.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-mono text-[11px] font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>

        <p className="mt-16 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {dict.proof.more}
        </p>
        <ProofGrid
          locale={locale}
          cases={rest}
          labels={{
            all: dict.proof.filterAll,
            filter: dict.proof.filterLabel,
            categories: categoryLabels,
            privateNote: dict.proof.privateNote,
          }}
        />
      </div>
    </section>
  );
}
