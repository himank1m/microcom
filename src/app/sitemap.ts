import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";
import { localServices } from "@/data/localServices";
import { absoluteUrl, publicRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const baseRoutes = publicRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: route.priority
  }));

  const serviceRoutes = localServices.map((service) => ({
    url: absoluteUrl(`/${service.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.82
  }));

  const caseStudyRoutes = caseStudies.map((caseStudy) => ({
    url: absoluteUrl(`/case-studies/${caseStudy.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.68
  }));

  return [...baseRoutes, ...serviceRoutes, ...caseStudyRoutes];
}
