import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@shared/components"
import * as React from "react"

export interface FAQData {
  title: string
  content: string
}

interface FAQItemProps {
  data: FAQData
  position: number
}

export function FAQItem({ data, position }: FAQItemProps): React.ReactElement {
  const { title, content } = data

  return (
    <AccordionItem
      value={`item-${position}`}
      className="transition-all duration-300 hover:-translate-y-1"
    >
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
  )
}
