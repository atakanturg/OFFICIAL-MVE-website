import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { PageTransition } from "../components/PageTransition";
import { useState } from "react";

interface Competition {
  name: string;
  link: string;
  isLocked: boolean;
  details: {
    teamSize: string;
    output: string;
    focus: string;
    requirements: string;
    regulations: string;
    limitations: string;
    keyDetail: string;
  };
}

export function CompetitionApplications() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const competitions: Competition[] = [
    {
      name: "The Diamond Challenge",
      link: "#",
      isLocked: true,
      details: {
        teamSize: "2–4 high school students",
        output: "Pitch / Business Plan",
        focus: "Entrepreneurship & Innovation with a focus on economic/social impact",
        requirements: "A written concept narrative (3–5 pages), a 60-second introductory video, and one adult advisor (21+).",
        regulations: "Concepts must not have generated more than $100,000 in revenue. Tracks: Business Innovation or Social Innovation.",
        limitations: "Students can only participate on one team and submit one concept per year. You cannot resubmit a concept that previously reached the semi-finals.",
        keyDetail: "The first round is virtual, but advancing teams are invited to the 'Limitless World Summit' to pitch in person."
      }
    },
    {
      name: "National Economics Challenge (NEC)",
      link: "#",
      isLocked: true,
      details: {
        teamSize: "3–4 members from the same school or organization",
        output: "Exam / Quiz Bowl",
        focus: "Academic Economics Theory",
        requirements: "Registration via a teacher/coach.",
        regulations: "Divisions: David Ricardo (first-time) or Adam Smith (advanced). 4 rounds: Micro, Macro, International, and Quiz Bowl.",
        limitations: "All team members must be from the same school/club.",
        keyDetail: "State round is a rapid-fire online exam. Top national teams travel to NYC for finals."
      }
    },
    {
      name: "Wharton Global Youth Investment Competition",
      link: "https://forms.gle/ABm6C6QedDT42i7h6",
      isLocked: false,
      details: {
        teamSize: "4–7 students",
        output: "Strategy Report",
        focus: "Long-term Portfolio Strategy & Management",
        requirements: "Must use the Wharton Investment Simulator (WInS).",
        regulations: "$100,000 virtual cash. Requires a mid-project team review and a final comprehensive investment strategy report.",
        limitations: "Focus on strategy strength, not highest returns. Penny stock gambling is discouraged.",
        keyDetail: "Pitching your strategy to a potential client described in a case study."
      }
    },
    {
      name: "The Stock Market Game",
      link: "#",
      isLocked: true,
      details: {
        teamSize: "1–5 students",
        output: "Trading",
        focus: "Short-term Market Returns",
        requirements: "Entry fee (typically $20–$30 per team, often covered by schools).",
        regulations: "Manage a $100,000 virtual portfolio. Rankings strictly based on Total Equity.",
        limitations: "Max 20% equity in a single stock to encourage diversification.",
        keyDetail: "Operates in Fall, Spring, or Year-long sessions."
      }
    },
    {
      name: "High School Fed Challenge",
      link: "#",
      isLocked: true,
      details: {
        teamSize: "3–8 students",
        output: "Presentation / Podcast",
        focus: "Macroeconomic Policy & The Federal Reserve",
        requirements: "Podcast script (NYC) or 15-min presentation + Q&A (Other districts).",
        regulations: "Analyze current conditions and recommend monetary policy (interest rates, QE).",
        limitations: "One team per school. Strict geographic eligibility.",
        keyDetail: "Focus on the Federal Reserve's 'Dual Mandate' (price stability & maximum employment)."
      }
    },
    {
      name: "John Locke Institute Essay Competition",
      link: "#",
      isLocked: true,
      details: {
        teamSize: "Individual",
        output: "Essay",
        focus: "Economic Philosophy, Logic & Writing",
        requirements: "Essay of no more than 2,000 words.",
        regulations: "Choose a specific prompt from the 'Economics' category.",
        limitations: "Under 19 years old. Judged on argument quality, evidence, and prose.",
        keyDetail: "Massive differentiator for top-tier university applications. Bridges economics with philosophy."
      }
    }
  ];

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen tracking-wide pointer-events-auto">
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-32">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-28 left-6 md:left-12 z-40"
          >
            <Link
              href="/competitions"
              className="inline-flex items-center gap-2 text-[#58C391] font-semibold text-xs tracking-[0.2em] uppercase hover:gap-3 transition-all link-underline"
            >
              <span>←</span> Back to Competitions
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 14, stiffness: 80, delay: 0.2 }}
            className="flex justify-center w-full z-10 px-4 mt-16"
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-[#F5F5F0] text-center uppercase">
              Application <span className="italic text-[#58C391]">Forms</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-6xl mx-auto mt-16 px-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {competitions.map((comp, index) => (
                <motion.div
                  key={comp.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex flex-col rounded-xl border border-white/[0.05] bg-white/[0.02] overflow-hidden"
                >
                  <div className="flex flex-col p-8 h-full">
                    <div className="flex-1 flex flex-col">
                      <span className={`text-[10px] font-bold tracking-[0.3em] uppercase mb-3 ${comp.isLocked ? "text-[#666666]" : "text-[#58C391]"}`}>
                        {comp.isLocked ? "Locked" : "Active"}
                      </span>
                      
                      {comp.isLocked ? (
                        <h3 className="text-xl md:text-2xl font-bold tracking-[0.05em] uppercase text-[#666666] cursor-not-allowed transition-all">
                          {comp.name}
                        </h3>
                      ) : (
                        <a
                          href={comp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group w-fit"
                        >
                          <h3 className="text-xl md:text-2xl font-bold tracking-[0.05em] uppercase text-[#F5F5F0] group-hover:text-[#58C391] transition-all relative inline-block">
                            {comp.name}
                            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#58C391] transition-all duration-300 group-hover:w-full" />
                          </h3>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="mt-8 text-[10px] font-bold tracking-[0.2em] uppercase text-[#666666] hover:text-[#58C391] transition-colors cursor-pointer w-fit"
                    >
                      {expandedIndex === index ? "[ Hide Details ]" : "[ View Details ]"}
                    </button>
                  </div>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden bg-white/[0.01]"
                      >
                        <div className="px-8 pb-8 pt-4 grid grid-cols-1 gap-6 border-t border-white/[0.05]">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#58C391] mb-1">Team Size</h4>
                              <p className="text-xs text-[#A0A0A0]">{comp.details.teamSize}</p>
                            </div>
                            <div>
                              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#58C391] mb-1">Output</h4>
                              <p className="text-xs text-[#A0A0A0]">{comp.details.output}</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#58C391] mb-1">Requirements</h4>
                            <p className="text-xs text-[#A0A0A0]">{comp.details.requirements}</p>
                          </div>
                          <div>
                            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#58C391] mb-1">Main Focus</h4>
                            <p className="text-xs text-[#A0A0A0]">{comp.details.focus}</p>
                          </div>
                          <div>
                            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#58C391] mb-1">Key Detail</h4>
                            <p className="text-xs font-medium italic text-[#F5F5F0]/80">{comp.details.keyDetail}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}


