import type { ReactNode } from "react"

type PageHeaderProps = {
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
  className?: string
}

/**
 * A compact page title, not a hero band. The earlier version stacked an
 * eyebrow label, a rule, a huge headline and a paragraph into a padded,
 * bordered banner — the same formula on every page, which is exactly what
 * read as generic no matter what typeface it was set in. David Kordansky
 * and Maruani Mercier don't give interior pages a banner at all: the title
 * is just the first line of the page, then content starts. The active nav
 * link already says where you are, so there's no eyebrow here either.
 */
export function PageHeader({ title, description, children, className = "" }: PageHeaderProps) {
  return (
    <div className={`mx-auto max-w-[1440px] px-5 pb-5 pt-10 sm:px-8 sm:pb-6 sm:pt-14 ${className}`}>
      <h1 className="heading max-w-3xl text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.1] text-balance text-ink">
        {title}
      </h1>
      {description && <p className="mt-3 max-w-xl text-ink-soft">{description}</p>}
      {children}
    </div>
  )
}
