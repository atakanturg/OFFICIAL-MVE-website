import { motion } from "framer-motion";

interface TimelineRowProps {
  milestone: string;
  date: string;
  isLast?: boolean;
}

export function TimelineRow({ milestone, date, isLast = false }: TimelineRowProps) {
  const isTBD = date === "TBD";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.98 },
        visible: { opacity: 1, scale: 1 }
      }}
      className={`flex gap-10 items-start group ${isLast ? "" : "mb-8 pb-2"}`}
    >
      {/* Left: date marker */}
      <div className="flex flex-col items-end pt-1 w-24 shrink-0 transition-transform duration-300 group-hover:translate-x-1">
        <span className={`text-[10px] font-mono font-semibold tracking-[0.2em] uppercase ${isTBD ? "text-[#666666]" : "text-[#58C391]"}`}>
          {date}
        </span>
      </div>

      {/* Right: text */}
      <div className="flex flex-col">
        <span className="text-[#A0A0A0] font-semibold tracking-widest uppercase text-base group-hover:text-[#58C391] transition-colors duration-300">
          {milestone}
        </span>
      </div>
    </motion.div>
  );
}
