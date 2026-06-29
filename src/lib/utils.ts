import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const site = {
  name: "Microware Communication",
  tagline: "Look No Further",
  phone: "+91 XXXXX XXXXX",
  email: "hello@microware.example",
  address: "13/C Ext. Gandhi Nagar, Jammu, Jammu & Kashmir, 180004"
};
