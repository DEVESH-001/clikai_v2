"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"

const questions = [
  {
    id: 1,
    question: "Tell us about your role.",
    options: [
      "Lender/Underwriter",
      "Investment Manager",
      "Asset Manager",
      "Broker/Syndicator",
      "Enterprise Team",
      "Other",
    ],
  },
  {
    id: 2,
    question: "What's your primary goal today?",
    options: ["Financial Modeling", "CRE Document Data Extraction"],
  },
  {
    id: 3,
    question: "How many deals do you analyze monthly?",
    options: ["0-4 deals/month", "5-20 deals/month", "20-50 deals/month", "50+ deals/month"],
  },
  {
    id: 4,
    question: "Which asset classes do you focus on?",
    options: ["Multifamily Only", "All Asset Classes"],
  },
  {
    id: 5,
    question: "What's your preferred level of automation?",
    options: [
      "Fully Automated: I prefer an end-to-end solution with little to no manual intervention.",
      "Semi-Automated: I want to handle basic tasks and leave complex ones to the system.",
      "Fully Outsourced: I want experts to handle the work while I focus on results.",
      "API-Driven Integration: I want to integrate document extraction into my existing systems.",
    ],
  },
]

const getRecommendedProduct = (answers: Record<number, string>) => {
  const role = answers[1]
  const primaryGoal = answers[2]

  const assetClass = answers[4]
  const automation = answers[5]

  if (primaryGoal === "CRE Document Data Extraction") {
    return "Clarity360"
  }

  if (role === "Lender/Underwriter" || role === "Asset Manager") {
    if (automation === "API-Driven Integration: I want to integrate document extraction into my existing systems.") {
      return "SmartExtract"
    }
    return "AutoUW"
  }

  if (role === "Investment Manager") {
    if (
      assetClass === "Multifamily Only" &&
      automation === "Fully Automated: I prefer an end-to-end solution with little to no manual intervention."
    ) {
      return "InvestAssist"
    }
    if (automation === "API-Driven Integration: I want to integrate document extraction into my existing systems.") {
      return "SmartExtract"
    }
    return "AutoUW"
  }

  if (role === "Broker/Syndicator") {
    if (
      assetClass === "Multifamily Only" &&
      automation === "Fully Automated: I prefer an end-to-end solution with little to no manual intervention."
    ) {
      return "InvestAssist"
    }
    if (automation === "API-Driven Integration: I want to integrate document extraction into my existing systems.") {
      return "SmartExtract"
    }
    return "AutoUW"
  }

  // Default case
  return "AutoUW"
}

interface QuizSectionProps {
  onProductRecommended: (product: string) => void
}

export function QuizSection({ onProductRecommended }: QuizSectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion + 1]: answer }))

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      const recommendedProduct = getRecommendedProduct(answers)
      onProductRecommended(recommendedProduct)
      setShowResult(true)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResult(false)
    onProductRecommended("AutoUW") // Reset to default
  }

  const currentQuestionData = questions[currentQuestion]

  return (
    <section
      className={`relative overflow-hidden py-12 md:py-16 lg:py-24 bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50`}
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 via-purple-100/20 to-indigo-100/20"></div>
      {/* Decorative background elements */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Curved lines */}
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 C30,20 70,80 100,50"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.path
            d="M0,30 C30,60 70,40 100,70"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </svg>

        {/* Floating circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-blue-200/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className={`container mx-auto px-4 py-8 max-w-6xl relative z-10`}>
        <div className={`text-center mb-8`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Clik.ai Solution
          </h2>
          <p className="text-base md:text-lg text-gray-700  mx-auto">
            Answer a few questions to get personalized product recommendations
            tailored to your needs
          </p>
        </div>

        <Card className="p-6 md:p-8 lg:p-10 bg-white/90 backdrop-blur shadow-xl rounded-xl">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key="question"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-blue-900">
                    {currentQuestionData.question}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {currentQuestion + 1} of {questions.length}
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {currentQuestionData.options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className={`p-4 md:p-6 h-auto text-left flex items-start justify-between group hover:border-blue-500 hover:bg-blue-50 transition-all ${
                        answers[currentQuestion + 1] === option
                          ? "border-blue-500 bg-blue-50"
                          : ""
                      }`}
                      onClick={() => handleAnswer(option)}
                    >
                      <span className="text-sm md:text-base text-gray-700 group-hover:text-blue-700 flex-grow pr-4 whitespace-normal">
                        {option}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 flex-shrink-0 mt-1" />
                    </Button>
                  ))}
                </div>

                <div className="mt-6 flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={currentQuestion === 0}
                    className={currentQuestion === 0 ? "invisible" : ""}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <div className="flex-grow" />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="mb-6">
                  <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">
                    We&apos;ve Found Your Perfect Match!
                  </h3>
                  <p className="text-base md:text-lg text-gray-600">
                    Based on your needs, we recommend:
                  </p>
                </div>

                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-8">
                  {getRecommendedProduct(answers)}
                </div>

                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    onClick={resetQuiz}
                    className="text-sm md:text-base"
                  >
                    Start Over
                  </Button>
                  <Button className="text-sm md:text-base bg-black text-white hover:text-white hover:bg-black">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </div>
    </section>
  );
}

