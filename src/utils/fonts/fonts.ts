import { Cinzel, El_Messiri, Cormorant_Garamond } from 'next/font/google';

export const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
});

export const elMessiri = El_Messiri({
  subsets: ['latin'],
  variable: '--font-el-messiri',
  display: 'swap',
  weight: ['400', '700'],
});

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
  weight: ['400', '700'],
});
