import { mergeClass } from "@shared/libs";
import type { ImgHTMLAttributes } from "react";

type ArticleContentProps = {
  children: React.ReactNode;
  className?: string;
};

type ContentImageProps = ImgHTMLAttributes<HTMLImageElement> & {};

export function ArticleContent({ children, className }: ArticleContentProps) {
  return (
    <article className={`${mergeClass("prose", className)}`}>
      {children}
    </article>
  );
}

export function ContentImage({ src, alt, className }: ContentImageProps) {
  return (
    <div
      className={`${mergeClass(
        "my-4 flex cursor-pointer rounded-2xl border border-border bg-ambient p-1",
        className
      )}`}
    >
      <picture className="not-prose relative h-[200px] tablet:h-[400px] w-full overflow-hidden rounded-xl">
        <img
          alt={alt}
          className="not-prose object-cover transition-all duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={src}
        />
      </picture>
    </div>
  );
}
