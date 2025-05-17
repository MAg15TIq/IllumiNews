"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [preferences, setPreferences] = useState({
    dailyDigest: true,
    breakingNews: false,
    weeklyRoundup: false,
    specialOffers: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }
  
  const handlePreferenceChange = (id: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }
  
  return (
    <Card className="border-none shadow-none bg-muted/40">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Subscribe to Our Newsletter</CardTitle>
        <CardDescription>
          Stay informed with our latest articles, updates, and insights delivered directly to your inbox.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-md p-4 text-green-800 dark:text-green-300 max-w-md mx-auto">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="font-medium">Thank you for subscribing!</p>
            </div>
            <p className="mt-2 text-sm">You've been added to our mailing list and will receive updates according to your preferences.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="flex gap-2">
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="flex-1"
                  />
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Subscribing...
                      </>
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Newsletter Preferences</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="dailyDigest" 
                      checked={preferences.dailyDigest}
                      onCheckedChange={() => handlePreferenceChange("dailyDigest")}
                    />
                    <label
                      htmlFor="dailyDigest"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Daily Digest
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="breakingNews" 
                      checked={preferences.breakingNews}
                      onCheckedChange={() => handlePreferenceChange("breakingNews")}
                    />
                    <label
                      htmlFor="breakingNews"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Breaking News
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="weeklyRoundup" 
                      checked={preferences.weeklyRoundup}
                      onCheckedChange={() => handlePreferenceChange("weeklyRoundup")}
                    />
                    <label
                      htmlFor="weeklyRoundup"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Weekly Roundup
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="specialOffers" 
                      checked={preferences.specialOffers}
                      onCheckedChange={() => handlePreferenceChange("specialOffers")}
                    />
                    <label
                      htmlFor="specialOffers"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Special Offers
                    </label>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                By subscribing, you agree to our <a href="/privacy-policy" className="underline hover:text-foreground">Privacy Policy</a> and consent to receive news and updates from Illuminews. You can unsubscribe at any time.
              </p>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
