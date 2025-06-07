import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from "dayjs"
import matter, { type GrayMatterFile } from "gray-matter"

export function mergeClass(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatReadableDate(
  stringDate: string,
  format?: string,
): string {
  const formattedDate = dayjs(stringDate).format(format)
  return formattedDate
}

export function parseMarkdown(rawFile: any): GrayMatterFile<any> {
  const parsedFile = matter(rawFile)
  return parsedFile
}
