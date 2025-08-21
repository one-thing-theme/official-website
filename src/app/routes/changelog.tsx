import { ChangelogSection } from "@features/changelog"
import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "What's new | One thing theme",
    description:
      "See what's new in the progress, we always ship and fix in a weeks",
  })
}

export default function ChangelogPage() {
  return (
    <main className="flex flex-col">
      <ChangelogSection />
    </main>
  )
}
