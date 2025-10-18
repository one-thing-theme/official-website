import { SectionLabel } from "@shared/components";
import { ChangelogList } from "./changelog-list";

export function ChangelogSection() {
  return (
    <section className="container mx-auto flex flex-col items-center px-5 tablet:px-0 py-28">
      <SectionLabel>What’s new</SectionLabel>

      <h2 className="mt-8 tablet:w-7/12 text-balance text-center font-medium text-foreground text-xl leading-tight!">
        Changelog
      </h2>

      <p className="mt-6 tablet:w-5/12 text-pretty text-center text-foreground/60 leading-relaxed!">
        New updates & improvements, including the bug fixes and features
        releases. You can find all of the versions with the release notes
      </p>

      <div className="mt-16 flex tablet:w-6/12 w-full items-center tablet:px-10">
        <ChangelogList />
      </div>
    </section>
  );
}
