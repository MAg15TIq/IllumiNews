import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About Us - Illuminews",
  description: "Learn about Illuminews, our mission, values, and the team behind our journalism.",
  openGraph: {
    title: "About Us - Illuminews",
    description: "Learn about Illuminews, our mission, values, and the team behind our journalism.",
    images: [{ url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop" }]
  }
};

// Team member interface
interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  email?: string;
}

// Team data
const teamMembers: TeamMember[] = [
  {
    name: "Malik Mohsin Saleem Khan",
    role: "Founder, Editor-in-Chief, and Architect of Illuminews",
    image: "/malik-mohsin.jpg", // We'll save this image to the public folder
    bio: "Malik is the singular driving force behind Illuminews, responsible for its strategic direction, content creation, and technical infrastructure. With five years of experience as a skilled Web Developer and Designer, he combines editorial acumen with technological expertise to create a platform dedicated to providing clear, insightful perspectives on complex topics.",
    email: "mohsinsaleen336@gmail.com"
  }
];

// Values interface
interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Company values
const values: Value[] = [
  {
    title: "Journalistic Integrity",
    description: "We are committed to accurate, fair, and thorough reporting. Our content is fact-checked and held to the highest standards of journalistic ethics.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Independence",
    description: "Our reporting is independent and free from undue influence. We maintain a clear separation between our editorial content and any commercial considerations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  },
  {
    title: "Inclusivity",
    description: "We strive to represent diverse perspectives and experiences in our coverage, ensuring our journalism reflects the complexity of the world we live in.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and storytelling formats to deliver news in ways that are engaging, accessible, and relevant to how people consume information today.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  }
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-4 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about", current: true }
            ]}
          />

          {/* Hero Section */}
          <section className="relative rounded-lg overflow-hidden h-[400px] mt-6 mb-12">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="Illuminews team working in a modern newsroom"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
            </div>
            <div className="relative h-full flex flex-col justify-center px-8 md:px-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                About Illuminews
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                Illuminating the world through factual reporting, insightful analysis, and compelling storytelling.
              </p>
            </div>
          </section>

          {/* Our Story Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-4">
                  Founded in 2023, Illuminews was created with a simple yet ambitious mission: to provide readers with clear, factual, and insightful journalism in an era of information overload and misinformation.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Our team of experienced journalists and subject matter experts work tirelessly to bring you stories that matter, explained with depth and context. We believe that well-informed citizens are essential to a functioning democracy and a better world.
                </p>
                <p className="text-lg text-muted-foreground">
                  As an independent news organization, we're committed to maintaining the highest standards of journalistic integrity while embracing innovative approaches to storytelling and audience engagement.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=800&auto=format&fit=crop"
                  alt="Illuminews editorial meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Our Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="bg-muted/40">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Our Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-3 text-center relative">
              Our Team
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary mt-2"></span>
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              Meet the visionary behind Illuminews, dedicated to bringing clarity and insight to complex topics.
            </p>

            <div className="max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 bg-muted/30 rounded-xl shadow-sm animate-in fade-in slide-in-from-bottom-5 duration-700"
                >
                  <div className="relative w-40 h-40 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground mb-4">{member.bio}</p>
                    {member.email && (
                      <div className="flex items-center justify-center md:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href={`mailto:${member.email}`} className="text-primary hover:underline">
                          {member.email}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Join Us Section */}
          <section className="bg-muted/40 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              We're always looking for talented journalists, editors, and media professionals to join our team. If you're passionate about quality journalism and want to make a difference, we'd love to hear from you.
            </p>
            <Button asChild>
              <Link href="/careers">View Open Positions</Link>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
