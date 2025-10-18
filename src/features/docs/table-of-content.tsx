import { mergeClass } from "@shared/libs";
import type { TocItem } from "remark-flexible-toc";

type Props = {
  toc: TocItem[];
};

export function TableOfContent({ toc }: Props) {
  return (
    <div className="flex w-full flex-col">
      <span className="px-3 font-medium text-sm">On this page</span>

      <div className="mt-3 flex w-full flex-col text-sm">
        <ul className="flex w-full flex-col">
          {toc.map((item, index) => (
            <li
              className={mergeClass(
                "group flex h-8 px-3 text-foreground/60 hover:text-foreground",
                item.depth === 3 && "ml-4"
              )}
              key={index}
            >
              <a className="flex h-full w-full items-center" href={item.href}>
                {item.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
