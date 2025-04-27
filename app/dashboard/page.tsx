"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/hooks/use-auth"
import { Award, Calendar, Clock, Flame, Trophy } from "lucide-react"

export default function DashboardPage() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [hasAttemptedToday, setHasAttemptedToday] = useState(false)

  useEffect(() => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to access your dashboard",
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

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome, {user?.name}!</h1>
          <p className="text-gray-500">Track your progress and take today's quiz</p>
        </div>
        <Button onClick={() => router.push("/quiz")}>
          {hasAttemptedToday ? "View Today's Results" : "Take Today's Quiz"}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Points</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user?.points || 0}</div>
            <p className="text-xs text-muted-foreground">+50 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Flame className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user?.streak || 0} days</div>
            <p className="text-xs text-muted-foreground">Keep it going!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quizzes Completed</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Since you joined</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Score</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Your Progress</CardTitle>
            <CardDescription>Track your learning journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Science</span>
                  <span className="text-sm text-gray-500">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Mathematics</span>
                  <span className="text-sm text-gray-500">72%</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">History</span>
                  <span className="text-sm text-gray-500">68%</span>
                </div>
                <Progress value={68} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Geography</span>
                  <span className="text-sm text-gray-500">90%</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Language Arts</span>
                  <span className="text-sm text-gray-500">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Milestone</CardTitle>
            <CardDescription>Keep going to unlock rewards</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Flame className="h-8 w-8 text-orange-500" />
              </div>
              <div>
                <h3 className="font-bold">7-Day Streak</h3>
                <p className="text-sm text-gray-500">{user?.streak || 0}/7 days completed</p>
              </div>
            </div>
            <Progress value={((user?.streak || 0) * 100) / 7} className="h-2 mb-4" />
            <p className="text-sm text-gray-600">
              Complete {7 - (user?.streak || 0)} more daily quizzes to earn bonus points and a special badge!
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={() => router.push("/quiz")}>
              {hasAttemptedToday ? "Come Back Tomorrow" : "Take Today's Quiz"}
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="achievements">
        <TabsList className="grid w-full md:w-auto grid-cols-3 mb-8">
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="history">Quiz History</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
        </TabsList>

        <TabsContent value="achievements">
          <Card>
            <CardHeader>
              <CardTitle>Your Achievements</CardTitle>
              <CardDescription>Badges and milestones you've unlocked</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "First Quiz", description: "Completed your first quiz", unlocked: true },
                  { name: "Perfect Score", description: "Scored 100% on a quiz", unlocked: true },
                  { name: "3-Day Streak", description: "Completed quizzes for 3 days in a row", unlocked: true },
                  { name: "Science Whiz", description: "Answered 50 science questions correctly", unlocked: false },
                  { name: "Math Master", description: "Answered 50 math questions correctly", unlocked: false },
                  { name: "History Buff", description: "Answered 50 history questions correctly", unlocked: false },
                  {
                    name: "Geography Explorer",
                    description: "Answered 50 geography questions correctly",
                    unlocked: false,
                  },
                  { name: "7-Day Streak", description: "Completed quizzes for 7 days in a row", unlocked: false },
                ].map((achievement, index) => (
                  <Card key={index} className={achievement.unlocked ? "border-blue-200" : "opacity-50"}>
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center text-center">
                        <div
                          className={`mb-2 p-2 rounded-full ${achievement.unlocked ? "bg-blue-100" : "bg-gray-100"}`}
                        >
                          <Award className={`h-6 w-6 ${achievement.unlocked ? "text-blue-600" : "text-gray-400"}`} />
                        </div>
                        <h3 className="font-medium text-sm mb-1">{achievement.name}</h3>
                        <p className="text-xs text-gray-500">{achievement.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Quiz History</CardTitle>
              <CardDescription>Your recent quiz attempts and scores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { date: "2023-04-25", score: 80, topic: "General Knowledge" },
                  { date: "2023-04-24", score: 70, topic: "Science" },
                  { date: "2023-04-23", score: 90, topic: "Mathematics" },
                  { date: "2023-04-22", score: 85, topic: "History" },
                  { date: "2023-04-21", score: 75, topic: "Geography" },
                ].map((quiz, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{quiz.topic}</p>
                        <p className="text-sm text-gray-500">{new Date(quiz.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{quiz.score}%</p>
                      <p className="text-xs text-gray-500">
                        {quiz.score >= 80 ? "Excellent" : quiz.score >= 70 ? "Good" : "Needs Improvement"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All History
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="rewards">
          <Card>
            <CardHeader>
              <CardTitle>Available Rewards</CardTitle>
              <CardDescription>Prizes you can win based on your performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Daily Rewards</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium">1st Place</h4>
                      <p className="text-sm text-gray-600">Digital certificate + 50 bonus points</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium">2nd Place</h4>
                      <p className="text-sm text-gray-600">Digital certificate + 30 bonus points</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium">3rd Place</h4>
                      <p className="text-sm text-gray-600">Digital certificate + 20 bonus points</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Streak Rewards</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium">7-Day Streak</h4>
                      <p className="text-sm text-gray-600">Special badge + 100 bonus points</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium">30-Day Streak</h4>
                      <p className="text-sm text-gray-600">Premium badge + 500 bonus points</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium">100-Day Streak</h4>
                      <p className="text-sm text-gray-600">Elite badge + entry into prize drawing</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Monthly Prizes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium">1st Place</h4>
                      <p className="text-sm text-gray-600">Tablet + 1000 bonus points</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium">2nd Place</h4>
                      <p className="text-sm text-gray-600">Headphones + 750 bonus points</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium">3rd Place</h4>
                      <p className="text-sm text-gray-600">Gift card + 500 bonus points</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
