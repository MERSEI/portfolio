import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Badge } from "@/components/ui/badge";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/app/[locale]/layout";

export default async function NotesPage(props: PageProps<"/[locale]/notes">) {
  const { locale } = await props.params;
  const dict = await getDictionary(locale as Locale);
  const isRu = locale === "ru";

  return (
    <div className="flex flex-1 flex-col">
      <Header locale={locale as Locale} dict={dict} />
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 sm:py-32">
          <div className="flex items-center gap-3">
            <p className="font-mono text-sm text-warm-accent">
              {isRu ? "Заметки" : "Notes"}
            </p>
            <Badge variant="secondary" className="font-mono text-[11px] font-normal">
              {dict.playbooks.badge}
            </Badge>
          </div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {isRu ? "Раздел в разработке" : "Section in progress"}
          </h1>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            {isRu
              ? "Здесь будут заметки об архитектуре и разработке. Пока раздел не запущен — загляните позже."
              : "Notes on architecture and building things will live here. Not live yet — check back later."}
          </p>
        </section>
      </main>
      <Footer dict={dict} />
    </div>
  );
}
