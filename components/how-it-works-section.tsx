"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  {
    emoji: "🌱",
    title: "Plant",
    description: "Place seeds in pots with nutrient-rich soil",
  },
  {
    emoji: "💧",
    title: "Water",
    description: "Auto-watering system takes care of moisture",
  },
  {
    emoji: "🌞",
    title: "Watch It Grow",
    description: "LED lamp provides perfect lighting",
  },
]

export function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 bg-gradient-to-b from-[#E0EDE0] to-[#F4F9F3]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#2D2D2D] mb-16 text-balance">
          How It Works
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div
                  className={`text-center space-y-4 ${isVisible ? "animate-grow-up" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="flex justify-center">
                    <div
                      className={`w-32 h-32 rounded-full bg-[#7FB77E]/20 flex items-center justify-center transition-all duration-1000 ${
                        isVisible ? "scale-100" : "scale-0"
                      }`}
                    >
                      <span className="text-6xl">{step.emoji}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#2D2D2D]">{step.title}</h3>

                  <p className="text-[#2D2D2D]/70 text-pretty">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-4 text-[#7FB77E] text-4xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
