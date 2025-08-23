import { Link } from "react-router"

export interface ChangelogData {
  title: string
  date: string
  image: string
  description: string
  url: string
}

interface ChangelogItemProps {
  data: ChangelogData
}

export function ChangelogItem({ data }: ChangelogItemProps) {
  const { title, date, image, description, url } = data

  return (
    <Link to={url} target="_blank" className="flex flex-col">
      <div className="flex items-center gap-4">
        <h3 className="font-medium">{title}</h3>
        <span className="text-sm text-foreground/40">{date}</span>
      </div>

      <p className="leading-7 text-pretty mt-3">{description}</p>

      <div className="relative w-full h-[180px] tablet:h-[312px] overflow-hidden rounded-xl mt-6">
        <img src={image} alt={title} className="object-cover" />
      </div>
    </Link>
  )
}
