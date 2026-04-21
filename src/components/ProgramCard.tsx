import { Link } from "wouter";

interface ProgramCardProps {
  title: string;
  description?: string;
  href: string;
  status: string;
}

export function ProgramCard({ title, description, href, status }: ProgramCardProps) {
  const isComingSoon = status.toLowerCase().includes("soon") || status.toLowerCase().includes("beginning");
  const statusColor = isComingSoon ? "text-[#666666]" : "text-[#10B981]";

  return (
    <Link href={href}>
      <a className="block py-6 group cursor-pointer w-full text-left">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-tight group-hover:text-[#C8A55C] group-hover:underline transition-all duration-300">
            {title}
          </h3>
          <span className="text-xl text-[#F5F5F0] group-hover:text-[#C8A55C] group-hover:translate-x-1 transition-all duration-300">
            →
          </span>
          <span className={`text-[11px] font-semibold tracking-[0.2em] uppercase shrink-0 ${statusColor} ml-auto`}>
            [{status}]
          </span>
        </div>
        {description && (
          <p className="text-sm text-[#A0A0A0] leading-relaxed transition-all duration-300 max-w-2xl">
            {description}
          </p>
        )}
      </a>
    </Link>
  );
}
