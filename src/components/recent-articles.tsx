"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const recentArticles = [
  {
    id: 1,
    title: "Central Banks Announce Coordinated Approach to Digital Currencies",
    excerpt: "Major economies have revealed plans for central bank digital currencies that could transform global finance and monetary policy.",
    category: "Economy",
    author: "Mohsin Saleem Khan",
    date: "May 6, 2025",
    readTime: "5 min read",
    slug: "central-banks-digital-currencies"
  },
  {
    id: 2,
    title: "New Study Challenges Conventional Wisdom on Nutrition and Longevity",
    excerpt: "Research findings suggest that dietary patterns may have more complex effects on aging than previously understood.",
    category: "Health",
    author: "Mohsin Saleem Khan",
    date: "May 5, 2025",
    readTime: "7 min read",
    slug: "nutrition-longevity-study"
  },
  {
    id: 3,
    title: "Virtual Reality Transforms Education for Remote Learning",
    excerpt: "Schools worldwide are adopting immersive VR technologies to create engaging learning environments for students regardless of location.",
    category: "Education",
    author: "Mohsin Saleem Khan",
    date: "May 4, 2025",
    readTime: "6 min read",
    slug: "vr-transforms-education"
  }
]

export function RecentArticles() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-foreground">Most Recent</h2>
        <Link
          href="/recent"
          className="text-muted-foreground hover:text-foreground font-medium flex items-center"
        >
          View All
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="border-t border-border">
        {recentArticles.map((article) => (
          <article key={article.id} className="py-6 border-b border-border flex flex-col md:flex-row">
            <div className="md:w-1/4 mb-4 md:mb-0">
              <span className="text-muted-foreground text-sm">{article.date}</span>
              <div className="mt-2">
                <Badge variant="secondary" className="text-xs font-medium">
                  {article.category}
                </Badge>
              </div>
            </div>
            <div className="md:w-3/4 md:pl-6">
              <Link href={`/article/${article.slug}`}>
                <h3 className="text-xl font-bold text-foreground mb-2 hover:underline">
                  {article.title}
                </h3>
              </Link>
              <p className="text-muted-foreground mb-4">{article.excerpt}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>By {article.author}</span>
                <span className="mx-2">•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </section>
  )
}
