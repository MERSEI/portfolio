import type { MetadataRoute } from "next";
import { cases } from "@/lib/cases";
import { SITE_URL } from "@/lib/site";

const locales = ["ru", "en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", ...cases.map((c) => `/work/${c.slug}`)];
  return pages.flatMap((path) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE_URL}/${l}${path}`])
        ),
      },
    }))
  );
}
