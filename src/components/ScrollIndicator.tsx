import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface ScrollIndicatorProps {
  delay?: number;
  className?: string; // kept for compatibility but ignored for layout
}

export function ScrollIndicator({ delay = 1.2 }: ScrollIndicatorProps) {
  const [isIdle, setIsIdle] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setHasStarted(true);
      setIsIdle(true);
    }, delay * 1000);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      setIsIdle(false);
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        setIsIdle(true);
      }, 2300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {(hasStarted && isIdle) && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-[100] pointer-events-none"
        >
          <div className="flex flex-col items-center gap-4 opacity-50 relative">
            <span 
              className="text-[12px] tracking-[0.4em] uppercase text-[#666666] font-bold"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              Explore
            </span>
            <svg width="15" height="24" viewBox="0 0 16 24" fill="none" className="text-[#666666]">
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="2" />
              <motion.circle
                cx="8" cy="8" r="2" fill="currentColor"
                animate={{ cy: [8, 16, 8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

