import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
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
  return {
    metadataBase: new URL("https://portfolio.vercel.app"),
    title: "Alex Fialko — Full-Stack & AI Engineer",
    description: isRu
      ? "Full-Stack & AI Engineer из Праги. AI-агенты, автоматизация, Telegram-боты, продуктовые MVP под ключ."
      : "Full-Stack & AI Engineer based in Prague. AI agents, automation, Telegram bots, turnkey product MVPs.",
    alternates: {
      languages: { ru: "/ru", en: "/en" },
    },
    openGraph: {
      title: "Alex Fialko — Full-Stack & AI Engineer",
      description: isRu
        ? "AI-агенты, автоматизация, Telegram-боты, продуктовые MVP под ключ."
        : "AI agents, automation, Telegram bots, turnkey product MVPs.",
      type: "website",
      locale: isRu ? "ru_RU" : "en_US",
    },
  };
}

export default async function LocaleLayout(props: LayoutProps<"/[locale]">) {
  const { locale } = await props.params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <html
      lang={locale}
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  );
}
