type StampProps = {
  label: string
  className?: string
  tone?: "ink" | "terracota" | "verde" | "ocre"
}

const toneClass: Record<NonNullable<StampProps["tone"]>, string> = {
  ink: "border-ink text-ink",
  terracota: "border-terracota text-terracota",
  verde: "border-verde text-verde",
  ocre: "border-ocre text-ocre",
}

export function Stamp({ label, className = "", tone = "ink" }: StampProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full border font-mono text-[0.62rem] uppercase tracking-widest ${toneClass[tone]} ${className}`}
      style={{ width: 68, height: 68, lineHeight: 1.1, textAlign: "center", padding: "6px" }}
    >
      {label}
    </span>
  )
}
