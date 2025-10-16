import type React from "react"
import type { Metadata } from "next"
import { Nunito, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "TinyGardenKit 🌱 - Свой сад даже в квартире",
  description: "Наборы для выращивания зелени дома круглый год. Микрозелень, мини-грядки, LED-лампы и автополив.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${nunito.variable} ${playfair.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
