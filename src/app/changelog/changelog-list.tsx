import * as React from 'react'
import { ChangelogItem } from './changelog-item'

const logs = [
  {
    title: 'Release vscode v1.0.2',
    date: 'November, 26 2024',
    image:
      'https://camo.githubusercontent.com/6ead5c39ef3cfe1cfcea063227358d3c161b33013604d2a2fc07bcc405bf84d9/68747470733a2f2f63646e2e686173686e6f64652e636f6d2f7265732f686173686e6f64652f696d6167652f75706c6f61642f76313733323138373834353436372f61343463633233382d656130662d346535652d386261642d3333383365346362353065392e706e67',
    description:
      'The vscode theme for brook code theme was release, the first release contain the simple concept and based on the vscode theme. You can try and use it now.',
    url: 'https://github.com/brook-code-theme/vscode-theme/releases/tag/v1.0.2',
  },
  {
    title: 'Release zed theme v1.0.0',
    date: 'November, 27 2024',
    image:
      'https://camo.githubusercontent.com/e31146dba4cb0371a250a632fc448c7a4280c7859eeec5c54593f63a49654c63/68747470733a2f2f63646e2e686173686e6f64652e636f6d2f7265732f686173686e6f64652f696d6167652f75706c6f61642f76313733323639373837373131312f31643230353866622d356537392d343136312d386562342d6438343939633431373836322e706e67',
    description:
      'The zed theme for brook code theme was release, the first release contain the simple concept and based on the vscode theme, porting and adapt into zed. You can try and use it now. ',
    url: 'https://github.com/brook-code-theme/zed-theme/releases/tag/v1.0.0',
  },
]
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
