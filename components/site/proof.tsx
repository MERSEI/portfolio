import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cases } from "@/lib/cases";
import type { Locale } from "@/app/[locale]/layout";
import type { Dictionary } from "@/lib/dictionaries";

export function Proof({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="work" className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="font-mono text-sm text-warm-accent">{dict.proof.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {dict.proof.title}
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">{dict.proof.sub}</p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {cases.map((c) => {
            const copy = c[locale];
            return (
              <Link
                key={c.slug}
                href={`/${locale}/work/${c.slug}`}
                className="group flex flex-col rounded-lg border border-border/70 bg-card p-6 transition-colors hover:border-warm-accent/50"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-mono text-lg font-medium text-foreground">
                    {c.title}
                  </h3>
                  {c.isPrivateScope ? (
                    <Lock className="size-4 shrink-0 text-muted-foreground" aria-label={dict.proof.privateNote} />
                  ) : (
                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-warm-accent" />
                  )}
                </div>
                <p className="mt-1 text-sm text-warm-accent-2">{copy.tagline}</p>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {copy.system}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
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
      </div>
    </section>
  );
}
