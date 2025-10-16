import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F4F9F3] via-[#E0EDE0] to-[#DDBEA9]">
      {/* Decorative floating leaves */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl animate-sway">🌿</div>
        <div className="absolute top-40 right-20 text-5xl animate-sway" style={{ animationDelay: "1s" }}>
          🍃
        </div>
        <div className="absolute bottom-32 left-1/4 text-7xl animate-sway" style={{ animationDelay: "2s" }}>
          🌱
        </div>
        <div className="absolute bottom-20 right-1/3 text-6xl animate-sway" style={{ animationDelay: "0.5s" }}>
          🪴
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#2D2D2D] text-balance animate-grow-up">
            Your Garden — Even in an Apartment 🌱
          </h1>

          <p
            className="text-xl md:text-2xl text-[#2D2D2D]/80 text-pretty animate-grow-up"
            style={{ animationDelay: "0.2s" }}
          >
            TinyGardenKit sets — everything you need to grow fresh greens at home year-round.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-grow-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-[#7FB77E] hover:bg-[#FFC857] text-white text-lg px-8 py-6 rounded-full transition-all hover:scale-105 hover:animate-sway"
            >
              View Kits ☀️
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F4F9F3] to-transparent"></div>
    </section>
  )
}
