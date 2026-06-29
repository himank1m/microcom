import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, "")}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://microware-communication.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Microware Communication | Enterprise IT Solutions in Jammu",
    template: "%s | Microware Communication"
  },
  description:
    "Microware Communication delivers IT solutions, CCTV installation, enterprise networking, server solutions, custom software, and IT AMC services in Jammu.",
  openGraph: {
    title: "Microware Communication | Enterprise IT Solutions in Jammu",
    description:
      "Enterprise technology solutions built around reliability for organizations across Northern India.",
    url: siteUrl,
    siteName: "Microware Communication",
    images: [{ url: "/images/enterprise-technology-hero.png", width: 1200, height: 900 }],
    locale: "en_IN",
    type: "website"
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
      </body>
    </html>
  );
}
