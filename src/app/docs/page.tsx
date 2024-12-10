import { sharedMetadata } from '@shared/libs'
import { Metadata } from 'next'
import * as React from 'react'

export const metadata: Metadata = {
  title: 'Docs',
  description:
    'Read the docs to find the tips and tricks to get started with brook code theme',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Docs',
    description:
      'Read the docs to find the tips and tricks to get started with brook code theme',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Docs',
    description:
      'Read the docs to find the tips and tricks to get started with brook code theme',
  },
}

export default function TermsPage(): React.ReactElement {
  return (
    <main className="flex flex-col">
      <section className="flex py-36 container mx-auto px-5 tablet:px-0">
        <div className="flex tablet:w-6/12 mx-auto w-full"></div>
      </section>
    </main>
  )
}
