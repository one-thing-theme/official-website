'use client'

import Image from 'next/image'
import * as React from 'react'
import { motion } from 'motion/react'

export function ImageShot(): React.ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
      viewport={{ once: true, margin: '-30% 0px' }}
      className="flex bg-surface border border-border p-2 rounded-2xl w-full tablet:w-10/12 tablet:h-[612px] h-[200px] mx-auto"
    >
      <picture className="bg-surface border border-border rounded-xl relative h-full w-full overflow-hidden">
        <Image
          src={
            'https://cdn.hashnode.com/res/hashnode/image/upload/v1732803074247/caca6311-7556-4993-a429-e8952b2ccd40.png'
          }
          alt="Brook Code Theme"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </picture>
    </motion.div>
  )
}
