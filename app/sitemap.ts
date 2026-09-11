import type { MetadataRoute } from "next";
import { locales } from "@/app/[locale]/layout";
import { cases } from "@/lib/cases";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    routes.push({
      url: `${SITE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    });
    for (const c of cases) {
      routes.push({
        url: `${SITE_URL}/${locale}/work/${c.slug}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.7,
      });
    }
  }

  return routes;
}
