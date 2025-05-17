import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Mohsin Saleem Khan - Illuminews",
  description: "Meet Mohsin Saleem Khan, the Founder, Editor-in-Chief, and Architect of Illuminews.",
  openGraph: {
    title: "Mohsin Saleem Khan - Illuminews",
    description: "Meet Mohsin Saleem Khan, the Founder, Editor-in-Chief, and Architect of Illuminews.",
    images: [{ url: "/malik-mohsin.jpg" }]
  }
};

export default function AuthorPage() {
  return (
    <>
      <Navbar />
      <main className="pt-4 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Author", href: "/author", current: true }
            ]}
          />

          <div className="max-w-4xl mx-auto mt-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
              <div className="relative w-48 h-48 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                <Image
                  src="/malik-mohsin.jpg"
                  alt="Mohsin Saleem Khan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Mohsin Saleem Khan</h1>
                <p className="text-primary font-medium text-lg mb-4">Founder, Editor-in-Chief, and Architect of Illuminews</p>
                <div className="flex items-center justify-center md:justify-start mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:mohsinsaleen336@gmail.com" className="text-primary hover:underline">
                    mohsinsaleen336@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            <section className="prose prose-lg dark:prose-invert max-w-none animate-in fade-in duration-1000">
              <h2 className="text-2xl font-bold mb-4">The Vision Behind the Clarity</h2>
              <p>
                Welcome to Illuminews, a platform dedicated to shedding light on complex topics and providing clear, insightful perspectives. At the very core of this mission is Mohsin Saleem Khan. As the Founder and Owner, Mohsin is the singular driving force behind Illuminews, responsible not only for its strategic direction but also for every word published, the platform's design, and its underlying technical infrastructure. His unique blend of editorial acumen and technological expertise shapes the Illuminews experience.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">The Voice of Insight: Sole Author & Editor-in-Chief</h2>
              <p>
                Every article, analysis, report, and explanation published on Illuminews originates directly from Mohsin Saleem Khan. He serves as the sole author and Editor-in-Chief, meticulously researching, writing, and verifying all content. This approach guarantees:
              </p>
              <ul>
                <li>
                  <strong>Consistent Quality & Depth:</strong> Readers benefit from a unified analytical voice and a consistently high standard of research and clarity across all topics.
                </li>
                <li>
                  <strong>Authentic Perspective:</strong> The insights and analyses presented are genuine, reflecting Mohsin's dedicated investigation and understanding of the subjects.
                </li>
                <li>
                  <strong>Intellectual Cohesion:</strong> As the single source of all content, Mohsin ensures a coherent narrative and interconnected understanding across different pieces, fostering deeper comprehension for the reader.
                </li>
                <li>
                  <strong>Direct Accountability:</strong> The accuracy, fairness, and insightfulness of the content rest squarely on his commitment, ensuring a dedication to journalistic integrity and intellectual honesty.
                </li>
              </ul>
              <p>
                Mohsin's role is to dissect complexity and illuminate understanding, making Illuminews a trusted source for clear and thoughtful information.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">The Digital Foundation: Experienced Full-Stack Developer & Platform Designer</h2>
              <p>
                Beyond the editorial helm, Mohsin is a skilled Web Developer and Designer with five years of robust experience building sophisticated digital solutions. He possesses a strong command of modern web technologies, including:
              </p>
              <ul>
                <li>
                  <strong>Backend Engineering:</strong> Expertise in Python and Node.js to build secure, scalable, and efficient backend systems capable of handling information delivery reliably.
                </li>
                <li>
                  <strong>Frontend Development:</strong> Proficiency in React.js to create intuitive, responsive, and accessible user interfaces optimized for reading and information discovery.
                </li>
                <li>
                  <strong>Comprehensive Technical Skillset:</strong> His experience extends to databases, APIs, cloud infrastructure, and security best practices, ensuring Illuminews operates on a solid technical foundation.
                </li>
              </ul>
              <p>
                Crucially, Mohsin personally designed the entire Illuminews website. He crafted the user interface (UI) and user experience (UX) with the specific goal of presenting information clearly, facilitating easy navigation through complex topics, and ensuring a seamless, trustworthy experience for visitors seeking knowledge. The platform's design and functionality are built to serve the content.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Integrated Expertise: Powering Insightful Delivery</h2>
              <p>
                Mohsin Saleem Khan uniquely combines the roles of content creator, information architect, and technical builder. This holistic control over Illuminews translates into significant advantages:
              </p>
              <ul>
                <li>
                  <strong>Seamless Alignment:</strong> The way information is presented (design) and delivered (technology) is perfectly synchronized with the content's message and goals (journalistic insight).
                </li>
                <li>
                  <strong>Rapid Innovation:</strong> Malik can swiftly implement new features, data visualizations, or presentation formats that enhance understanding, bridging the gap between editorial needs and technical execution.
                </li>
                <li>
                  <strong>Optimized User Experience:</strong> The platform is fine-tuned for readability, accessibility, and performance, directly supporting the mission of delivering clear, insightful news and analysis.
                </li>
                <li>
                  <strong>Unified Vision:</strong> Every aspect of Illuminews reflects Mohsin's singular commitment to quality, clarity, and technical excellence.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">The Architect of Understanding at Illuminews</h2>
              <p>
                Mohsin Saleem Khan's comprehensive expertise and unwavering dedication are the cornerstones of Illuminews. As the sole author, editor, designer, and developer, he ensures that the platform is not just a source of information, but a thoughtfully constructed environment for gaining understanding and clarity. His multifaceted role guarantees a cohesive, high-quality, and insightful experience for every reader seeking to be illuminated.
              </p>
            </section>

            <div className="mt-12 text-center">
              <Button asChild className="animate-in fade-in duration-1000 delay-300">
                <Link href="/featured">
                  Explore Featured Articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
