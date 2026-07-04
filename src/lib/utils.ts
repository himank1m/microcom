import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const site = {
  name: "Microware Communications",
  tagline: "Look No Further",
  phone: "9419183356",
  email: "microware@microwaremail.com"
};
