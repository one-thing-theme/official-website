import { motion, useMotionValueEvent, useScroll } from "motion/react";
import * as React from "react";

type NavigationItemProps = {
  href: string;
  target?: string;
  children: React.ReactNode;
};

export function NavigationItem({
  children,
  href,
  target,
}: NavigationItemProps) {
  return (
    <a
      className="text-foreground/60 text-sm transition-all duration-300 hover:text-foreground"
      href={href}
      target={target}
    >
      {children}
    </a>
  );
}

export function Header() {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = React.useState<"up" | "down">(
    "up"
  );

  useMotionValueEvent(scrollY, "change", (progress) => {
    const diff = progress - (scrollY.getPrevious() || 0);
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  return (
    <motion.header
      animate={{ y: scrollDirection === "down" ? -200 : 0 }}
      className="fixed inset-x-3 tablet:inset-x-10 tablet:top-6 top-4 z-50 flex justify-center"
      transition={{ type: "spring", duration: 1.2 }}
    >
      <nav className="laptop:flex hidden h-12 items-center gap-7 rounded-full bg-secondary px-5">
        <NavigationItem href="/#hero">Home</NavigationItem>
        <NavigationItem href="/changelog">What's new</NavigationItem>
        <NavigationItem href="/docs">Docs</NavigationItem>
        <NavigationItem
          href="https://github.com/sponsors/nyomansunima"
          target="_blank"
        >
          Sponsor
        </NavigationItem>
        <NavigationItem href="/#get-started">Download</NavigationItem>
      </nav>
    </motion.header>
  );
}
