"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type User = {
  id: string
  name: string
  email: string
  grade: string
  role: "student" | "admin"
  points: number
  streak: number
} | null

type AuthContextType = {
  user: User
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => void
  register: (name: string, email: string, password: string, grade: string) => Promise<void>
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    try {
      // This would be an API call in a real application
      // For demo purposes, we'll simulate a successful login
      const mockUser = {
        id: "user-1",
        name: "Test User",
        email,
        grade: "7th",
        role: "student" as const,
        points: 250,
        streak: 5,
      }

      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const register = async (name: string, email: string, password: string, grade: string) => {
    setLoading(true)
    try {
      // This would be an API call in a real application
      // For demo purposes, we'll simulate a successful registration
      const mockUser = {
        id: "user-" + Math.floor(Math.random() * 1000),
        name,
        email,
        grade,
        role: "student" as const,
        points: 0,
        streak: 0,
      }

      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
    } catch (error) {
      console.error("Registration failed:", error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, signIn, signOut, register, loading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
