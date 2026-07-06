import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock3 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/blogs";
import { absoluteUrl, baseUrl } from "@/lib/seo";
import { site } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Practical Microware Communications guides on CCTV cameras, business PCs, workstations, networking, IT planning, and choosing the right technology partner.",
  alternates: {
    canonical: "/blogs"
  },
  openGraph: {
    title: "Blogs | Microware Communications",
    description:
      "Practical guides on CCTV cameras, business PCs, workstations, networking, IT planning, and choosing the right technology partner.",
    url: absoluteUrl("/blogs"),
    siteName: site.name,
    images: [
      {
        url: absoluteUrl("/images/enterprise-technology-hero.png"),
        width: 1200,
        height: 900,
        alt: "Microware Communications blogs"
      }
    ],
    locale: "en_IN",
    type: "website"
  }
};

const blogCollectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${absoluteUrl("/blogs")}#blog`,
  name: "Microware Communications Blogs",
  description:
    "Practical technology buying guides and IT planning articles from Microware Communications.",
  url: absoluteUrl("/blogs"),
  publisher: {
    "@id": `${baseUrl}/#organization`
  },
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: absoluteUrl(`/blogs/${post.slug}`),
    datePublished: post.publishedDate
  }))
};

export default function BlogsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="hero-ambient" aria-hidden />
        <div className="container py-16 lg:py-24">
          <Reveal>
            <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/" className="transition hover:text-primary">Home</Link>
              <span aria-hidden>/</span>
              <span className="text-foreground">Blogs</span>
            </nav>
            <SectionHeading
              eyebrow="Blogs"
              title="Clear technology guidance before you buy."
              description="Practical Microware Communications notes on CCTV, cameras, business PCs, workstations, networking, infrastructure, and choosing solutions that actually fit your needs."
            />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Reveal key={post.slug}>
              <Link href={`/blogs/${post.slug}`} className="group block h-full">
                <Card className="flex h-full flex-col">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    <BookOpen className="size-4" aria-hidden />
                    {post.category}
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-foreground">{post.title}</h2>
                  <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock3 className="size-4 text-primary" aria-hidden />
                    {post.readTime}
                  </span>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read guide <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogCollectionJsonLd).replace(/</g, "\\u003c")
        }}
      />
    </>
  );
}
