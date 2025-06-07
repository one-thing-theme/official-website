import * as React from "react"
import { NavigationItem } from "./navigation-link"

export function Footer(): React.ReactElement {
  return (
    <footer className="border-t border-border py-8">
      <div className="flex flex-col tablet:flex-row px-16 items-center justify-between gap-4">
        <div className="flex text-sm font-medium">
          <span>Copyright &copy; 2024 - Alright Reserved</span>
        </div>

        <div className="flex items-center">
          <ul className="flex flex-wrap items-center gap-3 tablet:gap-6">
            <NavigationItem href="/changelog">What's new</NavigationItem>
            <NavigationItem href="/docs">Docs</NavigationItem>
            <NavigationItem href="/privacy">Privacy</NavigationItem>
            <NavigationItem href="/terms">Terms</NavigationItem>
          </ul>
        </div>
      </div>
    </footer>
  )
}
