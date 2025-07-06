import { SectionLabel, Accordion } from "@shared/components"
import * as React from "react"
import { FAQItem } from "./faq-item"

import { motion } from "motion/react"

const faqs = [
  {
    title: "What is brook code theme?",
    content:
      "A modern and aesthetically pleasing theme designed for code editors like VSCode, Zed, and JetBrains. It enhances code readability and aesthetics while providing seamless support for syntax highlighting.",
  },
  {
    title: "What editors are supported?",
    content:
      "Currently, Brook Code Theme supports: Visual Studio Code (VSCode), Zed Editor, JetBrains IDEs (e.g., IntelliJ IDEA, WebStorm, PyCharm, etc.)It also supports code highlighting for markdown, blogs, or documentation tools. ",
  },
  {
    title: "Is this theme free?",
    content:
      "Yes, Brook Code Theme is free to use. However, there may be premium features or variations in the future for enhanced customization.",
  },
  {
    title: "How can i install the theme?",
    content:
      "You can install the theme by following the instructions provided in the documentation.",
  },
  {
    title: "Does the theme support customizations?",
    content:
      "Yeah, you can customize the theme to your liking. Check the documentation for customization options.",
  },
  {
    title: "What makes this theme unique?",
    content:
      "The theme built with simple colors that combine black, white and gray to create a clean and professional look. It also includes a dark mode for those who prefer a darker interface.",
  },
  {
    title: "Can i contribute to the project?",
    content:
      "Yes, contributions are welcome! You can contribute by: Suggesting new features or improvements, Reporting bugs or inconsistencies, Submitting code updates or patches.",
  },
  {
    title: "Are there plans for other editor support?",
    content:
      "Yes, future plans include expanding Brook Code Theme support to other popular editors and IDEs such as Sublime Text, Atom, and Vim. Let us know which editor you’d like to see supported next!",
  },
  {
    title: "How can I report an issue or give feedback?",
    content:
      "You can report issues or provide feedback by creating a new issue in the project's GitHub repository. We appreciate your input!",
  },
]

export function FAQSection(): React.ReactElement {
  return (
    <section className="flex py-12 tablet:py-36 container mx-auto px-5 tablet:px-0">
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        className="flex flex-col items-center mx-auto w-full"
      >
        <SectionLabel>FAQs</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl text-foreground font-medium leading-tight! text-balance text-center mt-8 tablet:w-10/12 laptop:w-7/12">
          Most asked questions
        </h2>

        <p className="leading-relaxed! tablet:w-8/12 laptop:w-5/12 text-center text-foreground/60 mt-6 text-pretty">
          Most asked questions by developers around the world. Find what matters
          and need to know here.
        </p>

        <div className="flex justify-center items-center mt-16 w-full">
          <div className="flex justify-center w-11/12 tablet:w-10/12 laptop:w-5/12">
            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-2 w-full"
            >
              {faqs.map((data, index) => (
                <FAQItem position={index} data={data} key={index} />
              ))}
            </Accordion>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
