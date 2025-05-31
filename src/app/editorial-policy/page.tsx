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
  title: "Editorial Policy - Illuminews",
  description: "Learn about Illuminews' editorial standards, journalistic ethics, and commitment to accurate, fair, and independent reporting.",
  openGraph: {
    title: "Editorial Policy - Illuminews",
    description: "Learn about Illuminews' editorial standards, journalistic ethics, and commitment to accurate, fair, and independent reporting.",
  }
};

export default function EditorialPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-4 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Editorial Policy", href: "/editorial-policy", current: true }
            ]}
          />

          {/* Page Header */}
          <div className="my-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Editorial Policy
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Editorial Standards Notice */}
          <Alert className="mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <AlertTitle>Our Commitment to Editorial Excellence</AlertTitle>
            <AlertDescription>
              Illuminews is committed to the highest standards of journalism, editorial independence, and ethical reporting practices.
            </AlertDescription>
          </Alert>

          {/* Introduction */}
          <section className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p>
              This Editorial Policy outlines the principles, standards, and procedures that guide all editorial content published by Illuminews. Our commitment to journalistic integrity, accuracy, fairness, and independence forms the foundation of everything we do.
            </p>
            <p>
              As a digital news platform, we recognize our responsibility to provide our readers with reliable, well-researched, and ethically produced journalism that serves the public interest.
            </p>
          </section>

          {/* Table of Contents */}
          <section className="mb-8 bg-muted/40 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li><a href="#editorial-independence" className="text-primary hover:underline">Editorial Independence</a></li>
              <li><a href="#accuracy-verification" className="text-primary hover:underline">Accuracy and Verification</a></li>
              <li><a href="#fact-checking" className="text-primary hover:underline">Fact-Checking Standards</a></li>
              <li><a href="#source-protection" className="text-primary hover:underline">Source Protection and Verification</a></li>
              <li><a href="#conflicts-of-interest" className="text-primary hover:underline">Conflicts of Interest</a></li>
              <li><a href="#corrections-policy" className="text-primary hover:underline">Corrections and Retractions</a></li>
              <li><a href="#fairness-balance" className="text-primary hover:underline">Fairness and Balance</a></li>
              <li><a href="#privacy-dignity" className="text-primary hover:underline">Privacy and Human Dignity</a></li>
              <li><a href="#editorial-process" className="text-primary hover:underline">Editorial Process</a></li>
              <li><a href="#accountability" className="text-primary hover:underline">Accountability and Transparency</a></li>
            </ol>
          </section>

          {/* Editorial Independence */}
          <section id="editorial-independence" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Editorial Independence</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Illuminews maintains complete editorial independence in all our reporting and content decisions. Our editorial content is not influenced by:
              </p>
              <ul>
                <li>Advertising partners or sponsors</li>
                <li>Political parties or organizations</li>
                <li>Commercial interests or business relationships</li>
                <li>Personal relationships or external pressures</li>
              </ul>
              <p>
                Editorial decisions are made solely based on newsworthiness, public interest, and journalistic merit. We maintain a clear separation between our editorial content and any commercial or advertising content.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Accuracy and Verification */}
          <section id="accuracy-verification" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Accuracy and Verification</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Accuracy is fundamental to our credibility and the trust our readers place in us. We are committed to:
              </p>
              <ul>
                <li>Verifying information through multiple reliable sources</li>
                <li>Clearly distinguishing between fact and opinion</li>
                <li>Providing proper context and background information</li>
                <li>Acknowledging when information cannot be independently verified</li>
                <li>Updating stories as new information becomes available</li>
              </ul>
              <p>
                When we make errors, we correct them promptly and transparently in accordance with our corrections policy.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Fact-Checking Standards */}
          <section id="fact-checking" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Fact-Checking Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Primary Source Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Direct quotes and statements verified</li>
                    <li>• Official documents and records checked</li>
                    <li>• Expert opinions properly attributed</li>
                    <li>• Statistical data verified from original sources</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cross-Reference Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Multiple source confirmation required</li>
                    <li>• Independent verification when possible</li>
                    <li>• Conflicting information clearly noted</li>
                    <li>• Uncertainty acknowledged when present</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Source Protection */}
          <section id="source-protection" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Source Protection and Verification</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold">Source Protection</h3>
              <p>
                We are committed to protecting the confidentiality of sources who provide information in confidence. We will:
              </p>
              <ul>
                <li>Honor agreements of confidentiality</li>
                <li>Use secure communication methods when necessary</li>
                <li>Protect source identity even under legal pressure when ethically justified</li>
                <li>Clearly explain the terms of confidentiality to sources</li>
              </ul>

              <h3 className="text-xl font-semibold">Source Verification</h3>
              <p>
                All sources are evaluated for credibility and reliability:
              </p>
              <ul>
                <li>Sources must be identified and verified by editors</li>
                <li>Anonymous sources used only when necessary and justified</li>
                <li>Source motivations and potential biases considered</li>
                <li>Corroboration sought from additional sources</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Conflicts of Interest */}
          <section id="conflicts-of-interest" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Conflicts of Interest</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We are committed to avoiding conflicts of interest that could compromise our editorial integrity:
              </p>
              <ul>
                <li>Staff members must disclose any financial interests in companies they cover</li>
                <li>Personal relationships that could affect coverage must be disclosed</li>
                <li>Political affiliations and activities are disclosed when relevant</li>
                <li>Gifts and hospitality from sources are declined or disclosed</li>
                <li>Outside employment and consulting arrangements are reviewed for conflicts</li>
              </ul>
              <p>
                When conflicts cannot be avoided, they are clearly disclosed to readers, and alternative arrangements for coverage are made when necessary.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Corrections Policy */}
          <section id="corrections-policy" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Corrections and Retractions</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We take errors seriously and are committed to correcting them promptly and transparently:
              </p>

              <h3 className="text-xl font-semibold">Correction Process</h3>
              <ul>
                <li>Errors are corrected as soon as they are identified</li>
                <li>Corrections are clearly labeled and prominently displayed</li>
                <li>The nature of the error and the correct information are explained</li>
                <li>Corrections are preserved in the article's revision history</li>
              </ul>

              <h3 className="text-xl font-semibold">Retraction Policy</h3>
              <p>
                In cases where an article contains fundamental errors that cannot be corrected:
              </p>
              <ul>
                <li>The article may be retracted with a clear explanation</li>
                <li>Retracted articles remain accessible with prominent retraction notices</li>
                <li>The reasons for retraction are fully explained to readers</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Fairness and Balance */}
          <section id="fairness-balance" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Fairness and Balance</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We strive for fairness and balance in our reporting while maintaining our commitment to truth and accuracy:
              </p>
              <ul>
                <li>Multiple perspectives are sought on controversial issues</li>
                <li>Subjects of criticism are given opportunity to respond</li>
                <li>Context and background information are provided</li>
                <li>Bias is minimized through careful language and presentation</li>
                <li>Opinion content is clearly distinguished from news reporting</li>
              </ul>
              <p>
                Fairness does not require false equivalency between factual and unfactual claims, but rather accurate representation of legitimate viewpoints.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Privacy and Human Dignity */}
          <section id="privacy-dignity" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Privacy and Human Dignity</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We respect the privacy and dignity of individuals while serving the public interest:
              </p>
              <ul>
                <li>Private information is published only when it serves a clear public interest</li>
                <li>Victims of crime and tragedy are treated with sensitivity</li>
                <li>Children's privacy is especially protected</li>
                <li>Grief and trauma are respected in our reporting approach</li>
                <li>Personal information is verified and relevant before publication</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Editorial Process */}
          <section id="editorial-process" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Editorial Process</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold">Content Review</h3>
              <p>
                All content undergoes editorial review before publication:
              </p>
              <ul>
                <li>Fact-checking and source verification</li>
                <li>Legal and ethical review when necessary</li>
                <li>Style and clarity editing</li>
                <li>Headline and presentation review</li>
              </ul>

              <h3 className="text-xl font-semibold">Publication Standards</h3>
              <ul>
                <li>Breaking news is verified before publication</li>
                <li>Developing stories are updated as information becomes available</li>
                <li>Speculation is clearly identified as such</li>
                <li>Sources and methodology are disclosed when relevant</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Accountability and Transparency */}
          <section id="accountability" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Accountability and Transparency</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We are accountable to our readers and the public for our editorial decisions:
              </p>
              <ul>
                <li>Editorial policies are publicly available and regularly updated</li>
                <li>Reader feedback and complaints are taken seriously</li>
                <li>Editorial decisions can be questioned and explained</li>
                <li>Regular review of our editorial practices and standards</li>
                <li>Transparency about our funding and business model</li>
              </ul>

              <h3 className="text-xl font-semibold">Reader Engagement</h3>
              <p>
                We encourage reader engagement and feedback:
              </p>
              <ul>
                <li>Comments and feedback are welcomed and reviewed</li>
                <li>Corrections can be submitted by readers</li>
                <li>Editorial decisions are explained when questioned</li>
                <li>Regular communication about our editorial approach</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Contact Information */}
          <section className="bg-muted/40 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-4">Editorial Standards Questions?</h2>
            <p className="text-muted-foreground mb-6">
              If you have questions about our editorial standards or want to report a concern about our coverage, please contact our editorial team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact">Contact Editorial Team</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/corrections">View Corrections Policy</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
