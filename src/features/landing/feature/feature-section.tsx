'use client'

import { SectionLabel } from '@shared/components'
import * as React from 'react'
import { FeatureItem, FeatureItemData } from './feature-item'
import jsonData from './data.json'
import { motion } from 'motion/react'

const featureList = jsonData.features as FeatureItemData[]

export function FeatureSection(): React.ReactElement {
  return (
    <section className="flex py-20 tablet:py-36 container mx-auto px-5 tablet:px-0">
      <div className="flex flex-col items-center mx-auto w-full">
        <SectionLabel>Built on Features</SectionLabel>

        <motion.h2
          initial={{ opacity: 0, y: 200, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          className="text-3xl tablet:text-5xl text-foreground font-medium !leading-tight text-balance text-center mt-8 tablet:w-7/12"
        >
          Charge your coding process with ease and simplicity
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          className="flex items-center mt-20 tablet:mt-36 tablet:w-9/12"
        >
          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-x-7 tablet:gap-y-16 gap-y-3">
            {featureList.map((data, index) => (
              <FeatureItem data={data} key={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
