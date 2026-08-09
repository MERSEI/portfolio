import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/dictionaries";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 sm:py-32">
        <p className="font-mono text-sm text-warm-accent">{dict.hero.eyebrow}</p>

        <p className="mt-8 font-mono text-sm text-muted-foreground">
          {dict.hero.prompt}
        </p>
        <h1 className="mt-2 text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
          {dict.hero.headline}
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {dict.hero.sub}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-warm-accent text-[#140F0A] hover:bg-warm-accent/90"
            )}
          >
            {dict.hero.ctaPrimary}
          </Link>
          <Link href="#work" className={buttonVariants({ size: "lg", variant: "outline" })}>
            {dict.hero.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
