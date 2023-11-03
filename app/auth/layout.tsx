
import { Inter } from 'next/font/google'

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
        {children}
      </body>
    </html>
  )
}
