import type { Metadata } from "next";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArticleTemplate } from "@/components/article-template";
import { ArticleComments } from "@/components/article-comments";
import { RelatedArticles } from "@/components/related-articles";
import { Separator } from "@/components/ui/separator";

// This would be a database lookup in a real application
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Sustainable Urban Planning: Creating Cities of the Future - Illuminews",
    description: "Discover how innovative urban planning approaches are transforming cities into sustainable, resilient, and livable spaces for future generations.",
    openGraph: {
      title: "Sustainable Urban Planning: Creating Cities of the Future - Illuminews",
      description: "Discover how innovative urban planning approaches are transforming cities into sustainable, resilient, and livable spaces for future generations.",
      images: [{ url: "https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=1200&auto=format&fit=crop" }]
    }
  };
}

export default function ArticlePage() {
  const article = {
    id: 301,
    title: "Sustainable Urban Planning: Creating Cities of the Future",
    slug: "sustainable-urban-planning",
    excerpt: "Discover how innovative urban planning approaches are transforming cities into sustainable, resilient, and livable spaces for future generations.",
    category: "Environment",
    author: {
      name: "Mohsin Saleem Khan",
      role: "Founder, Editor-in-Chief",
      image: "/malik-mohsin.jpg",
      bio: "Mohsin Saleem Khan is the Founder and Editor-in-Chief of Illuminews. With five years of experience as a skilled Web Developer and Designer, he combines editorial acumen with technological expertise to create a platform dedicated to providing clear, insightful perspectives on complex topics."
    },
    publishDate: "May 8, 2025",
    readTime: "9 min read",
    featuredImage: {
      src: "https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=1200&auto=format&fit=crop",
      alt: "Aerial view of a modern sustainable city with green spaces and solar panels",
      caption: "Modern urban planning integrates green spaces, renewable energy, and sustainable transportation systems."
    },
    tags: ["Urban Planning", "Sustainability", "Climate Resilience", "Green Infrastructure", "Smart Cities"],
    introduction: [
      "As the global population continues to urbanize at an unprecedented rate, cities face mounting challenges related to climate change, resource scarcity, and quality of life. Traditional urban development patterns have often prioritized economic growth over environmental and social considerations, resulting in sprawling, car-dependent cities with significant carbon footprints.",
      "However, a new paradigm of sustainable urban planning is emerging worldwide, reimagining how cities can function as resilient, equitable, and environmentally responsible systems. This approach integrates cutting-edge technologies, nature-based solutions, and community-centered design to create urban environments that enhance human wellbeing while reducing ecological impact."
    ],
    sections: [
      {
        title: "The Principles of Sustainable Urban Planning",
        content: [
          "Sustainable urban planning is guided by several core principles that prioritize long-term environmental health, social equity, and economic viability. These principles include compact development, mixed land use, transit-oriented design, green infrastructure, and inclusive community engagement.",
          "Compact development reduces urban sprawl by encouraging higher-density neighborhoods that preserve surrounding natural areas and agricultural land. Mixed land use creates vibrant, walkable communities where residential, commercial, and recreational spaces coexist, reducing the need for long commutes and fostering social interaction."
        ],
        image: {
          src: "https://images.unsplash.com/photo-1486744328743-c1222fbdc7d1?q=80&w=800&auto=format&fit=crop",
          alt: "Mixed-use urban development with pedestrian-friendly streets",
          caption: "Mixed-use developments create vibrant neighborhoods where people can live, work, and play within walking distance."
        }
      },
      {
        title: "Green Infrastructure and Nature-Based Solutions",
        content: [
          "Green infrastructure represents a shift from traditional 'gray' infrastructure toward systems that work with natural processes to provide essential services. Urban forests, rain gardens, green roofs, and permeable pavements are examples of green infrastructure elements that manage stormwater, reduce urban heat islands, improve air quality, and enhance biodiversity.",
          "Cities like Singapore have become global leaders in integrating nature into urban environments. Singapore's 'City in a Garden' approach has increased its green cover from 36% to nearly 50% since the 1980s, despite significant population growth. The city's Park Connector Network links parks and green spaces with walking and cycling paths, while innovative developments like Gardens by the Bay showcase how urban areas can incorporate diverse ecosystems."
        ],
        subsections: [
          {
            title: "Case Study: Copenhagen's Climate Adaptation Plan",
            content: [
              "Copenhagen has implemented an ambitious climate adaptation plan that transforms the way the city manages water. Rather than relying solely on underground drainage systems, Copenhagen has created a network of 'cloudburst boulevards' and water squares that temporarily store rainwater during heavy storms, preventing flooding while creating attractive public spaces.",
              "These multifunctional spaces serve as recreational areas during dry weather and water management infrastructure during rainstorms, demonstrating how cities can adapt to climate change while enhancing urban livability."
            ],
            listItems: [
              "300 planned cloudburst projects across the city",
              "Expected to save $1.4 billion in flood damage costs",
              "Creates dual-purpose public spaces that serve both recreational and infrastructure needs",
              "Reduces pressure on traditional sewer systems during extreme weather events"
            ]
          }
        ]
      },
      {
        title: "Smart Cities and Technological Innovation",
        content: [
          "Digital technologies are increasingly being deployed to optimize urban systems and improve sustainability. Smart grids enable more efficient energy distribution and integration of renewable sources. Intelligent transportation systems reduce congestion and emissions through real-time traffic management and public transit optimization. IoT sensors monitor air quality, water usage, and waste management, providing data that helps cities operate more efficiently.",
          "Barcelona has emerged as a leader in smart city implementation, using a network of sensors to monitor and manage everything from street lighting and irrigation to parking and waste collection. The city's smart lighting system alone has reduced energy consumption by 30%, while smart water management has achieved 25% water savings in public parks."
        ],
        image: {
          src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
          alt: "Smart city control center with multiple data screens",
          caption: "Smart city technologies use data and connectivity to optimize urban systems and improve sustainability."
        }
      },
      {
        title: "Community Engagement and Social Equity",
        content: [
          "Sustainable urban planning must address social dimensions alongside environmental concerns. Inclusive planning processes engage diverse community members in decision-making, ensuring that development reflects local needs and values. Affordable housing policies, equitable access to green spaces, and investments in public services help create cities that work for all residents.",
          "Medellín, Colombia, demonstrates how urban transformation can prioritize social equity. Once known for violence and inequality, Medellín has invested in innovative public transportation connecting informal settlements to the city center, quality public spaces in low-income neighborhoods, and educational facilities that serve as community anchors. These interventions have significantly improved quality of life while reducing social disparities."
        ],
        unorderedList: [
          "Participatory budgeting allows residents to directly influence spending priorities",
          "Community land trusts preserve affordable housing in gentrifying neighborhoods",
          "Co-design processes incorporate local knowledge into planning decisions",
          "Equity assessments evaluate the distributional impacts of proposed projects"
        ]
      }
    ],
    keyTakeaways: [
      { text: "Sustainable urban planning integrates environmental, social, and economic considerations to create resilient cities." },
      { text: "Green infrastructure works with natural processes to provide essential services while enhancing urban ecosystems." },
      { text: "Smart technologies optimize resource use and improve efficiency across urban systems." },
      { text: "Community engagement ensures that development reflects local needs and promotes social equity." },
      { text: "Successful sustainable cities demonstrate that environmental responsibility and quality of life can go hand in hand." }
    ],
    timeline: {
      title: "Evolution of Sustainable Urban Planning",
      introduction: "The concept of sustainable urban planning has evolved significantly over recent decades:",
      items: [
        {
          date: "1970s",
          title: "Environmental Awareness",
          description: "First wave of environmental consciousness influences urban planning"
        },
        {
          date: "1987",
          title: "Brundtland Report",
          description: "UN report defines sustainable development and its implications for cities"
        },
        {
          date: "1990s",
          title: "New Urbanism",
          description: "Movement promotes walkable, mixed-use neighborhoods as alternatives to sprawl"
        },
        {
          date: "2000s",
          title: "Climate Focus",
          description: "Cities begin developing climate action plans and resilience strategies"
        },
        {
          date: "2010s",
          title: "Smart City Integration",
          description: "Digital technologies increasingly incorporated into sustainable urban planning"
        },
        {
          date: "2020s",
          title: "Regenerative Approach",
          description: "Cities aim beyond sustainability toward regenerative systems that restore ecosystems"
        }
      ]
    },
    quiz: {
      title: "Test Your Knowledge on Sustainable Urban Planning",
      questions: [
        {
          question: "Which of the following is NOT a principle of sustainable urban planning?",
          options: [
            { id: "a", text: "Compact development" },
            { id: "b", text: "Single-use zoning" },
            { id: "c", text: "Transit-oriented design" }
          ],
          correctAnswer: "b"
        },
        {
          question: "What percentage of its land area has Singapore dedicated to green space?",
          options: [
            { id: "a", text: "Around 20%" },
            { id: "b", text: "Around 35%" },
            { id: "c", text: "Nearly 50%" }
          ],
          correctAnswer: "c"
        },
        {
          question: "Which city implemented 'cloudburst boulevards' as part of its climate adaptation strategy?",
          options: [
            { id: "a", text: "Barcelona" },
            { id: "b", text: "Copenhagen" },
            { id: "c", text: "Singapore" }
          ],
          correctAnswer: "b"
        }
      ]
    },
    conclusion: [
      "Sustainable urban planning represents a fundamental shift in how we conceive, build, and manage cities. By integrating environmental stewardship, social equity, and economic vitality, this approach creates urban environments that enhance human wellbeing while respecting planetary boundaries.",
      "The examples highlighted in this article demonstrate that sustainable cities are not a utopian vision but an achievable reality. From Singapore's integration of nature to Copenhagen's climate adaptation and Medellín's focus on social inclusion, cities around the world are pioneering approaches that can be adapted to diverse contexts.",
      "As urbanization continues and climate challenges intensify, sustainable urban planning will become increasingly essential. By embracing its principles and learning from successful examples, we can create cities that serve as solutions to our most pressing challenges—cities that are resilient, equitable, and in harmony with the natural systems upon which all life depends."
    ],
    callToAction: {
      heading: "Stay Informed About Sustainable Cities",
      text: "Subscribe to our newsletter for the latest updates on urban sustainability innovations and environmental solutions.",
      buttonText: "Subscribe Now",
      buttonUrl: "/subscribe"
    },
    relatedArticles: [
      {
        title: "Ocean Cleanup Initiative Shows Promising Results",
        url: "/article/ocean-cleanup-initiative"
      },
      {
        title: "Breakthrough in Clean Energy Technology Shows Promise for Global Adoption",
        url: "/article/breakthrough-clean-energy"
      }
    ]
  };

  return (
    <>
      <Navbar />
      <main className="pt-4 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Environment", href: "/category/environment" },
              { label: article.title, href: `/article/${article.slug}`, current: true }
            ]}
          />

          <ArticleTemplate
            title={article.title}
            author={article.author}
            publishDate={article.publishDate}
            readTime={article.readTime}
            featuredImage={article.featuredImage}
            category={article.category}
            tags={article.tags}
            introduction={article.introduction}
            sections={article.sections}
            keyTakeaways={article.keyTakeaways}
            timeline={article.timeline}
            quiz={article.quiz}
            conclusion={article.conclusion}
            callToAction={article.callToAction}
            relatedArticles={article.relatedArticles}
          />

          <Separator className="my-12" />

          <ArticleComments articleId={article.id} />

          <RelatedArticles
            currentArticleId={article.id}
            category={article.category}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
