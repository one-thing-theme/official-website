import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import dayjs from 'dayjs'

export function mergeClass(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function hasValidNames(input: string): boolean {
  const nameParts = input.trim().split(/\s+/)
  if (nameParts.length < 2) {
    return false
  }
  const nameRegex = /^[A-Za-z'-]+$/
  return nameParts.every((part) => nameRegex.test(part))
}

interface SplitName {
  firstName: string
  lastName: string
}

export function splitName(input: string): SplitName {
  const nameParts = input.trim().split(/\s+/)
  if (nameParts.length < 2) {
    return { firstName: input, lastName: '' }
  }

  const firstName = nameParts[0]
  const lastName = nameParts[nameParts.length - 1]
  return { firstName, lastName }
}

export function formatReadableDate(
  stringDate: string,
  format?: string,
): string {
  const formattedDate = dayjs(stringDate).format(format)
  return formattedDate
}
