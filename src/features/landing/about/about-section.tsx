'use client'

import { SectionLabel } from '@shared/components'
import * as React from 'react'
import { AboutImage } from './about-image'
import { motion } from 'motion/react'

export function AboutSection(): React.ReactElement {
  return (
    <section className="flex py-20 tablet:py-36 container mx-auto px-5 tablet:px-0">
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
        viewport={{ once: true, margin: '-20% 0px' }}
        className="flex flex-col items-center mx-auto w-full"
      >
        <SectionLabel>About</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl text-foreground font-medium !leading-tight text-balance text-center mt-8 tablet:w-7/12">
          We're open contributors dotted across the globe
        </h2>

        <p className="!leading-relaxed tablet:w-5/12 text-center text-foreground/60 mt-6 text-pretty">
          Our mission to create better code editor theme that allow to enhance
          the developer experiences and productivity.
        </p>

        <div className="flex justify-center items-center mt-20 tablet:mt-36 w-full tablet:w-9/12">
          <AboutImage />
        </div>
      </motion.div>
    </section>
  )
}
