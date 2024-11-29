import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

export interface ChangelogData {
  title: string
  date: string
  image: string
  description: string
  url: string
}

interface ChangelogItemProps {
  data: ChangelogData
}

export function ChangelogItem({
  data,
}: ChangelogItemProps): React.ReactElement {
  const { title, date, image, description, url } = data

  return (
    <Link
      href={url}
      target="_blank"
      className="flex flex-col gap-4 bg-surface border border-border rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="flex flex-col tablet:flex-row gap-2 tablet:items-center justify-between">
        <span className="font-medium">{title}</span>
        <span className="text-sm text-foreground/50 group-hover:text-foreground">
          {date}
        </span>
      </div>

      <picture className="relative w-full h-[180px] tablet:h-[312px] overflow-hidden rounded-xl border border-border">
        <Image src={image} alt={title} fill className="object-cover" />
      </picture>

      <p className="text-sm text-foreground/80 !leading-relaxed">
        {description}
      </p>
    </Link>
  )
}
