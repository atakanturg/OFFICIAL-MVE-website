import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionReveal } from "../components/SectionReveal";
import { ProgramCard } from "../components/ProgramCard";
import { ScrollIndicator } from "../components/ScrollIndicator";

gsap.registerPlugin(ScrollTrigger);

/* ─── Animated Counter ─── */
function StatCounter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const numRef = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!numRef.current) return;

    ScrollTrigger.create({
      trigger: numRef.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: value,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: () => {
            if (numRef.current) {
              numRef.current.textContent = Math.floor(obj.val) + suffix;
            }
          },
        });
      },
    });
  }, [value, suffix]);

  return (
    <div className="flex flex-col items-center md:items-start gap-2">
      <span
        ref={numRef}
        className="text-5xl md:text-7xl font-heading font-bold text-[#F5F5F0]"
      >
        0{suffix}
      </span>
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#666666]">
        {label}
      </span>
    </div>
  );
}



export function Home() {
  return (
    <div className="relative z-10 pointer-events-auto">

      {/* ═══════════════════════════════════════════
          SECTION 1: Hero
      ═══════════════════════════════════════════ */}
      <section className="hero-section px-6 pt-40 pb-32 flex flex-col items-center justify-start min-h-[90vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-5xl mx-auto flex flex-col items-center justify-center w-full"
        >
        {/* Scroll Indicator (Top) */}
        <ScrollIndicator delay={1.5} />

          {/* Pre-heading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs font-semibold tracking-[0.4em] uppercase text-[#C8A55C] mb-8"
          >
            Miami Venturing Entrepreneurs
          </motion.p>

          {/* Main Heading */}
          <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] font-heading font-bold leading-[0.95] tracking-[-0.02em] text-[#F5F5F0] mb-10">
            Competitions.<br />
            <span className="italic text-[#C8A55C]">Student-Led.</span><br />
            Financial Thinking.
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed"
          >
            Miami's largest student-led investment and entrepreneurship club
            driving competitions, consulting, and economic discourse.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center gap-4 mt-12"
          >
            <span className="text-[10px] font-semibold tracking-[0.3em] text-[#666666] uppercase mb-2">Capstone Events</span>
            <div className="flex flex-wrap justify-center gap-10">
              <Link
                to="/investment-summit"
                className="text-btn group/btn hover:text-[#E03E3E] transition-colors"
              >
                Investment Summit
                <span className="text-xl transition-all duration-300 text-[#C8A55C] group-hover/btn:text-[#E03E3E] group-hover/btn:translate-x-1">→</span>
              </Link>
              <Link
                to="/sfere"
                className="text-btn group/btn hover:text-[#E03E3E] transition-colors"
              >
                SFERE Symposium
                <span className="text-xl transition-all duration-300 text-[#C8A55C] group-hover/btn:text-[#E03E3E] group-hover/btn:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>


      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: Stats & Identity
      ═══════════════════════════════════════════ */}
      <section className="content-section">
        <div className="max-w-6xl mx-auto">
          <div className="section-divider mb-20" />

          <SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              <StatCounter value={200} suffix="+" label="Active Members" />
              <StatCounter value={3} suffix="" label="Years Running" />
              <StatCounter value={6} suffix="" label="Core Programs" />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2} className="mt-32 mb-32">
            <p className="text-2xl md:text-3xl font-heading text-[#F5F5F0]/80 leading-relaxed max-w-3xl">
              We drive <span className="text-[#C8A55C]">competitions</span>,{" "}
              <span className="text-[#C8A55C]">investing</span>, and{" "}
              <span className="text-[#C8A55C]">consulting</span>,{" "}
              equipping students with the tools to think critically about
              markets and the economy.
            </p>
          </SectionReveal>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="h-px w-full bg-white/[0.08] mt-48 mb-20 origin-left"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: Programs
      ═══════════════════════════════════════════ */}
      <section className="content-section">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C8A55C] mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F5F5F0] mb-12">
              Our Programs
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div id="programs" className="bg-[#090909] border border-white/[0.15] rounded-xl p-8 md:p-16 shadow-[0_32px_120px_rgba(0,0,0,0.6)] backdrop-blur-md scroll-mt-2">
              <div className="programs-grid">
                <SectionReveal delay={0}>
                  <ProgramCard
                    title="Investment Summit"
                    description={
                      <>
                        Acting as our capstone event for the first semester, the{" "}
                        <span className="italic text-[#C8A55C] font-heading">
                          Investment Summit
                        </span>{" "}
                        is a multi-round event.
                        <br />
                        <br />
                        <span className="italic text-[#C8A55C] font-heading">
                          Open Round
                        </span>
                        : Potential teams will submit applications in order to
                        prove their general knowledge and diligence throughout
                        the rest of the process. We eliminate until there are
                        around 6-8 teams, each ranging from 1-4 people.
                        <br />
                        <br />
                        <span className="italic text-[#C8A55C] font-heading">
                          Qualifications Round
                        </span>
                        : Selected teams will be assigned a recognizable
                        company (under fake names). Teams will be tasked with
                        researching these case studies and preparing a pitch in
                        order to sway investors into buying their stock.
                        <br />
                        <br />
                        <span className="italic text-[#C8A55C] font-heading">
                          Finals
                        </span>
                        : Finalist teams will present in a live event in front
                        of students and industry professionals. Judging is based
                        on student votes and guest judges.
                      </>
                    }
                    href="/investment-summit"
                    status="WINTER 2027"
                  />
                </SectionReveal>
                <SectionReveal delay={0.1}>
                  <ProgramCard
                    title="SFERE Symposium"
                    description={
                      <>
                        Acting as our capstone event for the second semester,
                        the{" "}
                        <span className="italic text-[#C8A55C] font-heading">
                          South Florida Economic Ransom Everglades Symposium
                        </span>{" "}
                        kicks off with a{" "}
                        <span className="italic text-[#C8A55C] font-heading">
                          Poster Board Gallery
                        </span>{" "}
                        where students present original research. This is
                        followed by{" "}
                        <span className="italic text-[#C8A55C] font-heading">
                          Keynote Speakers
                        </span>{" "}
                        from students analyzing real world problems and
                        presenting on their proposed actionable solution. The
                        event concludes with a{" "}
                        <span className="italic text-[#C8A55C] font-heading">
                          Guest Panel Discussion
                        </span>{" "}
                        featuring professionals debating economic trends, paths
                        to success, etc.
                      </>
                    }
                    href="/sfere"
                    status="SPRING 2027"
                  />
                </SectionReveal>
                <SectionReveal delay={0.2}>
                  <ProgramCard
                    title="REASON"
                    description={
                      <>
                        <span className="italic text-[#C8A55C] font-heading">
                          REASON
                        </span>{" "}
                        leverages the{" "}
                        <span className="italic text-[#C8A55C] font-heading">
                          Ransom Everglades Alumni and Parent Network
                        </span>{" "}
                        and esteemed guests. In various breakout rooms, students
                        will participate in case study workshops led by industry
                        professionals, listen to presentations, or have detailed
                        Q&A sessions, or a combination of all three.
                      </>
                    }
                    href="/reason"
                    status="MAY 2026"
                  />
                </SectionReveal>
                <SectionReveal delay={0.3}>
                  <ProgramCard
                    title="MVE Fund"
                    description={
                      <>
                        The{" "}
                        <span className="italic text-[#C8A55C] font-heading">
                          MVE Fund
                        </span>{" "}
                        is a student-managed vehicle where participants perform
                        research and pitch investment theses to our{" "}
                        <span className="italic text-[#C8A55C] font-heading">
                          Internal Board
                        </span>
                        . The{" "}
                        <span className="italic text-[#C8A55C] font-heading">
                          MVE Fund's
                        </span>{" "}
                        main goal is to create positive cash flow to sponsor our
                        other events through good trading.
                      </>
                    }
                    href="/investment-challenge"
                    status="Coming Soon"
                  />
                </SectionReveal>
                <SectionReveal delay={0.4}>
                  <ProgramCard
                    title="Economic Competitions"
                    description={
                      <>
                        MVE organizes teams for regional and national challenges
                        and university-led invitationals such as the{" "}
                        <span className="italic text-[#C8A55C] font-heading">
                          Wharton Investment Challenge
                        </span>
                        . Starting next semester, students undergo sessions to
                        master economic principles and strategic thinking before
                        starting competitions, to foster good practice and
                        ensure success.
                      </>
                    }
                    href="/competitions"
                    status="Coming Soon"
                  />
                </SectionReveal>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: CTA
      ═══════════════════════════════════════════ */}
      <section className="content-section mt-48">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-[#F5F5F0] leading-tight mb-8">
              Join the MVE Community
            </h2>
            <p className="text-lg text-[#A0A0A0] mb-12 max-w-2xl mx-auto">
              Get involved with our competitions, investing programs, and economic discourse events taking place locally at Ransom Everglades.
            </p>
            <Link
              to="/contact"
              className="text-btn text-xl"
            >
              Get in Touch
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Bottom spacer for floating nav */}
      <div className="h-24" />
    </div>
  );
}
