"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-20 bg-[#F4F9F3]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#2D2D2D] mb-16 text-balance">
          Video & Inspiration
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
            <img
              src="/cozy-kitchen-with-indoor-herb-garden-and-natural-s.jpg"
              alt="Мой сад на кухне"
              className="w-full h-full object-cover"
            />

            {!isPlaying && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-24 h-24 rounded-full bg-[#7FB77E] hover:bg-[#FFC857] flex items-center justify-center transition-all hover:scale-110 group-hover:animate-sway"
                >
                  <Play className="w-10 h-10 text-white ml-2" fill="white" />
                </button>
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">My Kitchen Garden 🌿</h3>
              <p className="text-white/90">Learn how easy it is to create your home garden</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
