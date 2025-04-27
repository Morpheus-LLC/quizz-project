"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/hooks/use-auth"
import { UsersTable } from "@/components/admin/users-table"
import { QuestionsTable } from "@/components/admin/questions-table"
import { DashboardStats } from "@/components/admin/dashboard-stats"

export default function AdminPage() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      toast({
        title: "Access Denied",
        description: "Please login to access this page",
        variant: "destructive",
      })
      router.push("/login")
      return
    }

    if (user.role !== "admin") {
      toast({
        title: "Access Denied",
        description: "You don't have permission to access the admin panel",
        variant: "destructive",
      })
      router.push("/")
      return
    }

    setLoading(false)
  }, [user, router, toast])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading admin panel...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-500">Manage your quiz application</p>
        </div>
        <Button>Export Data</Button>
      </div>

      <DashboardStats />

      <Tabs defaultValue="users" className="mt-8">
        <TabsList className="grid w-full md:w-auto grid-cols-3 mb-8">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
          <TabsTrigger value="prizes">Prizes</TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>View and manage all registered users</CardDescription>
            </CardHeader>
            <CardContent>
              <UsersTable />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="questions">
          <Card>
            <CardHeader>
              <CardTitle>Question Management</CardTitle>
              <CardDescription>Create, edit, and delete quiz questions</CardDescription>
            </CardHeader>
            <CardContent>
              <QuestionsTable />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prizes">
          <Card>
            <CardHeader>
              <CardTitle>Prize Management</CardTitle>
              <CardDescription>Configure and assign prizes to winners</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Daily Prizes</h3>
                  <p className="text-sm text-gray-500 mb-4">Configure prizes awarded to daily top performers</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium">1st Place</h4>
                      <p className="text-sm">Digital certificate + 50 bonus points</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium">2nd Place</h4>
                      <p className="text-sm">Digital certificate + 30 bonus points</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium">3rd Place</h4>
                      <p className="text-sm">Digital certificate + 20 bonus points</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Weekly Prizes</h3>
                  <p className="text-sm text-gray-500 mb-4">Configure prizes awarded to weekly top performers</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium">1st Place</h4>
                      <p className="text-sm">Educational book + 100 bonus points</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium">2nd Place</h4>
                      <p className="text-sm">Educational book + 75 bonus points</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium">3rd Place</h4>
                      <p className="text-sm">Educational book + 50 bonus points</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Monthly Prizes</h3>
                  <p className="text-sm text-gray-500 mb-4">Configure prizes awarded to monthly top performers</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium">1st Place</h4>
                      <p className="text-sm">Tablet + 500 bonus points</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium">2nd Place</h4>
                      <p className="text-sm">Headphones + 300 bonus points</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium">3rd Place</h4>
                      <p className="text-sm">Gift card + 200 bonus points</p>
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
