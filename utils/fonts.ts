// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Geist, Geist_Mono, Inter, Lexend_Deca, Manrope, Montserrat, Unbounded } from 'next/font/google'

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
})

export const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
})

export const unbounded = Unbounded({
  variable: '--font-unbounded',
  subsets: ['latin', 'cyrillic'],
})

export const lexendDeca = Lexend_Deca({
  variable: '--font-lexend-deca',
  subsets: ['latin'],
})

export const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'cyrillic'],
})
