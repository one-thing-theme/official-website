import { SectionLabel } from '@shared/components/common/section-label'
import * as React from 'react'
import { AboutImage } from './about-image'

export function AboutSection(): React.ReactElement {
  return (
    <section className="flex py-20 tablet:py-36 container mx-auto px-5 tablet:px-0">
      <div className="flex flex-col items-center mx-auto w-full">
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
      </div>
    </section>
  )
}
