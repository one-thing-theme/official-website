'use client'

import { SectionLabel, MarqueeAnimation } from '@shared/components'
import * as React from 'react'
import { GalleryItem } from './gallery-item'
import jsonData from './data.json'
import { motion } from 'motion/react'

const galleries: string[] = jsonData.galleries as string[]

export function GallerySection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center py-20 tablet:py-36">
      <div className="flex container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          className="flex flex-col items-center mx-auto w-full"
        >
          <SectionLabel>How it’s live</SectionLabel>

          <h2 className="text-3xl tablet:text-5xl text-foreground font-medium !leading-tight text-balance text-center mt-8 tablet:w-7/12">
            See your editor with new clean looks
          </h2>

          <p className="!leading-relaxed tablet:w-5/12 text-center text-foreground/60 mt-6 text-pretty">
            Design with simplicity and clean look principle allow you to moving
            forward and focus on your own code, without distractions and high
            content readability.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
        viewport={{ once: true, margin: '-20% 0px' }}
        className="flex flex-col justify-center items-center w-full relative overflow-hidden h-[200px] tablet:h-[400px] mt-20 tablet:mt-36"
      >
        <MarqueeAnimation className="h-full gap-10" pauseOnHover>
          {galleries.map((image, index) => (
            <GalleryItem image={image} key={index} />
          ))}
        </MarqueeAnimation>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background "></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background"></div>
      </motion.div>
    </section>
  )
}
