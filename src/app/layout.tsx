import * as React from 'react'
import type { Metadata } from 'next'
import '@shared/styles/globals.css'
import * as fonts from '@shared/fonts'
import config from '@shared/libs/config'
import * as defaultMetadata from '@shared/libs/shared-metadata'
import { ThemeProvider } from '@shared/providers/theme-provider'
import { QueryProvider } from '@shared/providers/query-provider'
import { Sonner } from '@shared/components/ui/sonner'
import { PosthogProvider } from '@shared/providers/posthog-provider'
import { Header } from '@shared/components/common/header'
import { Footer } from '@shared/components/common/footer'
import { AnimationProvider } from '@shared/providers/animation-provider'

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
  metadataBase: new URL(config.app.host),
  verification: {
    google: config.verification.google,
  },
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <PosthogProvider>
        <AnimationProvider>
          <body
            className={`${fonts.geistSans.variable} ${fonts.geistMono.variable}`}
            suppressHydrationWarning
          >
            <ThemeProvider
              enableSystem
              attribute={'class'}
              defaultTheme="system"
              disableTransitionOnChange
            >
              <QueryProvider>
                <>
                  <Header />
                  {children}
                  <Footer />
                  <Sonner />
                </>
              </QueryProvider>
            </ThemeProvider>
          </body>
        </AnimationProvider>
      </PosthogProvider>
    </html>
  )
}
