import { mergeClass } from "@shared/libs"
import type { ImgHTMLAttributes } from "react"

interface ArticleContentProps {
  children: React.ReactNode
  className?: string
}

type ContentImageProps = ImgHTMLAttributes<HTMLImageElement> & {}

export function ArticleContent({ children, className }: ArticleContentProps) {
  return (
    <article
      className={`${mergeClass(
        "prose dark:prose-invert prose-sm tablet:prose-base tablet:prose-p:text-base prose-headings:leading-tight! prose-h1:text-xl prose-h2:text-lg prose-h3:text-base tablet:prose-li:text-base max-w-none prose-headings:font-medium prose-strong:font-medium prose-neutral prose-code:font-mono prose-img:overflow-hidden prose-img:border prose-img:border-border prose-img:bg-ambient prose-img:rounded-xl prose-pre:bg-surface prose-pre:text-foreground prose-pre:border prose-pre:border-border prose-pre:font-medium overflow-hidden text-foreground prose-headings:text-foreground prose-a:text-foreground prose-strong:text-foreground prose-headings:text-balance! leading-7",
        className,
      )}`}
    >
      {children}
    </article>
  )
}

export function ContentImage({ src, alt, className }: ContentImageProps) {
  return (
    <div
      className={`${mergeClass(
        "flex rounded-2xl p-1 border border-border bg-ambient cursor-pointer my-4",
        className,
      )}`}
    >
      <picture className="relative w-full h-[200px] tablet:h-[400px] overflow-hidden rounded-xl not-prose">
        <img
          src={src}
          alt={alt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-300 hover:scale-105 not-prose"
        />
      </picture>
    </div>
  )
}
