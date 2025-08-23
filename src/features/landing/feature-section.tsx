import { SectionLabel } from "@shared/components"

export interface FeatureItemData {
  title: string
  description: string
}

interface FeatureItemProps {
  data: FeatureItemData
}

function FeatureItem({ data }: FeatureItemProps) {
  const { description, title } = data

  return (
    <div className="flex flex-col items-start w-full border-l border-border relative text-sm px-4 py-3 cursor-pointer">
      <span className="absolute -left-0.5 top-2 h-6 border-l-2 border-primary z-10 transition-all duration-300" />
      <span className="font-medium leading-tight!">{title}</span>
      <p className="leading-relaxed text-foreground/60 text-pretty mt-3">
        {description}
      </p>
      <p></p>
    </div>
  )
}

const featureList: FeatureItemData[] = [
  {
    title: "Support light & dark mode",
    description:
      "Built to adapt for your environment that works both in day and night.",
  },
  {
    title: "Cross editor support",
    description:
      "Available on any code editor like vscode, zed, jetbrains, and code highlight.",
  },
  {
    title: "Optimize readabilities",
    description:
      "Built with human readability contrast for both light and dark mode.",
  },
  {
    title: "Less distractions & focus",
    description: "Setup your editor with our standard for less distractions.",
  },
  {
    title: "Customizable",
    description:
      "Do whatever you want, tweak it or change it whatever you want.",
  },
  {
    title: "Less colors & simplicity",
    description:
      "Using only black, white, and gray combination colors for simplicity.",
  },
]

export function FeatureSection() {
  return (
    <section className="flex flex-col items-center py-20 tablet:py-36 container mx-auto px-5 tablet:px-0">
      <SectionLabel>Built on Features</SectionLabel>

      <h2 className="text-3xl tablet:text-5xl text-foreground font-medium leading-tight text-balance text-center mt-8">
        Charge your code <br className="hidden tablet:block" />
        with simplicity
      </h2>

      <p className="leading-7 text-center text-foreground/60 mt-6 text-pretty">
        Batteries included and help you speed{" "}
        <br className="hidden tablet:block" />
        up your development process.
      </p>

      <div className="flex items-center mt-20 tablet:mt-36 tablet:w-10/12 laptop:w-6/12">
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-7 tablet:gap-y-16 gap-y-3">
          {featureList.map((data, index) => (
            <FeatureItem data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
