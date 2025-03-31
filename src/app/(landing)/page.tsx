import { sharedMetadata } from '@shared/libs'
import { Metadata } from 'next'
import * as React from 'react'
import { HeroSection } from './hero-section'
import { FeatureSection } from './feature-section'
import { GallerySection } from './gallery-section'
import { AboutSection } from '@app/about-section'
import { TestimonialSection } from './testimonial-section'
import { PricingSection } from './pricing-section'
import { FAQSection } from './faq-section'
import { CTASection } from './cta-section'

export const metadata: Metadata = {
  title: 'Minimal & Simple productivity Theme | One Thing Theme',
  description:
    'The best clean code editor theme that combine simplicity and clean look',
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
