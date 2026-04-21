import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  delay?: number;
  className?: string;
}

export function ScrollIndicator({ delay = 1.2, className = "absolute top-12 left-1/2 -translate-x-1/2 z-20" }: ScrollIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className={className}
    >
      <div className="flex flex-col items-center gap-1.5 opacity-50">
        <span className="text-[9px] tracking-[0.4em] uppercase text-[#666666] font-bold">Explore</span>
        <svg width="10" height="16" viewBox="0 0 16 24" fill="none" className="text-[#666666]">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="2" />
          <motion.circle
            cx="8" cy="8" r="2" fill="currentColor"
            animate={{ cy: [8, 16, 8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </motion.div>
  );
}
