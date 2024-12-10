'use client'

import { Button, SectionLabel } from '@shared/components'
import Link from 'next/link'
import * as React from 'react'
import { motion } from 'motion/react'

export function PricingSection(): React.ReactElement {
  return (
    <section className="flex py-36 container mx-auto px-5 tablet:px-0">
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
        viewport={{ once: true, margin: '-20% 0px' }}
        className="flex flex-col items-center mx-auto w-full"
      >
        <SectionLabel>Pricing is shit</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl text-foreground font-medium !leading-tight text-balance text-center mt-8 tablet:w-7/12">
          It’s free, no need payment and shits
        </h2>

        <p className="!leading-relaxed tablet:w-5/12 text-center text-foreground/60 mt-6 text-pretty">
          We’re open source project that try to make the code editor experience
          better, try to build theme that works on every platforms to deliver
          great experiences and productivity.
        </p>

        <div className="flex flex-col tablet:flex-row items-center mt-16 gap-4">
          <Button
            className="transition-all duration-300 hover:-translate-y-1"
            asChild
          >
            <Link
              href={'https://github.com/orgs/brook-code-theme/discussions'}
              target="_blank"
            >
              Contribute now
              <i className="fi fi-rr-arrow-right" />
            </Link>
          </Button>
          <Button
            className="transition-all duration-300 hover:-translate-y-1"
            variant={'secondary'}
            asChild
          >
            <Link
              href={'https://github.com/sponsors/nyomansunima'}
              target="_blank"
            >
              Donate to support
              <i className="fi fi-rr-arrow-right" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
