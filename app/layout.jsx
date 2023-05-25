import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import ProviderWrapper from '@/components/ProviderWrapper'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Clone',
  description: 'google.com clone built with Next.js',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <body className={` relative min-h-screen ${inter.className}`}>
        <ProviderWrapper>
          {children}
          <Footer/>
        </ProviderWrapper>
      </body>
    </html>
  )
}
