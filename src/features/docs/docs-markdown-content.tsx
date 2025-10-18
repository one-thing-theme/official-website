import { ContentImage } from "@shared/components";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

type Props = {
  content: any;
};

export function DocsMarkdownContent({ content }: Props) {
  return (
    <ReactMarkdown
      components={{
        img: ({ ...props }) => <ContentImage {...props} />,
      }}
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
    >
      {content}
    </ReactMarkdown>
  );
}
