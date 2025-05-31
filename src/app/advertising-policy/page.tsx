import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advertising Policy - Illuminews",
  description: "Learn about Illuminews' advertising standards, disclosure policies, and commitment to maintaining editorial independence.",
  openGraph: {
    title: "Advertising Policy - Illuminews",
    description: "Learn about Illuminews' advertising standards, disclosure policies, and commitment to maintaining editorial independence.",
  }
};

export default function AdvertisingPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-4 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Advertising Policy", href: "/advertising-policy", current: true }
            ]}
          />

          {/* Page Header */}
          <div className="my-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advertising Policy
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Transparency Notice */}
          <Alert className="mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <AlertTitle>Transparency in Advertising</AlertTitle>
            <AlertDescription>
              Illuminews is committed to transparency in all our advertising relationships and maintaining clear separation between editorial content and advertising.
            </AlertDescription>
          </Alert>

          {/* Introduction */}
          <section className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p>
              This Advertising Policy outlines how Illuminews handles advertising, sponsored content, and commercial relationships while maintaining our editorial independence and serving our readers' interests.
            </p>
            <p>
              We believe in transparency about how we fund our journalism and ensure that advertising never compromises our editorial integrity or misleads our readers.
            </p>
          </section>

          {/* Table of Contents */}
          <section className="mb-8 bg-muted/40 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li><a href="#editorial-independence" className="text-primary hover:underline">Editorial Independence</a></li>
              <li><a href="#advertising-disclosure" className="text-primary hover:underline">Advertising Disclosure</a></li>
              <li><a href="#sponsored-content" className="text-primary hover:underline">Sponsored Content Guidelines</a></li>
              <li><a href="#affiliate-relationships" className="text-primary hover:underline">Affiliate Relationships</a></li>
              <li><a href="#ad-content-standards" className="text-primary hover:underline">Advertising Content Standards</a></li>
              <li><a href="#ad-placement" className="text-primary hover:underline">Advertisement Placement</a></li>
              <li><a href="#google-adsense" className="text-primary hover:underline">Google AdSense Partnership</a></li>
              <li><a href="#prohibited-advertising" className="text-primary hover:underline">Prohibited Advertising</a></li>
              <li><a href="#reader-experience" className="text-primary hover:underline">Reader Experience</a></li>
              <li><a href="#compliance-monitoring" className="text-primary hover:underline">Compliance and Monitoring</a></li>
            </ol>
          </section>

          {/* Editorial Independence */}
          <section id="editorial-independence" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Editorial Independence</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Our editorial content is completely independent from our advertising operations:
              </p>
              <ul>
                <li>Editorial decisions are never influenced by advertising relationships</li>
                <li>Advertisers have no control over editorial content or coverage</li>
                <li>Editorial staff operate independently from advertising sales</li>
                <li>News coverage is based solely on newsworthiness and public interest</li>
                <li>Critical coverage of advertisers is not restricted or influenced</li>
              </ul>
              <p>
                We maintain a strict firewall between our editorial and advertising departments to ensure our journalism remains unbiased and credible.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Advertising Disclosure */}
          <section id="advertising-disclosure" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Advertising Disclosure</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We are committed to full transparency about our advertising relationships:
              </p>
              
              <h3 className="text-xl font-semibold">Clear Identification</h3>
              <ul>
                <li>All advertisements are clearly labeled as "Advertisement" or "Sponsored"</li>
                <li>Sponsored content is prominently marked as "Sponsored Content" or "Paid Partnership"</li>
                <li>Affiliate links are disclosed with "Affiliate Link" or similar language</li>
                <li>Native advertising is clearly distinguished from editorial content</li>
              </ul>

              <h3 className="text-xl font-semibold">Revenue Transparency</h3>
              <ul>
                <li>We disclose that advertising revenue supports our journalism</li>
                <li>Major advertising partnerships are disclosed to readers</li>
                <li>Financial relationships that could affect coverage are disclosed</li>
                <li>Revenue sharing arrangements are transparently communicated</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Sponsored Content */}
          <section id="sponsored-content" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Sponsored Content Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Content Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Must provide value to readers</li>
                    <li>• Cannot be misleading or deceptive</li>
                    <li>• Must align with our editorial values</li>
                    <li>• Subject to editorial review and approval</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Disclosure Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Prominent "Sponsored" labeling</li>
                    <li>• Clear identification of sponsor</li>
                    <li>• Distinct visual presentation</li>
                    <li>• Cannot mimic editorial design</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Sponsored content must meet our editorial standards for accuracy and quality while being clearly distinguished from our independent journalism.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Affiliate Relationships */}
          <section id="affiliate-relationships" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Affiliate Relationships</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                When we include affiliate links in our content, we maintain transparency and editorial integrity:
              </p>
              <ul>
                <li>All affiliate relationships are clearly disclosed</li>
                <li>Product recommendations are based on editorial merit, not commission rates</li>
                <li>Affiliate links are marked with appropriate disclosure language</li>
                <li>Editorial coverage is not influenced by affiliate potential</li>
                <li>Readers are informed about how affiliate revenue supports our journalism</li>
              </ul>
              <p>
                We only recommend products and services that we believe provide genuine value to our readers, regardless of affiliate commission structures.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Ad Content Standards */}
          <section id="ad-content-standards" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Advertising Content Standards</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We maintain high standards for advertising content that appears on our platform:
              </p>
              
              <h3 className="text-xl font-semibold">Acceptable Advertising</h3>
              <ul>
                <li>Truthful and non-deceptive advertising</li>
                <li>Products and services that provide legitimate value</li>
                <li>Advertising that respects user privacy and consent</li>
                <li>Content appropriate for our diverse readership</li>
              </ul>

              <h3 className="text-xl font-semibold">Quality Requirements</h3>
              <ul>
                <li>Professional presentation and design</li>
                <li>Clear and honest messaging</li>
                <li>Compliance with applicable advertising laws</li>
                <li>Respect for intellectual property rights</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Advertisement Placement */}
          <section id="ad-placement" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Advertisement Placement</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We carefully consider advertisement placement to balance revenue generation with user experience:
              </p>

              <h3 className="text-xl font-semibold">Placement Guidelines</h3>
              <ul>
                <li>Advertisements are clearly separated from editorial content</li>
                <li>Ad placement does not interfere with content readability</li>
                <li>Mobile-friendly ad formats that don't disrupt user experience</li>
                <li>Strategic placement that provides value to both readers and advertisers</li>
              </ul>

              <h3 className="text-xl font-semibold">User Experience Priority</h3>
              <ul>
                <li>Page loading speed is not significantly impacted by ads</li>
                <li>Advertisements do not obstruct navigation or content</li>
                <li>Reasonable ad-to-content ratio maintained</li>
                <li>No deceptive ad placement that mimics content elements</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Google AdSense Partnership */}
          <section id="google-adsense" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Google AdSense Partnership</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We partner with Google AdSense to display relevant advertisements to our readers:
              </p>

              <h3 className="text-xl font-semibold">AdSense Compliance</h3>
              <ul>
                <li>Full compliance with Google AdSense policies and guidelines</li>
                <li>Adherence to Google's content and quality standards</li>
                <li>Implementation of required privacy and cookie disclosures</li>
                <li>Regular monitoring of ad content and performance</li>
              </ul>

              <h3 className="text-xl font-semibold">Data and Privacy</h3>
              <ul>
                <li>Google AdSense data collection is disclosed in our Privacy Policy</li>
                <li>Users can opt out of personalized advertising</li>
                <li>Compliance with GDPR and CCPA requirements</li>
                <li>Transparent cookie usage and consent management</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Prohibited Advertising */}
          <section id="prohibited-advertising" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Prohibited Advertising</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We do not accept advertising for certain categories of products and services:
              </p>

              <h3 className="text-xl font-semibold">Prohibited Content</h3>
              <ul>
                <li>Illegal products or services</li>
                <li>Misleading or fraudulent offers</li>
                <li>Adult content or services</li>
                <li>Gambling and betting services (where prohibited)</li>
                <li>Hate speech or discriminatory content</li>
                <li>Dangerous or harmful products</li>
                <li>Counterfeit or pirated goods</li>
              </ul>

              <h3 className="text-xl font-semibold">Editorial Conflicts</h3>
              <ul>
                <li>Advertising that conflicts with our editorial values</li>
                <li>Content that could compromise our editorial independence</li>
                <li>Advertising from organizations we are actively investigating</li>
                <li>Content that could mislead readers about our editorial stance</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Reader Experience */}
          <section id="reader-experience" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Reader Experience</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Our readers' experience is paramount in all advertising decisions:
              </p>

              <h3 className="text-xl font-semibold">User-Centric Approach</h3>
              <ul>
                <li>Advertising enhances rather than detracts from content consumption</li>
                <li>Relevant advertising that may interest our readership</li>
                <li>Respect for user preferences and privacy choices</li>
                <li>Minimal disruption to reading and navigation experience</li>
              </ul>

              <h3 className="text-xl font-semibold">Feedback and Improvement</h3>
              <ul>
                <li>Regular monitoring of user feedback about advertising</li>
                <li>Continuous optimization of ad placement and formats</li>
                <li>Response to reader concerns about advertising content</li>
                <li>Adaptation based on user behavior and preferences</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Compliance and Monitoring */}
          <section id="compliance-monitoring" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Compliance and Monitoring</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We actively monitor our advertising to ensure compliance with our policies and legal requirements:
              </p>

              <h3 className="text-xl font-semibold">Regular Review</h3>
              <ul>
                <li>Ongoing monitoring of advertising content and placement</li>
                <li>Regular review of advertising policies and procedures</li>
                <li>Compliance audits and assessments</li>
                <li>Updates to policies based on industry changes and regulations</li>
              </ul>

              <h3 className="text-xl font-semibold">Enforcement</h3>
              <ul>
                <li>Immediate removal of non-compliant advertising</li>
                <li>Investigation of reader complaints about advertising</li>
                <li>Corrective action when policy violations are identified</li>
                <li>Continuous improvement of advertising standards</li>
              </ul>

              <h3 className="text-xl font-semibold">Legal Compliance</h3>
              <ul>
                <li>Adherence to FTC guidelines for advertising disclosure</li>
                <li>Compliance with international advertising regulations</li>
                <li>Regular legal review of advertising practices</li>
                <li>Updates to reflect changing legal requirements</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Contact Information */}
          <section className="bg-muted/40 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-4">Advertising Questions?</h2>
            <p className="text-muted-foreground mb-6">
              If you have questions about our advertising policies or want to report concerns about advertising content, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact">Contact Advertising Team</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/editorial-policy">View Editorial Policy</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
