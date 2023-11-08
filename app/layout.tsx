'use client'

import './globals.scss'
import Navbar from './components/Navbar'
import { Inter } from 'next/font/google'
import { useCurrentRoute } from '@/hooks/useCurrentRoute'
import ScrollToTopButton from './components/ScrollToTopButton'
import { edu_tas_beginner } from './font'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentRoute = useCurrentRoute();
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={edu_tas_beginner.className}>
        {children}
        <div className='sr-only md:not-sr-only'>
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  )
}
