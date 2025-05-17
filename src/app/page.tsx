import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { FeaturedArticles } from "@/components/featured-articles";
import { RecentArticles } from "@/components/recent-articles";
import { CategoriesSection } from "@/components/categories-section";
import { AdBanner } from "@/components/ad-banner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-4 pb-12">
        <HeroSection />
        <AdBanner />
        <FeaturedArticles />
        <AdBanner />
        <RecentArticles />
        <CategoriesSection />
      </main>
      <Footer />
    </>
  );
}
