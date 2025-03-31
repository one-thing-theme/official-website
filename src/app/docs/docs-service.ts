'use server'

import * as fs from 'fs/promises'
import { evaluate } from 'next-mdx-remote-client/rsc'
import { getFrontmatter } from 'next-mdx-remote-client/utils'
import remarkFlexibleToc, { TocItem } from 'remark-flexible-toc'
import rehypeSlug from 'rehype-slug'
import path from 'path'
import * as React from 'react'

type Metadata = {
  title: string
  description: string
}

type DocFrontMatter = {
  title: string
  description: string
  publishedAt: string
}

type DocsScope = {
  toc: TocItem[]
}

type DocDetail = {
  frontmatter: DocFrontMatter
  content: React.ReactNode
}

type BreadScrumb = {
  title: string
  link: string
}

const DOCS_PATH = '/src/app/docs/content'

function parseSlug(slug: string[] | undefined): string {
  return slug?.[0] || '/introduction'
}

export async function getAllDocsPaths(): Promise<string[]> {
  const folderPath = path.join(process.cwd(), DOCS_PATH)
  const files = await fs.readdir(folderPath)
  const paths = files
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => file.replace(/\.mdx?$/, ''))

  return paths || []
}

export async function getDocMetadata(
  slug: string[] | undefined,
): Promise<Metadata> {
  const parsedSlug = parseSlug(slug)
  const filePath = path.join(process.cwd(), DOCS_PATH, `${parsedSlug}.mdx`)
  const rawContent = await fs.readFile(filePath, 'utf8')
  const { frontmatter } = getFrontmatter<DocFrontMatter>(rawContent)

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  }
}

export async function getBreadcrumb(
  slug: string[] | undefined,
): Promise<BreadScrumb> {
  const parsedSlug = parseSlug(slug)
  const filePath = path.join(process.cwd(), DOCS_PATH, `${parsedSlug}.mdx`)
  const rawContent = await fs.readFile(filePath, 'utf8')
  const { frontmatter } = getFrontmatter<DocFrontMatter>(rawContent)

  return {
    title: frontmatter.title,
    link: `/docs/${parsedSlug}`,
  }
}

export async function getToc(slug: string[] | undefined): Promise<TocItem[]> {
  const parsedSlug = parseSlug(slug)
  const filePath = path.join(process.cwd(), DOCS_PATH, `${parsedSlug}.mdx`)
  const rawContent = await fs.readFile(filePath, 'utf8')
  const { scope } = await evaluate<DocFrontMatter, DocsScope>({
    source: rawContent,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkFlexibleToc],
      },
      parseFrontmatter: true,
      vfileDataIntoScope: 'toc',
    },
  })

  const toc = scope.toc
  return toc
}

export async function getDocDetail(
  slug: string[] | undefined,
): Promise<DocDetail> {
  const parsedSlug = parseSlug(slug)
  const filePath = path.join(process.cwd(), DOCS_PATH, `${parsedSlug}.mdx`)
  const rawContent = await fs.readFile(filePath, 'utf8')
  const { frontmatter, content } = await evaluate<DocFrontMatter, any>({
    source: rawContent,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypeSlug],
      },
      parseFrontmatter: true,
    },
  })

  return {
    frontmatter,
    content,
  }
}
