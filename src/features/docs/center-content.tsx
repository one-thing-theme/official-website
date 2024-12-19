import * as React from 'react'
import { Breadcrumb } from './breadcrumb'

type CenterContentProps = {
  children: React.ReactNode
  slug: string[] | undefined
}

export function CenterContent({
  children,
  slug,
}: CenterContentProps): React.ReactElement {
  return (
    <div className="flex container mx-auto">
      <div className="flex flex-col w-9/12 mx-auto gap-6 pb-28 tablet:pb-36">
        <Breadcrumb slug={slug} />
        <div className="flex w-full">{children}</div>
      </div>
    </div>
  )
}
