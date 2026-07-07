import { site } from "@/lib/utils";

export const baseUrl = "https://www.microwaremail.com";

export const publicRoutes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.75 },
  { path: "/solutions", priority: 0.9 },
  { path: "/industries", priority: 0.7 },
  { path: "/partners", priority: 0.65 },
  { path: "/contact", priority: 0.85 },
  { path: "/blogs", priority: 0.72 }
] as const;

export const seoKeywords = [
  "Microware Communications",
  "IT solutions",
  "enterprise IT solutions",
  "CCTV installation",
  "surveillance systems",
  "custom software",
  "custom website development",
  "business website design",
  "enterprise networking",
  "server solutions",
  "structured cabling",
  "Wi-Fi solutions",
  "biometric attendance",
  "access control",
  "cloud solutions",
  "IT AMC services",
  "government IT solutions",
  "defence technology solutions"
];

export const defaultDescription =
  "Microware Communications delivers enterprise IT solutions, CCTV, computers, custom software, custom websites, networking, surveillance, servers, structured cabling, Wi-Fi, cloud solutions, and AMC support.";

export function absoluteUrl(path = "/") {
  return new URL(path, baseUrl).toString();
}

export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: site.name,
    alternateName: "Microware Communications",
    url: baseUrl,
    slogan: site.tagline,
    email: site.email,
    telephone: `+91${site.phone}`,
    areaServed: ["India"],
    foundingDate: "1999"
  },
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${baseUrl}/#localbusiness`,
    name: site.name,
    url: baseUrl,
    slogan: site.tagline,
    image: absoluteUrl("/images/enterprise-technology-hero.png"),
    email: site.email,
    telephone: `+91${site.phone}`,
    priceRange: "$$",
    areaServed: ["India"],
    knowsAbout: [
      "Enterprise IT solutions",
      "Networking",
      "CCTV",
      "Surveillance systems",
      "Custom software",
      "Custom website development",
      "Biometric attendance",
      "Access control",
      "Servers",
      "Structured cabling",
      "Wi-Fi solutions",
      "Cloud solutions",
      "AMC support"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Enterprise technology solutions",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Enterprise IT Solutions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Networking and Structured Cabling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "CCTV and Surveillance Systems" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Website Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Biometric Attendance and Access Control" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Servers and Infrastructure" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wi-Fi and Cloud Solutions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AMC and Managed IT Support" } }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: site.name,
    alternateName: "Microware Communications",
    url: baseUrl,
    publisher: {
      "@id": `${baseUrl}/#organization`
    },
    inLanguage: "en-IN"
  }
];
