import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageTransition } from "../components/PageTransition";
import { ProgramDescription } from "../components/ProgramDescription";

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
              className="inline-flex items-center gap-2 text-[#58C391] font-semibold text-xs tracking-[0.2em] uppercase hover:gap-3 transition-all link-underline"
            >
              <span>←</span> Home
            </Link>
          </motion.div>


          {/* Removed Coming Soon badge */}

          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 14, stiffness: 80, delay: 0.3 }}
            className="flex justify-center w-full z-10 px-4 mt-16"
          >
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#F5F5F0] text-center uppercase">
              Economic{" "}
              <span className="italic text-[#58C391]">Challenges</span>
            </h1>
          </motion.div>

          <ProgramDescription
            description={
              <>
                MVE organizes teams for regional and national challenges and
                university-led invitationals. Starting next semester, students
                in the <span className="italic text-[#58C391] font-heading font-bold">COMPETITIONS BRANCH</span> will undergo
                sessions to master economic principles to foster good practice
                and ensure success. Members in this branch will gain be favored
                when it comes to economic competition related team selection.
              </>
            }
            initialOpen={true}
            className="my-12"
          />

          {/* Submissions Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full max-w-sm mx-auto"
          >
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#58C391] mb-8 flex items-center justify-center gap-3 text-center">
              Applications
            </h2>
            <div className="flex flex-col gap-4">
              <Link href="/competitions/forms">
                <div className="px-6 py-4 rounded-xl border border-[#58C391]/30 hover:border-[#58C391] hover:bg-[#58C391]/10 text-white font-bold text-xs tracking-[0.2em] uppercase cursor-pointer transition-all text-center">
                  Apply Here
                </div>
              </Link>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666666] border-l-2 border-[#58C391]/30 pl-3 text-left">
                Click above to view available application forms.
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
