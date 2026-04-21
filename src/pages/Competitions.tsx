import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageTransition } from "../components/PageTransition";
import { ScrollIndicator } from "../components/ScrollIndicator";

export function Competitions() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen tracking-wide pointer-events-auto">
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-12">

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

          <motion.div className="absolute top-24 z-20">
            <span className="text-[#C8A55C] text-xs font-semibold tracking-[0.2em] uppercase border-b border-[#C8A55C]/30 pb-1">
              Coming Soon
            </span>
          </motion.div>

          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 14, stiffness: 80, delay: 0.3 }}
            className="flex justify-center w-full z-10 px-4 mt-16"
          >
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#F5F5F0] text-center uppercase">
              Economic{" "}
              <span className="italic text-[#C8A55C]">Competitions</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center mt-12 px-6 text-center z-10 w-full"
          >
            <p className="text-xl md:text-2xl text-[#A0A0A0] leading-relaxed max-w-2xl border-l-2 border-[#C8A55C]/30 pl-6 mx-auto">
              Registration for the Economics teams of Ransom Everglades will begin to open <strong className="text-[#C8A55C] font-bold">RIGHT HERE</strong> starting in August 2026.
            </p>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
