import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const PHONE_REGEXP = /^\d{10}$/

export const pathsWithBg = ["/appoint", "/gallery", "/contact", "/payments"]

