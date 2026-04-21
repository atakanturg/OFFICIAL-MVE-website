import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { PageTransition } from "../components/PageTransition";
import { ScrollIndicator } from "../components/ScrollIndicator";
import { ProgramDescription } from "../components/ProgramDescription";

export function Reason() {
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
  const initialScale = 1.4 + (2.0 - 1.4) * t;
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
            <h1 className="font-heading font-bold text-[clamp(2.5rem,13vw,6.5rem)] leading-none tracking-[0.1em] text-[#C8A55C] uppercase ml-[0.05em]">
              REASON
            </h1>
            <motion.h2
              style={{ opacity: subtitlesOpacity }}
              className="text-2xl md:text-3xl font-heading font-semibold text-[#F5F5F0] tracking-widest mt-0 whitespace-nowrap uppercase"
            >
              Case Study Workshop
            </motion.h2>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 pb-32">
          <div className="max-w-5xl mx-auto px-6 md:px-12">

            <div className="mb-12">
              <span className="text-[#C8A55C] text-xs font-semibold tracking-[0.2em] uppercase border-b border-[#C8A55C]/30 pb-1">
                MAY 2026
              </span>
            </div>

            <ProgramDescription
              description={
                <>
                  <span className="italic text-[#C8A55C] font-heading font-bold text-base">
                    REASON
                  </span>{" "}
                  leverages the{" "}
                  <span className="italic text-[#C8A55C] font-heading font-bold text-base">
                    Ransom Everglades Alumni and Parent Network
                  </span>{" "}
                  and esteemed guests. In various breakout rooms, students will
                  participate in case study workshops led by industry
                  professionals, listen to presentations, or have detailed Q&A
                  sessions, or a combination of all three.
                </>
              }
              className="mb-16 pb-8 border-b border-white/[0.05]"
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                { title: "Alumni & Parent Network", desc: "Details coming soon" },
                { title: "Breakout Rooms", desc: "Details coming soon" },
                { title: "Case Studies", desc: "Details coming soon" },
              ].map(({ title, desc }) => (
                <motion.div key={title} variants={itemVariants} className="flex flex-col gap-2">
                  <h3 className="text-[#F5F5F0] font-heading font-semibold text-lg uppercase tracking-wide mb-1">{title}</h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 flex flex-col items-center text-center max-w-2xl mx-auto"
            >
              <p className="text-lg text-[#A0A0A0] mb-6">
                Are you an alumni or parent interested in serving as an industry professional in our breakout sessions?
              </p>
              <Link
                href="/contact#contact"
                className="px-8 py-3 bg-[#C8A55C] text-[#0A0A0A] font-semibold text-sm tracking-wide rounded-full hover:bg-[#D4B56A] transition-colors"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
