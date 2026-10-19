"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Lock } from "lucide-react";
import { categories, type Category } from "@/lib/case-meta";
import { cn } from "@/lib/utils";

export type GridCase = {
  slug: string;
  title: string;
  tagline: string;
  stack: string[];
  isPrivateScope: boolean;
  hasLive: boolean;
  category: Category;
};

type Labels = {
  all: string;
  filter: string;
  categories: Record<Category, string>;
  privateNote: string;
};

export function ProofGrid({
  locale,
  cases,
  labels,
}: {
  locale: string;
  cases: GridCase[];
  labels: Labels;
}) {
  const [active, setActive] = useState<Category | "all">("all");
  const present = categories.filter((c) => cases.some((x) => x.category === c));
  const visible = active === "all" ? cases : cases.filter((c) => c.category === active);

  const chip = (selected: boolean) =>
    cn(
      "rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors",
      selected
        ? "border-transparent bg-primary text-primary-foreground"
        : "border-border text-muted-foreground hover:border-warm-accent hover:text-foreground"
    );

  return (
    <>
      <div role="group" aria-label={labels.filter} className="mt-4 flex flex-wrap gap-2">
        <button type="button" aria-pressed={active === "all"} onClick={() => setActive("all")} className={chip(active === "all")}>
          {labels.all}
        </button>
        {present.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={chip(active === c)}
          >
            {labels.categories[c]}
          </button>
        ))}
      </div>

      <ul className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((c) => (
          <li key={c.slug} className="bg-background">
            <Link
              href={`/${locale}/work/${c.slug}`}
              className="group flex h-full flex-col p-6 transition-colors hover:bg-card"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-medium tracking-tight">{c.title}</h3>
                {c.isPrivateScope ? (
                  <Lock className="mt-1 size-4 shrink-0 text-muted-foreground" aria-label={labels.privateNote} />
                ) : (
                  <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-warm-accent" />
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.tagline}</p>
              <p className="mt-auto pt-5 font-mono text-[11px] text-muted-foreground">
                {c.stack.join(" · ")}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
