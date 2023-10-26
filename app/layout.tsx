'use client'

import './globals.scss'
import Navbar from './components/Navbar'
import { Inter } from 'next/font/google'
import { useCurrentRoute } from '@/hooks/useCurrentRoute'
import ScrollToTopButton from './components/ScrollToTopButton'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentRoute = useCurrentRoute();
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className='sr-only md:not-sr-only'>
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  )
}
