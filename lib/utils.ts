import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function removeItemsWithName(items: any[], name: string): void {
  for (let i = 0; i < items.length; i++) {
    if (items[i].name === name) {
      items.splice(i--, 1);
    }
  }
}

export function convertToKb(size: number): string {
  return (size / 1024).toFixed(0) + " kb"
}