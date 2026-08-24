type StepProgressProps = {
  steps: string[]
  current: number
}

export function StepProgress({ steps, current }: StepProgressProps) {
  return (
    <ol className="flex flex-wrap gap-x-6 gap-y-2 border-b border-bone-shade-2 pb-5 font-mono text-[0.66rem] uppercase tracking-widest">
      {steps.map((s, i) => (
        <li key={s} className={`flex items-center gap-2 ${i === current ? "text-ink" : i < current ? "text-graphite" : "text-graphite-soft"}`}>
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full border text-[0.6rem] ${
              i <= current ? "border-ink" : "border-bone-shade-2"
            } ${i < current ? "bg-ink text-bone" : ""}`}
          >
            {i < current ? "✓" : i + 1}
          </span>
          {s}
        </li>
      ))}
    </ol>
  )
}
