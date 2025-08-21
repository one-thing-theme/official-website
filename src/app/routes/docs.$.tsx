import {
  Breadcrumb,
  DocsContent,
  getBreadcrumb,
  getDocDetail,
  getToc,
  Navigation,
  TableOfContent,
} from "@features/docs"
import { generatedMetadata } from "@shared/libs"
import type { Route } from "./+types/docs.$"

export async function loader({ params }) {
  const slug = params["*"]

  const bc = await getBreadcrumb(slug)
  const detail = await getDocDetail(slug)
  const toc = await getToc(slug)

  return {
    doc: {
      bc,
      detail,
      toc,
    },
  }
}

export function meta({ data }) {
  const { doc } = data

  return generatedMetadata({
    title: `Docs - ${doc.detail.data.title} | One thing theme`,
    description: `${doc.detail.data.description}`,
  })
}

export default async function DocsPage({ loaderData }: Route.ComponentProps) {
  const { doc } = loaderData

  return (
    <div className="flex flex-col">
      <div className="flex">
        {/* left */}
        <aside className="hidden laptop:flex flex-col h-full w-[460px] p-3 border-border sticky top-28 overflow-y-auto">
          <Navigation />
        </aside>

        {/* center  */}
        <div className="flex container mx-auto pt-28">
          <div className="flex flex-col w-9/12 mx-auto gap-6 pb-28 tablet:pb-36">
            <Breadcrumb breadscrumbs={doc.bc} />
            <DocsContent doc={doc.detail} />
          </div>
        </div>

        {/* right */}
        <aside className="hidden laptop:flex flex-col h-full w-[480px] p-3 sticky top-28 overflow-y-auto">
          <TableOfContent toc={doc.toc} />
        </aside>
      </div>
    </div>
  )
}
