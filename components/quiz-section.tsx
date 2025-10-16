import { GardenQuiz } from "@/components/garden-quiz"

export function QuizSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#E0EDE0] to-[#F4F9F3] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-9xl animate-sway">🌿</div>
        <div className="absolute bottom-20 right-20 text-9xl animate-sway" style={{ animationDelay: "1s" }}>
          🪴
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2D2D] mb-4 text-balance">
            Which Kit Is Right for You?
          </h2>
          <p className="text-xl text-[#2D2D2D]/70 text-pretty">
            Answer 3 questions and get a personalized recommendation
          </p>
        </div>

        <GardenQuiz />
      </div>
    </section>
  )
}
