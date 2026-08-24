import { useReducedMotion } from "framer-motion"

type MarqueeProps = {
  items: string[]
  className?: string
  speed?: number
}

export function Marquee({ items, className = "", speed = 32 }: MarqueeProps) {
  const reduce = useReducedMotion()
  const text = items.join("   ·   ") + "   ·   "

  return (
    <div className={`marquee-group relative overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="marquee-track inline-flex"
        style={reduce ? undefined : { animation: `marquee ${speed}s linear infinite` }}
      >
        <span>{text.repeat(2)}</span>
      </div>
    </div>
  )
}
