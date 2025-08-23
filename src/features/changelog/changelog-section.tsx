import { SectionLabel } from "@shared/components"
import { ChangelogList } from "./changelog-list"

export function ChangelogSection() {
  return (
    <section className="flex flex-col items-center py-28 container mx-auto px-5 tablet:px-0">
      <SectionLabel>What’s new</SectionLabel>

      <h2 className="text-xl text-foreground font-medium leading-tight! text-balance text-center mt-8 tablet:w-7/12">
        Changelog
      </h2>

      <p className="leading-relaxed! tablet:w-5/12 text-center text-foreground/60 mt-6 text-pretty">
        New updates & improvements, including the bug fixes and features
        releases. You can find all of the versions with the release notes
      </p>

      <div className="flex items-center mt-16 w-full tablet:w-6/12 tablet:px-10">
        <ChangelogList />
      </div>
    </section>
  )
}
