import { ChangelogSection } from '@features/changelog'
import * as defaultMetadata from '@shared/libs/shared-metadata'
import { Metadata } from 'next'
import * as React from 'react'

export const metadata: Metadata = {
  title: "What's new",
  description:
    "See what's new in the progress, we always ship and fix in a weeks",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "What's new",
    description:
      "See what's new in the progress, we always ship and fix in a weeks",
  },
  twitter: {
    ...defaultMetadata.twitter,
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
