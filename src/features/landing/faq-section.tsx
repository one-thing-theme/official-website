import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  SectionLabel,
} from "@shared/components";

export type FAQData = {
  title: string;
  content: string;
};

type FAQItemProps = {
  data: FAQData;
  position: number;
};

export function FAQItem({ data, position }: FAQItemProps) {
  const { title, content } = data;

  return (
    <AccordionItem
      className="hover:-translate-y-1 transition-all duration-300"
      value={`item-${position}`}
    >
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
  );
}

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
];

export function FAQSection(): React.ReactElement {
  return (
    <section className="container mx-auto flex flex-col items-center px-5 tablet:px-0 py-28">
      <SectionLabel>FAQs</SectionLabel>

      <h2 className="mt-8 text-balance text-center font-medium tablet:text-5xl text-3xl text-foreground leading-tight">
        Most asked <br className="tablet:block hidden" />
        questions
      </h2>

      <p className="mt-6 text-pretty text-center text-foreground/60 leading-7">
        Most asked questions by developers around the world.{" "}
        <br className="tablet:block hidden" />
        Find what matters and need to know here.
      </p>

      <div className="mt-16 flex w-full items-center justify-center">
        <div className="flex laptop:w-5/12 tablet:w-10/12 justify-center">
          <Accordion
            className="flex w-full flex-col gap-2"
            collapsible
            type="single"
          >
            {faqs.map((data, index) => (
              <FAQItem data={data} key={index} position={index} />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
