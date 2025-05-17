import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Featured Articles - Illuminews",
  description: "Explore our curated selection of featured articles covering the most important and interesting stories from around the world.",
};

// Featured articles data
const featuredArticles = [
  {
    id: 1,
    title: "Breakthrough in Clean Energy Technology Shows Promise for Global Adoption",
    excerpt: "Scientists have developed a new form of renewable energy technology that could revolutionize how we power our homes and businesses. The innovation combines solar efficiency with improved energy storage capabilities.",
    category: "Technology",
    author: "Malik Mohsin Saleem Khan",
    date: "May 5, 2025",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop",
    slug: "breakthrough-clean-energy"
  },
  {
    id: 2,
    title: "AI Integration in Healthcare Reaches New Milestone",
    excerpt: "Medical institutions worldwide are adopting AI diagnostic tools that have shown remarkable accuracy in early disease detection.",
    category: "Technology",
    author: "Malik Mohsin Saleem Khan",
    date: "May 3, 2025",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
    slug: "ai-integration-healthcare"
  },
  {
    id: 3,
    title: "Global Summit on Climate Policy Reaches Historic Agreement",
    excerpt: "World leaders have committed to ambitious new targets for carbon reduction and sustainable development.",
    category: "Politics",
    author: "Malik Mohsin Saleem Khan",
    date: "April 28, 2025",
    image: "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?q=80&w=600&auto=format&fit=crop",
    slug: "global-summit-climate-policy"
  },
  {
    id: 4,
    title: "New Study Reveals Unexpected Patterns in Deep Ocean Currents",
    excerpt: "Researchers have discovered previously unknown patterns in deep ocean currents that could have significant implications for climate modeling.",
    category: "Science",
    author: "Malik Mohsin Saleem Khan",
    date: "May 4, 2025",
    image: "https://images.unsplash.com/photo-1518399681705-1c1a55e5e883?q=80&w=800&auto=format&fit=crop",
    slug: "ocean-currents-study"
  },
  {
    id: 5,
    title: "Quantum Computing Breakthrough Could Transform Data Security",
    excerpt: "Scientists have achieved a new milestone in quantum computing that may revolutionize how we approach data encryption and security.",
    category: "Science",
    author: "Malik Mohsin Saleem Khan",
    date: "May 2, 2025",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
    slug: "quantum-computing-breakthrough"
  },
  {
    id: 6,
    title: "New Wearable Tech Can Monitor Health Metrics with Unprecedented Accuracy",
    excerpt: "A breakthrough in sensor technology has led to wearable devices that can track health metrics with clinical-grade precision.",
    category: "Technology",
    author: "Malik Mohsin Saleem Khan",
    date: "May 1, 2025",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop",
    slug: "wearable-health-tech"
  },
  {
    id: 7,
    title: "Major Economic Reforms Announced to Address Global Inflation",
    excerpt: "Central banks and finance ministers have unveiled coordinated measures to combat rising inflation and stabilize markets.",
    category: "Economy",
    author: "Malik Mohsin Saleem Khan",
    date: "April 30, 2025",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    slug: "economic-reforms-inflation"
  },
  {
    id: 8,
    title: "New Species of Deep-Sea Creatures Discovered in Pacific Trench",
    excerpt: "Marine biologists have identified several previously unknown species during an expedition to one of the deepest parts of the Pacific Ocean.",
    category: "Science",
    author: "Malik Mohsin Saleem Khan",
    date: "April 28, 2025",
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=800&auto=format&fit=crop",
    slug: "deep-sea-creatures-discovery"
  },
  {
    id: 9,
    title: "Renewable Energy Investments Reach All-Time High",
    excerpt: "Global investments in renewable energy sources have surpassed fossil fuels for the first time, marking a significant shift in energy markets.",
    category: "Business",
    author: "Malik Mohsin Saleem Khan",
    date: "April 25, 2025",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
    slug: "renewable-energy-investments"
  }
];

export default function FeaturedPage() {
  return (
    <>
      <Navbar />
      <main className="pt-4 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Featured Articles", href: "/featured", current: true }
            ]}
          />

          <div className="my-10 text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 relative inline-block">
              Featured Articles
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary mt-2 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
            </h1>
            <p className="text-muted-foreground md:text-lg mx-auto">
              Our editors' selection of the most important and interesting stories. These featured articles represent the best of our journalism across all categories.
            </p>
          </div>

          {/* Main Featured Article */}
          <div className="mb-16 animate-in fade-in zoom-in-95 duration-700">
            <div className="relative rounded-xl overflow-hidden h-96 md:h-[550px] shadow-lg">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url('${featuredArticles[0].image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-3/4 lg:w-2/3">
                <Badge variant="outline" className="bg-background/80 backdrop-blur-sm text-foreground font-medium mb-3">
                  {featuredArticles[0].category}
                </Badge>
                <h2 className="mt-2 text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                  {featuredArticles[0].title}
                </h2>
                <p className="mt-2 text-gray-200 text-base md:text-lg line-clamp-3 mb-6">
                  {featuredArticles[0].excerpt}
                </p>
                <div className="mt-4 flex items-center text-white text-sm mb-6">
                  <span>By {featuredArticles[0].author}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredArticles[0].date}</span>
                </div>
                <Link
                  href={`/article/${featuredArticles[0].slug}`}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-md hover:bg-primary/90 transition-colors duration-200"
                >
                  Read Article
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredArticles.slice(1).map((article, index) => (
              <Link key={article.id} href={`/article/${article.slug}`}>
                <Card
                  className={cn(
                    "h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                    "animate-in fade-in zoom-in-95",
                    index % 3 === 0 ? "delay-100" :
                    index % 3 === 1 ? "delay-200" : "delay-300"
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
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">{article.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>By {article.author}</span>
                      <span className="mx-2">•</span>
                      <span>{article.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
