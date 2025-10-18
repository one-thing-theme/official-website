import { mergeClass } from "@shared/libs";
import { useLocation } from "@tanstack/react-router";

type navigationItem = {
  label: string;
  link: string;
};

type NavigationData = {
  group: string;
  list: navigationItem[];
};

type NavigationGroupProps = {
  group: NavigationData;
};

type NavigationItemProps = {
  item: navigationItem;
};

const navigations: NavigationData[] = [
  {
    group: "Getting Started",
    list: [
      { label: "Introduction", link: "/docs" },
      {
        label: "Installation",
        link: "/docs/installation",
      },
      {
        label: "Configuration",
        link: "/docs/configuration",
      },
    ],
  },
  {
    group: "Guides",
    list: [
      {
        label: "Setup Clean Editor",
        link: "/docs/setup-clean-editor",
      },
    ],
  },
];

function NavigationItem({ item }: NavigationItemProps) {
  const { label, link } = item;
  const location = useLocation();
  const isActive = location.pathname === `${link}`;

  return (
    <li
      className={mergeClass(
        "group hover:-translate-x-1 flex h-9 w-full items-center overflow-hidden text-pretty rounded-lg px-3 text-foreground/90 transition-all duration-300 hover:bg-secondary hover:text-foreground",
        isActive && "bg-secondary text-foreground"
      )}
    >
      <a className="flex h-full w-full items-center" href={link}>
        {label}
      </a>
    </li>
  );
}

function NavigationGroup({ group }: NavigationGroupProps) {
  const { group: groupName, list } = group;

  return (
    <div className="flex flex-col gap-3 text-sm">
      <span className="ml-3 font-medium">{groupName}</span>
      <ul className="flex w-full flex-col gap-1">
        {list.map((item, index) => (
          <NavigationItem item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export function Navigation() {
  return (
    <div className="flex w-full flex-col gap-8">
      {navigations.map((group, index) => (
        <NavigationGroup group={group} key={index} />
      ))}
    </div>
  );
}
