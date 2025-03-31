import { sharedMetadata } from '@shared/libs'
import { Metadata } from 'next'
import * as React from 'react'
import { ChangelogSection } from './changelog-section'

export const metadata: Metadata = {
  title: "What's new",
  description:
    "See what's new in the progress, we always ship and fix in a weeks",
  openGraph: {
    ...sharedMetadata.openGraph,
    title: "What's new",
    description:
      "See what's new in the progress, we always ship and fix in a weeks",
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: "What's new",
    description:
      "See what's new in the progress, we always ship and fix in a weeks",
  },
}

export default function ChangelogPage(): React.ReactElement {
  return (
    <main className="flex flex-col">
      <ChangelogSection />
    </main>
  )
}
