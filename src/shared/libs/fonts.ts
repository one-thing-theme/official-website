import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

const jetBrainsMono = JetBrains_Mono({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
})

export const fonts = {
  inter,
  jetBrainsMono,
}
