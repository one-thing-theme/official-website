'use client'

import { SectionLabel, Button, Meteors } from '@shared/components'
import * as React from 'react'
import { ImageShot } from './image-shot'
import { motion } from 'motion/react'
import { useLenis } from 'lenis/react'

export function HeroSection(): React.ReactElement {
  const lenis = useLenis()

  const goToGetStarted = () => {
    lenis?.scrollTo('#get-started')
  }

  return (
    <section
      className="flex py-36 container mx-auto px-5 tablet:px-0 relative"
      suppressHydrationWarning
    >
      <div className="flex flex-col items-center mx-auto w-full relative z-30">
        <SectionLabel>New Release: Zed Theme</SectionLabel>

        <motion.h2
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          className="text-3xl tablet:text-5xl text-foreground font-medium leading-tight! text-balance text-center mt-8 tablet:w-7/12"
        >
          The code editor themes for simplicity & productivity
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          className="leading-relaxed! tablet:w-5/12 text-center text-foreground/60 mt-6 text-pretty"
        >
          Powering your coding productivity with simple design and elegant view
          for all of your code editor, Never miss the important things from
          color distractions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          className="flex items-center mt-16"
        >
          <Button
            className="transition-all duration-300 hover:-translate-y-1"
            onClick={goToGetStarted}
          >
            Download Now
            <i className="fi fi-rr-arrow-right" />
          </Button>
        </motion.div>

        <div className="flex items-center mt-20 tablet:mt-36 w-full">
          <ImageShot />
        </div>
      </div>

      <Meteors />
    </section>
  )
}
