"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"

const questions = [
  {
    question: "How much time do you have for care?",
    options: [
      { text: "5 minutes a day", value: "microgreens" },
      { text: "15-20 minutes a day", value: "herbs" },
      { text: "Ready to spend more time", value: "vegetables" },
    ],
  },
  {
    question: "What's your gardening experience?",
    options: [
      { text: "None, I'm a beginner", value: "beginner" },
      { text: "Tried a little", value: "intermediate" },
      { text: "Experienced gardener", value: "advanced" },
    ],
  },
  {
    question: "What do you want to grow?",
    options: [
      { text: "Greens for salads", value: "greens" },
      { text: "Herbs for cooking", value: "herbs" },
      { text: "Decorative plants", value: "decorative" },
    ],
  },
]

const recommendations = {
  microgreens: {
    title: "Microgreens Kit 🌱",
    description: "Perfect for beginners! Grows in 7 days, minimal care required.",
    image: "/watercolor-illustration-of-microgreens-sprouting.jpg",
  },
  herbs: {
    title: "Herb Garden Kit 🌿",
    description: "Basil, mint, parsley — everything for your kitchen.",
    image: "/watercolor-illustration-of-herbs-basil-mint-parsle.jpg",
  },
  vegetables: {
    title: "Complete Gardener Kit 🪴",
    description: "For those ready for a real home garden.",
    image: "/indoor-garden-setup-with-multiple-plants.jpg",
  },
}

export function GardenQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setAnswers(answers.slice(0, -1))
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
  }

  const getRecommendation = () => {
    const firstAnswer = answers[0]
    return recommendations[firstAnswer as keyof typeof recommendations] || recommendations.microgreens
  }

  if (showResult) {
    const recommendation = getRecommendation()
    return (
      <Card className="p-8 max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl animate-bloom">
        <h3 className="text-3xl font-serif font-bold text-[#2D2D2D] mb-6 text-center">Your Perfect Kit:</h3>

        <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
          <img
            src={recommendation.image || "/placeholder.svg"}
            alt={recommendation.title}
            className="w-full h-full object-cover"
          />
        </div>

        <h4 className="text-2xl font-serif font-bold text-[#7FB77E] mb-4">{recommendation.title}</h4>
        <p className="text-lg text-[#2D2D2D]/80 mb-6">{recommendation.description}</p>

        <div className="flex gap-4">
          <Button
            onClick={resetQuiz}
            variant="outline"
            className="flex-1 border-[#7FB77E] text-[#7FB77E] hover:bg-[#E0EDE0] bg-transparent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retake Quiz
          </Button>
          <Button className="flex-1 bg-[#7FB77E] hover:bg-[#FFC857] text-white">
            Buy Kit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-8 max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold text-[#7FB77E]">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          {currentQuestion > 0 && (
            <Button variant="ghost" size="sm" onClick={handleBack} className="text-[#7FB77E]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          )}
        </div>
        <div className="w-full bg-[#E0EDE0] rounded-full h-2">
          <div
            className="bg-[#7FB77E] h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="text-2xl font-serif font-bold text-[#2D2D2D] mb-8 text-balance">
        {questions[currentQuestion].question}
      </h3>

      <div className="space-y-4">
        {questions[currentQuestion].options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleAnswer(option.value)}
            variant="outline"
            className="w-full justify-start text-left h-auto py-4 px-6 border-2 border-[#E0EDE0] hover:border-[#7FB77E] hover:bg-[#F4F9F3] transition-all group"
          >
            <span className="text-lg">{option.text}</span>
            <ArrowRight className="ml-auto h-5 w-5 text-[#7FB77E] opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        ))}
      </div>
    </Card>
  )
}
