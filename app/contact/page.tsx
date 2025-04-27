"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions or feedback? We'd love to hear from you!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-blue-100">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">For general inquiries:</p>
              <a href="mailto:info@brainquest.com" className="text-blue-600 hover:underline">
                info@brainquest.com
              </a>
              <p className="text-gray-600 mt-2 mb-2">For support:</p>
              <a href="mailto:support@brainquest.com" className="text-blue-600 hover:underline">
                support@brainquest.com
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-blue-100">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">Monday to Friday, 9am to 5pm</p>
              <a href="tel:+1-800-123-4567" className="text-blue-600 hover:underline">
                +1 (800) 123-4567
              </a>
              <p className="text-gray-600 mt-4 mb-2">For urgent matters:</p>
              <a href="tel:+1-800-765-4321" className="text-blue-600 hover:underline">
                +1 (800) 765-4321
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-blue-100">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600">
                BrainQuest Headquarters
                <br />
                123 Learning Lane
                <br />
                Education City, EC 12345
                <br />
                United States
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Select value={formData.subject} onValueChange={handleSelectChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <span className="mr-2">Sending...</span>
                    <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-bold mb-1">How does the daily quiz work?</h3>
                <p className="text-gray-600">
                  Each student can take one quiz per day. The quiz consists of 10 questions tailored to their grade
                  level, and they have 5 minutes to complete it.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-1">How are prizes awarded?</h3>
                <p className="text-gray-600">
                  Prizes are awarded to top performers on daily, weekly, and monthly leaderboards. We also have special
                  rewards for students who maintain streaks.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-1">Is BrainQuest free to use?</h3>
                <p className="text-gray-600">Yes, BrainQuest is completely free for all students in grades 5-10.</p>
              </div>

              <div>
                <h3 className="font-bold mb-1">How do I report a problem with a quiz question?</h3>
                <p className="text-gray-600">
                  You can report issues with quiz questions by contacting our support team at support@brainquest.com.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For Schools and Teachers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We offer special programs for schools and teachers who want to incorporate BrainQuest into their
                curriculum. Benefits include:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Custom quizzes aligned with your curriculum</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Detailed performance analytics for students</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Classroom leaderboards and group competitions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Teacher dashboard for monitoring progress</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Learn More About School Programs
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
