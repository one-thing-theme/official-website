"use client"

import { mergeClass } from "@shared/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

type navigationItem = {
  label: string
  link: string
}

type Navigation = {
  group: string
  list: navigationItem[]
}

type NavigationGroupProps = {
  group: Navigation
}

type NavigationItemProps = {
  item: navigationItem
}

const navigations: Navigation[] = [
  {
    group: "Getting Started",
    list: [
      { label: "Introduction", link: "/docs" },
      {
        label: "Installation",
        link: "/docs/installation",
      },
      {
        label: "Configuration",
        link: "/docs/configuration",
      },
    ],
  },
  {
    group: "Guides",
    list: [
      {
        label: "Setup Clean Editor",
        link: "/docs/setup-clean-editor",
      },
    ],
  },
]

function NavigationItem({ item }: NavigationItemProps): React.ReactElement {
  const { label, link } = item
  const pathName = usePathname()
  const isActive = pathName === `${link}`

  return (
    <li
      className={mergeClass(
        "px-3 h-9 flex items-center text-pretty group transition-all duration-300 hover:bg-secondary w-full overflow-hidden rounded-lg text-foreground/90 hover:text-foreground hover:-translate-x-1",
        isActive && "bg-secondary text-foreground",
      )}
    >
      <Link href={link} className="flex h-full w-full items-center">
        {label}
      </Link>
    </li>
  )
}

function NavigationGroup({ group }: NavigationGroupProps): React.ReactElement {
  const { group: groupName, list } = group

  return (
    <div className="flex flex-col text-sm gap-3">
      <span className="ml-3 font-medium">{groupName}</span>
      <ul className="flex flex-col w-full">
        {list.map((item, index) => (
          <NavigationItem key={index} item={item} />
        ))}
      </ul>
    </div>
  )
}

export function Navigation(): React.ReactElement {
  return (
    <div className="flex flex-col w-full gap-8">
      {navigations.map((group, index) => (
        <NavigationGroup key={index} group={group} />
      ))}
    </div>
  )
}
