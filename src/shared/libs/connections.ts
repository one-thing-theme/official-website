import { createConnectionInstance } from './connection-instance'

const GET_WAITLIST_BASE_URL = `https://api.getwaitlist.com`

export const waitListClient = createConnectionInstance(GET_WAITLIST_BASE_URL)
