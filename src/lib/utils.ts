import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const site = {
  name: "Microware Communications",
  tagline: "Look No Further",
  phone: "9419183356",
  email: "roopeshmangotra@microwaremail.com",
  address: "13/C Ext. Gandhi Nagar, Jammu, Jammu & Kashmir, 180004"
};
