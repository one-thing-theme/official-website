import {
  Breadcrumb,
  DocsContent,
  getBreadcrumb,
  getDocDetail,
  Navigation,
} from "@features/docs";
import { generatedMetadata } from "@shared/libs";
import { createFileRoute } from "@tanstack/react-router";

// generatedMetadata({
//     title: `Docs - ${doc.detail.data.title} | One thing theme`,
//     description: `${doc.detail.data.description}`,
//   })

export const Route = createFileRoute("/docs/$")({
  head: () => ({
    meta: generatedMetadata({
      title: "Minimal code theme | One Thing Theme",
      description:
        "The best clean code editor theme that combine simplicity and clean look",
    }),
  }),
  loader: async (ctx) => {
    const slug = ctx.params._splat || "";

    const bc = await getBreadcrumb(slug);
    const detail = await getDocDetail(slug);

    return {
      doc: {
        bc,
        detail,
      },
    } as any;
  },
  component: PageComponent,
});

function PageComponent() {
  const { doc } = Route.useLoaderData();

  return (
    <div className="flex flex-col">
      <div className="flex">
        {/* left */}
        <aside className="sticky top-28 laptop:flex hidden h-full w-[460px] flex-col overflow-y-auto border-border p-3">
          <Navigation />
        </aside>

        {/* center  */}
        <div className="container mx-auto flex pt-28">
          <div className="mx-auto flex w-9/12 flex-col gap-6 pb-28 tablet:pb-36">
            <Breadcrumb breadscrumbs={doc.bc} />
            <DocsContent doc={doc.detail} />
          </div>
        </div>

        {/* right */}
        <aside className="sticky top-28 laptop:flex hidden h-full w-[480px] flex-col overflow-y-auto p-3">
          {/*<TableOfContent toc={doc.toc} />*/}
        </aside>
      </div>
    </div>
  );
}
