import { Roboto, Poppins } from "next/font/google";

export const roboto = Roboto({
    subsets: ['latin'],
    variable: "--font-roboto",
    weight: ['400', '500', '700', '900'],
    style: ['normal', 'italic'],
  });
  
export const poppins = Poppins({
  subsets: ['latin'],
  variable: "--font-poppins",
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
});