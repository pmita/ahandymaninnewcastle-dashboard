// PACKAGES
import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncate = (str: string, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length)}...`;
};

export const tooglePrimaryButtonVariant = (shouldShowPrimary: boolean) => {
  switch(shouldShowPrimary) {
    case true:
      return 'primary';
    case false:
      return 'primaryOutlined';
  }
}