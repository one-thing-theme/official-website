import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { mergeClass } from "@shared/libs";
import type * as React from "react";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof AccordionPrimitive.Item
  > | null>;
}) => (
  <AccordionPrimitive.Item
    className={mergeClass(
      "flex w-full flex-col rounded-2xl bg-secondary/80 px-4",
      className
    )}
    ref={ref}
    {...props}
  />
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof AccordionPrimitive.Trigger
  > | null>;
}) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={mergeClass(
        "flex flex-1 cursor-pointer items-center justify-between py-4 text-left text-sm transition-all [&[data-state=open]>i.fi]:rotate-180",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
      <i className="fi fi-rr-plus-small shrink-0 text-lg transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof AccordionPrimitive.Content
  > | null>;
}) => (
  <AccordionPrimitive.Content
    className="overflow-hidden text-foreground/60 text-sm leading-relaxed transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    ref={ref}
    {...props}
  >
    <div className={mergeClass("pt-0 pb-4", className)}>{children}</div>
  </AccordionPrimitive.Content>
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
