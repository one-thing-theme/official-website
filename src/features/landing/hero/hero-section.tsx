import { SectionLabel } from '@shared/components/common/section-label'
import { Button } from '@shared/components/ui/button'
import * as React from 'react'
import { ImageShot } from './image-shot'

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex py-36 container mx-auto px-5 tablet:px-0">
      <div className="flex flex-col items-center mx-auto w-full">
        <SectionLabel>New Release: Zed Theme</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl text-foreground font-medium !leading-tight text-balance text-center mt-8 tablet:w-7/12">
          The code editor themes for simplicity & productivity
        </h2>

        <p className="!leading-relaxed tablet:w-5/12 text-center text-foreground/60 mt-6 text-pretty">
          Powering your coding productivity with simple design and elegant view
          for all of your code editor, Never miss the important things from
          color distractions.
        </p>

        <div className="flex items-center mt-16">
          <Button className="transition-all duration-300 hover:-translate-y-1">
            Download Now
            <i className="fi fi-rr-arrow-right" />
          </Button>
        </div>

        <div className="flex items-center mt-20 tablet:mt-36 w-full">
          <ImageShot />
        </div>
      </div>
    </section>
  )
}
