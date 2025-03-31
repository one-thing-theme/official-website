'use client'

import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { motion } from 'motion/react'

const MotionLink = motion.create(Link)

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
    <MotionLink
      initial={{ opacity: 0, y: 200, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
      viewport={{ once: true, margin: '-20% 0px' }}
      href={url}
      target="_blank"
      className="flex flex-col gap-4 bg-surface border border-border rounded-2xl p-4 group"
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

      <p className="text-sm text-foreground/80 leading-relaxed!">
        {description}
      </p>
    </MotionLink>
  )
}
