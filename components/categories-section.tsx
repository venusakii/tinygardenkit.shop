import { Card } from "@/components/ui/card"

const categories = [
  {
    title: "Microgreens Kits",
    image: "/microgreens-growing-kit-on-windowsill.jpg",
    emoji: "🌱",
  },
  {
    title: "Mini Gardens & Pots",
    image: "/small-indoor-garden-pots-with-herbs.jpg",
    emoji: "🪴",
  },
  {
    title: "Grow Lights",
    image: "/led-grow-light-for-indoor-plants.jpg",
    emoji: "💡",
  },
  {
    title: "Auto-Watering Systems",
    image: "/automatic-watering-system-for-plants.jpg",
    emoji: "💧",
  },
  {
    title: "Smart Pots",
    image: "/smart-plant-pot-with-sensors.jpg",
    emoji: "🤖",
  },
  {
    title: "Seeds & Fertilizers",
    image: "/organic-seeds-and-fertilizer-packets.jpg",
    emoji: "🌾",
  },
]

export function CategoriesSection() {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-[#F4F9F3] to-[#E0EDE0]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#2D2D2D] mb-16 text-balance">
          Product Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group overflow-hidden rounded-3xl border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 text-4xl group-hover:animate-sway">{category.emoji}</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-[#2D2D2D] group-hover:text-[#7FB77E] transition-colors">
                  {category.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
