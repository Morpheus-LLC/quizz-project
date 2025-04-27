"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

type LeaderboardEntry = {
  position: number
  name: string
  grade: string
  points: number
  streak: number
}

// Mock data for leaderboard
const dailyLeaderboard: LeaderboardEntry[] = [
  { position: 1, name: "Arjun P.", grade: "7th", points: 100, streak: 12 },
  { position: 2, name: "Meera S.", grade: "9th", points: 95, streak: 8 },
  { position: 3, name: "Zara K.", grade: "6th", points: 90, streak: 15 },
  { position: 4, name: "Tanay W.", grade: "10th", points: 85, streak: 5 },
  { position: 5, name: "Priya M.", grade: "8th", points: 80, streak: 10 },
  { position: 6, name: "Rohan D.", grade: "5th", points: 75, streak: 3 },
  { position: 7, name: "Ananya J.", grade: "7th", points: 70, streak: 7 },
  { position: 8, name: "Vikram S.", grade: "9th", points: 65, streak: 4 },
  { position: 9, name: "Neha R.", grade: "8th", points: 60, streak: 9 },
  { position: 10, name: "Kabir M.", grade: "6th", points: 55, streak: 6 },
]

const weeklyLeaderboard: LeaderboardEntry[] = [
  { position: 1, name: "Arjun P.", grade: "7th", points: 950, streak: 12 },
  { position: 2, name: "Meera S.", grade: "9th", points: 925, streak: 8 },
  { position: 3, name: "Zara K.", grade: "6th", points: 900, streak: 15 },
  { position: 4, name: "Tanay W.", grade: "10th", points: 875, streak: 5 },
  { position: 5, name: "Priya M.", grade: "8th", points: 850, streak: 10 },
  { position: 6, name: "Rohan D.", grade: "5th", points: 820, streak: 3 },
  { position: 7, name: "Ananya J.", grade: "7th", points: 790, streak: 7 },
  { position: 8, name: "Vikram S.", grade: "9th", points: 760, streak: 4 },
  { position: 9, name: "Neha R.", grade: "8th", points: 730, streak: 9 },
  { position: 10, name: "Kabir M.", grade: "6th", points: 700, streak: 6 },
]

const monthlyLeaderboard: LeaderboardEntry[] = [
  { position: 1, name: "Arjun P.", grade: "7th", points: 3500, streak: 12 },
  { position: 2, name: "Meera S.", grade: "9th", points: 3400, streak: 8 },
  { position: 3, name: "Zara K.", grade: "6th", points: 3300, streak: 15 },
  { position: 4, name: "Tanay W.", grade: "10th", points: 3200, streak: 5 },
  { position: 5, name: "Priya M.", grade: "8th", points: 3100, streak: 10 },
  { position: 6, name: "Rohan D.", grade: "5th", points: 3000, streak: 3 },
  { position: 7, name: "Ananya J.", grade: "7th", points: 2900, streak: 7 },
  { position: 8, name: "Vikram S.", grade: "9th", points: 2800, streak: 4 },
  { position: 9, name: "Neha R.", grade: "8th", points: 2700, streak: 9 },
  { position: 10, name: "Kabir M.", grade: "6th", points: 2600, streak: 6 },
]

export default function LeaderboardPage() {
  const [gradeFilter, setGradeFilter] = useState<string>("all")

  const filterLeaderboard = (leaderboard: LeaderboardEntry[]) => {
    if (gradeFilter === "all") return leaderboard
    return leaderboard.filter((entry) => entry.grade === gradeFilter)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
        <p className="text-gray-500">See who's leading the pack in our daily quiz challenges</p>
      </div>

      <div className="flex justify-end mb-4">
        <Select value={gradeFilter} onValueChange={setGradeFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="5-7">5th to 7th Grade</SelectItem>
            <SelectItem value="8-10">8th to 10th Grade</SelectItem>
            <SelectItem value="11-12">11th to 12th Grade</SelectItem>
            <SelectItem value="undergrad">Undergraduate</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="weekly">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>

        <TabsContent value="daily">
          <Card>
            <CardHeader>
              <CardTitle>Daily Leaderboard</CardTitle>
              <CardDescription>Top performers for today's quiz</CardDescription>
            </CardHeader>
            <CardContent>
              <LeaderboardTable data={filterLeaderboard(dailyLeaderboard)} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weekly">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Leaderboard</CardTitle>
              <CardDescription>Top performers for this week</CardDescription>
            </CardHeader>
            <CardContent>
              <LeaderboardTable data={filterLeaderboard(weeklyLeaderboard)} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Leaderboard</CardTitle>
              <CardDescription>Top performers for this month</CardDescription>
            </CardHeader>
            <CardContent>
              <LeaderboardTable data={filterLeaderboard(monthlyLeaderboard)} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function LeaderboardTable({ data }: { data: LeaderboardEntry[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[80px]">Rank</TableHead>
          <TableHead>Student</TableHead>
          <TableHead>Grade</TableHead>
          <TableHead>Points</TableHead>
          <TableHead>Streak</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.length > 0 ? (
          data.map((entry) => (
            <TableRow key={entry.position}>
              <TableCell>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold">
                  {entry.position}
                </div>
              </TableCell>
              <TableCell className="font-medium">{entry.name}</TableCell>
              <TableCell>
                <Badge variant="outline">{entry.grade}</Badge>
              </TableCell>
              <TableCell>{entry.points} pts</TableCell>
              <TableCell>{entry.streak} days</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} className="text-center py-4">
              No data available for the selected filter
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
