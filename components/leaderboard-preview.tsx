import Link from "next/link"
import { Button } from "@/components/ui/button"

type LeaderboardEntry = {
  position: number
  name: string
  grade: string
  points: number
}

const leaderboardData: LeaderboardEntry[] = [
  { position: 1, name: "Arjun P.", grade: "5-7", points: 950 },
  { position: 2, name: "Rahul S.", grade: "Undergrad", points: 925 },
  { position: 3, name: "Zara K.", grade: "5-7", points: 900 },
  { position: 4, name: "Aisha K.", grade: "11-12", points: 875 },
  { position: 5, name: "Meera S.", grade: "8-10", points: 850 },
]

export function LeaderboardPreview() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold">Weekly Leaderboard</h3>
          <Link href="/leaderboard">
            <Button variant="link" size="sm">
              View Full Leaderboard
            </Button>
          </Link>
        </div>
        <div className="divide-y">
          {leaderboardData.map((entry) => (
            <div key={entry.position} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold">
                  {entry.position}
                </div>
                <div>
                  <p className="font-medium">{entry.name}</p>
                  <p className="text-sm text-gray-500">{entry.grade}</p>
                </div>
              </div>
              <div className="font-semibold">{entry.points} pts</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
