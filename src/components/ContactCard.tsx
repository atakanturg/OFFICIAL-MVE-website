import { motion } from "framer-motion";

interface ContactCardProps {
  name: string;
  title: string;
  email: string;
}

export function ContactCard({ name, title, email }: ContactCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      className="bg-[#111111] border border-white/[0.06] rounded-lg p-6 flex flex-col items-start text-left group hover:border-[#C8A55C]/20 transition-colors"
    >
      <h3 className="font-heading font-semibold text-lg text-[#F5F5F0] tracking-wide uppercase mb-1">{name}</h3>
      <p className="text-[#666666] text-xs tracking-widest uppercase mb-5">{title}</p>
      <a
        href={`mailto:${email}`}
        className="text-[#C8A55C] font-semibold text-[10px] tracking-wide uppercase hover:gap-3 transition-all mt-auto flex items-center gap-2 link-underline"
      >
        {email} <span className="text-base transition-transform group-hover:translate-x-1">→</span>
      </a>
    </motion.div>
  );
}
