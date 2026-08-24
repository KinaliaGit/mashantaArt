import { useEffect, useRef, useState } from "react"

/**
 * Grease-pencil cursor: a small dot that turns into a hand-labeled note
 * ("VER", "RESERVAR"...) when hovering an element with [data-cursor].
 * Disabled on touch devices and under prefers-reduced-motion.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState<string | null>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const hoverOk = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    setEnabled(hoverOk && !reduceMotion)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const move = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate(${e.clientX + 14}px, ${e.clientY - 26}px)`
      }
    }

    const over = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.("[data-cursor]") as HTMLElement | null
      setLabel(target?.getAttribute("data-cursor") ?? null)
    }

    document.addEventListener("mousemove", move)
    document.addEventListener("mouseover", over)
    return () => {
      document.removeEventListener("mousemove", move)
      document.removeEventListener("mouseover", over)
    }
  }, [enabled])

  useEffect(() => {
    if (!enabled) return
    document.documentElement.classList.add("no-cursor")
    return () => document.documentElement.classList.remove("no-cursor")
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[999] rounded-full bg-terracota transition-[width,height] duration-150 ease-out"
        style={{ width: label ? 6 : 9, height: label ? 6 : 9 }}
      />
      <div
        ref={labelRef}
        className="pointer-events-none fixed left-0 top-0 z-[999] whitespace-nowrap border border-ink bg-bone px-2 py-0.5 font-mono text-[0.68rem] uppercase tracking-wider text-ink transition-opacity duration-150 ease-out"
        style={{ opacity: label ? 1 : 0 }}
      >
        {label}
      </div>
    </>
  )
}
