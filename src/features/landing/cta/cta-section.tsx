import { SectionLabel } from '@shared/components/common/section-label'
import { Button } from '@shared/components/ui/button'
import Link from 'next/link'
import * as React from 'react'

export function CTASection(): React.ReactElement {
  return (
    <section
      className="flex py-20 tablet:py-36 container mx-auto px-5 tablet:px-0"
      id="get-started"
    >
      <div className="flex flex-col items-center mx-auto w-full">
        <SectionLabel>Get Started</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl text-foreground font-medium !leading-tight text-balance text-center mt-8 tablet:w-7/12">
          Code on your editor with clean visuals
        </h2>

        <p className="!leading-relaxed tablet:w-5/12 text-center text-foreground/60 mt-6 text-pretty">
          Start code on your own code editor with our code theme, try the clean
          looks and also the simplicity.
        </p>

        <div className="flex flex-wrap justify-center items-center mt-16 tablet:w-5/12 gap-x-4 tablet:gap-y-3">
          <Button variant={'text'} className="text-foreground/50">
            Jetbrains (coming soon)
          </Button>
          <Button
            variant={'text'}
            className="transition-all duration-300 hover:-translate-y-1"
          >
            <Link
              href={
                'https://marketplace.visualstudio.com/items?itemName=weecraft.brook-code-theme'
              }
              target="_blank"
            >
              Visual studio code
            </Link>
          </Button>
          <Button
            variant={'text'}
            className="transition-all duration-300 hover:-translate-y-1"
          >
            <Link
              href={'https://zed.dev/extensions?query=brook+code+theme'}
              target="_blank"
            >
              Zed
            </Link>
          </Button>
          <Button variant={'text'} className="text-foreground/50">
            Syntax highlight (coming soon)
          </Button>
        </div>
      </div>
    </section>
  )
}
