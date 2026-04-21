import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProgramDescriptionProps {
  description: React.ReactNode;
  className?: string;
  initialOpen?: boolean;
}

export function ProgramDescription({ 
  description, 
  className = "", 
  initialOpen = false 
}: ProgramDescriptionProps) {
  const [showDescription, setShowDescription] = useState(initialOpen);

  return (
    <div className={`mt-2 ${className}`}>
      {!showDescription ? (
        <button
          onClick={() => setShowDescription(true)}
          className="text-xs font-heading italic text-[#A0A0A0] hover:text-[#C8A55C] underline underline-offset-4 transition-colors cursor-pointer tracking-widest uppercase"
        >
          Show Description
        </button>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2">
              <div className="text-sm text-[#A0A0A0] leading-relaxed max-w-2xl font-medium">
                {description}
              </div>
              <button
                onClick={() => setShowDescription(false)}
                className="mt-4 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#666666] hover:text-[#F5F5F0] transition-colors cursor-pointer"
              >
                [ Hide Description ]
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
