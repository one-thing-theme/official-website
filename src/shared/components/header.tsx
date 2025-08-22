import * as React from "react"
import { NavigationItem } from "./navigation-link"
import { useMotionValueEvent, useScroll, motion } from "motion/react"

function Navigation() {
  return (
    <nav className="hidden laptop:flex items-center h-12 bg-secondary rounded-full px-5">
      <ul className="flex items-center gap-7">
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
      </ul>
    </nav>
  )
}

export function Header() {
  const { scrollY } = useScroll()
  const [scrollDirection, setScrollDirection] = React.useState<"up" | "down">(
    "up",
  )

  useMotionValueEvent(scrollY, "change", (progress) => {
    const diff = progress - (scrollY.getPrevious() || 0)
    setScrollDirection(diff > 0 ? "down" : "up")
  })

  return (
    <motion.header
      transition={{ type: "spring", duration: 1.2 }}
      animate={{ y: scrollDirection === "down" ? -200 : 0 }}
      className="flex fixed top-4 tablet:top-6 inset-x-3 tablet:inset-x-10 z-50 justify-center"
    >
      <Navigation />
    </motion.header>
  )
}
