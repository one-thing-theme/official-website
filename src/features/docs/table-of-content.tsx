import { mergeClass } from "@shared/libs"
import { Link } from "react-router"
import type { TocItem } from "remark-flexible-toc"

type Props = {
  toc: TocItem[]
}

export function TableOfContent({ toc }: Props) {
  return (
    <div className="flex flex-col w-full">
      <span className="text-sm px-3 font-medium">On this page</span>

      <div className="flex flex-col text-sm w-full mt-3">
        <ul className="flex flex-col w-full">
          {toc.map((item, index) => (
            <li
              key={index}
              className={mergeClass(
                "text-foreground/60 hover:text-foreground group flex h-8 px-3",
                item.depth === 3 && "ml-4",
              )}
            >
              <Link to={item.href} className="flex w-full h-full items-center">
                {item.value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
