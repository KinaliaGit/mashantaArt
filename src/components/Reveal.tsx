import type { CSSProperties, ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
  /** kept for call-site compatibility; content no longer hides while it waits on either */
  delay?: number
  variant?: "wipe" | "rise"
}

/**
 * Content must never be gated behind an animation/transition completing —
 * every "start hidden, JS or CSS reveals it later" approach tried here
 * (framer-motion whileInView, useInView+timeout, CSS @starting-style) got
 * stuck invisible for some real subset of elements in practice. So: always
 * render visible. If a reliable entrance effect is worth revisiting later,
 * it needs to earn back the risk — right now content showing up beats it.
 */
export function Reveal({ children, className = "", style }: RevealProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}
