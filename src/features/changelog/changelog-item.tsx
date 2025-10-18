export type ChangelogData = {
  title: string;
  date: string;
  image: string;
  description: string;
  url: string;
};

type ChangelogItemProps = {
  data: ChangelogData;
};

export function ChangelogItem({ data }: ChangelogItemProps) {
  const { title, date, image, description, url } = data;

  return (
    <a className="flex flex-col" href={url} target="_blank">
      <div className="flex items-center gap-4">
        <h3 className="font-medium">{title}</h3>
        <span className="text-foreground/40 text-sm">{date}</span>
      </div>

      <p className="mt-3 text-pretty leading-7">{description}</p>

      <div className="relative mt-6 h-[180px] tablet:h-[312px] w-full overflow-hidden rounded-xl">
        <img alt={title} className="object-cover" src={image} />
      </div>
    </a>
  );
}
