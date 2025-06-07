import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { ContentImage } from "@shared/components"

type Props = {
  content: any
}

export function DocsMarkdownContent({ content }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        img: ({ ...props }) => {
          return <ContentImage {...props} />
        },
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
