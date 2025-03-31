'use client'

import * as React from 'react'
import '@shared/styles/globals.css'
import { Button } from '@shared/components'
import { fonts } from '@shared/libs'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fonts.inter.variable} ${fonts.jetBrainsMono.variable}`}
      >
        <main className="flex flex-col">
          <section className="flex flex-col container mx-auto px-5 tablet:px-0">
            <div className="flex flex-col items-center text-center w-7/12">
              <h1 className="leading-tight! text-3xl tablet:text-4xl text-center font-medium">
                Something wrong!
              </h1>

              <div className="mt-16 flex justify-center">
                <Button variant={'text'} size={'lg'} onClick={() => reset()}>
                  Try again
                </Button>
              </div>
            </div>
          </section>
        </main>
      </body>
    </html>
  )
}
