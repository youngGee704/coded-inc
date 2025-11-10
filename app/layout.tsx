import type React from "react"

import { Poppins, Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "@/components/client-layout"

const poppins = Poppins({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Coded Incorporate | Tender Research & Bid Support</title>
        <meta
          name="description"
          content="Discover and win UK tenders with Coded Incorporate. Expert tender research, document preparation, and bidding strategies."
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' fontSize='90' fontWeight='bold' fill='%23e63946'>C</text></svg>"
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} antialiased bg-white text-gray-900`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

export const metadata = {
  title: "Coded Incorporate | Tender Research & Bid Support",
  description:
    "Discover and win UK tenders with Coded Incorporate. Expert tender research, document preparation, and bidding strategies.",
    };

