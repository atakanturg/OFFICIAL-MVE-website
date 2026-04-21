import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { PageTransition } from "../components/PageTransition";
import { ScrollIndicator } from "../components/ScrollIndicator";

export function Sfere() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollY } = useScroll();
  const t = Math.min(1, Math.max(0, (screenWidth - 320) / (1440 - 320)));
  const initialScale = 1.5 + (1.9 - 1.5) * t;
  const finalScale = 0.6 + (0.45 - 0.6) * t;
  const initialY = 18 + (35 - 18) * t;
  const finalY = 5 + (8 - 5) * t;

  const scale = useTransform(scrollY, [0, 300], [initialScale, finalScale]);
  const y = useTransform(scrollY, [0, 300], [`${initialY}vh`, `${finalY}vh`]);
  const subtitlesOpacity = useTransform(scrollY, [150, 300], [0, 1]);
  const headerBgOpacity = useTransform(scrollY, [200, 300], [0, 0.95]);

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen tracking-wide relative pt-4 md:pt-8 pointer-events-auto">

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-28 left-6 md:left-12 z-40"
        >
          <Link
            href="/#programs"
            className="inline-flex items-center gap-2 text-[#C8A55C] font-semibold text-xs tracking-[0.2em] uppercase hover:gap-3 transition-all link-underline"
          >
            <span>←</span> Home
          </Link>
        </motion.div>

        <ScrollIndicator delay={0.5} />

        <div className="w-full h-screen pointer-events-none" />

        {/* Fixed Sticky Header */}
        <div className="fixed top-0 w-full min-h-[25vh] z-30 pointer-events-none flex flex-col justify-start">
          <motion.div style={{ opacity: headerBgOpacity }} className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/[0.04]" />

          <motion.div style={{ scale, y }} className="relative z-10 flex flex-col items-center origin-top w-full">
            <h1 className="font-heading font-bold text-[clamp(3rem,15vw,9rem)] leading-none tracking-[0.1em] text-[#C8A55C] uppercase ml-[0.05em]">
              SFERE
            </h1>
            <motion.h2
              style={{ opacity: subtitlesOpacity }}
              className="text-2xl md:text-3xl font-heading font-semibold text-[#F5F5F0] tracking-widest mt-0 whitespace-nowrap uppercase"
            >
              Economic Symposium
            </motion.h2>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 pb-32">
          <div className="max-w-5xl mx-auto px-6 md:px-12">

            <div className="mb-12">
              <span className="text-[#C8A55C] text-xs font-semibold tracking-[0.2em] uppercase border-b border-[#C8A55C]/30 pb-1">
                SPRING 2027
              </span>
            </div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="text-lg text-[#A0A0A0] leading-relaxed max-w-3xl mb-16 border-l-2 border-[#C8A55C]/30 pl-6"
            >
              SFERE is an economic symposium hosted by MVE featuring highlighted keynote speakers, student poster board presentations, and a guest panel of industry professionals. Details for the upcoming event will be announced soon.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6 w-full"
            >
              {/* Guest Panel */}
              <motion.div variants={itemVariants} className="bg-[#111111] border border-white/[0.06] rounded-lg p-8 flex flex-col items-start gap-6 w-full">
                <div>
                  <h3 className="text-[#F5F5F0] font-heading font-semibold text-2xl uppercase tracking-wide">Guest Panel</h3>
                  <p className="text-sm text-[#A0A0A0] mt-2 max-w-2xl">Explore insights from global leaders and industry professional across previous symposium panels.</p>
                </div>
                <div className="flex flex-wrap gap-4 w-full mt-2">
                  {[
                    { year: "2026", href: "/sfere/keynotes/2026" },
                    { year: "2025", href: "/sfere/keynotes/2025" },
                    { year: "2024", href: "/sfere/keynotes/2024" },
                  ].map(({ year, href }) => (
                    <Link
                      key={year}
                      href={href}
                      className="px-5 py-2 border border-[#C8A55C]/30 text-[#C8A55C] rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#C8A55C]/10 transition-colors"
                    >
                      {year} Panelists
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Sub-sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4">
                <motion.div variants={itemVariants} className="bg-[#111111] border border-white/[0.06] rounded-lg p-8 flex flex-col min-h-[160px]">
                  <h3 className="text-[#F5F5F0] font-heading font-semibold text-xl uppercase tracking-wide">Poster Board Presentations</h3>
                  <p className="text-sm text-[#666666] font-medium tracking-wider uppercase mt-6">2027 theme coming soon</p>
                </motion.div>

                <motion.div variants={itemVariants} className="bg-[#111111] border border-white/[0.06] rounded-lg p-8 flex flex-col min-h-[160px]">
                  <h3 className="text-[#F5F5F0] font-heading font-semibold text-xl uppercase tracking-wide">Keynote Speakers</h3>
                  <Link
                    href="/sfere/recent-keynotes"
                    className="mt-6 text-[#C8A55C] font-semibold tracking-widest uppercase text-sm hover:text-[#D4B56A] transition-colors inline-flex items-center gap-2"
                  >
                    Recent presentations <span className="text-lg">→</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
