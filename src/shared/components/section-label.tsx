import type * as React from "react";

type SectionLabelProps = {
  children: React.ReactNode;
};

export function SectionLabel({
  children,
}: SectionLabelProps): React.ReactElement {
  return (
    <span className="flex items-center gap-2 text-center text-foreground/40 text-sm">
      {children}
    </span>
  );
}
