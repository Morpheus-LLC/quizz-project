"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/hooks/use-auth"
import { Clock, AlertTriangle } from "lucide-react"
import { type QuizQuestion, getQuizQuestions } from "@/lib/quiz-data"
import { Badge } from "@/components/ui/badge"

export default function QuizPage() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [hasAttemptedToday, setHasAttemptedToday] = useState(false)
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [categorySelectionMode, setCategorySelectionMode] = useState(true)

  useEffect(() => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to access the quiz",
        variant: "destructive",
      })
      router.push("/login")
      return
    }

    // Check if user has already attempted the quiz today
    const lastAttemptDate = localStorage.getItem("lastQuizAttempt")
    const today = new Date().toDateString()

    if (lastAttemptDate === today) {
      setHasAttemptedToday(true)
    }

    setLoading(false)
  }, [user, router, toast])

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    setCategorySelectionMode(false)

    // Load quiz questions based on selected category
    const loadedQuestions = getQuizQuestions(user?.grade || "", category)
    setQuestions(loadedQuestions)
  }

  useEffect(() => {
    if (loading || hasAttemptedToday || quizCompleted) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleQuizEnd()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [loading, hasAttemptedToday, quizCompleted])

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      // Save the answer
      setAnswers({
        ...answers,
        [currentQuestionIndex]: selectedAnswer,
      })

      // Move to next question or end quiz
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setSelectedAnswer(null)
      } else {
        handleQuizEnd()
      }
    } else {
      toast({
        title: "Selection Required",
        description: "Please select an answer before proceeding",
        variant: "destructive",
      })
    }
  }

  const handleQuizEnd = () => {
    // Calculate score
    let score = 0
    Object.entries(answers).forEach(([questionIndex, answer]) => {
      const question = questions[Number.parseInt(questionIndex)]
      if (question.correctAnswer === answer) {
        score += 10
      }
    })

    // Save quiz attempt
    localStorage.setItem("lastQuizAttempt", new Date().toDateString())

    // Update user stats (in a real app, this would be an API call)
    // For demo, we'll just show the results
    setQuizCompleted(true)
    setHasAttemptedToday(true)

    toast({
      title: "Quiz Completed!",
      description: `You scored ${score} points out of ${questions.length * 10}`,
    })
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading quiz...</p>
        </div>
      </div>
    )
  }

  if (hasAttemptedToday) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Quiz Already Completed</CardTitle>
            <CardDescription>
              You've already completed today's quiz. Come back tomorrow for a new challenge!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center mb-4">
              <AlertTriangle className="h-16 w-16 text-yellow-500" />
            </div>
            <p className="text-center">
              Remember, you can only take the quiz once per day. This helps make the competition fair for everyone.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={() => router.push("/leaderboard")}>Check Leaderboard</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  if (quizCompleted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Quiz Completed!</CardTitle>
            <CardDescription>You've successfully completed today's quiz.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <p className="text-2xl font-bold mb-2">
                Your Score:{" "}
                {Object.entries(answers).filter(
                  ([questionIndex, answer]) => questions[Number.parseInt(questionIndex)].correctAnswer === answer,
                ).length * 10}{" "}
                points
              </p>
              <p className="text-sm text-gray-500">Come back tomorrow for a new challenge!</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Your Answers:</h3>
              {questions.map((question, index) => (
                <div key={index} className="border rounded-lg p-3">
                  <p className="font-medium">{question.question}</p>
                  <p
                    className={`text-sm ${answers[index] === question.correctAnswer ? "text-green-600" : "text-red-600"}`}
                  >
                    Your answer: {question.options.find((opt) => opt.value === answers[index])?.label || "Not answered"}
                  </p>
                  {answers[index] !== question.correctAnswer && (
                    <p className="text-sm text-green-600">
                      Correct answer: {question.options.find((opt) => opt.value === question.correctAnswer)?.label}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={() => router.push("/leaderboard")}>Check Leaderboard</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <div className="container mx-auto px-4 py-12">
      {categorySelectionMode ? (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Choose Quiz Category</CardTitle>
            <CardDescription>Select a category for today's quiz</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["general-knowledge", "health", "current-affairs", "national", "syllabus"].map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="h-24 flex flex-col items-center justify-center text-center p-4"
                  onClick={() => handleCategorySelect(category)}
                >
                  <span className="text-lg font-medium capitalize">{category.replace("-", " ")}</span>
                  <span className="text-xs text-muted-foreground mt-1">5 questions</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex justify-between items-center mb-2">
              <div>
                <CardTitle>Today's Quiz</CardTitle>
                <CardDescription className="capitalize">
                  Category: {selectedCategory?.replace("-", " ")}
                </CardDescription>
              </div>
              <div className="flex items-center gap-2 text-orange-600">
                <Clock className="h-5 w-5" />
                <span className="font-medium">{formatTime(timeLeft)}</span>
              </div>
            </div>
            <CardDescription>
              Question {currentQuestionIndex + 1} of {questions.length}
            </CardDescription>
            <Progress value={(currentQuestionIndex / questions.length) * 100} className="mt-2" />
          </CardHeader>
          <CardContent>
            {currentQuestion && (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-medium">{currentQuestion.question}</h3>
                  <Badge variant="outline" className="capitalize">
                    {currentQuestion.category.replace("-", " ")}
                  </Badge>
                </div>
                <RadioGroup value={selectedAnswer || ""} onValueChange={handleAnswerSelect}>
                  <div className="space-y-3">
                    {currentQuestion.options.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50 cursor-pointer"
                        onClick={() => handleAnswerSelect(option.value)}
                      >
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              disabled={currentQuestionIndex === 0}
              onClick={() => {
                if (currentQuestionIndex > 0) {
                  setCurrentQuestionIndex(currentQuestionIndex - 1)
                  setSelectedAnswer(answers[currentQuestionIndex - 1] || null)
                }
              }}
            >
              Previous
            </Button>
            <Button onClick={handleNextQuestion}>
              {currentQuestionIndex === questions.length - 1 ? "Finish Quiz" : "Next Question"}
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
