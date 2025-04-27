import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About BrainQuest</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Making learning fun and rewarding for students in grades 5-10
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            At BrainQuest, we believe that learning should be fun, engaging, and rewarding. Our mission is to inspire a
            love for learning in students by turning education into an exciting daily adventure.
          </p>
          <p className="text-lg text-gray-600">
            Through our daily quizzes, we aim to reinforce classroom learning, encourage healthy competition, and reward
            consistent effort and improvement.
          </p>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image src="/collaborative-learning-space.png" alt="Students learning together" fill className="object-cover" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose BrainQuest?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-blue-100">
                  <CheckCircle2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Age-Appropriate Content</h3>
                <p className="text-gray-600">
                  Our quizzes are carefully designed to match the curriculum and learning abilities of students in
                  grades 5-10.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-blue-100">
                  <CheckCircle2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Daily Engagement</h3>
                <p className="text-gray-600">
                  A new quiz every day keeps students engaged and helps build a consistent learning habit.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-blue-100">
                  <CheckCircle2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Exciting Rewards</h3>
                <p className="text-gray-600">
                  Our reward system motivates students to keep learning and improving with daily, weekly, and monthly
                  prizes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: "Dr. Aisha Patel", role: "Founder & CEO", image: "founder" },
            { name: "Prof. Michael Chen", role: "Education Director", image: "education-director" },
            { name: "Sarah Johnson", role: "Content Manager", image: "content-manager" },
            { name: "David Rodriguez", role: "Technology Lead", image: "tech-lead" },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src={`/confident-professional.png?height=200&width=200&query=professional headshot of ${member.role}`}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {[1, 2, 3, 4].map((partner) => (
            <div key={partner} className="flex justify-center">
              <div className="relative h-16 w-48">
                <Image
                  src={`/placeholder.svg?height=64&width=192&query=education company logo`}
                  alt={`Partner ${partner}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
