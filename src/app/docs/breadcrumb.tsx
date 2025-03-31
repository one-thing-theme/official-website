import Link from 'next/link'
import * as React from 'react'
import { getBreadcrumb } from './docs-service'

type BreadcrumbProps = {
  slug: string[] | undefined
}

export async function Breadcrumb({
  slug,
}: BreadcrumbProps): Promise<React.ReactElement> {
  const { title, link } = await getBreadcrumb(slug)

  return (
    <div className="flex items-center w-full text-sm text-foreground/60 gap-1">
      <Link
        href={'/docs'}
        className="transition-all duration-300 hover:text-foreground"
      >
        Docs
      </Link>

      <i className="fi fi-rr-angle-small-right" />

      <Link
        href={link}
        className="transition-all duration-300 hover:text-foreground"
      >
        {title}
      </Link>
    </div>
  )
}
