import Link from 'next/link'
import * as React from 'react'
import { getToc } from './docs-service'
import { mergeClass } from '@shared/utils'

type TableOfContentProps = {
  slug: string[] | undefined
}

export async function TableOfContent({
  slug,
}: TableOfContentProps): Promise<React.ReactElement> {
  const toc = await getToc(slug)

  return (
    <div className="flex flex-col w-full">
      <span className="text-sm px-3 font-medium">On this page</span>

      <div className="flex flex-col text-sm w-full mt-3">
        <ul className="flex flex-col w-full">
          {toc.map((item, index) => (
            <li
              key={index}
              className={mergeClass(
                'text-foreground/60 hover:text-foreground group flex h-8 px-3',
                item.depth === 3 && 'ml-4',
              )}
            >
              <Link
                href={item.href}
                className="flex w-full h-full items-center"
              >
                {item.value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
