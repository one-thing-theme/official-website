import { SectionLabel, Button } from "@shared/components"
import { Link } from "react-router"

export function HeroSection() {
  return (
    <section
      className="flex flex-col items-center py-28 tablet:pt-52 container mx-auto px-5 tablet:px-0"
      id="hero"
    >
      <SectionLabel>New release - bat supported.</SectionLabel>

      <h2 className="text-3xl tablet:text-5xl text-foreground font-medium leading-tight text-balance text-center mt-8">
        The code themes <br className="hidden tablet:block" />
        for simplicity
      </h2>

      <p className="leading-7 tablet:w-8/12 laptop:w-5/12 text-center text-foreground/60 mt-6 text-pretty">
        Powering your coding productivity with simple design.{" "}
        <br className="hidden tablet:block" />
        Never miss the code from color distractions.
      </p>

      <div className="flex items-center mt-16 gap-3">
        <Button asChild className="transition-all duration-300 hover:scale-95">
          <Link to={"/#get-started"}>Download</Link>
        </Button>
        <Button
          variant={"secondary"}
          asChild
          className="transition-all duration-300 hover:scale-95"
        >
          <Link to={"https://github.com/one-thing-theme"} target="_blank">
            Github
          </Link>
        </Button>
      </div>
    </section>
  )
}
