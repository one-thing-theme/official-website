import { Slot } from "@radix-ui/react-slot";
import { mergeClass } from "@shared/libs";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type * as React from "react";

const buttonVariants = cva(
  "group relative flex items-center justify-center gap-2 whitespace-nowrap font-medium text-[13px] leading-none! transition-all duration-300",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground",
        accent: "bg-accent text-accent-foreground",
        outline: "border border-border bg-background text-foreground",
        text: "text-foreground",
        secondary:
          "border border-border bg-secondary text-secondary-foreground hover:bg-secondary/60",
      },
      size: {
        base: "h-11 rounded-3xl px-6",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-xl px-5",
        icon: "h-10 w-10 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "base",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = ({
  ref,
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps & { ref?: React.RefObject<HTMLButtonElement | null> }) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={mergeClass(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
};

Button.displayName = "Button";

export { Button, buttonVariants };
