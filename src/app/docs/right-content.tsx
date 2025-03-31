import * as React from 'react'
import { TableOfContent } from './table-of-content'

type RightContentProps = {
  slug: string[] | undefined
}

export function RightContent({ slug }: RightContentProps): React.ReactElement {
  return (
    <aside className="hidden laptop:flex flex-col h-full w-[480px] p-3 sticky top-28 overflow-y-auto">
      <TableOfContent slug={slug} />
    </aside>
  )
}
