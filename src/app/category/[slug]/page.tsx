import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Breadcrumbs } from "@/components/breadcrumbs";

// Mock data - in a real app, this would come from a database or API
const categories = [
  {
    id: 1,
    name: "Science",
    slug: "science",
    description: "Discover groundbreaking research, innovations, and scientific breakthroughs shaping our understanding of the world.",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1200&auto=format&fit=crop",
    featuredArticle: {
      id: 101,
      title: "New Study Reveals Unexpected Patterns in Deep Ocean Currents",
      excerpt: "Researchers have discovered previously unknown patterns in deep ocean currents that could have significant implications for climate modeling.",
      slug: "ocean-currents-study",
      image: "https://images.unsplash.com/photo-1518399681705-1c1a55e5e883?q=80&w=800&auto=format&fit=crop",
      date: "May 4, 2025",
      author: "Sarah Johnson"
    },
    articles: [
      {
        id: 102,
        title: "Quantum Computing Breakthrough Could Transform Data Security",
        excerpt: "Scientists have achieved a new milestone in quantum computing that may revolutionize how we approach data encryption and security.",
        slug: "quantum-computing-breakthrough",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
        date: "May 2, 2025",
        author: "Michael Chen"
      },
      {
        id: 103,
        title: "New Species of Deep-Sea Creatures Discovered in Pacific Trench",
        excerpt: "Marine biologists have identified several previously unknown species during an expedition to one of the deepest parts of the Pacific Ocean.",
        slug: "deep-sea-creatures-discovery",
        image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=800&auto=format&fit=crop",
        date: "April 28, 2025",
        author: "Emily Rodriguez"
      },
      {
        id: 104,
        title: "Astronomers Detect Unusual Radio Signals from Distant Galaxy",
        excerpt: "A team of astronomers has recorded strange radio emissions from a galaxy billions of light years away, prompting new questions about cosmic phenomena.",
        slug: "unusual-radio-signals",
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop",
        date: "April 25, 2025",
        author: "David Wilson"
      },
      {
        id: 105,
        title: "Revolutionary Material Could Make Desalination More Efficient",
        excerpt: "Engineers have developed a new membrane material that could significantly reduce the energy required for seawater desalination.",
        slug: "desalination-material",
        image: "https://images.unsplash.com/photo-1527066236128-2ff79f7b9705?q=80&w=800&auto=format&fit=crop",
        date: "April 20, 2025",
        author: "Lisa Thompson"
      }
    ]
  },
  {
    id: 2,
    name: "Technology",
    slug: "technology",
    description: "Explore the latest tech trends, digital innovations, and how technology is transforming our daily lives.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    featuredArticle: {
      id: 201,
      title: "AI Integration in Healthcare Reaches New Milestone",
      excerpt: "Medical institutions worldwide are adopting AI diagnostic tools that have shown remarkable accuracy in early disease detection.",
      slug: "ai-integration-healthcare",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
      date: "May 3, 2025",
      author: "David Chen"
    },
    articles: [
      {
        id: 202,
        title: "New Wearable Tech Can Monitor Health Metrics with Unprecedented Accuracy",
        excerpt: "A breakthrough in sensor technology has led to wearable devices that can track health metrics with clinical-grade precision.",
        slug: "wearable-health-tech",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop",
        date: "May 1, 2025",
        author: "Jennifer Park"
      },
      {
        id: 203,
        title: "Breakthrough in Clean Energy Technology Shows Promise for Global Adoption",
        excerpt: "Scientists have developed a new form of renewable energy technology that could revolutionize how we power our homes and businesses.",
        slug: "breakthrough-clean-energy",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
        date: "April 29, 2025",
        author: "Emily Johnson"
      }
    ]
  }
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const category = categories.find(cat => cat.slug === params.slug);

  if (!category) {
    return {
      title: "Category Not Found - Illuminews",
      description: "The category you're looking for could not be found."
    };
  }

  return {
    title: `${category.name} News & Articles - Illuminews`,
    description: category.description,
    openGraph: {
      title: `${category.name} - Illuminews`,
      description: category.description,
      images: [{ url: category.image }]
    }
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find(cat => cat.slug === params.slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-4 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Categories", href: "/categories" },
              { label: category.name, href: `/category/${category.slug}`, current: true }
            ]}
          />

          <div className="relative rounded-lg overflow-hidden h-64 md:h-80 mt-6 mb-12">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${category.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {category.name}
              </h1>
              <p className="text-gray-200 md:w-2/3">
                {category.description}
              </p>
            </div>
          </div>

          {/* Featured Article */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Featured {category.name} Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="relative rounded-lg overflow-hidden h-64 md:h-80">
                  <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${category.featuredArticle.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <Badge variant="outline" className="bg-background text-foreground mb-2">
                      {category.name}
                    </Badge>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {category.featuredArticle.title}
                    </h3>
                    <div className="flex items-center text-white text-sm">
                      <span>By {category.featuredArticle.author}</span>
                      <span className="mx-2">•</span>
                      <span>{category.featuredArticle.date}</span>
                    </div>
                    <Button asChild className="mt-4">
                      <Link href={`/article/${category.featuredArticle.slug}`}>
                        Read Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1">
                <p className="text-muted-foreground mb-4">
                  {category.featuredArticle.excerpt}
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Stay informed about the latest developments in {category.name.toLowerCase()} with our comprehensive coverage of breakthrough research, innovations, and discoveries that are shaping our world.
                </p>
                <Button variant="outline" asChild>
                  <Link href={`/article/${category.featuredArticle.slug}`}>
                    Continue Reading
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Latest Articles */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Latest {category.name} Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.articles.map(article => (
                <Link key={article.id} href={`/article/${article.slug}`}>
                  <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-md">
                    <div className="relative pb-[60%]">
                      <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${article.image}')` }}
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">{article.title}</h3>
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

            <div className="mt-10 text-center">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
