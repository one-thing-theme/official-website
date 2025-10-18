import type { BreadScrumb } from "./docs-service";

type Props = {
  breadscrumbs: BreadScrumb[];
};

export function Breadcrumb({ breadscrumbs }: Props) {
  return (
    <div className="flex w-full items-center gap-1 text-foreground/60 text-sm">
      <a
        className="transition-all duration-300 hover:text-foreground"
        href={"/docs"}
      >
        Docs
      </a>

      {breadscrumbs.map(({ link, title }, i) => (
        <div className="flex items-center gap-1" key={i}>
          <i className="fi fi-rr-angle-small-right" />

          <a
            className="transition-all duration-300 hover:text-foreground"
            href={link}
          >
            {title}
          </a>
        </div>
      ))}
    </div>
  );
}
