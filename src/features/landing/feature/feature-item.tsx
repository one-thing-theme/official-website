import * as React from 'react'

export interface FeatureItemData {
  title: string
  description: string
  icon: string
}

interface FeatureItemProps {
  data: FeatureItemData
}

export function FeatureItem({ data }: FeatureItemProps): React.ReactElement {
  const { description, icon, title } = data

  return (
    <div className="flex flex-col items-start w-full border-l border-border relative text-sm px-4 py-3 cursor-pointer transition-all duration-300 hover:-translate-y-1">
      <span className="absolute -left-0.5 top-3 h-6 border-l-2 border-primary z-10" />

      <i className={`${icon} text-xl`} />
      <span className="mt-5 font-medium !leading-tight">{title}</span>
      <p className="!leading-relaxed text-foreground/60 text-pretty mt-3">
        {description}
      </p>
      <p></p>
    </div>
  )
}
