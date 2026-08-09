import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Proof } from "@/components/site/proof";
import { Capabilities } from "@/components/site/capabilities";
import { HowIWork } from "@/components/site/how-i-work";
import { About } from "@/components/site/about";
import { Playbooks } from "@/components/site/playbooks";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/app/[locale]/layout";

export default async function Home(props: PageProps<"/[locale]">) {
  const { locale } = await props.params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div className="flex flex-1 flex-col">
      <Header locale={locale as Locale} dict={dict} />
      <main className="flex-1">
        <Hero dict={dict} />
        <Proof locale={locale as Locale} dict={dict} />
        <Capabilities dict={dict} />
        <HowIWork dict={dict} />
        <About dict={dict} />
        <Playbooks dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
