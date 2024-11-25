import * as React from 'react'
import { WaitListForm } from './waitlist-form'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@shared/components/ui/tooltip'
import Link from 'next/link'
import { Meteors } from '@shared/components/ui/meteors'
import { DynamicLogo } from '@shared/components/dynamic-logo'
import { Spotlight } from '@shared/components/ui/spotlight'

export function WaitlistSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center mx-auto container px-5 tablet:px-0 py-20 tablet:pt-36 tablet:pb-10 relative">
      <div className="flex flex-col items-center tablet:w-5/12 w-full relative">
        <div className="flex">
          <DynamicLogo />
        </div>

        <h2 className="flex flex-col items-center text-3xl tablet:text-5xl !leading-tight font-medium text-center text-balance mt-10">
          <span>Join the waitlist for</span>
          <span className="font-mono">{'{code_theme}'}</span>
        </h2>

        <p className="!leading-relaxed text-foreground/60 text-center w-full tablet:w-10/12 mt-6">
          Brook code theme is new simplify and clean code editor theme for your
          favorite code editor, join the waiting list now.
        </p>

        <div className="flex w-full tablet:w-9/12 mx-auto mt-20">
          <WaitListForm />
        </div>

        <div className="flex flex-col mt-36">
          <p className="text-center !leading-relaxed">
            Design & develop by{' '}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href={'https://nyomansunima.one?ref=brookcode'}
                    target="_blank"
                    className="font-medium"
                  >
                    @nyomansunima
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  The special authors for this project
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>{' '}
            in Bali, Indonesia
            <br />
            Ship for global audiences.
          </p>
        </div>
      </div>

      <Spotlight className="-top-40 left-0 tablet:left-60 tablet:-top-20" />
      <Meteors number={18} />
    </section>
  )
}
