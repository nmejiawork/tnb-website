import type { MetadataRoute } from "next";
import { getAllTerms } from "@/lib/glossary";

/**
 * Auto-generated sitemap.xml at build time (D5.4 in BUILD-SPEC.md).
 *
 * Includes the homepage, the glossary index, and every glossary term page.
 * Cron-driven rebuilds keep this current — every new term shows up in the
 * sitemap on the next deploy.
 */

const SITE_URL = "https://thenewbuilder.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const terms = getAllTerms();
  const now = new Date();

  const homepage: MetadataRoute.Sitemap[number] = {
    url: SITE_URL,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
  };

  const glossaryIndex: MetadataRoute.Sitemap[number] = {
    url: `${SITE_URL}/glossary`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  };

  const termPages: MetadataRoute.Sitemap = terms.map((t) => ({
    url: `${SITE_URL}/glossary/${t.slug}`,
    lastModified: new Date(t.dateAdded + "T00:00:00Z"),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [homepage, glossaryIndex, ...termPages];
}
