"use client"

import { useEffect, useState } from "react"

interface Leaf {
  id: number
  left: number
  delay: number
  duration: number
  emoji: string
}

export function FloatingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([])

  useEffect(() => {
    const leafEmojis = ["🌿", "🍃", "🌱", "🪴"]
    const newLeaves: Leaf[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      emoji: leafEmojis[Math.floor(Math.random() * leafEmojis.length)],
    }))
    setLeaves(newLeaves)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute text-4xl animate-float-down"
          style={{
            left: `${leaf.left}%`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
          }}
        >
          {leaf.emoji}
        </div>
      ))}
    </div>
  )
}
