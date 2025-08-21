import { SectionLabel } from "@shared/components"
import { Link } from "react-router"
import * as React from "react"
import { motion } from "motion/react"

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

export function CTASection(): React.ReactElement {
  return (
    <section
      className="flex py-20 tablet:py-36 container mx-auto px-5 tablet:px-0"
      id="get-started"
    >
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        className="flex flex-col items-center mx-auto w-full"
      >
        <SectionLabel>Get Started</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl text-foreground font-medium leading-tight! text-balance text-center mt-8 tablet:w-10/12 laptop:w-7/12">
          Code on your editor with clean visuals
        </h2>

        <p className="leading-relaxed! tablet:w-8/12 laptop:w-5/12 text-center text-foreground/60 mt-6 text-pretty">
          Start code on your own code editor with our code theme, try the clean
          looks and also the simplicity.
        </p>

        <div className="flex flex-col space-y-3 justify-center items-center mt-16 tablet:w-5/12 gap-x-4 tablet:gap-y-3">
          <ul className="flex flex-col gap-3">
            {items.map(({ label, url }, i) => (
              <li
                key={i}
                className="flex items-center transition-all duration-300 hover:-translate-y-1"
              >
                <Link
                  to={url}
                  target="_blank"
                  className="flex items-center gap-2 text-link cursor-pointer"
                >
                  <i className="fi fi-rr-circle-small" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <span className="text-foreground/50">Coming soon ...</span>
        </div>
      </motion.div>
    </section>
  )
}
