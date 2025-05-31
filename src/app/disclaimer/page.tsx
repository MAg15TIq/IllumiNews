import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer - Illuminews",
  description: "Important disclaimers regarding the content and services provided by Illuminews.",
  openGraph: {
    title: "Disclaimer - Illuminews",
    description: "Important disclaimers regarding the content and services provided by Illuminews.",
  }
};

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main className="pt-4 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Disclaimer", href: "/disclaimer", current: true }
            ]}
          />

          {/* Page Header */}
          <div className="my-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Disclaimer
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Important Notice */}
          <Alert className="mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <AlertTitle>Important Notice</AlertTitle>
            <AlertDescription>
              The information contained on this website is for general information purposes only. Please read this disclaimer carefully before using our services.
            </AlertDescription>
          </Alert>

          {/* Introduction */}
          <section className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p>
              The information on this website - illuminews.com - is provided by Illuminews on an &quot;as is&quot; basis. To the fullest extent permitted by law, Illuminews excludes all representations, warranties, obligations, and liabilities arising out of or in connection with this website and its contents.
            </p>
            <p>
              By using this website, you acknowledge and agree to the terms set forth in this disclaimer.
            </p>
          </section>

          {/* Table of Contents */}
          <section className="mb-8 bg-muted/40 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li><a href="#general-disclaimer" className="text-primary hover:underline">General Disclaimer</a></li>
              <li><a href="#content-accuracy" className="text-primary hover:underline">Content Accuracy</a></li>
              <li><a href="#external-links" className="text-primary hover:underline">External Links</a></li>
              <li><a href="#professional-advice" className="text-primary hover:underline">Professional Advice</a></li>
              <li><a href="#financial-disclaimer" className="text-primary hover:underline">Financial Information</a></li>
              <li><a href="#health-disclaimer" className="text-primary hover:underline">Health Information</a></li>
              <li><a href="#legal-disclaimer" className="text-primary hover:underline">Legal Information</a></li>
              <li><a href="#technical-disclaimer" className="text-primary hover:underline">Technical Information</a></li>
              <li><a href="#liability-limitation" className="text-primary hover:underline">Limitation of Liability</a></li>
              <li><a href="#contact" className="text-primary hover:underline">Contact Information</a></li>
            </ol>
          </section>

          {/* General Disclaimer */}
          <section id="general-disclaimer" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. General Disclaimer</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                The information on this website is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, Illuminews:
              </p>
              <ul>
                <li>Excludes all representations and warranties relating to this website and its contents</li>
                <li>Excludes all liability for damages arising out of or in connection with your use of this website</li>
                <li>Does not guarantee the accuracy, completeness, or timeliness of the information provided</li>
                <li>Reserves the right to change or update content without notice</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Content Accuracy */}
          <section id="content-accuracy" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Content Accuracy</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
              </p>
              <p>
                News and information can change rapidly, and we cannot guarantee that all content reflects the most current developments. We encourage readers to verify information through multiple sources before making decisions based on our content.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* External Links */}
          <section id="external-links" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. External Links</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with Illuminews. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
              <p>
                We are not responsible for:
              </p>
              <ul>
                <li>The content of external websites</li>
                <li>The privacy practices of external websites</li>
                <li>Any damages or losses arising from your use of external websites</li>
                <li>The availability or functionality of external websites</li>
              </ul>
              <p>
                Links to external websites are provided for convenience only and do not constitute an endorsement by Illuminews.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Professional Advice */}
          <section id="professional-advice" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Professional Advice</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                The content on this website is for informational purposes only and should not be considered as professional advice. We strongly recommend that you consult with appropriate professionals before making any decisions based on the information provided on our website.
              </p>
              <p>
                This includes but is not limited to:
              </p>
              <ul>
                <li>Legal advice from qualified attorneys</li>
                <li>Financial advice from certified financial advisors</li>
                <li>Medical advice from licensed healthcare professionals</li>
                <li>Technical advice from qualified experts</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Financial Disclaimer */}
          <section id="financial-disclaimer" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Financial Information</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Any financial information provided on this website is for educational and informational purposes only and should not be construed as investment advice. We are not licensed financial advisors, and nothing on this website should be considered as a recommendation to buy, sell, or hold any financial instruments.
              </p>
              <p>
                <strong>Important:</strong> All investments carry risk, and past performance does not guarantee future results. Always consult with a qualified financial advisor before making investment decisions.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Health Disclaimer */}
          <section id="health-disclaimer" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Health Information</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Any health-related information provided on this website is for educational purposes only and is not intended as medical advice. This information should not be used to diagnose, treat, cure, or prevent any disease or health condition.
              </p>
              <p>
                <strong>Important:</strong> Always consult with qualified healthcare professionals before making any health-related decisions or changes to your medical treatment.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Legal Disclaimer */}
          <section id="legal-disclaimer" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Legal Information</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Any legal information provided on this website is for general informational purposes only and should not be construed as legal advice. Laws vary by jurisdiction and can change frequently.
              </p>
              <p>
                <strong>Important:</strong> Always consult with qualified legal professionals for advice specific to your situation and jurisdiction.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Technical Disclaimer */}
          <section id="technical-disclaimer" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Technical Information</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Any technical information provided on this website is for educational purposes only. Technology evolves rapidly, and information may become outdated quickly.
              </p>
              <p>
                We are not responsible for:
              </p>
              <ul>
                <li>Technical issues arising from following our guides or tutorials</li>
                <li>Compatibility problems with different systems or software</li>
                <li>Data loss or system damage resulting from technical implementations</li>
                <li>Security vulnerabilities in third-party software or services mentioned</li>
              </ul>
              <p>
                <strong>Important:</strong> Always backup your data and test in non-production environments before implementing any technical solutions.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Limitation of Liability */}
          <section id="liability-limitation" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                In no event will Illuminews, its officers, directors, employees, or agents, be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the website.
              </p>
              <p>
                This limitation applies even if Illuminews has been advised of the possibility of such damages. Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages, so the above limitation or exclusion may not apply to you.
              </p>
              <p>
                <strong>Maximum Liability:</strong> Our total liability to you for all claims arising out of or relating to the use of or any inability to use any portion of the website or otherwise under these terms, whether in contract, tort, or otherwise, is limited to $100 or the amount you paid to access the website, whichever is greater.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Contact Information */}
          <section id="contact" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                If you have any questions about this disclaimer, please contact us:
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

          {/* Disclaimer CTA */}
          <section className="bg-muted/40 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-4">Questions About Our Disclaimer?</h2>
            <p className="text-muted-foreground mb-6">
              If you need clarification on any part of this disclaimer or have specific questions about our content, please reach out to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/terms">View Terms of Service</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
