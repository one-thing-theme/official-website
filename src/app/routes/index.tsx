import {
  CTASection,
  FAQSection,
  FeatureSection,
  HeroSection,
} from "@features/landing";
import { generatedMetadata } from "@shared/libs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title: "Minimal code theme | One Thing Theme",
      description:
        "The best clean code editor theme that combine simplicity and clean look",
    }),
  }),
  component: PageComponent,
});

function PageComponent() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
