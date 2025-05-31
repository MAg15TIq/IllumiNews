import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy - Illuminews",
  description: "Learn about how Illuminews uses cookies and similar technologies to enhance your browsing experience.",
  openGraph: {
    title: "Cookie Policy - Illuminews",
    description: "Learn about how Illuminews uses cookies and similar technologies to enhance your browsing experience.",
  }
};

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-4 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Cookie Policy", href: "/cookies", current: true }
            ]}
          />

          {/* Page Header */}
          <div className="my-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <section className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p>
              This Cookie Policy explains how Illuminews (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies when you visit our website illuminews.com (the &quot;Service&quot;). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            <p>
              In some cases, we may use cookies to collect personal information, or that becomes personal information if we combine it with other information. In such cases, our Privacy Policy will apply in addition to this Cookie Policy.
            </p>
          </section>

          {/* Table of Contents */}
          <section className="mb-8 bg-muted/40 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li><a href="#what-are-cookies" className="text-primary hover:underline">What are Cookies?</a></li>
              <li><a href="#why-we-use-cookies" className="text-primary hover:underline">Why We Use Cookies</a></li>
              <li><a href="#types-of-cookies" className="text-primary hover:underline">Types of Cookies We Use</a></li>
              <li><a href="#third-party-cookies" className="text-primary hover:underline">Third-Party Cookies</a></li>
              <li><a href="#adsense-cookies" className="text-primary hover:underline">Google AdSense Cookies</a></li>
              <li><a href="#managing-cookies" className="text-primary hover:underline">Managing Your Cookie Preferences</a></li>
              <li><a href="#updates" className="text-primary hover:underline">Updates to This Policy</a></li>
              <li><a href="#contact" className="text-primary hover:underline">Contact Us</a></li>
            </ol>
          </section>

          {/* What are Cookies */}
          <section id="what-are-cookies" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. What are Cookies?</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p>
                Cookies set by the website owner (in this case, Illuminews) are called &quot;first-party cookies&quot;. Cookies set by parties other than the website owner are called &quot;third-party cookies&quot;. Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Why We Use Cookies */}
          <section id="why-we-use-cookies" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Why We Use Cookies</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We use first-party and third-party cookies for several reasons:
              </p>
              <ul>
                <li><strong>Essential cookies:</strong> Some cookies are required for technical reasons for our website to operate</li>
                <li><strong>Performance cookies:</strong> These help us understand how visitors interact with our website</li>
                <li><strong>Functionality cookies:</strong> These enable enhanced functionality and personalization</li>
                <li><strong>Advertising cookies:</strong> These are used to deliver advertisements relevant to you and your interests</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Types of Cookies */}
          <section id="types-of-cookies" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Essential Cookies</CardTitle>
                  <CardDescription>Required for basic website functionality</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Session management</li>
                    <li>• Security features</li>
                    <li>• Load balancing</li>
                    <li>• User preferences</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Analytics Cookies</CardTitle>
                  <CardDescription>Help us understand website usage</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Page views and traffic</li>
                    <li>• User behavior patterns</li>
                    <li>• Performance metrics</li>
                    <li>• Error tracking</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Functionality Cookies</CardTitle>
                  <CardDescription>Enhance your browsing experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Theme preferences</li>
                    <li>• Language settings</li>
                    <li>• Personalized content</li>
                    <li>• Social media integration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Advertising Cookies</CardTitle>
                  <CardDescription>Deliver relevant advertisements</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Google AdSense</li>
                    <li>• Targeted advertising</li>
                    <li>• Ad performance tracking</li>
                    <li>• Frequency capping</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Third-Party Cookies */}
          <section id="third-party-cookies" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Third-Party Cookies</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service and deliver advertisements on and through the Service.
              </p>
              <p>
                The specific types of first and third-party cookies served through our website and the purposes they perform are described in the sections below:
              </p>
              <ul>
                <li><strong>Google Analytics:</strong> Helps us understand how visitors use our website</li>
                <li><strong>Google AdSense:</strong> Serves personalized advertisements</li>
                <li><strong>Social Media Platforms:</strong> Enable sharing and social features</li>
                <li><strong>Content Delivery Networks:</strong> Improve website performance</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Google AdSense Cookies */}
          <section id="adsense-cookies" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Google AdSense Cookies</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.
              </p>
              <p>
                You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google&apos;s Ads Settings</a>. Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting <a href="http://www.aboutads.info/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.
              </p>
              <p>
                For more information about Google&apos;s privacy practices, please visit the <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Managing Cookies */}
          <section id="managing-cookies" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Managing Your Cookie Preferences</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your browser settings.
              </p>

              <h3 className="text-xl font-semibold">Browser Settings</h3>
              <p>
                Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
              </p>

              <h3 className="text-xl font-semibold">How to Manage Cookies in Popular Browsers:</h3>
              <ul>
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>

              <h3 className="text-xl font-semibold">Opt-Out Links</h3>
              <ul>
                <li><a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a></li>
                <li><a href="http://www.aboutads.info/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance</a></li>
                <li><a href="http://www.youronlinechoices.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Your Online Choices (EU)</a></li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Updates */}
          <section id="updates" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Updates to This Policy</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons.
              </p>
              <p>
                Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies. The date at the top of this Cookie Policy indicates when it was last updated.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Contact Information */}
          <section id="contact" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                If you have any questions about our use of cookies or other technologies, please contact us:
              </p>
              <p>
                Illuminews<br />
                123 News Avenue<br />
                New York, NY 10001<br />
                United States<br />
                privacy@illuminews.com<br />
                +1 (555) 123-4567
              </p>
            </div>
          </section>

          {/* Cookie Management CTA */}
          <section className="bg-muted/40 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-4">Manage Your Cookie Preferences</h2>
            <p className="text-muted-foreground mb-6">
              You can control and manage cookies in various ways. Please note that removing or blocking cookies can impact your user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/privacy-policy">View Privacy Policy</Link>
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
