
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })
import { edu_tas_beginner } from '../font'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={edu_tas_beginner.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
