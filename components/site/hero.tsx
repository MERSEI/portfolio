import Link from "next/link";
import { ArrowDown, Send } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cases } from "@/lib/cases";
import { CONTACT } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/dictionaries";

const STACK = [
  "Python",
  "TypeScript",
  "Next.js",
  "FastAPI",
  "LLM agents",
  "Telegram",
  "PostgreSQL",
  "Redis",
  "Rust / Tauri",
  "Docker",
  "Railway",
  "Vercel",
];

export function Hero({ dict }: { dict: Dictionary }) {
  const live = cases.filter((c) => c.links.live).length;
  const stats = [
    { value: cases.length, label: dict.hero.stats.projects },
    { value: live, label: dict.hero.stats.live },
    { value: cases.filter((c) => c.isPrivateScope).length, label: dict.hero.stats.private },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[560px] rounded-full opacity-[0.16] blur-3xl"
        style={{ background: "var(--lime)" }}
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm text-muted-foreground">
          <span>{dict.hero.eyebrow}</span>
          <span className="inline-flex items-center gap-2 text-foreground">
            <span aria-hidden="true" className="live-dot size-2 rounded-full bg-lime" />
            {dict.hero.status}
          </span>
        </div>

        <h1 className="mt-8 max-w-4xl font-display text-[2rem] font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.75rem]">
          {dict.hero.headlineLead}{" "}
          <span className="relative">
            <span className="relative z-10">{dict.hero.headlineAccent}</span>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-[0.08em] z-0 h-[0.34em] bg-lime/70 dark:bg-lime/40"
            />
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {dict.hero.sub}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href={CONTACT.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            <Send className="size-4" />
            {dict.hero.ctaPrimary}
          </Link>
          <Link href="#work" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "gap-2")}>
            {dict.hero.ctaSecondary}
            <ArrowDown className="size-4" />
          </Link>
        </div>

        <dl className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-5 sm:p-6">
              <dd className="font-display text-4xl font-medium tracking-tight">{s.value}</dd>
              <dt className="mt-2 text-sm text-muted-foreground">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>

      <div aria-hidden="true" className="marquee overflow-hidden border-t border-border py-4">
        <div className="marquee-track flex w-max gap-10 font-mono text-sm uppercase tracking-wider text-muted-foreground">
          {[...STACK, ...STACK].map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              {item}
              <span className="text-warm-accent">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
