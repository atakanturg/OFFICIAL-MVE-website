import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import emailjs from "@emailjs/browser";
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
  const [mailingEmail, setMailingEmail] = useState("");
  const [mailingStatus, setMailingStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const toEmail = "28aturgut@ransomeverglades.org";

  const handleMailingListSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mailingEmail) return;

    setMailingStatus("sending");

    emailjs.send(
      "service_yk9lrx7",
      "template_ogig5pc",
      {
        to_email: toEmail,
        reply_to: mailingEmail,
        subject: "New MVE Mailing List Subscriber",
        message: `Please add ${mailingEmail} to the MVE mailing list.`
      },
      "gQjuxqPH6b11Y1Xe3"
    ).then(() => {
      setMailingStatus("sent");
      setTimeout(() => {
        setMailingStatus("idle");
        setMailingEmail("");
      }, 4000);
    }).catch((err) => {
      console.error("EmailJS Error:", err);
      setMailingStatus("error");
      setTimeout(() => setMailingStatus("idle"), 4000);
    });
  };

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
            className="text-xs font-semibold tracking-[0.4em] uppercase text-[#58C391] mb-8"
          >
            Miami Venturing Entrepreneurs
          </motion.p>

          {/* Main Heading */}
          <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] font-heading font-bold leading-[0.95] tracking-[-0.02em] text-[#F5F5F0] mb-10">
            Competitions.<br />
            <span className="italic text-[#58C391]">Student-Led.</span><br />
            Financial Thinking.
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed"
          >
            As Ransom Everglades' largest student-led club, we are focused on navigating the economic side of the world.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center gap-8 mt-12"
          >
            <div className="flex flex-col items-center gap-4">
              <span className="text-[10px] font-semibold tracking-[0.3em] text-[#666666] uppercase mb-1">Capstone Events</span>
              <div className="flex flex-wrap justify-center gap-10">
                <Link
                  to="/investment-summit"
                  className="text-btn group/btn hover:text-[#E03E3E] transition-colors"
                >
                  Investment Summit
                  <span className="text-xl transition-all duration-300 text-[#58C391] group-hover/btn:text-[#E03E3E] group-hover/btn:translate-x-1">→</span>
                </Link>
                <Link
                  to="/sfere"
                  className="text-btn group/btn hover:text-[#E03E3E] transition-colors"
                >
                  SFERE Symposium
                  <span className="text-xl transition-all duration-300 text-[#58C391] group-hover/btn:text-[#E03E3E] group-hover/btn:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-10 mt-2">
              <div 
                className="text-btn group/btn opacity-50 cursor-not-allowed flex items-center gap-3"
                title="Coming Soon"
              >
                <span className="flex items-center gap-1.5 border border-[#58C391]/30 bg-[#58C391]/10 px-2.5 py-1 rounded-full text-[9px] tracking-widest text-[#58C391] uppercase">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Coming Soon
                </span>
                MVE Calendar
                <span className="text-xl text-[#58C391]">↓</span>
              </div>
              <a
                href="#mailing-list"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('mailing-list')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-btn group/btn !text-[#58C391] font-bold hover:!text-[#E03E3E] transition-colors flex items-center gap-2"
              >
                MVE Mailing List
                <span className="text-xl transition-all duration-300 text-[#58C391] group-hover/btn:text-[#E03E3E] group-hover/btn:translate-y-1">↓</span>
              </a>
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
              <StatCounter value={4} suffix="" label="Years Running" />
              <StatCounter value={6} suffix="" label="Core Programs" />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2} className="mt-32 mb-32">
            <p className="text-2xl md:text-3xl font-heading text-[#F5F5F0]/80 leading-relaxed max-w-3xl">
              Through events specialized in <span className="text-[#58C391]">investing</span> and{" "}
              <span className="text-[#58C391]">consulting</span>, we equip our club members with the tools to critically analyze equities, sectors, markets, and economies.
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
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#58C391] mb-4">
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
                        <span className="italic text-[#58C391] font-heading font-bold text-base">
                          Investment Summit
                        </span>{" "}
                        is a multi-round event.
                        <br />
                        <br />
                        <span className="italic text-[#58C391] font-heading font-bold text-base">
                          Open Round
                        </span>
                        : Potential teams will submit applications in order to
                        prove their general knowledge and diligence throughout
                        the rest of the process. We eliminate until there are
                        around 6-8 teams, each ranging from 1-4 people.
                        <br />
                        <br />
                        <span className="italic text-[#58C391] font-heading font-bold text-base">
                          Qualifications Round
                        </span>
                        : Teams will be tasked with researching their
                        respective case studies and preparing a pitch in order
                        to sway the view of the attendees into a buy or sell
                        decision.
                        <br />
                        <br />
                        <span className="italic text-[#58C391] font-heading font-bold text-base">
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
                        <span className="italic text-[#58C391] font-heading font-bold text-base">
                          South Florida Economic Ransom Everglades Symposium
                        </span>{" "}
                        kicks off with a{" "}
                        <span className="italic text-[#58C391] font-heading font-bold text-base">
                          Poster Board Gallery
                        </span>{" "}
                        where students present original research. This is
                        followed by{" "}
                        <span className="italic text-[#58C391] font-heading font-bold text-base">
                          Keynote Speakers
                        </span>{" "}
                        from students analyzing real world problems and
                        presenting on their proposed actionable solution. The
                        event concludes with a{" "}
                        <span className="italic text-[#58C391] font-heading font-bold text-base">
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
                        <span className="italic text-[#58C391] font-heading font-bold text-base">
                          REASON
                        </span>{" "}
                        leverages the{" "}
                        <span className="italic text-[#58C391] font-heading font-bold text-base">
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
                        <span className="italic text-[#58C391] font-heading font-bold text-base">
                          MVE Fund
                        </span>{" "}
                        is a student-managed vehicle where participants perform
                        research and pitch investment theses to our{" "}
                        <span className="italic text-[#58C391] font-heading font-bold text-base">
                          Internal Board
                        </span>
                        . The{" "}
                        <span className="italic text-[#58C391] font-heading font-bold text-base">
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
                    title="Economic Challenges"
                    description={
                      <>
                        MVE organizes teams for regional and national challenges
                        and university-led invitationals such as the{" "}
                        <span className="italic text-[#58C391] font-heading font-bold text-base">
                          Wharton Investment Challenge
                        </span>
                        . Starting next semester, students undergo sessions to
                        master economic principles and strategic thinking before
                        starting these events, to foster good practice and
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
          SECTION 4: Calendar & Mailing List
      ═══════════════════════════════════════════ */}
      <section className="content-section mt-48 mb-32">
        <div className="max-w-4xl mx-auto">
          {/* Calendar Block (Locked) */}
          <SectionReveal>
            <div className="flex flex-col items-center border border-white/[0.06] rounded-xl p-10 bg-[#111111]/50 relative mb-16 overflow-hidden">
              <div className="absolute inset-0 bg-[#090909]/80 z-10 flex items-center justify-center backdrop-blur-[2px]">
                <div className="flex items-center gap-3 bg-[#111111] px-6 py-3 rounded-full border border-white/[0.1]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#58C391" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#58C391] uppercase">Coming Soon</span>
                </div>
              </div>
              <div className="opacity-30 pointer-events-none text-center">
                <h2 className="text-3xl font-heading font-bold text-[#F5F5F0] mb-4">MVE Calendar</h2>
                <p className="text-[#A0A0A0] text-sm max-w-lg mx-auto mb-6">
                  Track upcoming events, competition deadlines, and symposium dates.
                </p>
                <div className="inline-flex items-center gap-2 text-btn">
                  Expand Calendar <span className="text-[#58C391]">↓</span>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Mailing List Form */}
          <SectionReveal delay={0.2}>
            <div id="mailing-list" className="bg-[#111111] border border-white/[0.06] rounded-xl p-8 md:p-12 scroll-mt-32">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F5F5F0] leading-tight mb-6">
                  Join the <span className="italic text-[#58C391] font-heading font-bold">MVE</span> Mailing List
                </h2>
                <p className="text-base md:text-lg text-[#A0A0A0] max-w-2xl mx-auto">
                  For alumni, parents, and interested industry professionals. Sign up to stay updated on MVE events, student accomplishments, or opportunities to participate as a guest speaker, judge, or regular guest.
                </p>
              </div>

              <form onSubmit={handleMailingListSubmit} className="flex flex-col gap-5 max-w-lg mx-auto">
                <div className="flex flex-col gap-2">
                  <label htmlFor="mailingEmail" className="text-xs font-semibold tracking-[0.2em] text-[#58C391] uppercase text-left">
                    Your Email
                  </label>
                  <input
                    id="mailingEmail"
                    name="email"
                    type="email"
                    required
                    value={mailingEmail}
                    onChange={(e) => setMailingEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-[#090909] border border-white/[0.06] text-[#F5F5F0] px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-[#58C391]/50 focus:ring-1 focus:ring-[#58C391]/20 transition-all placeholder:text-[#666666]/60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={mailingStatus === "sending"}
                  className="mt-2 flex items-center justify-center gap-3 w-full px-8 py-4 bg-[#58C391] text-[#0A0A0A] font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-[#76D3A5] transition-colors cursor-pointer disabled:opacity-50"
                >
                  {mailingStatus === "sending" ? (
                    <>
                      <div className="h-4 w-4 border-2 border-[#0A0A0A] border-t-transparent rounded-full animate-spin" />
                      Joining...
                    </>
                  ) : mailingStatus === "sent" ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Subscribed!
                    </>
                  ) : mailingStatus === "error" ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      Error Sending
                    </>
                  ) : (
                    <>
                      Join Mailing List
                    </>
                  )}
                </button>
              </form>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Bottom spacer for floating nav */}
      <div className="h-24" />
    </div>
  );
}
