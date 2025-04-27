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
import { MoreHorizontal, Search } from "lucide-react"

type User = {
  id: string
  name: string
  email: string
  grade: string
  points: number
  streak: number
  status: "active" | "inactive" | "suspended"
  joinDate: string
}

// Mock data for users
const mockUsers: User[] = [
  {
    id: "user-1",
    name: "Arjun P.",
    email: "arjun.p@example.com",
    grade: "5-7",
    points: 950,
    streak: 12,
    status: "active",
    joinDate: "2023-09-15",
  },
  {
    id: "user-2",
    name: "Meera S.",
    email: "meera.s@example.com",
    grade: "8-10",
    points: 925,
    streak: 8,
    status: "active",
    joinDate: "2023-10-02",
  },
  {
    id: "user-3",
    name: "Zara K.",
    email: "zara.k@example.com",
    grade: "5-7",
    points: 900,
    streak: 15,
    status: "active",
    joinDate: "2023-08-20",
  },
  {
    id: "user-4",
    name: "Tanay W.",
    email: "tanay.w@example.com",
    grade: "8-10",
    points: 875,
    streak: 5,
    status: "inactive",
    joinDate: "2023-11-10",
  },
  {
    id: "user-5",
    name: "Priya M.",
    email: "priya.m@example.com",
    grade: "8-10",
    points: 850,
    streak: 10,
    status: "active",
    joinDate: "2023-09-28",
  },
  {
    id: "user-6",
    name: "Rohan D.",
    email: "rohan.d@example.com",
    grade: "5-7",
    points: 820,
    streak: 3,
    status: "suspended",
    joinDate: "2023-10-15",
  },
  {
    id: "user-7",
    name: "Aisha K.",
    email: "aisha.k@example.com",
    grade: "11-12",
    points: 780,
    streak: 7,
    status: "active",
    joinDate: "2023-11-05",
  },
  {
    id: "user-8",
    name: "Rahul S.",
    email: "rahul.s@example.com",
    grade: "undergrad",
    points: 920,
    streak: 14,
    status: "active",
    joinDate: "2023-10-10",
  },
]

export function UsersTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [users, setUsers] = useState<User[]>(mockUsers)

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.grade.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-yellow-100 text-yellow-800"
      case "suspended":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button>Add New User</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Points</TableHead>
              <TableHead>Streak</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">
                    <div>
                      {user.name}
                      <div className="text-xs text-gray-500">{user.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{user.grade}</TableCell>
                  <TableCell>{user.points}</TableCell>
                  <TableCell>{user.streak} days</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(user.status)}>
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(user.joinDate).toLocaleDateString()}</TableCell>
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
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Edit user</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Suspend user</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-4">
                  No users found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
