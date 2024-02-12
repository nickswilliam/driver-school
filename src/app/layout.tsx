import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header/Header'
import HeaderContact from '@/components/Header/HeaderContact'
import 'animate.css'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Academia de Manejo',
  description: 'Driving academy for women by women.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderContact/>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
