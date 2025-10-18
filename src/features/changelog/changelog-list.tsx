import logs from "./changelog-data.json" with { type: "json" };
import { ChangelogItem } from "./changelog-item";

const reversedLogs = [...logs].reverse();

export function ChangelogList() {
  return (
    <ul className="flex flex-col gap-16">
      {reversedLogs.map((log, index) => (
        <ChangelogItem data={log} key={index} />
      ))}
    </ul>
  );
}
