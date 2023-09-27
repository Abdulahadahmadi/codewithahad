'use client'

import './globals.scss'
import Navbar from './components/Navbar'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Code With Ahad',
  description: 'portfolio Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
