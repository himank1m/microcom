"use client";

import Image from "next/image";
import { CalendarCheck, Phone } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/utils";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const imageY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 90]), {
    stiffness: 90,
    damping: 24,
    mass: 0.35
  });
  const imageScale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.08]), {
    stiffness: 90,
    damping: 24,
    mass: 0.35
  });
  const textY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -42]), {
    stiffness: 80,
    damping: 24,
    mass: 0.4
  });

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-b border-border bg-background">
      <div className="hero-ambient" aria-hidden />
      <div className="container flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center gap-12 py-16 text-center lg:py-20">
        <motion.div
          className="mx-auto max-w-4xl"
          style={{ y: textY }}
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.11,
                delayChildren: 0.08
              }
            }
          }}
        >
          <motion.p
            className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            variants={{
              hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
              show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            Enterprise technology solutions in Jammu
          </motion.p>
          <motion.h1
            className="text-balance text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl"
            variants={{
              hidden: { opacity: 0, y: 24, scale: 0.985, filter: "blur(14px)" },
              show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            Technology infrastructure, calmly delivered.
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground"
            variants={{
              hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
              show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            Microware Communications builds reliable networking, surveillance, access control, server, Wi-Fi, and support systems for serious operating environments.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
            variants={{
              hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
              show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <Button href={`tel:${site.phone.replace(/\s/g, "")}`}>
              <Phone className="size-4" aria-hidden />
              Call Us
            </Button>
            <Button href="/contact" variant="secondary">
              <CalendarCheck className="size-4" aria-hidden />
              Schedule a Site Assessment
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 46, scale: 0.97, filter: "blur(18px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.15, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="group relative mx-auto aspect-[16/8] max-w-5xl overflow-hidden rounded-lg bg-muted"
            whileHover={{ scale: 1.008 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
              <Image
                src="/images/enterprise-technology-hero.png"
                alt="Abstract enterprise infrastructure composition representing surveillance, networking, servers, displays, and software systems"
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent" />
            <div className="hero-sheen" aria-hidden />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
