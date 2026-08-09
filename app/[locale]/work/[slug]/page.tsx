import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Lock } from "lucide-react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cases, getCase } from "@/lib/cases";
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
    title: `${c.title} — Alex Fialko`,
    description: copy.tagline,
  };
}

export default async function CasePage(props: PageProps<"/[locale]/work/[slug]">) {
  const { locale, slug } = await props.params;
  const c = getCase(slug);
  if (!c) notFound();

  const dict = await getDictionary(locale as Locale);
  const copy = c[locale as Locale];

  const fields: { label: string; body: string }[] =
    locale === "ru"
      ? [
          { label: "Проблема", body: copy.problem },
          { label: "Система", body: copy.system },
          { label: "Роль", body: copy.role },
          { label: "Результат", body: copy.outcome },
        ]
      : [
          { label: "Problem", body: copy.problem },
          { label: "System", body: copy.system },
          { label: "Role", body: copy.role },
          { label: "Outcome", body: copy.outcome },
        ];

  return (
    <div className="flex flex-1 flex-col">
      <Header locale={locale as Locale} dict={dict} />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <Link
            href={`/${locale}#work`}
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            {dict.proof.title}
          </Link>

          <div className="mt-8 flex items-start justify-between gap-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{c.title}</h1>
            {c.isPrivateScope && (
              <span className="mt-2 flex items-center gap-1.5 shrink-0 text-sm text-muted-foreground">
                <Lock className="size-4" />
                {dict.proof.privateNote}
              </span>
            )}
          </div>
          <p className="mt-2 text-lg text-warm-accent-2">{copy.tagline}</p>

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

          <div className="mt-14 space-y-10">
            {fields.map((field) => (
              <div key={field.label}>
                <h2 className="font-mono text-sm text-warm-accent">{field.label}</h2>
                <p className="mt-2 leading-relaxed text-foreground">{field.body}</p>
              </div>
            ))}
          </div>
        </article>
      </main>
      <Footer dict={dict} />
    </div>
  );
}
