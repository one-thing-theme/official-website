'use server'

import { waitListClient } from '@shared/libs/connections'
import { splitName } from '@shared/utils/helpers'

interface JoinWaitListInput {
  input: { fullName: string; email: string }
}

export async function joinWaitingList({
  input,
}: JoinWaitListInput): Promise<void> {
  const { firstName, lastName } = splitName(input.fullName)

  return await waitListClient('/api/v1/signup', {
    method: 'POST',
    body: {
      waitlist_id: '22526',
      email: input.email,
      first_name: firstName,
      last_name: lastName,
    },
  })
}
