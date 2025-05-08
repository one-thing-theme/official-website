"use client"

import * as React from "react"
import { motion } from "motion/react"

interface SectionLabelProps {
  className?: string
  children: React.ReactNode
}

export function SectionLabel({
  children,
}: SectionLabelProps): React.ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <span className="flex items-center gap-2 h-8 px-4 text-sm text-center text-foreground/60 bg-surface border-2 border-dashed border-border rounded-full cursor-pointer transition-all duration-300 hover:scale-95 hover:text-foreground">
        {children}
      </span>
    </motion.div>
  )
}
