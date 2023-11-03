
import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import BlogNavbar from '../components/blog/BlogNavbar'
import { edu_tas_beginner } from '../font'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={edu_tas_beginner.className}>
        <BlogNavbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
