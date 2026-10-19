import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cases, getCase } from "@/lib/cases";
import { getMeta } from "@/lib/case-meta";
import { getDictionary } from "@/lib/dictionaries";
import { cn } from "@/lib/utils";
import type { Locale } from "@/app/[locale]/layout";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: PageProps<"/[locale]/work/[slug]">) {
  const { locale, slug } = await props.params;
  const c = getCase(slug);
  if (!c) return {};
  const copy = c[locale as Locale];
  return {
    title: c.title,
    description: copy.tagline,
    alternates: {
      canonical: `/${locale}/work/${slug}`,
      languages: { ru: `/ru/work/${slug}`, en: `/en/work/${slug}`, "x-default": `/ru/work/${slug}` },
    },
    openGraph: {
      title: `${c.title} — Alex Fialko`,
      description: copy.tagline,
      url: `/${locale}/work/${slug}`,
      type: "article",
    },
  };
}

export default async function CasePage(props: PageProps<"/[locale]/work/[slug]">) {
  const { locale, slug } = await props.params;
  const c = getCase(slug);
  if (!c) notFound();

  const dict = await getDictionary(locale as Locale);
  const copy = c[locale as Locale];
  const meta = getMeta(c.slug);

  const index = cases.findIndex((x) => x.slug === slug);
  const prev = cases[(index - 1 + cases.length) % cases.length];
  const next = cases[(index + 1) % cases.length];

  const fields = [
    { label: dict.casePage.problem, body: copy.problem },
    { label: dict.casePage.system, body: copy.system },
    { label: dict.casePage.role, body: copy.role },
    { label: dict.casePage.outcome, body: copy.outcome },
  ];

  return (
    <div className="flex flex-1 flex-col">
      <Header locale={locale as Locale} dict={dict} />
      <main id="main" className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <Link
            href={`/${locale}#work`}
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            {dict.casePage.back}
          </Link>

          <p className="mt-10 font-mono text-xs uppercase tracking-wider text-warm-accent">
            {dict.proof.categories[meta.category]}
          </p>
          <div className="mt-3 flex items-start justify-between gap-4">
            <h1 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">{c.title}</h1>
            {c.isPrivateScope && (
              <span className="mt-3 flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground">
                <Lock className="size-4" />
                <span className="hidden sm:inline">{dict.proof.privateNote}</span>
              </span>
            )}
          </div>
          <p className="mt-4 text-lg leading-relaxed text-foreground/90">{copy.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {c.stack.map((tech) => (
              <Badge key={tech} variant="secondary" className="font-mono text-[11px] font-normal">
                {tech}
              </Badge>
            ))}
          </div>

          {(c.links.live || c.links.repo) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {c.links.live && (
                <Link
                  href={c.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: "sm" }))}
                >
                  {dict.proof.liveDemo}
                  <ArrowUpRight className="size-4" />
                </Link>
              )}
              {c.links.repo && (
                <Link
                  href={c.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ size: "sm", variant: "outline" })}
                >
                  {dict.proof.repo}
                  <ArrowUpRight className="size-4" />
                </Link>
              )}
            </div>
          )}

          {meta.metrics && (
            <dl
              aria-label={dict.casePage.metrics}
              className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3"
            >
              {meta.metrics.map((m) => (
                <div key={m.value + m.en} className="bg-card p-5">
                  <dd className="font-display text-2xl font-medium">{m.value}</dd>
                  <dt className="mt-1 text-xs text-muted-foreground">{m[locale as Locale]}</dt>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-14 space-y-10">
            {fields.map((field) => (
              <div key={field.label} className="border-t border-border pt-6">
                <h2 className="font-mono text-sm text-warm-accent">{field.label}</h2>
                <p className="mt-3 leading-relaxed text-foreground">{field.body}</p>
              </div>
            ))}
          </div>

          <nav className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            <Link
              href={`/${locale}/work/${prev.slug}`}
              className="group bg-background p-5 transition-colors hover:bg-card"
            >
              <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <ArrowLeft className="size-3.5" />
                {dict.casePage.prev}
              </span>
              <span className="mt-2 block font-display text-lg">{prev.title}</span>
            </Link>
            <Link
              href={`/${locale}/work/${next.slug}`}
              className="group bg-background p-5 text-right transition-colors hover:bg-card"
            >
              <span className="flex items-center justify-end gap-2 font-mono text-xs text-muted-foreground">
                {dict.casePage.next}
                <ArrowRight className="size-3.5" />
              </span>
              <span className="mt-2 block font-display text-lg">{next.title}</span>
            </Link>
          </nav>
        </article>
      </main>
      <Footer dict={dict} />
    </div>
  );
}
