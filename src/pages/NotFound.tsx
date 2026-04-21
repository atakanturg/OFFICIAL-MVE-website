import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageTransition } from "../components/PageTransition";

export function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center tracking-wide relative overflow-hidden pointer-events-auto">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-8xl md:text-[180px] font-heading font-bold text-[#F5F5F0] tracking-tighter mb-4 opacity-[0.03] absolute pointer-events-none select-none"
        >
          404
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-heading font-bold text-[#F5F5F0] tracking-tight mb-4 z-10"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-[#666666] mb-10 z-10"
        >
          Page not found.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="z-10"
        >
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-[#58C391] hover:text-[#76D3A5] font-medium transition-colors link-underline">
              <span aria-hidden="true">&larr;</span> Back to Home
            </a>
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
}
