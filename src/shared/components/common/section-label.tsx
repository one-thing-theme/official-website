'use client'

import { mergeClass } from '@shared/utils/helpers'
import * as React from 'react'
import { motion } from 'motion/react'

interface SectionLabelProps {
  className?: string
  children: React.ReactNode
}

export function SectionLabel({
  children,
  className,
}: SectionLabelProps): React.ReactElement {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
      viewport={{ once: true, margin: '-30% 0px' }}
      className={mergeClass(
        'flex items-center h-8 px-4 text-xs text-center text-foreground/60 bg-surface border border-border rounded-xl cursor-pointer hover:scale-95 hover:text-foreground',
        className,
      )}
    >
      {children}
    </motion.span>
  )
}
