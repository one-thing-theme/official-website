import { ArticleContent } from "@shared/components"
import { DocsMarkdownContent } from "./docs-markdown-content"
import type { DocDetail } from "./docs-service"

interface Props {
  doc: DocDetail
}

export function DocsContent({ doc }: Props) {
  const { content, data } = doc

  return (
    <article className="flex flex-col">
      <ArticleContent>
        <h1>{data.title}</h1>
        <p className="text-foreground/60 -mt-2!">{data.description}</p>

        <DocsMarkdownContent content={content} />
      </ArticleContent>
    </article>
  )
}
