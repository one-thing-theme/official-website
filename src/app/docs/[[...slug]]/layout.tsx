import * as React from 'react'
import { LeftContent } from '../left-content'
import { CenterContent } from '../center-content'
import { RightContent } from '../right-content'

type Params = {
  slug: string[] | undefined
}

type DocsLayoutProps = {
  children: React.ReactNode
  params: Promise<Params>
}

export default async function DocsLayout({
  children,
  params,
}: DocsLayoutProps): Promise<React.ReactElement> {
  const { slug } = await params

  return (
    <main className="flex mt-28 min-h-screen relative">
      <LeftContent />
      <CenterContent slug={slug}>{children}</CenterContent>
      <RightContent slug={slug} />
    </main>
  )
}
