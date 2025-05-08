"use client"

import * as React from "react"
import { DynamicLogo } from "./dynamic-logo"
import { NavigationItem } from "./navigation-link"
import Link from "next/link"
import { useMotionValueEvent, useScroll, motion } from "motion/react"

interface ProductsNavigationItemProps {
  children: React.ReactNode
}

function Brand(): React.ReactElement {
  return (
    <Link
      href={"/"}
      className="flex items-center gap-3 h-12 rounded-2xl border-2 border-dashed border-border bg-surface pl-2 pr-4 transition-all duration-300 hover:-translate-y-1 hover:border-link cursor-pointer"
    >
      <DynamicLogo size={30} />
      <span className="font-medium text-sm">One Thing Theme</span>
    </Link>
  )
}

function ProductsNavigationItem({
  children,
}: ProductsNavigationItemProps): React.ReactElement {
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

function Navigation(): React.ReactElement {
  return (
    <nav className="hidden laptop:flex items-center h-12 bg-surface border-2 border-dashed border-border rounded-2xl px-5 transition-all duration-200 hover:-translate-y-1 hover:border-link">
      <ul className="flex items-center gap-7">
        <ProductsNavigationItem>
          Products <i className="fi fi-rr-angle-small-down" />
        </ProductsNavigationItem>
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

function Actions(): React.ReactElement {
  return (
    <div className="hidden tablet:flex items-center h-12 bg-surface border-2 border-dashed border-border rounded-2xl px-5 transition-all duration-200 hover:-translate-y-1 hover:border-link">
      <ul className="flex items-center gap-7">
        <NavigationItem
          href="https://github.com/orgs/one-thing-theme/discussions"
          target="_blank"
        >
          Contribute
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

export function Header(): React.ReactElement {
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
