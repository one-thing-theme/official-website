'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import * as React from 'react'

const lightModeImage =
  'https://cdn.hashnode.com/res/hashnode/image/upload/v1732803074247/caca6311-7556-4993-a429-e8952b2ccd40.png'
const darkModeImage =
  'https://cdn.hashnode.com/res/hashnode/image/upload/v1732803081142/ec166e55-82a4-477c-9736-eb70f7756370.png'

export function ImageShot(): React.ReactElement {
  const [image, setImage] = React.useState<string>(lightModeImage)
  const { resolvedTheme } = useTheme()

  React.useEffect(() => {
    if (resolvedTheme === 'dark') {
      setImage(darkModeImage)
    } else {
      setImage(lightModeImage)
    }
  }, [resolvedTheme])

  return (
    <div className="flex bg-surface border border-border p-2 rounded-2xl w-full tablet:w-10/12 tablet:h-[612px] h-[200px] mx-auto">
      <picture className="bg-surface border border-border rounded-xl relative h-full w-full overflow-hidden">
        <Image
          src={image}
          alt="Brook Code Theme"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </picture>
    </div>
  )
}
