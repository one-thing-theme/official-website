import {
  AboutSection,
  CTASection,
  FAQSection,
  FeatureSection,
  GallerySection,
  HeroSection,
  PricingSection,
  TestimonialSection,
} from '@features/landing'
import { sharedMetadata } from '@shared/libs'
import { Metadata } from 'next'
import * as React from 'react'

export const metadata: Metadata = {
  title: 'Brook Code Theme',
  description:
    'The best clean code editor theme that combine simplicity and clean look',
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
}

export default function LandingPage(): React.ReactElement {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <GallerySection />
      <AboutSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
