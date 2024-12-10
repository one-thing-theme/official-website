import localFont from 'next/font/local'

const geistSans = localFont({
  src: './geist-sans.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

const geistMono = localFont({
  src: './geist-mono.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const fonts = {
  geistSans,
  geistMono,
}
