import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Anna M.",
    image: "/happy-woman-with-indoor-herb-garden.jpg",
    text: "Now I always have fresh basil for pasta! The kit is very easy to use.",
    rating: 5,
  },
  {
    name: "Dmitry K.",
    image: "/man-watering-microgreens-on-kitchen-counter.jpg",
    text: "Microgreens grow in a week. The kids love watching the process!",
    rating: 5,
  },
  {
    name: "Elena S.",
    image: "/woman-holding-fresh-herbs-from-indoor-garden.jpg",
    text: "Looks beautiful on the windowsill and actually works. Highly recommend!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F4F9F3] to-[#E0EDE0] relative overflow-hidden">
      {/* Decorative leaf shadows */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 text-9xl">🍃</div>
        <div className="absolute bottom-20 right-10 text-9xl">🌿</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#2D2D2D] mb-16 text-balance">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group overflow-hidden rounded-3xl border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-semibold text-lg">Grown with TinyGarden 🌿</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFC857] text-[#FFC857]" />
                  ))}
                </div>

                <p className="text-[#2D2D2D]/80 text-pretty">"{testimonial.text}"</p>

                <p className="font-semibold text-[#7FB77E]">— {testimonial.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
