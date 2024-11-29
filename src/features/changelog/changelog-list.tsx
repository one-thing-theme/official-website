import * as React from 'react'
import { ChangelogData, ChangelogItem } from './changelog-item'
import jsonData from './data.json'

const logs = jsonData.logs as ChangelogData[]
const reversedLogs = [...logs].reverse()

export function ChangelogList(): React.ReactElement {
  return (
    <ul className="flex flex-col gap-3 tablet:gap-4 w-full">
      {reversedLogs.map((log, index) => (
        <ChangelogItem data={log} key={index} />
      ))}
    </ul>
  )
}
