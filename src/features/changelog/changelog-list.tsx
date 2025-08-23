import { ChangelogItem } from "./changelog-item"
import logs from "./changelog-data.json"

const reversedLogs = [...logs].reverse()

export function ChangelogList() {
  return (
    <ul className="flex flex-col gap-16">
      {reversedLogs.map((log, index) => (
        <ChangelogItem data={log} key={index} />
      ))}
    </ul>
  )
}
