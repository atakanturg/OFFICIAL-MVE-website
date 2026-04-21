import { Link } from "wouter";
import { ProgramDescription } from "./ProgramDescription";

interface ProgramCardProps {
  title: string;
  description?: string | React.ReactNode;
  href: string;
  status: string;
}

export function ProgramCard({ title, description, href, status }: ProgramCardProps) {
  const isComingSoon = status.toLowerCase().includes("soon") || status.toLowerCase().includes("beginning");
  const statusColor = isComingSoon ? "text-[#666666]" : "text-[#10B981]";

  return (
    <div className="block py-6 group w-full text-left border-b border-white/[0.05] last:border-0">
      <div className="flex items-center gap-3 mb-2">
        <Link 
          href={href}
          className="flex items-center gap-3 cursor-pointer group/title"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-tight group-hover/title:text-[#58C391] transition-all duration-300">
            {title}
          </h3>
          <span className="text-xl text-[#F5F5F0] group-hover/title:text-[#58C391] group-hover/title:translate-x-1 transition-all duration-300">
            →
          </span>
        </Link>
        <span className={`text-[11px] font-semibold tracking-[0.2em] uppercase shrink-0 ${statusColor} ml-auto`}>
          [{status}]
        </span>
      </div>

      <ProgramDescription description={description} />
    </div>
  );
}
