"use client"

import Link from "next/link"
import { ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#F4F9F3]/95 backdrop-blur-sm border-b border-[#E0EDE0] dark:bg-[#2d2d2d]/95 dark:border-[#3a4a3a]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-serif font-bold text-[#7FB77E] group-hover:text-[#FFC857] transition-colors">
              TinyGarden
              <span className="relative">
                K<span className="absolute -top-2 left-1/2 -translate-x-1/2 text-lg">🌱</span>
              </span>
              it
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#products"
              className="text-[#2D2D2D] dark:text-[#e0e0e0] hover:text-[#7FB77E] transition-colors"
            >
              Products
            </Link>
            <Link
              href="#how-it-works"
              className="text-[#2D2D2D] dark:text-[#e0e0e0] hover:text-[#7FB77E] transition-colors"
            >
              How It Works
            </Link>
            <Link href="#blog" className="text-[#2D2D2D] dark:text-[#e0e0e0] hover:text-[#7FB77E] transition-colors">
              Blog
            </Link>
            <Link href="#contact" className="text-[#2D2D2D] dark:text-[#e0e0e0] hover:text-[#7FB77E] transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="hover:bg-[#E0EDE0] dark:hover:bg-[#3a4a3a]">
              <ShoppingCart className="h-5 w-5 text-[#7FB77E]" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-[#E0EDE0] dark:hover:bg-[#3a4a3a]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5 text-[#7FB77E]" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-grow-up">
            <Link
              href="#products"
              className="text-[#2D2D2D] dark:text-[#e0e0e0] hover:text-[#7FB77E] transition-colors py-2"
            >
              Products
            </Link>
            <Link
              href="#how-it-works"
              className="text-[#2D2D2D] dark:text-[#e0e0e0] hover:text-[#7FB77E] transition-colors py-2"
            >
              How It Works
            </Link>
            <Link
              href="#blog"
              className="text-[#2D2D2D] dark:text-[#e0e0e0] hover:text-[#7FB77E] transition-colors py-2"
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="text-[#2D2D2D] dark:text-[#e0e0e0] hover:text-[#7FB77E] transition-colors py-2"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
