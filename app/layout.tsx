import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Learn App',
  description: 'Easy game to learn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
