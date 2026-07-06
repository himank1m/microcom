import { site } from "@/lib/utils";

export const baseUrl = "https://www.microwaremail.com";

export const publicRoutes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.75 },
  { path: "/solutions", priority: 0.9 },
  { path: "/industries", priority: 0.7 },
  { path: "/partners", priority: 0.65 },
  { path: "/contact", priority: 0.85 },
  { path: "/case-studies", priority: 0.72 }
] as const;

export const seoKeywords = [
  "Microware Communications",
  "Microware Communications Jammu",
  "IT solutions Jammu",
  "enterprise IT solutions Jammu",
  "CCTV installation Jammu",
  "surveillance systems Jammu",
  "custom software Jammu",
  "custom website development Jammu",
  "business website design Jammu",
  "enterprise networking Jammu",
  "server solutions Jammu",
  "structured cabling Jammu",
  "Wi-Fi solutions Jammu",
  "biometric attendance Jammu",
  "access control Jammu",
  "cloud solutions Jammu",
  "IT AMC services Jammu",
  "government IT solutions Jammu",
  "defence technology solutions Jammu"
];

export const defaultDescription =
  "Microware Communications delivers enterprise IT solutions, CCTV, computers, custom software, custom websites, networking, surveillance, servers, structured cabling, Wi-Fi, cloud solutions, and AMC support in Jammu.";

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
    areaServed: ["Jammu", "Jammu & Kashmir", "Northern India"],
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
    areaServed: ["Jammu", "Jammu & Kashmir", "Northern India"],
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
