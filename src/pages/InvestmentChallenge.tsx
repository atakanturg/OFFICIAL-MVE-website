import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageTransition } from "../components/PageTransition";
import { ScrollIndicator } from "../components/ScrollIndicator";
import { ProgramDescription } from "../components/ProgramDescription";

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
          <span className="text-[#C8A55C] text-xs font-bold tracking-[0.2em] uppercase border-b border-[#C8A55C]/30 pb-1">
            NEW NEXT YEAR, STARTING FALL OF 2026
          </span>
        </motion.div>

        {/* Hero */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-heading font-bold text-[#F5F5F0] tracking-tight mb-8 uppercase"
        >
          Investment <span className="italic text-[#C8A55C] font-heading font-bold">Fund</span>
        </motion.h1>

        <ProgramDescription
          description={
            <>
              The{" "}
              <span className="italic text-[#C8A55C] font-heading font-bold text-base">
                MVE Fund
              </span>{" "}
              is a student-managed vehicle where participants perform research
              and pitch investment theses to our{" "}
              <span className="italic text-[#C8A55C] font-heading font-bold text-base">
                Internal Board
              </span>
              . The{" "}
              <span className="italic text-[#C8A55C] font-heading font-bold text-base">
                MVE Fund's
              </span>{" "}
              main goal is to create positive cash flow to sponsor our other
              events through good trading.
            </>
          }
          initialOpen={true}
          className="mb-16"
        />

        {/* Submissions Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-sm mx-auto"
        >
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#C8A55C] mb-8 flex items-center justify-center gap-3">
            Applications
          </h2>
          <div className="flex flex-col gap-4">
            <div className="px-6 py-4 rounded-xl border border-white/[0.05] bg-white/[0.02] text-[#666666] font-semibold text-xs tracking-[0.2em] uppercase cursor-not-allowed transition-all">
              Apply Here
            </div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666666] border-l-2 border-[#C8A55C]/30 pl-3 text-left">
              Links will activate once applications are open.
            </p>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
}
