"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#7FB77E] to-[#DDBEA9] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl animate-sway">💧</div>
        <div className="absolute bottom-10 right-10 text-8xl animate-sway" style={{ animationDelay: "1s" }}>
          🌼
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white text-balance">
            Water Your Day with Inspiration 🌼
          </h2>

          <p className="text-xl text-white/90 text-pretty">Subscribe for updates and discounts</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-6 rounded-full border-2 border-white/30 bg-white/90 text-[#2D2D2D] placeholder:text-[#2D2D2D]/50 focus:border-white focus:bg-white"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-white text-[#7FB77E] hover:bg-[#FFC857] hover:text-white px-8 py-6 rounded-full font-semibold transition-all hover:scale-105"
            >
              {isSubmitted ? "✓ Done!" : "Grow With Us"}
            </Button>
          </form>

          {isSubmitted && (
            <div className="animate-bloom">
              <p className="text-white font-semibold flex items-center justify-center gap-2">
                <span className="text-2xl">💧</span>
                Thanks for subscribing!
                <span className="text-2xl">💧</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
