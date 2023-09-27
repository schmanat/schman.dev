import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat_Alternates } from 'next/font/google'
import { siteConfig } from '@/config/site'
import { ReactNode } from 'react'

const primary = Montserrat_Alternates({ subsets: ['latin'], weight: ["300", "400", "600"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'Webseitenerstellung',
    'Vorarlberg',
    'Ländle',
    'Programmierung',
    'Infrastruktureinrichtung',
    'Office 365',
    'OpenSource',
    'Implementierung'
  ],
  authors: [
    {
      name: 'Manuel Schneider',
      url: 'https://schman.dev'
    }
  ],
  creator: 'schman',
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png"
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={cn("text-slate-800 font-light min-h-screen bg-slate-50", primary.className)}>{children}</body>
    </html>
  )
}

export default RootLayout