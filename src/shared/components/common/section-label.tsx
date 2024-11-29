import { mergeClass } from '@shared/utils/helpers'
import * as React from 'react'

interface SectionLabelProps {
  className?: string
  children: React.ReactNode
}

export function SectionLabel({
  children,
  className,
}: SectionLabelProps): React.ReactElement {
  return (
    <span
      className={mergeClass(
        'flex items-center h-8 px-4 text-xs text-center text-foreground/60 bg-surface border border-border rounded-xl cursor-pointer transition-all duration-300 hover:scale-95 hover:text-foreground',
        className,
      )}
    >
      {children}
    </span>
  )
}
