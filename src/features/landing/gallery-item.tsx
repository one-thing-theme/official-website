import * as React from "react"

interface GalleryItemProps {
  image: string
}

export function GalleryItem({ image }: GalleryItemProps): React.ReactElement {
  return (
    <div className="flex justify-center items-center border border-border bg-surface rounded-2xl p-2 w-[300px] tablet:w-[600px] h-full cursor-pointer transition-all duration-300 hover:scale-95">
      <picture className="w-full h-full object-cover overflow-hidden rounded-xl border border-border relative">
        <img src={image} alt="Gallery" className="object-cover" />
      </picture>
    </div>
  )
}
