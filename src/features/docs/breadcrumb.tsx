import { type BreadScrumb } from "./docs-service"
import { Link } from "react-router"

type Props = {
  breadscrumbs: BreadScrumb[]
}

export function Breadcrumb({ breadscrumbs }: Props) {
  return (
    <div className="flex items-center w-full text-sm text-foreground/60 gap-1">
      <Link
        to={"/docs"}
        className="transition-all duration-300 hover:text-foreground"
      >
        Docs
      </Link>

      {breadscrumbs.map(({ link, title }, i) => (
        <div key={i} className="flex items-center gap-1">
          <i className="fi fi-rr-angle-small-right" />

          <Link
            to={link}
            className="transition-all duration-300 hover:text-foreground"
          >
            {title}
          </Link>
        </div>
      ))}
    </div>
  )
}
