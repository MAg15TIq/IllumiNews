"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="relative rounded-lg overflow-hidden h-96 md:h-[500px]">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full md:w-3/4 lg:w-2/3">
          <Badge variant="outline" className="bg-background text-foreground mb-2">
            The Big Story
          </Badge>
          <h1 className="mt-2 text-2xl md:text-4xl font-bold text-white leading-tight">
            Breakthrough in Clean Energy Technology Shows Promise for Global Adoption
          </h1>
          <p className="mt-2 text-gray-200 text-sm md:text-base line-clamp-3">
            Scientists have developed a new form of renewable energy technology that could revolutionize how we power our homes and businesses. The innovation combines solar efficiency with improved energy storage capabilities.
          </p>
          <div className="mt-4 flex items-center text-white text-sm">
            <span>By Mohsin Saleem Khan</span>
            <span className="mx-2">•</span>
            <span>May 5, 2025</span>
            <span className="mx-2">•</span>
            <span>8 min read</span>
          </div>
          <Button asChild className="mt-4">
            <Link href="/article/breakthrough-clean-energy">
              Read Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
