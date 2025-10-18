import { SectionLabel } from "@shared/components";

export type FeatureItemData = {
  title: string;
  description: string;
};

type FeatureItemProps = {
  data: FeatureItemData;
};

function FeatureItem({ data }: FeatureItemProps) {
  const { description, title } = data;

  return (
    <div className="relative flex w-full cursor-pointer flex-col items-start border-border border-l px-4 py-3 text-sm">
      <span className="-left-0.5 absolute top-2 z-10 h-6 border-primary border-l-2 transition-all duration-300" />
      <span className="font-medium leading-tight!">{title}</span>
      <p className="mt-3 text-pretty text-foreground/60 leading-relaxed">
        {description}
      </p>
      <p />
    </div>
  );
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
];

export function FeatureSection() {
  return (
    <section className="container mx-auto flex flex-col items-center px-5 tablet:px-0 py-20 tablet:py-36">
      <SectionLabel>Built on Features</SectionLabel>

      <h2 className="mt-8 text-balance text-center font-medium tablet:text-5xl text-3xl text-foreground leading-tight">
        Charge your code <br className="tablet:block hidden" />
        with simplicity
      </h2>

      <p className="mt-6 text-pretty text-center text-foreground/60 leading-7">
        Batteries included and help you speed{" "}
        <br className="tablet:block hidden" />
        up your development process.
      </p>

      <div className="mt-20 tablet:mt-36 flex laptop:w-6/12 tablet:w-10/12 items-center">
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-7 gap-y-3 tablet:gap-y-16">
          {featureList.map((data, index) => (
            <FeatureItem data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
