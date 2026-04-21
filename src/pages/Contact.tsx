import { motion } from "framer-motion";
import { Link } from "wouter";
import { ContactCard } from "../components/ContactCard";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { PageTransition } from "../components/PageTransition";
import { ScrollIndicator } from "../components/ScrollIndicator";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const toEmail = "28aturgut@ransomeverglades.org";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail || !message || !subject) return;

    setStatus("sending");

    emailjs.send(
      "service_yk9lrx7",
      "template_ogig5pc",
      {
        to_email: toEmail,
        reply_to: senderEmail,
        subject: subject,
        message: message
      },
      "gQjuxqPH6b11Y1Xe3"
    ).then(() => {
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setSenderEmail("");
        setSubject("");
        setMessage("");
      }, 4000);
    }).catch((err) => {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    });
  };

  const inputClasses = "w-full bg-[#111111] border border-white/[0.06] text-[#F5F5F0] px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-[#C8A55C]/50 focus:ring-1 focus:ring-[#C8A55C]/20 transition-all placeholder:text-[#666666]/60";

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen tracking-wide relative pt-4 md:pt-8 w-full pointer-events-auto">
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

        <section className="py-32 min-h-[90vh] flex flex-col justify-center w-full px-6">
          <div className="mx-auto max-w-7xl relative z-10 w-full flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-xs font-semibold tracking-[0.3em] text-[#C8A55C] uppercase mb-3">Leadership</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#F5F5F0] tracking-tight uppercase">
                Our <span className="italic text-[#C8A55C]">Team</span>
              </h1>
              <p className="text-[#A0A0A0] text-sm mt-4 tracking-wide uppercase font-semibold">
                Scroll down to reach out via our contact form below
              </p>
            </motion.div>

            {/* First Row: 3 cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 w-full max-w-5xl"
            >
              <motion.div variants={itemVariants}>
                <ContactCard name="Ms. Maggie Berry" title="Faculty Sponsor" email="mberry@ransomeverglades.org" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ContactCard name="Mateo Delgado" title="Club President" email="27mdelgado@ransomeverglades.org" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ContactCard name="Dr. Brandon King" title="Faculty Sponsor" email="bking@ransomeverglades.org" />
              </motion.div>
            </motion.div>

            {/* Second Row: 2 cards centered */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl mb-20"
            >
              <motion.div variants={itemVariants}>
                <ContactCard name="Atakan Turgut" title="Investment Branch Captain" email="28aturgut@ransomeverglades.org" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ContactCard name="Patrick McDevitt" title="Investment Branch Captain" email="28pmcdevitt@ransomeverglades.org" />
              </motion.div>
            </motion.div>

            {/* Email Contact Form */}
            <motion.div
              id="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-3xl scroll-mt-32 mt-12"
            >
              <div className="bg-[#111111] border border-white/[0.06] rounded-lg p-8 md:p-12">
                <h3 className="text-2xl font-heading font-bold text-[#F5F5F0] tracking-wide uppercase mb-2">
                  Send Us a Message
                </h3>
                <p className="text-sm text-[#666666] mb-8">
                  Have a question or want to get involved? Drop a message below.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <input type="hidden" name="to_email" value={toEmail} />

                  <div className="flex flex-col gap-2">
                    <label htmlFor="senderEmail" className="text-xs font-semibold tracking-[0.2em] text-[#C8A55C] uppercase">
                      Your Email
                    </label>
                    <input
                      id="senderEmail"
                      name="reply_to"
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="you@example.com"
                      className={inputClasses}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-xs font-semibold tracking-[0.2em] text-[#C8A55C] uppercase">
                      Subject / Title
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Message Title"
                      className={inputClasses}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="messageBody" className="text-xs font-semibold tracking-[0.2em] text-[#C8A55C] uppercase">
                      Message
                    </label>
                    <textarea
                      id="messageBody"
                      name="message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message here..."
                      rows={6}
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="self-start inline-flex items-center gap-3 px-8 py-3 bg-[#C8A55C] text-[#0A0A0A] font-semibold text-sm tracking-wide rounded-full hover:bg-[#D4B56A] transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="h-4 w-4 border-2 border-[#0A0A0A] border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : status === "sent" ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Message Sent
                      </>
                    ) : status === "error" ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        Error Sending
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
