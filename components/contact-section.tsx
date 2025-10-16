"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 bg-[#F4F9F3]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#2D2D2D] mb-16 text-balance">
          Contact
        </h2>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-[#2D2D2D] font-semibold">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="rounded-2xl border-[#E0EDE0] focus:border-[#7FB77E] py-6"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-[#2D2D2D] font-semibold">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="rounded-2xl border-[#E0EDE0] focus:border-[#7FB77E] py-6"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-[#2D2D2D] font-semibold">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="rounded-2xl border-[#E0EDE0] focus:border-[#7FB77E] resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#7FB77E] hover:bg-[#FFC857] text-white py-6 rounded-full font-semibold transition-all hover:scale-105"
            >
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>

          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#7FB77E] hover:bg-[#FFC857] flex items-center justify-center transition-all hover:scale-110 group"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#7FB77E] hover:bg-[#FFC857] flex items-center justify-center transition-all hover:scale-110 group"
            >
              <span className="text-white text-2xl font-bold">P</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
