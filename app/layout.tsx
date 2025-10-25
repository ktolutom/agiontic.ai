import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'agiontic.ai — AI for Peak Plant Performance',
  description: 'Maximize plant performance by turning your data into autonomous intelligent actions.',
  keywords: 'agentic AI, AI agents, autonomous AI, knowledge to action, intelligent agents, AI automation, agiontic.ai, agentic systems, AI orchestration',
  metadataBase: new URL('https://agiontic.ai'),
  openGraph: {
    title: 'agiontic.ai — AI for Peak Plant Performance',
    description: 'Maximize plant performance by turning your data into autonomous intelligent actions.',
    type: 'website',
    locale: 'en_US',
    url: 'https://agiontic.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'agiontic.ai — AI for Peak Plant Performance',
    description: 'Maximize plant performance by turning your data into autonomous intelligent actions.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 