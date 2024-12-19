import { ArticleContent } from '@shared/components'
import * as React from 'react'
import { getDocDetail } from './docs-service'

type DocsContentProps = {
  slug: string[] | undefined
}

export async function DocsContent({
  slug,
}: DocsContentProps): Promise<React.ReactElement> {
  const { content, frontmatter } = await getDocDetail(slug)
  return (
    <article className="flex flex-col">
      <ArticleContent>
        <h1>{frontmatter.title}</h1>
        <p className="text-foreground/60 !-mt-2">{frontmatter.description}</p>
        {content}
      </ArticleContent>
    </article>
  )
}
