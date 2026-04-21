import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageTransition } from "../components/PageTransition";

export function InvestmentChallenge() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 max-w-5xl mx-auto flex flex-col items-center text-center tracking-wide pointer-events-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full mb-10 text-left"
        >
          <Link
            href="/#programs"
            className="inline-flex items-center gap-2 text-[#C8A55C] font-semibold text-xs tracking-[0.2em] uppercase hover:gap-3 transition-all link-underline"
          >
            <span>←</span> Home
          </Link>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8"
        >
          <span className="text-[#C8A55C] text-xs font-semibold tracking-[0.2em] uppercase border-b border-[#C8A55C]/30 pb-1">
            New This Year
          </span>
        </motion.div>

        {/* Hero */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-heading font-bold text-[#F5F5F0] tracking-tight mb-8 uppercase"
        >
          Investment <span className="italic text-[#C8A55C]">Challenge</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-[#A0A0A0] leading-relaxed max-w-2xl mb-12"
        >
          The MVE Fund is a new MVE program launching this year. More details will be announced soon.
        </motion.p>
      </div>
    </PageTransition>
  );
}
