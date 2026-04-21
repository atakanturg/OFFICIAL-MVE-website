import { motion } from "framer-motion";
import { Link } from "wouter";
import { config } from "../config";
import { FinalistCard } from "../components/FinalistCard";
import { PageTransition } from "../components/PageTransition";
import { ScrollIndicator } from "../components/ScrollIndicator";

export function InvestmentSummitDetails() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 max-w-5xl mx-auto flex flex-col tracking-wide pointer-events-auto">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <Link href="/investment-summit">
            <a className="inline-flex items-center gap-2 text-[#C8A55C] font-semibold text-xs tracking-[0.2em] uppercase hover:gap-3 transition-all link-underline">
              <span>←</span> Investment Summit
            </a>
          </Link>
        </motion.div>

        <ScrollIndicator delay={0.5} />

        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#F5F5F0] tracking-tight leading-none uppercase">
            Event <span className="italic text-[#C8A55C]">Details</span>
          </h1>
        </motion.div>

        {/* How It Works */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <h2 className="text-xs font-bold tracking-[0.25em] uppercase text-[#C8A55C] mb-8 flex items-center gap-2">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "The Opens", body: "Students form teams and submit answers to specialized questions to qualify for the next round." },
              { num: "02", title: "Qualifiers", body: "Top teams build financial models supporting their investment thesis." },
              { num: "03", title: "Pitch Day", body: "Finalists pitch live to judges and compete for the grand prize." },
            ].map(({ num, title, body }) => (
              <motion.div
                key={num}
                variants={itemVariants}
                className="flex flex-col gap-2"
              >
                <div className="text-[#C8A55C] font-mono text-xs tracking-[0.2em] mb-1">{num}</div>
                <h3 className="text-[#F5F5F0] font-heading font-semibold text-lg uppercase">{title}</h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Finalist Teams */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <h2 className="text-xs font-bold tracking-[0.25em] uppercase text-[#C8A55C] mb-8 flex items-center gap-2">
            Finalist Teams
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FinalistCard teamName={config.finalistTeams.team1} />
            <FinalistCard teamName={config.finalistTeams.team2} />
            <FinalistCard teamName={config.finalistTeams.team3} />
            <FinalistCard teamName={config.finalistTeams.team4} />
          </div>
        </motion.section>

        {/* Awards */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-xs font-bold tracking-[0.25em] uppercase text-[#C8A55C] mb-8 flex items-center gap-2">
            Awards
          </h2>

          <div className="w-full max-w-2xl">
            {[
              { label: "1st Place", value: config.prizes.first, highlight: true },
              { label: "2nd Place", value: config.prizes.second, highlight: true },
              { label: "3rd Place", value: config.prizes.third, highlight: true },
              { label: "Best Financial Model", value: null, highlight: false },
              { label: "Best Q&A Performance", value: null, highlight: false },
            ].map(({ label, value, highlight }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="flex justify-between items-center py-3"
              >
                <span className={`font-semibold text-sm tracking-widest uppercase ${highlight ? "text-[#F5F5F0]" : "text-[#666666]"}`}>
                  {label}
                </span>
                {value && <span className="text-[#C8A55C] font-semibold text-sm tracking-widest">{value}</span>}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
}
