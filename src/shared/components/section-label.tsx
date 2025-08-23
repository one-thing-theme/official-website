import * as React from "react"

interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({
  children,
}: SectionLabelProps): React.ReactElement {
  return (
    <span className="flex items-center gap-2 text-sm text-center text-foreground/40">
      {children}
    </span>
  )
}
