import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { FeaturedArticles } from "@/components/featured-articles";
import { RecentArticles } from "@/components/recent-articles";
import { CategoriesSection } from "@/components/categories-section";
import { AdSenseBanner } from "@/components/ads";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-4 pb-12">
        <HeroSection />

        {/* Homepage Top Banner Ad */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
          <AdSenseBanner
            adSlot="1357924680"
            adFormat="horizontal"
            className="text-center"
          />
        </div>

        <FeaturedArticles />

        {/* Homepage Middle Banner Ad */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
          <AdSenseBanner
            adSlot="8642097531"
            adFormat="rectangle"
            className="text-center"
          />
        </div>

        <RecentArticles />
        <CategoriesSection />
      </main>
      <Footer />
    </>
  );
}
