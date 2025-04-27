import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Trophy } from "lucide-react"
import { LeaderboardPreview } from "@/components/leaderboard-preview"
import { StreakRewards } from "@/components/streak-rewards"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Test Your Knowledge,
                <br />
                Win Amazing Prizes!
              </h1>
              <p className="text-lg text-gray-600 md:text-xl">
                Join thousands of students in grades 5-10 who play our daily quiz and win exciting prizes every day!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Play Today's Quiz
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[300px] w-[400px] bg-gray-100 rounded-lg">
                <Image
                  src="/placeholder.svg?key=6lsmy"
                  alt="Students taking quiz"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600">BrainQuest makes learning fun with daily quizzes and rewards for students</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="flex justify-center mb-4">
                <Calendar className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Daily Quizzes</h3>
              <p className="text-gray-600">A new quiz every day with age-appropriate questions for grades 5-10</p>
            </div>
            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">One Attempt Daily</h3>
              <p className="text-gray-600">Each student gets one chance per day to complete the quiz and earn points</p>
            </div>
            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Win Prizes</h3>
              <p className="text-gray-600">Top performers win exciting prizes every day, week, and month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Streak Rewards Section */}
      <StreakRewards />

      {/* Top Performers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Top Performers</h2>
            <p className="text-gray-600">See who's leading the pack this week</p>
          </div>
          <LeaderboardPreview />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Test Your Knowledge?</h2>
          <p className="text-xl mb-8">Join thousands of students who play our daily quiz and win exciting prizes!</p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary">
              Sign Up Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              Login
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
