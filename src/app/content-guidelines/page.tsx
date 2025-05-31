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
  title: "Content Guidelines - Illuminews",
  description: "Learn about Illuminews' content standards, community guidelines, and expectations for user-generated content.",
  openGraph: {
    title: "Content Guidelines - Illuminews",
    description: "Learn about Illuminews' content standards, community guidelines, and expectations for user-generated content.",
  }
};

export default function ContentGuidelinesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-4 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Content Guidelines", href: "/content-guidelines", current: true }
            ]}
          />

          {/* Page Header */}
          <div className="my-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Content Guidelines
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Community Standards Notice */}
          <Alert className="mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <AlertTitle>Building a Respectful Community</AlertTitle>
            <AlertDescription>
              These guidelines help ensure Illuminews remains a platform for constructive dialogue and quality journalism.
            </AlertDescription>
          </Alert>

          {/* Introduction */}
          <section className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p>
              These Content Guidelines outline our standards for all content published on Illuminews, including editorial content, user comments, and community contributions. Our goal is to maintain a platform that promotes informed discussion, respects diverse perspectives, and upholds the highest standards of journalism.
            </p>
            <p>
              These guidelines apply to all users of our platform and help ensure that Illuminews remains a trusted source of news and a respectful community for dialogue.
            </p>
          </section>

          {/* Table of Contents */}
          <section className="mb-8 bg-muted/40 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li><a href="#editorial-content" className="text-primary hover:underline">Editorial Content Standards</a></li>
              <li><a href="#user-generated-content" className="text-primary hover:underline">User-Generated Content</a></li>
              <li><a href="#comment-guidelines" className="text-primary hover:underline">Comment Guidelines</a></li>
              <li><a href="#prohibited-content" className="text-primary hover:underline">Prohibited Content</a></li>
              <li><a href="#moderation-policy" className="text-primary hover:underline">Content Moderation</a></li>
              <li><a href="#reporting-violations" className="text-primary hover:underline">Reporting Violations</a></li>
              <li><a href="#consequences" className="text-primary hover:underline">Consequences for Violations</a></li>
              <li><a href="#appeals-process" className="text-primary hover:underline">Appeals Process</a></li>
            </ol>
          </section>

          {/* Editorial Content Standards */}
          <section id="editorial-content" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Editorial Content Standards</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                All editorial content published by Illuminews adheres to our strict journalistic standards:
              </p>
              
              <h3 className="text-xl font-semibold">Accuracy and Verification</h3>
              <ul>
                <li>All facts are verified through reliable sources</li>
                <li>Claims are substantiated with evidence</li>
                <li>Uncertainty is acknowledged when information cannot be confirmed</li>
                <li>Sources are cited and attributed appropriately</li>
              </ul>

              <h3 className="text-xl font-semibold">Fairness and Balance</h3>
              <ul>
                <li>Multiple perspectives are presented on controversial issues</li>
                <li>Bias is minimized through careful language and presentation</li>
                <li>Context and background information are provided</li>
                <li>Opinion content is clearly distinguished from news reporting</li>
              </ul>

              <h3 className="text-xl font-semibold">Ethical Standards</h3>
              <ul>
                <li>Respect for privacy and human dignity</li>
                <li>Protection of vulnerable individuals and groups</li>
                <li>Transparency about conflicts of interest</li>
                <li>Adherence to professional journalism ethics</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* User-Generated Content */}
          <section id="user-generated-content" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. User-Generated Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Acceptable Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Constructive comments and discussions</li>
                    <li>• Factual information with sources</li>
                    <li>• Respectful disagreement and debate</li>
                    <li>• Personal experiences relevant to topics</li>
                    <li>• Questions and requests for clarification</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Content Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Must be relevant to the article or topic</li>
                    <li>• Should contribute to meaningful discussion</li>
                    <li>• Must respect other users and viewpoints</li>
                    <li>• Should be factual and well-reasoned</li>
                    <li>• Must comply with legal requirements</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Comment Guidelines */}
          <section id="comment-guidelines" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Comment Guidelines</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold">Encouraged Behavior</h3>
              <ul>
                <li>Engage in respectful and constructive dialogue</li>
                <li>Support claims with credible sources when possible</li>
                <li>Ask thoughtful questions and seek clarification</li>
                <li>Share relevant personal experiences and insights</li>
                <li>Acknowledge when you've learned something new</li>
              </ul>

              <h3 className="text-xl font-semibold">Discussion Etiquette</h3>
              <ul>
                <li>Address ideas and arguments, not individuals</li>
                <li>Use clear and respectful language</li>
                <li>Stay on topic and relevant to the article</li>
                <li>Avoid repetitive or spam-like posting</li>
                <li>Respect others' right to disagree</li>
              </ul>

              <h3 className="text-xl font-semibold">Quality Standards</h3>
              <ul>
                <li>Comments should add value to the discussion</li>
                <li>Avoid one-word responses or meaningless content</li>
                <li>Use proper grammar and spelling when possible</li>
                <li>Keep comments concise and focused</li>
                <li>Fact-check information before sharing</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Prohibited Content */}
          <section id="prohibited-content" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Prohibited Content</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                The following types of content are not permitted on our platform:
              </p>
              
              <h3 className="text-xl font-semibold">Harmful Content</h3>
              <ul>
                <li>Hate speech, discrimination, or harassment</li>
                <li>Threats of violence or harm</li>
                <li>Content promoting illegal activities</li>
                <li>Doxxing or sharing private information</li>
                <li>Content that could endanger individuals or groups</li>
              </ul>

              <h3 className="text-xl font-semibold">Misleading Information</h3>
              <ul>
                <li>Deliberately false or misleading information</li>
                <li>Conspiracy theories without factual basis</li>
                <li>Medical misinformation that could cause harm</li>
                <li>Election misinformation or voter suppression</li>
                <li>Manipulated media presented as authentic</li>
              </ul>

              <h3 className="text-xl font-semibold">Inappropriate Content</h3>
              <ul>
                <li>Spam, promotional content, or excessive self-promotion</li>
                <li>Adult content or sexually explicit material</li>
                <li>Graphic violence or disturbing imagery</li>
                <li>Copyright infringement or plagiarism</li>
                <li>Off-topic or irrelevant content</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Content Moderation */}
          <section id="moderation-policy" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Content Moderation</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We employ both automated systems and human moderators to ensure content compliance:
              </p>

              <h3 className="text-xl font-semibold">Moderation Process</h3>
              <ul>
                <li>Automated screening for obvious violations</li>
                <li>Human review of flagged content</li>
                <li>Community reporting and flagging system</li>
                <li>Regular audits of published content</li>
                <li>Proactive monitoring of high-traffic discussions</li>
              </ul>

              <h3 className="text-xl font-semibold">Response Times</h3>
              <ul>
                <li>Urgent violations (threats, doxxing): Within 1 hour</li>
                <li>Serious violations (hate speech, misinformation): Within 4 hours</li>
                <li>Standard violations (spam, off-topic): Within 24 hours</li>
                <li>Minor violations (formatting, etiquette): Within 48 hours</li>
              </ul>

              <h3 className="text-xl font-semibold">Transparency</h3>
              <ul>
                <li>Clear notification when content is removed</li>
                <li>Explanation of which guideline was violated</li>
                <li>Information about appeals process</li>
                <li>Regular transparency reports on moderation actions</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Reporting Violations */}
          <section id="reporting-violations" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Reporting Violations</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We rely on our community to help identify content that violates our guidelines:
              </p>

              <h3 className="text-xl font-semibold">How to Report</h3>
              <ul>
                <li>Use the "Report" button on comments and content</li>
                <li>Email moderation@illuminews.com with details</li>
                <li>Contact us through our general contact form</li>
                <li>Direct message on social media platforms</li>
              </ul>

              <h3 className="text-xl font-semibold">Information to Include</h3>
              <ul>
                <li>URL or location of the violating content</li>
                <li>Specific guideline you believe was violated</li>
                <li>Brief explanation of the issue</li>
                <li>Screenshots if the content might be removed quickly</li>
              </ul>

              <h3 className="text-xl font-semibold">What Happens Next</h3>
              <ul>
                <li>Reports are reviewed within 24 hours</li>
                <li>Action is taken if violations are confirmed</li>
                <li>Reporters may receive follow-up communication</li>
                <li>Serious violations are escalated to senior staff</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Consequences for Violations */}
          <section id="consequences" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Consequences for Violations</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Violations of our content guidelines may result in various consequences:
              </p>

              <h3 className="text-xl font-semibold">Progressive Enforcement</h3>
              <ul>
                <li><strong>First violation:</strong> Warning and content removal</li>
                <li><strong>Repeated violations:</strong> Temporary commenting restrictions</li>
                <li><strong>Serious violations:</strong> Account suspension</li>
                <li><strong>Severe violations:</strong> Permanent account ban</li>
              </ul>

              <h3 className="text-xl font-semibold">Immediate Actions</h3>
              <p>
                Some violations may result in immediate consequences without warning:
              </p>
              <ul>
                <li>Threats of violence or harm</li>
                <li>Doxxing or sharing private information</li>
                <li>Severe hate speech or harassment</li>
                <li>Illegal content or activities</li>
                <li>Coordinated inauthentic behavior</li>
              </ul>

              <h3 className="text-xl font-semibold">Account Actions</h3>
              <ul>
                <li>Content removal and editing restrictions</li>
                <li>Temporary suspension (1-30 days)</li>
                <li>Permanent account termination</li>
                <li>IP address blocking for severe cases</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Appeals Process */}
          <section id="appeals-process" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Appeals Process</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                If you believe your content was incorrectly removed or your account was unfairly restricted:
              </p>

              <h3 className="text-xl font-semibold">How to Appeal</h3>
              <ul>
                <li>Email appeals@illuminews.com within 30 days</li>
                <li>Include your username and the specific content in question</li>
                <li>Explain why you believe the action was incorrect</li>
                <li>Provide any additional context or evidence</li>
              </ul>

              <h3 className="text-xl font-semibold">Appeals Review</h3>
              <ul>
                <li>Appeals are reviewed by senior moderation staff</li>
                <li>Review process typically takes 3-5 business days</li>
                <li>Decisions are based on guidelines and available evidence</li>
                <li>You will receive a response explaining the decision</li>
              </ul>

              <h3 className="text-xl font-semibold">Possible Outcomes</h3>
              <ul>
                <li>Appeal upheld: Content restored, restrictions lifted</li>
                <li>Appeal partially upheld: Reduced consequences</li>
                <li>Appeal denied: Original decision stands</li>
                <li>Additional violations discovered: Increased consequences</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Contact Information */}
          <section className="bg-muted/40 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-4">Questions About Content Guidelines?</h2>
            <p className="text-muted-foreground mb-6">
              If you have questions about our content guidelines or need to report a violation, please contact our moderation team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="mailto:moderation@illuminews.com">Contact Moderation Team</a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">General Contact</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
