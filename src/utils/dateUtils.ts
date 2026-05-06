import { isYesterday } from "date-fns/isYesterday"

export function toLocalDate(date: Date = new Date()): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

export function wasYesterday(date: Date): boolean {
  return isYesterday(toLocalDate(date))
}