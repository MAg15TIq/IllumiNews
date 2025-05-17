"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data - in a real app, this would come from a database or API
const allArticles = [
  {
    id: 1,
    title: "Breakthrough in Clean Energy Technology Shows Promise for Global Adoption",
    excerpt: "Scientists have developed a new form of renewable energy technology that could revolutionize how we power our homes and businesses.",
    category: "Technology",
    author: "Mohsin Saleem Khan",
    date: "May 5, 2025",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600&auto=format&fit=crop",
    slug: "breakthrough-clean-energy"
  },
  {
    id: 2,
    title: "AI Integration in Healthcare Reaches New Milestone",
    excerpt: "Medical institutions worldwide are adopting AI diagnostic tools that have shown remarkable accuracy in early disease detection.",
    category: "Technology",
    author: "Mohsin Saleem Khan",
    date: "May 3, 2025",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
    slug: "ai-integration-healthcare"
  },
  {
    id: 3,
    title: "New Wearable Tech Can Monitor Health Metrics with Unprecedented Accuracy",
    excerpt: "A breakthrough in sensor technology has led to wearable devices that can track health metrics with clinical-grade precision.",
    category: "Technology",
    author: "Mohsin Saleem Khan",
    date: "May 1, 2025",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=600&auto=format&fit=crop",
    slug: "wearable-health-tech"
  },
  {
    id: 4,
    title: "Quantum Computing Breakthrough Could Transform Data Security",
    excerpt: "Scientists have achieved a new milestone in quantum computing that may revolutionize how we approach data encryption and security.",
    category: "Science",
    author: "Mohsin Saleem Khan",
    date: "May 2, 2025",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop",
    slug: "quantum-computing-breakthrough"
  },
  {
    id: 5,
    title: "New Study Reveals Unexpected Patterns in Deep Ocean Currents",
    excerpt: "Researchers have discovered previously unknown patterns in deep ocean currents that could have significant implications for climate modeling.",
    category: "Science",
    author: "Mohsin Saleem Khan",
    date: "May 4, 2025",
    image: "https://images.unsplash.com/photo-1518399681705-1c1a55e5e883?q=80&w=600&auto=format&fit=crop",
    slug: "ocean-currents-study"
  }
];

interface RelatedArticlesProps {
  currentArticleId: number
  category: string
  limit?: number
}

export function RelatedArticles({ currentArticleId, category, limit = 3 }: RelatedArticlesProps) {
  // In a real app, you would fetch related articles based on the category and exclude the current article
  const relatedArticles = allArticles
    .filter(article => article.id !== currentArticleId && article.category === category)
    .slice(0, limit);

  if (relatedArticles.length === 0) {
    // If no articles in the same category, just show other articles
    const otherArticles = allArticles
      .filter(article => article.id !== currentArticleId)
      .slice(0, limit);

    if (otherArticles.length === 0) return null;

    return (
      <div className="mt-12 mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">More Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherArticles.map(article => (
            <RelatedArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 mb-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedArticles.map(article => (
          <RelatedArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

interface RelatedArticleCardProps {
  article: typeof allArticles[0]
}

function RelatedArticleCard({ article }: RelatedArticleCardProps) {
  return (
    <Link href={`/article/${article.slug}`}>
      <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-md">
        <div className="relative pb-[60%]">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${article.image}')` }}
          />
          <div className="absolute top-4 left-4">
            <Badge variant="outline" className="bg-background text-foreground">
              {article.category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{article.title}</h3>
          <div className="flex items-center text-xs text-muted-foreground">
            <span>By {article.author}</span>
            <span className="mx-2">•</span>
            <span>{article.date}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
