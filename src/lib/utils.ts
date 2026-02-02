import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function pickRandom<T>(list: T[], count: number) {
  const copy = [...list]
  const limit = Math.max(0, Math.min(count, copy.length))
  for (let i = 0; i < limit; i += 1) {
    const j = i + Math.floor(Math.random() * (copy.length - i))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy.slice(0, limit)
}
