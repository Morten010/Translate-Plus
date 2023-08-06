import Navbar from '../components/Navbar'
import { ThemeProvider } from '../components/ThemeProvider'
import { Toaster } from '../components/ui/toaster'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Translate Plus',
  description: 'Reach Everybody in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
        className='content-container'
        >
          <ThemeProvider enableSystem={true} attribute='class' >
            <Navbar />
            {children}
            <Toaster />
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
