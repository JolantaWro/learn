import type { Metadata } from 'next'
import './globals.css'
import { MainHeader } from '@/components/page-header'


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
      <div>
        <header>
          <MainHeader />
        </header>
        <main>{children}</main>
      </div>
    );
}
