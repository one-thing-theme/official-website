"use client"

import { MarqueeAnimation, SectionLabel } from "@shared/components"
import * as React from "react"
import { TestimonialItem } from "./testimonial-item"
import { motion } from "motion/react"

const testimonials = [
  {
    name: "Brooklyn Simmons",
    username: "brsimons",
    testimonial:
      "The color palette is vibrant but not overwhelming, making it perfect for long hours of work.",
  },
  {
    name: "Darrell Steward",
    username: "darrellsstew",
    testimonial:
      "It strikes the perfect balance between aesthetics and readability. My code has never looked so organized and appealing!",
  },
  {
    name: "Devon Lane",
    username: "devonlanes99",
    testimonial:
      "I’ve tried dozens of themes, but nothing compares to the seamless blend of style and functionality offered by these themes. Ghost and Brook are now my go-to for VSCode and JetBrains.",
  },
  {
    name: "Robert Fox",
    username: "robertfox33",
    testimonial:
      "The subtle contrasts and thoughtful design in Brook Code Theme are exceptional. Debugging has become a lot easier because I can identify issues quickly thanks to the clear color differentiation.",
  },
]

export function TestimonialSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 tablet:py-36 container mx-auto px-5 tablet:px-0">
      <div className="flex container mx-0">
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          className="flex flex-col items-center mx-auto w-full"
        >
          <SectionLabel>Wall of love</SectionLabel>

          <h2 className="text-3xl tablet:text-5xl text-foreground font-medium leading-tight! text-balance text-center mt-8 tablet:w-7/12">
            Loved by developers around the world
          </h2>

          <p className="leading-relaxed! tablet:w-5/12 text-center text-foreground/60 mt-6 text-pretty">
            Developers around the world loves simplicity and clean looks, they
            love us and here’s what they say about us.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        className="flex flex-col justify-center items-center w-full relative overflow-hidden h-[360px] mt-36"
      >
        <MarqueeAnimation className="gap-5" pauseOnHover>
          {testimonials.map((testi, index) => (
            <TestimonialItem data={testi} key={index} />
          ))}
        </MarqueeAnimation>
        <MarqueeAnimation className="gap-5" pauseOnHover reverse>
          {testimonials.map((testi, index) => (
            <TestimonialItem data={testi} key={index} />
          ))}
        </MarqueeAnimation>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-background "></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-background"></div>
      </motion.div>
    </section>
  )
}
