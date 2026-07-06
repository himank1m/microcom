import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts, getBlogPost } from "@/data/blogs";
import { getLocalService, localServices } from "@/data/localServices";
import { absoluteUrl, baseUrl } from "@/lib/seo";
import { site } from "@/lib/utils";

type BlogPageProps = {
  params: Promise<{ blogSlug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    blogSlug: post.slug
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { blogSlug } = await params;
  const post = getBlogPost(blogSlug);

  if (!post) {
    return {};
  }

  const url = absoluteUrl(`/blogs/${post.slug}`);

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blogs/${post.slug}`
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      siteName: site.name,
      images: [
        {
          url: absoluteUrl("/images/enterprise-technology-hero.png"),
          width: 1200,
          height: 900,
          alt: post.title
        }
      ],
      locale: "en_IN",
      type: "article",
      publishedTime: post.publishedDate
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [absoluteUrl("/images/enterprise-technology-hero.png")]
    }
  };
}

function createJsonLd(post: NonNullable<ReturnType<typeof getBlogPost>>) {
  const postUrl = absoluteUrl(`/blogs/${post.slug}`);

  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${postUrl}#article`,
      headline: post.title,
      description: post.metaDescription,
      url: postUrl,
      image: absoluteUrl("/images/enterprise-technology-hero.png"),
      datePublished: post.publishedDate,
      dateModified: post.publishedDate,
      author: {
        "@id": `${baseUrl}/#organization`
      },
      publisher: {
        "@id": `${baseUrl}/#organization`
      },
      articleSection: post.category,
      inLanguage: "en-IN"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${postUrl}#breadcrumb`,
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
          name: "Blogs",
          item: absoluteUrl("/blogs")
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: postUrl
        }
      ]
    }
  ];
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { blogSlug } = await params;
  const post = getBlogPost(blogSlug);

  if (!post) {
    notFound();
  }

  const relatedServices = post.relatedServices
    .map((slug) => getLocalService(slug))
    .filter(Boolean) as typeof localServices;

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="hero-ambient" aria-hidden />
        <div className="container py-16 lg:py-24">
          <Reveal>
            <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/" className="transition hover:text-primary">Home</Link>
              <span aria-hidden>/</span>
              <Link href="/blogs" className="transition hover:text-primary">Blogs</Link>
              <span aria-hidden>/</span>
              <span className="text-foreground">{post.category}</span>
            </nav>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{post.category}</p>
            <h1 className="max-w-5xl text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground">{post.excerpt}</p>
            <span className="mt-8 inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
              <Clock3 className="size-4 text-primary" aria-hidden />
              {post.readTime}
            </span>
          </Reveal>
        </div>
      </section>

      <article className="section">
        <div className="container grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Quick Takeaways</p>
              <div className="mt-6 grid gap-4">
                {post.takeaways.map((takeaway) => (
                  <div key={takeaway} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
          <div className="space-y-12">
            {post.sections.map((section) => (
              <Reveal key={section.heading}>
                <section>
                  <h2 className="text-3xl font-semibold text-foreground">{section.heading}</h2>
                  <div className="mt-5 space-y-5 text-base leading-8 text-muted-foreground">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </article>

      <section className="section bg-muted/45 dark:bg-background">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Related Services</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">Talk to Microware about the practical next step</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {relatedServices.map((service) => (
              <Reveal key={service.slug}>
                <Link href={`/${service.slug}`} className="group block h-full">
                  <Card className="h-full">
                    <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.hero}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      View service <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 rounded-lg border border-border bg-card p-8 text-center">
              <h2 className="text-3xl font-semibold text-foreground">Need help choosing the right setup?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                Share your site, users, budget, and expected usage. Microware Communications can help you choose a practical solution before you spend.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/contact">Schedule a Meeting</Button>
                <Button href="/solutions" variant="secondary">Explore Solutions</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createJsonLd(post)).replace(/</g, "\\u003c")
        }}
      />
    </>
  );
}
