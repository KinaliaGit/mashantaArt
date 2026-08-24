import type { ReactNode } from "react"

type StepTransitionProps = {
  step: number
  children: ReactNode
}

/**
 * Wraps a wizard step's content. Previously animated the step in with
 * framer-motion; dropped in favor of an instant, guaranteed-visible swap —
 * see Reveal.tsx for why content here must never depend on an animation
 * actually completing.
 */
export function StepTransition({ step, children }: StepTransitionProps) {
  return <div key={step}>{children}</div>
}
