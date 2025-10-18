import * as fs from "node:fs/promises";
import path from "node:path";
import { parseMarkdown } from "@shared/libs";

type DocFrontMatter = {
  title: string;
  description: string;
  publishedAt: string;
};

export type DocDetail = {
  data: DocFrontMatter;
  content: any;
};

export type BreadScrumb = {
  title: string;
  link: string;
};

const DOCS_PATH = "/src/features/docs/contents";

function parseSlug(slug: string): string {
  return slug === "" ? "introduction" : slug;
}

async function loadRawFile(slug: string) {
  const filePath = path.join(process.cwd(), DOCS_PATH, `${slug}.md`);
  const rawFile = await fs.readFile(filePath, "utf8");

  return rawFile;
}
export async function getBreadcrumb(slug: string): Promise<BreadScrumb[]> {
  const parsedSlug = parseSlug(slug);
  const rawFile = await loadRawFile(parsedSlug);
  const { data } = parseMarkdown(rawFile);

  return [
    {
      title: data.title,
      link: `/docs/${parsedSlug}`,
    },
  ];
}

export async function getDocDetail(slug: string): Promise<DocDetail> {
  const parsedSlug = parseSlug(slug);
  const rawFile = await loadRawFile(parsedSlug);
  const { data, content } = parseMarkdown(rawFile);
  return { data, content } as DocDetail;
}
