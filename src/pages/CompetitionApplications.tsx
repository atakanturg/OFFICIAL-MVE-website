import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageTransition } from "../components/PageTransition";

export function CompetitionApplications() {
  const competitions = [
    {
      name: "Wharton Investment Competition",
      link: "https://forms.gle/ABm6C6QedDT42i7h6",
      isLocked: false,
    },
    {
      name: "National Economics Challenge",
      link: "#",
      isLocked: true,
    },
    {
      name: "The Stock Market Game",
      link: "#",
      isLocked: true,
    },
    {
      name: "High School Fed Challenge Competition",
      link: "#",
      isLocked: true,
    },
    {
      name: "John Locke Institute Global Essay Competition",
      link: "#",
      isLocked: true,
    },
  ];

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
            className="w-full max-w-2xl mx-auto mt-16 px-4"
          >
            <div className="flex flex-col gap-6">
              {competitions.map((comp, index) => (
                <motion.div
                  key={comp.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 rounded-xl border border-white/[0.05] bg-white/[0.02]"
                >
                  <h3 className="text-sm md:text-base font-bold tracking-[0.1em] uppercase text-[#F5F5F0] text-center md:text-left">
                    {comp.name}
                  </h3>
                  
                  {comp.isLocked ? (
                    <div className="px-6 py-3 rounded-xl border border-white/[0.05] bg-white/[0.02] text-[#666666] font-bold text-xs tracking-[0.2em] uppercase cursor-not-allowed text-center min-w-[200px] whitespace-nowrap">
                      Currently Locked
                    </div>
                  ) : (
                    <a
                      href={comp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl border border-[#58C391]/30 hover:border-[#58C391] hover:bg-[#58C391]/10 text-white font-bold text-xs tracking-[0.2em] uppercase cursor-pointer transition-all text-center min-w-[200px]"
                    >
                      Application
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
