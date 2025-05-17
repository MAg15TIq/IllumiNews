"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const featuredArticles = [
  {
    id: 1,
    title: "AI Integration in Healthcare Reaches New Milestone",
    excerpt: "Medical institutions worldwide are adopting AI diagnostic tools that have shown remarkable accuracy in early disease detection.",
    category: "Technology",
    author: "Mohsin Saleem Khan",
    date: "May 3, 2025",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
    slug: "ai-integration-healthcare"
  },
  {
    id: 2,
    title: "Ocean Cleanup Initiative Shows Promising Results",
    excerpt: "The ambitious project to remove plastic from the Pacific Ocean has exceeded expectations in its first year of operation.",
    category: "Environment",
    author: "Mohsin Saleem Khan",
    date: "May 1, 2025",
    image: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?q=80&w=600&auto=format&fit=crop",
    slug: "ocean-cleanup-initiative"
  },
  {
    id: 3,
    title: "Global Summit on Climate Policy Reaches Historic Agreement",
    excerpt: "World leaders have committed to ambitious new targets for carbon reduction and sustainable development.",
    category: "Politics",
    author: "Mohsin Saleem Khan",
    date: "April 28, 2025",
    image: "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?q=80&w=600&auto=format&fit=crop",
    slug: "global-summit-climate-policy"
  },
  {
    id: 4,
    title: "Renewable Energy Investments Reach All-Time High",
    excerpt: "Global investments in renewable energy sources have surpassed fossil fuels for the first time, marking a significant shift in energy markets.",
    category: "Business",
    author: "Mohsin Saleem Khan",
    date: "April 25, 2025",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop",
    slug: "renewable-energy-investments"
  }
]

export function FeaturedArticles() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-3xl font-bold text-foreground mb-3 relative">
          Featured Articles
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary mt-2"></span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
          Our editors' selection of the most important and interesting stories from around the world.
        </p>
        <Link
          href="/featured"
          className="text-primary hover:text-primary/90 font-medium flex items-center transition-colors"
        >
          View All Articles
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {featuredArticles.map((article, index) => (
          <Link key={article.id} href={`/article/${article.slug}`}>
            <Card
              className={cn(
                "h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                "animate-in fade-in zoom-in-95",
                index === 0 ? "delay-100" :
                index === 1 ? "delay-200" :
                index === 2 ? "delay-300" : "delay-400"
              )}
            >
              <div className="relative pb-[60%] overflow-hidden">
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                  style={{ backgroundImage: `url('${article.image}')` }}
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm text-foreground font-medium">
                    {article.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{article.excerpt}</p>
              </CardContent>
              <CardFooter className="px-5 pb-5 pt-0">
                <div className="flex items-center text-xs text-muted-foreground">
                  <span>By {article.author}</span>
                  <span className="mx-2">•</span>
                  <span>{article.date}</span>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
