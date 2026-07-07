import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalServiceLanding } from "@/components/sections/LocalServiceLanding";
import { getLocalService, localServices } from "@/data/localServices";
import { absoluteUrl, baseUrl } from "@/lib/seo";
import { site } from "@/lib/utils";

type ServicePageProps = {
  params: Promise<{ serviceSlug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return localServices.map((service) => ({
    serviceSlug: service.slug
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = getLocalService(serviceSlug);

  if (!service) {
    return {};
  }

  const url = absoluteUrl(`/${service.slug}`);

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/${service.slug}`
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      siteName: site.name,
      images: [
        {
          url: absoluteUrl("/images/enterprise-technology-hero.png"),
          width: 1200,
          height: 900,
          alt: `${service.title} by ${site.name}`
        }
      ],
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [absoluteUrl("/images/enterprise-technology-hero.png")]
    }
  };
}

function createJsonLd(service: NonNullable<ReturnType<typeof getLocalService>>) {
  const serviceUrl = absoluteUrl(`/${service.slug}`);

  return [
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${baseUrl}/#localbusiness`,
      name: site.name,
      url: baseUrl,
      email: site.email,
      telephone: `+91${site.phone}`,
      image: absoluteUrl("/images/enterprise-technology-hero.png"),
      areaServed: ["India"],
      priceRange: "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: service.title,
      description: service.metaDescription,
      provider: {
        "@id": `${baseUrl}/#localbusiness`
      },
      areaServed: {
        "@type": "Country",
        name: "India"
      },
      serviceType: service.title,
      url: serviceUrl
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${serviceUrl}#faq`,
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${serviceUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Solutions",
          item: absoluteUrl("/solutions")
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.title,
          item: serviceUrl
        }
      ]
    }
  ];
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { serviceSlug } = await params;
  const service = getLocalService(serviceSlug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.related.map((slug) => getLocalService(slug)).filter(Boolean) as typeof localServices;

  return (
    <>
      <LocalServiceLanding relatedServices={relatedServices} service={service} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createJsonLd(service)).replace(/</g, "\\u003c")
        }}
      />
    </>
  );
}
