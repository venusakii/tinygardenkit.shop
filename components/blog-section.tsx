import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    title: "5 Herbs That Are Easy to Grow at Home",
    image: "/watercolor-illustration-of-herbs-basil-mint-parsle.jpg",
    excerpt: "Basil, mint, parsley and other low-maintenance plants for beginners.",
    date: "March 15, 2024",
  },
  {
    title: "How to Choose a Grow Light",
    image: "/watercolor-illustration-of-led-grow-light.jpg",
    excerpt: "Full spectrum, wattage, and distance — everything you need to know about grow lights.",
    date: "March 10, 2024",
  },
  {
    title: "Microgreens: Superfood in Mini Format",
    image: "/watercolor-illustration-of-microgreens-sprouting.jpg",
    excerpt: "Benefits of microgreens and how to grow them in 7 days on your windowsill.",
    date: "March 5, 2024",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-[#E0EDE0]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#2D2D2D] mb-16 text-balance">
          Tips & Blog
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="group overflow-hidden rounded-3xl border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-4">
                <span className="text-sm text-[#7FB77E] font-semibold">{post.date}</span>

                <h3 className="text-xl font-serif font-bold text-[#2D2D2D] group-hover:text-[#7FB77E] transition-colors">
                  {post.title}
                </h3>

                <p className="text-[#2D2D2D]/70 text-pretty">{post.excerpt}</p>

                <div className="flex items-center gap-2 text-[#7FB77E] font-semibold group-hover:gap-4 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
