import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Unbounded } from "next/font/google";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { Reveal } from "@/components/site/reveal";
import { CONTACT, SITE_URL } from "@/lib/site";
import "../globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

const display = Unbounded({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],
});

export const locales = ["ru", "en"] as const;
export type Locale = (typeof locales)[number];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: LayoutProps<"/[locale]">
): Promise<Metadata> {
  const { locale } = await props.params;
  const isRu = locale === "ru";
  const title = isRu
    ? "Alex Fialko — AI-агенты, боты и full-stack продукты"
    : "Alex Fialko — AI agents, bots and full-stack products";
  const description = isRu
    ? "Full-Stack & AI Engineer из Праги. AI-агенты, автоматизация, Telegram-боты, продуктовые MVP под ключ: 19 проектов с разбором решений."
    : "Full-Stack & AI Engineer based in Prague. AI agents, automation, Telegram bots, turnkey product MVPs: 19 projects with the engineering decisions explained.";
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: "%s — Alex Fialko" },
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: { ru: "/ru", en: "/en", "x-default": "/ru" },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: "Alex Fialko",
      type: "website",
      locale: isRu ? "ru_RU" : "en_US",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function LocaleLayout(props: LayoutProps<"/[locale]">) {
  const { locale } = await props.params;
  if (!locales.includes(locale as Locale)) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alex Fialko",
    url: SITE_URL,
    jobTitle: "Full-Stack & AI Engineer",
    address: { "@type": "PostalAddress", addressLocality: "Prague", addressCountry: "CZ" },
    sameAs: [CONTACT.github, CONTACT.telegram],
  };

  return (
    <html
      lang={locale}
      className={`${plexSans.variable} ${plexMono.variable} ${display.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            {locale === "ru" ? "К содержимому" : "Skip to content"}
          </a>
          <Reveal />
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  );
}
