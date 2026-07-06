import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var d=document.documentElement,t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))d.classList.add('dark');document.addEventListener('click',function(e){var b=e.target&&e.target.closest&&e.target.closest('[data-theme-toggle]');if(!b)return;var n=d.classList.contains('dark')?'light':'dark';d.classList.toggle('dark',n==='dark');localStorage.setItem('theme',n)})}catch(e){}"
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
        <script
          dangerouslySetInnerHTML={{
            __html:
              "setTimeout(function(){var el=document.getElementById('microware-view-count');if(!el)return;try{var v=localStorage.getItem('microware:views');if(v)el.textContent=String(parseInt(v,10)).padStart(6,'0')}catch(e){}var run=function(){if(run.done)return;run.done=1;fetch('/api/views?t='+Date.now(),{method:'POST',cache:'no-store',headers:{'Content-Type':'application/json'},body:JSON.stringify({path:location.pathname})}).then(function(r){return r.ok?r.json():null}).then(function(d){if(d&&typeof d.views==='number'){var x=String(d.views).padStart(6,'0');el.textContent=x;try{localStorage.setItem('microware:views',String(d.views))}catch(e){}}}).catch(function(){})};if('IntersectionObserver'in window){var io=new IntersectionObserver(function(a){if(a.some(function(x){return x.isIntersecting})){io.disconnect();run()}},{rootMargin:'120px'});io.observe(el)}else setTimeout(run,15000)},3500)"
          }}
        />
      </body>
    </html>
  );
}
