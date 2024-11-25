import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function mergeClass(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function hasValidNames(input): boolean {
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

export function splitName(input): SplitName {
  const nameParts = input.trim().split(/\s+/)
  if (nameParts.length < 2) {
    return { firstName: input, lastName: '' }
  }

  const firstName = nameParts[0]
  const lastName = nameParts[nameParts.length - 1]
  return { firstName, lastName }
}
