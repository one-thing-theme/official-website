import { mergeClass } from "@shared/libs"
import type { ImgHTMLAttributes } from "react"

interface ArticleContentProps {
  children: React.ReactNode
  className?: string
}

type ContentImageProps = ImgHTMLAttributes<HTMLImageElement> & {}

export function ArticleContent({ children, className }: ArticleContentProps) {
  return (
    <article className={`${mergeClass("prose", className)}`}>
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
