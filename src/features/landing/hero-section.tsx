import { Button, SectionLabel } from "@shared/components";

export function HeroSection() {
  return (
    <section
      className="container mx-auto flex flex-col items-center px-5 tablet:px-0 py-28 tablet:pt-52"
      id="hero"
    >
      <SectionLabel>New release - bat supported.</SectionLabel>

      <h2 className="mt-8 text-balance text-center font-medium tablet:text-5xl text-3xl text-foreground leading-tight">
        The code themes <br className="tablet:block hidden" />
        for simplicity
      </h2>

      <p className="mt-6 laptop:w-5/12 tablet:w-8/12 text-pretty text-center text-foreground/60 leading-7">
        Powering your coding productivity with simple design.{" "}
        <br className="tablet:block hidden" />
        Never miss the code from color distractions.
      </p>

      <div className="mt-16 flex items-center gap-3">
        <Button asChild className="transition-all duration-300 hover:scale-95">
          <a href={"/#get-started"}>Download</a>
        </Button>
        <Button
          asChild
          className="transition-all duration-300 hover:scale-95"
          variant={"secondary"}
        >
          <a
            href={"https://github.com/one-thing-theme"}
            rel="noopener"
            target="_blank"
          >
            Github
          </a>
        </Button>
      </div>
    </section>
  );
}
