import { motion } from "framer-motion";

export function FinalistCard({ teamName }: { teamName: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
      }}
      className="flex flex-col items-start gap-1 p-2"
    >
      <span className="text-[10px] tracking-[0.2em] font-semibold text-[#C8A55C] uppercase">
        Finalist
      </span>
      <h3 className="text-xl font-heading font-semibold text-[#F5F5F0]">{teamName}</h3>
    </motion.div>
  );
}
