'use client'

import './globals.scss'
import { Inter } from 'next/font/google'
import ScrollToTopButton from './components/ScrollToTopButton'
import { edu_tas_beginner } from './font'
import { Metadata } from 'next'
import MouseShadow from './components/MouseShadow'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: {
    template: '%s | Code With Ahad',
    default: 'Code With Ahad',
  },
  description: 'A blog about web development and programming',
  metadataBase: new URL('https://codewithahad.com/'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={edu_tas_beginner.className}>
        {children}
        <div className='sr-only md:not-sr-only'>
          <MouseShadow />
        </div>
        <div className=''>
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  )
}
