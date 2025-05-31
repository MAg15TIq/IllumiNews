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
  title: "Corrections Policy - Illuminews",
  description: "Learn about Illuminews' commitment to accuracy and our procedures for handling corrections, clarifications, and retractions.",
  openGraph: {
    title: "Corrections Policy - Illuminews",
    description: "Learn about Illuminews' commitment to accuracy and our procedures for handling corrections, clarifications, and retractions.",
  }
};

export default function CorrectionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-4 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Corrections Policy", href: "/corrections", current: true }
            ]}
          />

          {/* Page Header */}
          <div className="my-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Corrections Policy
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Accuracy Commitment */}
          <Alert className="mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <AlertTitle>Our Commitment to Accuracy</AlertTitle>
            <AlertDescription>
              Illuminews is committed to accuracy in all our reporting. When we make mistakes, we correct them promptly and transparently.
            </AlertDescription>
          </Alert>

          {/* Introduction */}
          <section className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p>
              This Corrections Policy outlines our procedures for handling errors in our published content. We take accuracy seriously and are committed to correcting mistakes quickly and transparently when they occur.
            </p>
            <p>
              We encourage our readers to bring errors to our attention and appreciate their role in helping us maintain the highest standards of accuracy.
            </p>
          </section>

          {/* Table of Contents */}
          <section className="mb-8 bg-muted/40 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li><a href="#types-of-corrections" className="text-primary hover:underline">Types of Corrections</a></li>
              <li><a href="#correction-process" className="text-primary hover:underline">Correction Process</a></li>
              <li><a href="#reporting-errors" className="text-primary hover:underline">How to Report Errors</a></li>
              <li><a href="#correction-standards" className="text-primary hover:underline">Correction Standards</a></li>
              <li><a href="#retraction-policy" className="text-primary hover:underline">Retraction Policy</a></li>
              <li><a href="#clarifications" className="text-primary hover:underline">Clarifications</a></li>
              <li><a href="#transparency" className="text-primary hover:underline">Transparency and Accountability</a></li>
              <li><a href="#contact-information" className="text-primary hover:underline">Contact Information</a></li>
            </ol>
          </section>

          {/* Types of Corrections */}
          <section id="types-of-corrections" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Types of Corrections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Minor Corrections</CardTitle>
                  <CardDescription>Small factual errors or typos</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Spelling and grammar errors</li>
                    <li>• Minor factual inaccuracies</li>
                    <li>• Incorrect dates or numbers</li>
                    <li>• Name misspellings</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Significant Corrections</CardTitle>
                  <CardDescription>Important factual errors</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Incorrect quotes or attributions</li>
                    <li>• Factual errors affecting story meaning</li>
                    <li>• Misidentification of people or places</li>
                    <li>• Incorrect statistical information</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Retractions</CardTitle>
                  <CardDescription>Fundamental errors requiring withdrawal</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Stories based on false information</li>
                    <li>• Fabricated or unverifiable content</li>
                    <li>• Serious ethical violations</li>
                    <li>• Legal or safety concerns</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Correction Process */}
          <section id="correction-process" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Correction Process</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold">Immediate Response</h3>
              <ul>
                <li>Errors are investigated immediately upon identification</li>
                <li>Corrections are made as soon as verification is complete</li>
                <li>No correction is too small to address promptly</li>
                <li>Editorial team is notified of all corrections</li>
              </ul>

              <h3 className="text-xl font-semibold">Verification Process</h3>
              <ul>
                <li>All reported errors are thoroughly investigated</li>
                <li>Original sources are consulted when possible</li>
                <li>Multiple verification methods are used</li>
                <li>Editorial oversight ensures accuracy of corrections</li>
              </ul>

              <h3 className="text-xl font-semibold">Implementation</h3>
              <ul>
                <li>Corrections are clearly marked and prominently displayed</li>
                <li>Original incorrect information is preserved for transparency</li>
                <li>Correction notices explain the nature of the error</li>
                <li>Timestamps indicate when corrections were made</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* How to Report Errors */}
          <section id="reporting-errors" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. How to Report Errors</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We encourage readers to report errors through multiple channels:
              </p>
              
              <h3 className="text-xl font-semibold">Contact Methods</h3>
              <ul>
                <li><strong>Email:</strong> corrections@illuminews.com</li>
                <li><strong>Contact Form:</strong> Use our online contact form</li>
                <li><strong>Social Media:</strong> Direct message on our social platforms</li>
                <li><strong>Phone:</strong> +1 (555) 123-4567 during business hours</li>
              </ul>

              <h3 className="text-xl font-semibold">Information to Include</h3>
              <ul>
                <li>URL or title of the article containing the error</li>
                <li>Specific description of the error</li>
                <li>Correct information with sources if available</li>
                <li>Your contact information for follow-up</li>
              </ul>

              <h3 className="text-xl font-semibold">Response Timeline</h3>
              <ul>
                <li>Acknowledgment within 24 hours</li>
                <li>Investigation completed within 48 hours</li>
                <li>Correction published within 72 hours if verified</li>
                <li>Follow-up communication with reporter</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Correction Standards */}
          <section id="correction-standards" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Correction Standards</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold">Visibility and Placement</h3>
              <ul>
                <li>Corrections appear prominently at the top or bottom of articles</li>
                <li>Correction notices are clearly labeled as "Correction" or "Update"</li>
                <li>Significant corrections may warrant separate articles</li>
                <li>Social media corrections are posted on relevant platforms</li>
              </ul>

              <h3 className="text-xl font-semibold">Content Requirements</h3>
              <ul>
                <li>Clear explanation of what was incorrect</li>
                <li>Accurate replacement information</li>
                <li>Date and time of correction</li>
                <li>Preservation of original text when appropriate</li>
              </ul>

              <h3 className="text-xl font-semibold">Language and Tone</h3>
              <ul>
                <li>Direct and clear language</li>
                <li>No defensive or evasive wording</li>
                <li>Acknowledgment of the error</li>
                <li>Professional and respectful tone</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Retraction Policy */}
          <section id="retraction-policy" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Retraction Policy</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                In rare cases where an article contains fundamental errors that cannot be adequately corrected, we may retract the entire piece:
              </p>

              <h3 className="text-xl font-semibold">Grounds for Retraction</h3>
              <ul>
                <li>Articles based on fabricated or completely false information</li>
                <li>Content that violates our ethical standards</li>
                <li>Stories that pose legal or safety risks</li>
                <li>Articles where the core premise is fundamentally flawed</li>
              </ul>

              <h3 className="text-xl font-semibold">Retraction Process</h3>
              <ul>
                <li>Thorough investigation by senior editorial staff</li>
                <li>Consultation with legal counsel when necessary</li>
                <li>Clear retraction notice explaining the reasons</li>
                <li>Preservation of the original article with retraction notice</li>
                <li>Notification to relevant parties and platforms</li>
              </ul>

              <h3 className="text-xl font-semibold">Post-Retraction Actions</h3>
              <ul>
                <li>Review of editorial processes to prevent similar issues</li>
                <li>Additional fact-checking procedures if needed</li>
                <li>Staff training or policy updates as appropriate</li>
                <li>Public accountability measures when warranted</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Clarifications */}
          <section id="clarifications" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Clarifications</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Sometimes our reporting, while accurate, may benefit from additional context or clarification:
              </p>

              <h3 className="text-xl font-semibold">When Clarifications Are Used</h3>
              <ul>
                <li>When accurate information could be misinterpreted</li>
                <li>To provide additional context that enhances understanding</li>
                <li>To address reader confusion about complex topics</li>
                <li>To update developing stories with new information</li>
              </ul>

              <h3 className="text-xl font-semibold">Clarification Standards</h3>
              <ul>
                <li>Clearly labeled as "Clarification" or "Editor's Note"</li>
                <li>Explanation of why clarification was needed</li>
                <li>Additional context or information provided</li>
                <li>Timestamp indicating when clarification was added</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Transparency and Accountability */}
          <section id="transparency" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Transparency and Accountability</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold">Public Record</h3>
              <ul>
                <li>All corrections are preserved in our archives</li>
                <li>Correction history is maintained for each article</li>
                <li>Regular reporting on correction statistics</li>
                <li>Analysis of error patterns to improve processes</li>
              </ul>

              <h3 className="text-xl font-semibold">Learning and Improvement</h3>
              <ul>
                <li>Regular review of correction patterns and causes</li>
                <li>Staff training based on common error types</li>
                <li>Process improvements to prevent future errors</li>
                <li>Reader feedback integration into editorial practices</li>
              </ul>

              <h3 className="text-xl font-semibold">Editorial Accountability</h3>
              <ul>
                <li>Senior editors review all significant corrections</li>
                <li>Root cause analysis for serious errors</li>
                <li>Individual accountability for repeated errors</li>
                <li>Continuous improvement of editorial standards</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Contact Information Section */}
          <section id="contact-information" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                For corrections, clarifications, or questions about our accuracy standards:
              </p>

              <h3 className="text-xl font-semibold">Corrections Team</h3>
              <p>
                <strong>Email:</strong> corrections@illuminews.com<br />
                <strong>Phone:</strong> +1 (555) 123-4567<br />
                <strong>Address:</strong> Illuminews Corrections Department<br />
                123 News Avenue<br />
                New York, NY 10001<br />
                United States
              </p>

              <h3 className="text-xl font-semibold">Editorial Leadership</h3>
              <p>
                For serious concerns about editorial standards or systemic issues:
              </p>
              <p>
                <strong>Editor-in-Chief:</strong> editorial@illuminews.com<br />
                <strong>Managing Editor:</strong> managing@illuminews.com
              </p>

              <h3 className="text-xl font-semibold">Response Commitment</h3>
              <ul>
                <li>All correction requests acknowledged within 24 hours</li>
                <li>Investigation completed within 48 hours</li>
                <li>Corrections published within 72 hours if verified</li>
                <li>Follow-up communication provided to all reporters</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Contact Information */}
          <section className="bg-muted/40 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-4">Report an Error</h2>
            <p className="text-muted-foreground mb-6">
              Found an error in our reporting? We want to hear from you. Help us maintain the highest standards of accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="mailto:corrections@illuminews.com">Email Corrections Team</a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
