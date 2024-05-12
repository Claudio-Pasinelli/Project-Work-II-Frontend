import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(' ');
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
