import { motion } from "framer-motion";
import { Link } from "wouter";
import { config } from "../config";
import { TimelineRow } from "../components/TimelineRow";
import { SubmissionButton } from "../components/SubmissionButton";
import { PageTransition } from "../components/PageTransition";
import { ScrollIndicator } from "../components/ScrollIndicator";
import { ProgramDescription } from "../components/ProgramDescription";

export function InvestmentSummit() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden flex flex-col pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto tracking-wide pointer-events-auto">

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <Link
            href="/#programs"
            className="inline-flex items-center gap-2 text-[#58C391] font-semibold text-xs tracking-[0.2em] uppercase hover:gap-3 transition-all link-underline"
          >
            <span>←</span> Home
          </Link>
        </motion.div>

        <ScrollIndicator delay={0.5} />

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-[#58C391] text-xs font-semibold tracking-[0.2em] uppercase border-b border-[#58C391]/30 pb-1">
            WINTER 2027
          </span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex flex-col mb-16"
        >
          <h1 className="font-heading font-bold text-[clamp(2rem,8vw,5rem)] leading-[0.95] tracking-[-0.02em] text-[#F5F5F0] uppercase mb-6">
            Investment{" "}
            <span className="italic text-[#58C391]">Summit</span>
          </h1>
          <ProgramDescription
            description={
              <>
                Acting as our capstone event for the first semester, the{" "}
                <span className="italic text-[#58C391] font-heading font-bold text-base">
                  Investment Summit
                </span>{" "}
                is a multi-round event.
                <br />
                <br />
                <span className="italic text-[#58C391] font-heading font-bold text-base">
                  Open Round
                </span>
                : Potential teams will submit applications in order to prove
                their general knowledge and diligence throughout the rest of the
                process. We eliminate until there are around 6-8 teams, each
                ranging from 1-4 people.
                <br />
                <br />
                <span className="italic text-[#58C391] font-heading font-bold text-base">
                  Qualifications Round
                </span>
                : Teams will be tasked with researching their respective case
                studies and preparing a pitch in order to sway the view of the
                attendees into a buy or sell decision.
                <br />
                <br />
                <span className="italic text-[#58C391] font-heading font-bold text-base">
                  Finals
                </span>
                : Finalist teams will present in a live event in front of
                students and industry professionals. Judging is based on student
                votes and guest judges.
              </>
            }
            className="mb-8"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row md:items-center gap-6"
          >
            <p className="text-[#A0A0A0] text-sm font-medium tracking-wide uppercase">
              Investment Branch Captains: Atakan Turgut & Patrick McDevitt
            </p>
            <Link
              href="/investment-summit/details"
              className="inline-flex items-center gap-3 text-[#58C391] font-semibold text-xs tracking-[0.2em] uppercase hover:gap-5 transition-all"
            >
              Event Details <span className="text-base">→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-32"
        >
          {/* Timeline */}
          <section>
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#58C391] mb-10 flex items-center gap-3">
              Timeline
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col"
            >
              <TimelineRow milestone="Opens / Applications Due" date={config.timeline.opensDeadline} />
              <TimelineRow milestone="Qualifiers / Deliverables Due" date={config.timeline.qualifiersDeadline} />
              <TimelineRow milestone="Finalists Announced" date={config.timeline.finalistsAnnounced} />
              <TimelineRow milestone="Pitch Day" date={config.timeline.pitchDay} isLast />
            </motion.div>
          </section>

          {/* Submissions */}
          <section>
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#58C391] mb-10 flex items-center gap-3">
              Submissions
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-2"
            >
              <SubmissionButton label="Opens Round Submissions" url={config.submissionUrls.opens} variant="solid" isNext={!!config.submissionUrls.opens && !config.submissionUrls.qualifiers} />
              <SubmissionButton label="Qualifiers Round Presentations" url={config.submissionUrls.qualifiers} variant="outline" isNext={!!config.submissionUrls.qualifiers && !config.submissionUrls.finalists} />
              <SubmissionButton label="Finalist Presentations" url={config.submissionUrls.finalists} variant="neutral" isNext={!!config.submissionUrls.finalists && !config.submissionUrls.voting} />
              <SubmissionButton label="Voting Procedure" url={config.submissionUrls.voting} variant="neutral" />
            </motion.div>
            {(!config.submissionUrls.opens || !config.submissionUrls.qualifiers || !config.submissionUrls.finalists) && (
              <p className="mt-5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#666666] border-l-2 border-[#58C391]/30 pl-3">
                Links activate as rounds open.
              </p>
            )}
          </section>
        </motion.div>
      </div>
    </PageTransition>
  );
}
