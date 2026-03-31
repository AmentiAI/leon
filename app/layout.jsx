import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import './extra.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FloatingCallBtn from '@/components/FloatingCallBtn'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800','900'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata = {
  title: 'C&C Car & CPU Repair | Mobile Mechanic & Tech Repair',
  description: 'C&C Car & CPU Repair — Certified mobile mechanic and computer/electronics repair. We come to you. Same-day service, upfront pricing, satisfaction guaranteed.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        {/* Ambient orbs */}
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />

        <Nav />
        <main>{children}</main>
        <Footer />
        <FloatingCallBtn />
      </body>
    </html>
  )
}
