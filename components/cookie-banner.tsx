"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-grow-up">
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-[#7FB77E]/20 p-6 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-[#2D2D2D]/40 hover:text-[#2D2D2D] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start gap-4">
          <span className="text-3xl flex-shrink-0">🍪</span>
          <div className="space-y-4">
            <p className="text-sm text-[#2D2D2D]/80 pr-6">
              This website uses cookies to improve your experience. By continuing, you consent to the use of cookies.
            </p>
            <Button
              onClick={handleAccept}
              className="w-full bg-[#7FB77E] hover:bg-[#FFC857] text-white rounded-full transition-all hover:scale-105 group"
            >
              Accept 🌿
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
