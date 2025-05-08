import * as React from "react"

export interface TestimonialData {
  name: string
  username: string
  testimonial: string
}

interface TestimonialItemProps {
  data: TestimonialData
}

export function TestimonialItem({
  data,
}: TestimonialItemProps): React.ReactElement {
  const { name, testimonial, username } = data

  return (
    <div className="flex flex-col justify-start items-start border border-border bg-surface rounded-2xl p-3 w-[360px] h-full cursor-pointer transition-all duration-300 hover:scale-95 text-sm">
      <div className="flex items-center gap-2">
        <div className="flex flex-col">
          <span className="font-medium">{name}</span>
          <span className="text-foreground/60">@{username}</span>
        </div>
      </div>
      <p className="text-foreground/80 leading-relaxed! line-clamp-3 text-pretty mt-4">
        {testimonial}
      </p>
    </div>
  )
}
