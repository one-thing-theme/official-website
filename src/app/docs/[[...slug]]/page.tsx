import { DocsContent, getAllDocsPaths, getDocMetadata } from '@features/docs'
import { sharedMetadata } from '@shared/libs'
import { Metadata, ResolvingMetadata } from 'next'
import * as React from 'react'

type Params = {
  slug: string[] | undefined
}

type DocsPageProps = {
  params: Promise<Params>
}

export async function generateMetadata(
  { params }: DocsPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params
  const meta = await getDocMetadata(slug)
  const previousOgImages = (await parent).openGraph?.images || []
  const previousTwitterImages = (await parent).twitter?.images || []

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      ...sharedMetadata.openGraph,
      title: meta.title,
      description: meta.description,
      images: [...previousOgImages],
    },
    twitter: {
      ...sharedMetadata.twitter,
      title: meta.title,
      description: meta.description,
      images: [...previousTwitterImages],
    },
  }
}

export async function generateStaticParams(): Promise<Params[]> {
  const paths = await getAllDocsPaths()
  const staticParams = paths.map((path) => ({
    slug: [path],
  }))

  return staticParams
}

export default async function DocsPage({
  params,
}: DocsPageProps): Promise<React.ReactElement> {
  const { slug } = await params

  return (
    <div className="flex flex-col">
      <DocsContent slug={slug} />
    </div>
  )
}
