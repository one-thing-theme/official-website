import { SectionLabel } from "@shared/components"
import { Link } from "react-router"

interface Item {
  label: string
  url: string
}

const items: Item[] = [
  {
    label: "Vscode",
    url: "https://marketplace.visualstudio.com/items?itemName=weecraft.brook-code-theme",
  },
  {
    label: "Zed",
    url: "https://zed.dev/extensions?query=one+thing+theme",
  },
  {
    label: "Ohmyposh",
    url: "https://github.com/one-thing-theme/oh-my-posh",
  },
  {
    label: "Ghostty",
    url: "https://github.com/one-thing-theme/ghostty",
  },
  {
    label: "Bat",
    url: "https://github.com/one-thing-theme/bat",
  },
]

export function CTASection() {
  return (
    <section
      className="flex flex-col items-center py-28 container mx-auto px-5 tablet:px-0"
      id="get-started"
    >
      <SectionLabel>Get it now.</SectionLabel>

      <h2 className="text-3xl tablet:text-5xl text-foreground font-medium leading-tight text-balance text-center mt-8">
        Code on your <br className="hidden tablet:block" />
        clean visuals
      </h2>

      <p className="leading-7 text-center text-foreground/60 mt-6 text-pretty">
        Start code on your own code editor with our code theme,{" "}
        <br className="hidden tablet:block" />
        try the clean looks and also the simplicity.
      </p>

      <div className="flex justify-center mt-16">
        <div className="flex flex-col gap-3">
          {items.map(({ label, url }, i) => (
            <Link
              to={url}
              key={i}
              target="_blank"
              className="flex items-center gap-2"
            >
              <i className="fi fi-sr-bullet text-foreground/40" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
