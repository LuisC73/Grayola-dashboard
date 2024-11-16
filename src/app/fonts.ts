import { Poppins, Dela_Gothic_One } from 'next/font/google';

export const fontPoppins = Poppins({
  subsets: ['latin'],
  variable: "--font-body",
  weight: ["100", "400"],
});

export const fontGothic = Dela_Gothic_One({
  subsets: ['latin'],
  variable: "--font-title",
  weight: ["400"],
});