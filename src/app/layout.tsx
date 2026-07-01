import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { absoluteUrl, baseUrl, defaultDescription, seoKeywords, structuredData } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Microware Communications | Enterprise IT Solutions in Jammu",
    template: "%s | Microware Communications"
  },
  description: defaultDescription,
  keywords: seoKeywords,
  applicationName: "Microware Communications",
  authors: [{ name: "Microware Communications" }],
  creator: "Microware Communications",
  publisher: "Microware Communications",
  category: "Enterprise Technology Solutions",
  verification: {
    google: "sH7yHX3d7YIEb3gcr_vBZPTQMZ1G8y_CMGndahhCNLA"
  },
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "Microware Communications | Enterprise IT Solutions in Jammu",
    description: defaultDescription,
    url: baseUrl,
    siteName: "Microware Communications",
    images: [
      {
        url: absoluteUrl("/images/enterprise-technology-hero.png"),
        width: 1200,
        height: 900,
        alt: "Enterprise technology infrastructure by Microware Communications"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Microware Communications | Enterprise IT Solutions in Jammu",
    description: defaultDescription,
    images: [absoluteUrl("/images/enterprise-technology-hero.png")]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}"
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c")
          }}
        />
      </body>
    </html>
  );
}
