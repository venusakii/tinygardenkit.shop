import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TopProductSection() {
  return (
    <section className="py-20 bg-[#E0EDE0]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-[#FFC857] text-[#2D2D2D] rounded-full font-semibold mb-4">
              ⭐ Top Product of the Week
            </span>
          </div>

          <Card className="overflow-hidden rounded-3xl border-none shadow-2xl bg-white">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="relative">
                <img
                  src="/complete-indoor-garden-starter-kit-with-led-lamp-s.jpg"
                  alt="TinyGarden Starter Kit"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute top-4 left-4 bg-[#7FB77E] text-white px-4 py-2 rounded-full font-semibold">
                  -20% 🌱
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2D2D]">TinyGarden Starter Kit 🌱</h2>

                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFC857] text-[#FFC857]" />
                  ))}
                  <span className="text-[#2D2D2D]/70 ml-2">(127 reviews)</span>
                </div>

                <p className="text-lg text-[#2D2D2D]/80 text-pretty">
                  Grow fresh greens right on your windowsill. Complete kit includes: pots, microgreens seeds, LED lamp,
                  auto-watering system, and detailed instructions.
                </p>

                <ul className="space-y-3">
                  {[
                    "Seeds for 5 types of greens",
                    "Full-spectrum LED lamp",
                    "Auto-watering system",
                    "Eco-friendly pots",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#2D2D2D]">
                      <span className="text-[#7FB77E]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                

                <Button
                  size="lg"
                  className="bg-[#7FB77E] hover:bg-[#FFC857] text-white text-lg px-8 py-6 rounded-full transition-all hover:scale-105 group"
                >
                  Learn More
                  <span className="ml-2 group-hover:animate-bloom inline-block">🌿</span>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
