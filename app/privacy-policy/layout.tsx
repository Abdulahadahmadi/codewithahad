
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { edu_tas_beginner } from '../font'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Privacy Policy'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className={edu_tas_beginner.className}>
        <Navbar />
        {children}
        <Footer />
      </div>
  )
}
