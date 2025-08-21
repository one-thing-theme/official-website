"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { mergeClass } from "@shared/libs"

const Accordion = AccordionPrimitive.Root

const AccordionItem = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof AccordionPrimitive.Item
  > | null>
}) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={mergeClass(
      "flex flex-col border-2 border-dashed border-border bg-surface w-full px-4 rounded-2xl",
      className,
    )}
    {...props}
  />
)
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof AccordionPrimitive.Trigger
  > | null>
}) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={mergeClass(
        "flex flex-1 text-left items-center justify-between py-3 text-sm font-medium transition-all [&[data-state=open]>i.fi]:rotate-180 cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
      <i className="fi fi-rr-plus-small text-lg shrink-0 transition-transform duration-200 " />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
)
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof AccordionPrimitive.Content
  > | null>
}) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm text-foreground/60 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down leading-relaxed"
    {...props}
  >
    <div className={mergeClass("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
)

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
