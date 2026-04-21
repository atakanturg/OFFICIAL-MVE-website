interface SubmissionButtonProps {
  label: string;
  url: string;
  variant: "solid" | "outline" | "neutral";
  isNext?: boolean;
}

export function SubmissionButton({ label, url, variant, isNext = false }: SubmissionButtonProps) {
  const isDisabled = !url || url.trim() === "";

  const base = "block w-full text-left py-4 px-2 font-semibold tracking-widest uppercase text-sm transition-all duration-300 flex items-center justify-between gap-4";
  let classes = "";

  if (isNext) {
    classes = "text-[#58C391] hover:pl-4";
  } else if (isDisabled) {
    classes = "text-[#666666]/30 cursor-not-allowed";
  } else {
    if (variant === "solid") {
      classes = "text-[#58C391] hover:pl-4 cursor-pointer";
    } else if (variant === "outline") {
      classes = "text-[#58C391]/80 hover:text-[#58C391] hover:pl-4 cursor-pointer";
    } else {
      classes = "text-[#A0A0A0] hover:text-[#F5F5F0] hover:pl-4 cursor-pointer";
    }
  }

  const inner = (
    <>
      <span>{label}</span>
      <span className={`text-base ${isDisabled && !isNext ? "opacity-20" : ""}`}>
        {isNext ? "→" : isDisabled ? "/" : "↗"}
      </span>
    </>
  );

  if (isDisabled && !isNext) {
    return <button disabled className={`${base} ${classes}`}>{inner}</button>;
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`${base} ${classes}`}>
      {inner}
    </a>
  );
}
