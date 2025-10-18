import { SectionLabel } from "@shared/components";

type Item = {
  label: string;
  url: string;
};

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
];

export function CTASection() {
  return (
    <section
      className="container mx-auto flex flex-col items-center px-5 tablet:px-0 py-28"
      id="get-started"
    >
      <SectionLabel>Get it now.</SectionLabel>

      <h2 className="mt-8 text-balance text-center font-medium tablet:text-5xl text-3xl text-foreground leading-tight">
        Code on your <br className="tablet:block hidden" />
        clean visuals
      </h2>

      <p className="mt-6 text-pretty text-center text-foreground/60 leading-7">
        Start code on your own code editor with our code theme,{" "}
        <br className="tablet:block hidden" />
        try the clean looks and also the simplicity.
      </p>

      <div className="mt-16 flex justify-center">
        <div className="flex flex-col gap-3">
          {items.map(({ label, url }, i) => (
            <a
              className="flex items-center gap-2"
              href={url}
              key={i}
              target="_blank"
            >
              <i className="fi fi-sr-bullet text-foreground/40" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
