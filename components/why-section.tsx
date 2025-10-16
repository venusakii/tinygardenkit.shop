"use client"

import { useEffect, useRef, useState } from "react"
import { Sprout, Droplets, Leaf, Flower } from "lucide-react"

const features = [
  {
    icon: Sprout,
    title: "Complete Kit",
    description: "From seeds to grow lights",
    emoji: "🌿",
  },
  {
    icon: Droplets,
    title: "Auto-Watering & LED",
    description: "Lighting for optimal growth",
    emoji: "💧",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description: "Safe and natural",
    emoji: "🍀",
  },
  {
    icon: Flower,
    title: "Compact & Beautiful",
    description: "Interior decoration",
    emoji: "🪴",
  },
]

export function WhySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-[#F4F9F3]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#2D2D2D] mb-16 text-balance">
          Why TinyGardenKit
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`text-center space-y-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-[#E0EDE0]/50 transition-all hover:scale-105 hover:-translate-y-2 ${
                  isVisible ? "animate-bloom" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#7FB77E]/20 flex items-center justify-center">
                    <span className="text-4xl">{feature.emoji}</span>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#2D2D2D]">{feature.title}</h3>
                <p className="text-[#2D2D2D]/70">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
