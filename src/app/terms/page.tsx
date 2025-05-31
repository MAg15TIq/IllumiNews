import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Illuminews",
  description: "Read our Terms of Service to understand the rules and regulations governing your use of the Illuminews website.",
  openGraph: {
    title: "Terms of Service - Illuminews",
    description: "Read our Terms of Service to understand the rules and regulations governing your use of the Illuminews website.",
  }
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="pt-4 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Terms of Service", href: "/terms", current: true }
            ]}
          />

          {/* Page Header */}
          <div className="my-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <section className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p>
              Welcome to Illuminews. These Terms of Service (&quot;Terms&quot;) govern your use of our website located at illuminews.com (the &quot;Service&quot;) operated by Illuminews (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
            </p>
            <p>
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
            </p>
          </section>

          {/* Table of Contents */}
          <section className="mb-8 bg-muted/40 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li><a href="#acceptance" className="text-primary hover:underline">Acceptance of Terms</a></li>
              <li><a href="#description" className="text-primary hover:underline">Description of Service</a></li>
              <li><a href="#user-accounts" className="text-primary hover:underline">User Accounts</a></li>
              <li><a href="#content-usage" className="text-primary hover:underline">Content and Usage Rights</a></li>
              <li><a href="#user-conduct" className="text-primary hover:underline">User Conduct</a></li>
              <li><a href="#intellectual-property" className="text-primary hover:underline">Intellectual Property</a></li>
              <li><a href="#privacy" className="text-primary hover:underline">Privacy</a></li>
              <li><a href="#advertising-terms" className="text-primary hover:underline">Advertising and AdSense Terms</a></li>
              <li><a href="#disclaimers" className="text-primary hover:underline">Disclaimers</a></li>
              <li><a href="#limitation-liability" className="text-primary hover:underline">Limitation of Liability</a></li>
              <li><a href="#termination" className="text-primary hover:underline">Termination</a></li>
              <li><a href="#changes" className="text-primary hover:underline">Changes to Terms</a></li>
              <li><a href="#contact" className="text-primary hover:underline">Contact Information</a></li>
            </ol>
          </section>

          {/* Acceptance of Terms */}
          <section id="acceptance" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                By accessing and using Illuminews, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p>
                These Terms apply to all visitors, users, and others who access or use the Service. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Description of Service */}
          <section id="description" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Illuminews is a digital news platform that provides news articles, analysis, and commentary on various topics including but not limited to politics, technology, science, health, environment, and culture.
              </p>
              <p>
                Our Service includes:
              </p>
              <ul>
                <li>Access to news articles and editorial content</li>
                <li>Comment sections for user engagement</li>
                <li>Newsletter subscriptions</li>
                <li>Social media integration</li>
                <li>Advertising content through Google AdSense and other advertising partners</li>
                <li>User-generated content and community features</li>
                <li>Email newsletters and communications</li>
                <li>Analytics and performance tracking</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* User Accounts */}
          <section id="user-accounts" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
              <p>
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
              </p>
              <p>
                We reserve the right to refuse service, terminate accounts, or cancel orders in our sole discretion.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Content and Usage Rights */}
          <section id="content-usage" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Content and Usage Rights</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold">Our Content</h3>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of Illuminews and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
              
              <h3 className="text-xl font-semibold">Your Content</h3>
              <p>
                Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (&quot;Content&quot;). You are responsible for the Content that you post to the Service.
              </p>
              <p>
                By posting Content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service.
              </p>
              
              <h3 className="text-xl font-semibold">Permitted Use</h3>
              <p>
                You may access and use our content for personal, non-commercial purposes. You may share our articles through social media and other platforms, provided you include proper attribution and do not modify the content.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* User Conduct */}
          <section id="user-conduct" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. User Conduct</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                You agree not to use the Service:
              </p>
              <ul>
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
                <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>For any obscene or immoral purpose</li>
                <li>To interfere with or circumvent the security features of the Service</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Intellectual Property */}
          <section id="intellectual-property" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of Illuminews and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Privacy */}
          <section id="privacy" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Privacy</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
              </p>
              <p>
                By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Advertising and AdSense Terms */}
          <section id="advertising-terms" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Advertising and AdSense Terms</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold">Advertising on Our Service</h3>
              <p>
                Our Service displays advertisements through Google AdSense and other advertising partners. By using our Service, you acknowledge and agree to the following:
              </p>
              <ul>
                <li>Advertisements are clearly distinguished from editorial content</li>
                <li>We do not control the content of third-party advertisements</li>
                <li>Advertising revenue supports our journalism and operations</li>
                <li>Ad content is subject to our advertising policies and standards</li>
              </ul>

              <h3 className="text-xl font-semibold">User Obligations Regarding Advertising</h3>
              <p>
                As a user of our Service, you agree to:
              </p>
              <ul>
                <li>Not click on advertisements fraudulently or encourage others to do so</li>
                <li>Not use automated tools or bots to interact with advertisements</li>
                <li>Not attempt to manipulate or interfere with ad serving</li>
                <li>Not block or circumvent advertising in ways that violate our terms</li>
                <li>Report any inappropriate or offensive advertising content to us</li>
              </ul>

              <h3 className="text-xl font-semibold">Google AdSense Compliance</h3>
              <p>
                Our use of Google AdSense is subject to Google's policies and terms:
              </p>
              <ul>
                <li>We comply with all Google AdSense publisher policies</li>
                <li>User data collection for advertising is disclosed in our Privacy Policy</li>
                <li>Users can opt out of personalized advertising through Google's settings</li>
                <li>We implement required consent management for EU and California users</li>
              </ul>

              <h3 className="text-xl font-semibold">Advertising Disclosure</h3>
              <ul>
                <li>All sponsored content and advertisements are clearly labeled</li>
                <li>Editorial content is independent from advertising relationships</li>
                <li>Affiliate relationships and partnerships are transparently disclosed</li>
                <li>Revenue sharing arrangements do not influence editorial decisions</li>
              </ul>

              <h3 className="text-xl font-semibold">Third-Party Advertising</h3>
              <p>
                We are not responsible for:
              </p>
              <ul>
                <li>The content, accuracy, or quality of third-party advertisements</li>
                <li>Products or services offered by advertisers</li>
                <li>Transactions between users and advertisers</li>
                <li>Privacy practices of advertising partners (see their respective policies)</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Disclaimers */}
          <section id="disclaimers" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Disclaimers</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                The information on this website is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, this Company:
              </p>
              <ul>
                <li>Excludes all representations and warranties relating to this website and its contents</li>
                <li>Excludes all liability for damages arising out of or in connection with your use of this website</li>
              </ul>
              <p>
                Nothing in these Terms shall exclude or limit our liability for death or personal injury arising from our negligence, or our fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by English law.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Limitation of Liability */}
          <section id="limitation-liability" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                In no event shall Illuminews, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
              </p>
              <p>
                Our total liability to you for all claims arising out of or relating to the use of or any inability to use any portion of the Service or otherwise under these Terms, whether in contract, tort, or otherwise, is limited to the greater of: (a) the amount you have paid to us in the 12 months prior to the event giving rise to the liability, or (b) $100.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Termination */}
          <section id="termination" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
              <p>
                If you wish to terminate your account, you may simply discontinue using the Service.
              </p>
              <p>
                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Changes to Terms */}
          <section id="changes" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p>
                What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Contact Information */}
          <section id="contact" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <p>
                Illuminews<br />
                123 News Avenue<br />
                New York, NY 10001<br />
                United States<br />
                legal@illuminews.com<br />
                +1 (555) 123-4567
              </p>
            </div>
          </section>

          {/* Terms Updates */}
          <section className="bg-muted/40 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-4">Questions About Our Terms?</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about these Terms of Service, please don&apos;t hesitate to contact our legal team.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
