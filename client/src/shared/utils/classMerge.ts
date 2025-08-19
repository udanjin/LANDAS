import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

export function classNameMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}