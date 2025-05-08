import * as React from "react"
import { Navigation } from "./navigation"

export function LeftContent(): React.ReactElement {
  return (
    <aside className="hidden laptop:flex flex-col h-full w-[460px] p-3 border-border sticky top-28 overflow-y-auto">
      <Navigation />
    </aside>
  )
}
