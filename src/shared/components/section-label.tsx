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
      <span className="font-mono font-medium flex items-center gap-2 text-xs tracking-tight text-center text-foreground/40">
        {children}
      </span>
    </motion.div>
  )
}
