import { ChangelogSection } from "@features/changelog";
import { generatedMetadata } from "@shared/libs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/changelog")({
  head: () => ({
    meta: generatedMetadata({
      title: "What's new | One thing theme",
      description:
        "See what's new in the progress, we always ship and fix in a weeks",
    }),
  }),
  component: PageComponent,
});

function PageComponent() {
  return (
    <main className="flex flex-col">
      <ChangelogSection />
    </main>
  );
}
