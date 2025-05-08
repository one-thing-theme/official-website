"use client"

import { SectionLabel, Button } from "@shared/components"
import Link from "next/link"
import * as React from "react"
import { motion } from "motion/react"

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

        <h2 className="text-3xl tablet:text-5xl text-foreground font-medium leading-tight! text-balance text-center mt-8 tablet:w-7/12">
          Code on your editor with clean visuals
        </h2>

        <p className="leading-relaxed! tablet:w-5/12 text-center text-foreground/60 mt-6 text-pretty">
          Start code on your own code editor with our code theme, try the clean
          looks and also the simplicity.
        </p>

        <div className="flex flex-wrap justify-center items-center mt-16 tablet:w-5/12 gap-x-4 tablet:gap-y-3">
          <Button
            variant={"text"}
            className="transition-all duration-300 hover:-translate-y-1"
          >
            <Link
              href={
                "https://marketplace.visualstudio.com/items?itemName=weecraft.brook-code-theme"
              }
              target="_blank"
            >
              Visual studio code
            </Link>
          </Button>
          <Button
            variant={"text"}
            className="transition-all duration-300 hover:-translate-y-1"
          >
            <Link
              href={"https://zed.dev/extensions?query=brook+code+theme"}
              target="_blank"
            >
              Zed
            </Link>
          </Button>
          <Button
            variant={"text"}
            className="transition-all duration-300 hover:-translate-y-1"
          >
            <Link
              href={"https://github.com/one-thing-theme/oh-my-posh"}
              target="_blank"
            >
              Oh my posh
            </Link>
          </Button>
          <Button variant={"text"} className="text-foreground/50">
            Other (coming soon)
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
