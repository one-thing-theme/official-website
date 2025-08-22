import { SectionLabel } from "@shared/components"
import * as React from "react"
import { FeatureItem } from "./feature-item"
import { motion } from "motion/react"

const featureList = [
  {
    icon: "fi fi-rr-moon-stars",
    title: "Support light & dark mode",
    description:
      "Built to adapt for your environment that works both in day and night.",
  },
  {
    icon: "fi fi-rr-square-code",
    title: "Cross editor support",
    description:
      "Available on any code editor like vscode, zed, jetbrains, and code highlight.",
  },
  {
    icon: "fi fi-rr-eye",
    title: "Optimize readabilities",
    description:
      "Built with human readability contrast for both light and dark mode.",
  },
  {
    icon: "fi fi-rr-waveform",
    title: "Less distractions & focus",
    description: "Setup your editor with our standard for less distractions.",
  },
  {
    icon: "fi fi-rr-pen-field",
    title: "Customizable",
    description:
      "Do whatever you want, tweak it or change it whatever you want.",
  },
  {
    icon: "fi fi-rr-palette",
    title: "Less colors & simplicity",
    description:
      "Using only black, white, and gray combination colors for simplicity.",
  },
]

export function FeatureSection(): React.ReactElement {
  return (
    <section className="flex py-20 tablet:py-36 container mx-auto px-5 tablet:px-0">
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        className="flex flex-col items-center mx-auto w-full"
      >
        <SectionLabel>Built on Features</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl text-foreground font-medium leading-tight! text-balance text-center mt-8 tablet:w-10/12 laptop:w-7/12">
          Charge your code
          <br />
          with simplicity
        </h2>

        <p className="leading-7 tablet:w-8/12 laptop:w-5/12 text-center text-foreground/60 mt-6 text-pretty">
          Batteries included and help you speed
          <br />
          up your development process.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          className="flex items-center mt-20 tablet:mt-36 tablet:w-10/12 laptop::w-9/12"
        >
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-7 tablet:gap-y-16 gap-y-3">
            {featureList.map((data, index) => (
              <FeatureItem data={data} key={index} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
