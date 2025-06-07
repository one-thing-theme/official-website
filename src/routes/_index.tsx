import {
  CTASection,
  FAQSection,
  FeatureSection,
  GallerySection,
  HeroSection,
  TestimonialSection,
} from "@features/landing"
import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "Minimal & Simple productivity Theme | One Thing Theme",
    description:
      "The best clean code editor theme that combine simplicity and clean look",
  })
}

export default function LandingPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <GallerySection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
