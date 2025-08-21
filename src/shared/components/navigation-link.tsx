import { Link } from "react-router"
import * as React from "react"

interface NavigationItemProps {
  href: string
  target?: string
  children: React.ReactNode
  className?: string
}

export function NavigationItem({
  children,
  href,
  target,
  className,
}: NavigationItemProps): React.ReactElement {
  return (
    <li
      className={`text-sm text-foreground/60 transition-all duration-300 hover:text-foreground ${className}`}
    >
      <Link to={href} target={target}>
        {children}
      </Link>
    </li>
  )
}
