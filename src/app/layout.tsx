import * as React from 'react'
import type { Metadata } from 'next'
import '@shared/styles/globals.css'
import { fonts } from '@shared/fonts'
import { config, sharedMetadata } from '@shared/libs'
import {
  PosthogProvider,
  AnimationProvider,
  ThemeProvider,
} from '@shared/providers'
import { Header, Sonner, Footer } from '@shared/components'

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Brook Code Theme',
  description:
    'The best clean code editor theme that combine simplicity and clean look',
  applicationName: 'Brook Code Theme',
  alternates: {},
  keywords: [
    'Brook Code Theme',
    'Brook Code',
    'Brook',
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
    title: 'Brook Code Theme',
    description:
      'The best clean code editor theme that combine simplicity and clean look',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Brook Code Theme',
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
      className={`${fonts.geistSans.variable} ${fonts.geistMono.variable}`}
    >
      <PosthogProvider>
        <AnimationProvider>
          <body suppressHydrationWarning>
            <ThemeProvider
              enableSystem
              attribute={'class'}
              defaultTheme="system"
              disableTransitionOnChange
            >
              <Header />
              {children}
              <Footer />
              <Sonner />
            </ThemeProvider>
          </body>
        </AnimationProvider>
      </PosthogProvider>
    </html>
  )
}
