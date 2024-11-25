import { WaitlistSection } from '@features/landing'
import * as defaultMetadata from '@shared/libs/shared-metadata'
import { Metadata } from 'next'
import * as React from 'react'

export const metadata: Metadata = {
  title: 'Brook Code Theme',
  description:
    'The best clean code editor theme that combine simplicity and clean look',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Brook Code Theme',
    description:
      'The best clean code editor theme that combine simplicity and clean look',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Brook Code Theme',
    description:
      'The best clean code editor theme that combine simplicity and clean look',
  },
}

export default function LandingPage(): React.ReactElement {
  return (
    <main className="flex flex-col">
      <WaitlistSection />
    </main>
  )
}
