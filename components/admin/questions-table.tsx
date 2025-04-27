"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search, Plus } from "lucide-react"
import type { QuizQuestion } from "@/lib/quiz-data"

// Mock data for questions
const mockQuestions: (QuizQuestion & { id: string })[] = [
  {
    id: "q1",
    question: "What is the largest planet in our solar system?",
    options: [
      { value: "earth", label: "Earth" },
      { value: "jupiter", label: "Jupiter" },
      { value: "saturn", label: "Saturn" },
      { value: "mars", label: "Mars" },
    ],
    correctAnswer: "jupiter",
    grade: "5th",
    category: "science",
    studentLevel: "beginner",
  },
  {
    id: "q2",
    question: "What is the chemical symbol for gold?",
    options: [
      { value: "go", label: "Go" },
      { value: "au", label: "Au" },
      { value: "ag", label: "Ag" },
      { value: "gd", label: "Gd" },
    ],
    correctAnswer: "au",
    grade: "6th",
    category: "chemistry",
    studentLevel: "intermediate",
  },
  {
    id: "q3",
    question: "What is the process by which plants make their own food called?",
    options: [
      { value: "respiration", label: "Respiration" },
      { value: "photosynthesis", label: "Photosynthesis" },
      { value: "digestion", label: "Digestion" },
      { value: "fermentation", label: "Fermentation" },
    ],
    correctAnswer: "photosynthesis",
    grade: "7th",
    category: "biology",
    studentLevel: "advanced",
  },
  {
    id: "q4",
    question: "What is the main component of Earth's atmosphere?",
    options: [
      { value: "oxygen", label: "Oxygen" },
      { value: "carbon-dioxide", label: "Carbon Dioxide" },
      { value: "nitrogen", label: "Nitrogen" },
    ],
    correctAnswer: "nitrogen",
    grade: "8th",
    category: "science",
    studentLevel: "beginner",
  },
  {
    id: "q5",
    question: "What is the formula for calculating acceleration?",
    options: [
      { value: "a=v/t", label: "a = v/t" },
      { value: "a=d/t", label: "a = d/t" },
      { value: "a=(v-u)/t", label: "a = (v-u)/t" },
      { value: "a=m/f", label: "a = m/f" },
    ],
    correctAnswer: "a=(v-u)/t",
    grade: "9th",
    category: "physics",
    studentLevel: "intermediate",
  },
  {
    id: "q6",
    question: "What is the quadratic formula?",
    options: [
      { value: "x=(-b±√(b²-4ac))/2a", label: "x = (-b ± √(b² - 4ac))/2a" },
      { value: "x=(-b±√(b²+4ac))/2a", label: "x = (-b ± √(b² + 4ac))/2a" },
      { value: "x=(b±√(b²-4ac))/2a", label: "x = (b ± √(b² - 4ac))/2a" },
      { value: "x=(-b±√(b²-4ac))/a", label: "x = (-b ± √(b² - 4ac))/a" },
    ],
    correctAnswer: "x=(-b±√(b²-4ac))/2a",
    grade: "10th",
    category: "math",
    studentLevel: "advanced",
  },
]

export function QuestionsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [questions, setQuestions] = useState(mockQuestions)

  const filteredQuestions = questions.filter(
    (question) =>
      question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.grade.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search questions..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New Question
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[400px]">Question</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Student Level</TableHead>
              <TableHead>Options</TableHead>
              <TableHead>Correct Answer</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((question) => (
                <TableRow key={question.id}>
                  <TableCell className="font-medium">{question.question}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="capitalize">
                      {question.category.replace("-", " ")}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{question.studentLevel}</Badge>
                  </TableCell>
                  <TableCell>{question.options.length} options</TableCell>
                  <TableCell>{question.options.find((opt) => opt.value === question.correctAnswer)?.label}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit question</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Delete question</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4">
                  No questions found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
