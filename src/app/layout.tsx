import * as React from 'react'
import type { Metadata } from 'next'
import '@shared/styles/globals.css'
import { config, sharedMetadata, fonts } from '@shared/libs'
import { PosthogProvider, AnimationProvider } from '@shared/providers'
import { Header, Sonner, Footer } from '@shared/components'

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'One Thing Theme',
  description:
    'The best clean code editor theme that combine simplicity and clean look',
  applicationName: 'One Thing Theme',
  alternates: {},
  keywords: [
    'One Thing Theme',
    'Code',
    'Theme',
    'Editor',
    'Code Editor',
    'Code Highlight',
  ],
  authors: [
    { name: 'Nyoman Sunima', url: 'https://nyomansunima.one' },
    { name: 'Weecraft', url: 'https://weecraft.club' },
  ],
  publisher: 'Nyoman Sunima',
  creator: 'Nyoman Sunima',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Minimal & Simple productivity Theme | One Thing Theme',
    description:
      'The best clean code editor theme that combine simplicity and clean look',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Minimal & Simple productivity Theme | One Thing Theme',
    description:
      'The best clean code editor theme that combine simplicity and clean look',
  },
  metadataBase: new URL(config.app.host),
  verification: {
    google: config.verification.google,
  },
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>): React.ReactElement {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fonts.inter.variable} ${fonts.jetBrainsMono.variable}`}
    >
      <PosthogProvider>
        <AnimationProvider>
          <body suppressHydrationWarning>
            <Header />
            {children}
            <Footer />
            <Sonner />
          </body>
        </AnimationProvider>
      </PosthogProvider>
    </html>
  )
}
