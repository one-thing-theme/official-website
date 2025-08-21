import * as React from "react"
import { NavigationItem } from "./navigation-link"
import { Link } from "react-router"
import { useMotionValueEvent, useScroll, motion } from "motion/react"

interface ProductsNavigationItemProps {
  children: React.ReactNode
}

function Brand() {
  return (
    <Link
      to={"/"}
      className="flex items-center gap-3 h-12 rounded-full bg-secondary px-4 cursor-pointer"
    >
      <span className="font-medium text-sm">One thing theme.</span>
    </Link>
  )
}

function ProductsNavigationItem({ children }: ProductsNavigationItemProps) {
  return (
    <li
      className={`flex items-center gap-2 text-sm text-foreground/60 transition-all duration-300 hover:text-foreground cursor-pointer relative group`}
    >
      {children}

      <div className="hidden group-hover:flex flex-col bg-surface border border-border rounded-2xl w-[280px] p-3  absolute top-11 -left-4">
        <ul className="flex flex-col gap-3 w-full">
          <NavigationItem
            href="https://zed.dev/extensions?query=brook+code+theme"
            target="_blank"
          >
            Zed
          </NavigationItem>
          <NavigationItem
            href="https://marketplace.visualstudio.com/items?itemName=weecraft.one-thing-theme"
            target="_blank"
          >
            Visual Studio Code
          </NavigationItem>
        </ul>
      </div>
    </li>
  )
}

function Navigation() {
  return (
    <nav className="hidden laptop:flex items-center h-12 bg-secondary rounded-full px-5">
      <ul className="flex items-center gap-7">
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

function Actions() {
  return (
    <div className="hidden tablet:flex items-center h-12 bg-secondary rounded-full px-5">
      <ul className="flex items-center gap-7">
        <NavigationItem
          href="https://github.com/sponsors/nyomansunima"
          target="_blank"
        >
          Sponsors
        </NavigationItem>
        <NavigationItem
          href="https://github.com/one-thing-theme"
          target="_blank"
        >
          Github
        </NavigationItem>
      </ul>
    </div>
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
      className="flex fixed top-4 tablet:top-6 inset-x-3 tablet:inset-x-10 z-50 justify-between"
    >
      <Brand />
      <Navigation />
      <Actions />
    </motion.header>
  )
}
