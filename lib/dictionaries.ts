import "server-only";
import type { Locale } from "@/app/[locale]/layout";

const dictionaries = {
  ru: () => import("./dictionaries/ru").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
