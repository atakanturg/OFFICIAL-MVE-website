export function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.06] py-16 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-[#C8A55C] font-heading font-bold text-lg tracking-[0.15em]">
            MVE
          </span>
          <p className="text-[#666666] text-xs tracking-wide">
            Miami Venturing Entrepreneurs
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1">
          <p className="text-[#666666] text-xs tracking-wide">
            © 2026–2027 Miami Venturing Entrepreneurs
          </p>
          <p className="text-[#666666]/60 text-xs tracking-wide">
            Website by Atakan Turgut
          </p>
        </div>
      </div>
    </footer>
  );
}
