import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { FeaturedArticles } from "@/components/featured-articles";
import { RecentArticles } from "@/components/recent-articles";
import { CategoriesSection } from "@/components/categories-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-4 pb-12">
        <HeroSection />
        <FeaturedArticles />
        <RecentArticles />
        <CategoriesSection />
      </main>
      <Footer />
    </>
  );
}
