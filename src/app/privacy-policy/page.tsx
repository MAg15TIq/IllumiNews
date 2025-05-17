import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Illuminews",
  description: "Learn about how Illuminews collects, uses, and protects your personal information.",
  openGraph: {
    title: "Privacy Policy - Illuminews",
    description: "Learn about how Illuminews collects, uses, and protects your personal information.",
  }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-4 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Privacy Policy", href: "/privacy-policy", current: true }
            ]}
          />

          {/* Page Header */}
          <div className="my-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Last Updated: May 15, 2025
            </p>
          </div>

          {/* Introduction */}
          <section className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p>
              At Illuminews, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website illuminews.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the &quot;Site&quot;).
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
            <p>
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the &quot;Last Updated&quot; date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.
            </p>
            <p>
              You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.
            </p>
          </section>

          {/* Table of Contents */}
          <section className="mb-8 bg-muted/40 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li><a href="#information-collection" className="text-primary hover:underline">Information Collection</a></li>
              <li><a href="#use-of-information" className="text-primary hover:underline">Use of Your Information</a></li>
              <li><a href="#disclosure-of-information" className="text-primary hover:underline">Disclosure of Your Information</a></li>
              <li><a href="#tracking-technologies" className="text-primary hover:underline">Tracking Technologies</a></li>
              <li><a href="#third-party-websites" className="text-primary hover:underline">Third-Party Websites</a></li>
              <li><a href="#data-security" className="text-primary hover:underline">Data Security</a></li>
              <li><a href="#data-retention" className="text-primary hover:underline">Data Retention</a></li>
              <li><a href="#your-rights" className="text-primary hover:underline">Your Privacy Rights</a></li>
              <li><a href="#children" className="text-primary hover:underline">Children&apos;s Privacy</a></li>
              <li><a href="#contact-us" className="text-primary hover:underline">Contact Us</a></li>
            </ol>
          </section>

          {/* Information Collection */}
          <section id="information-collection" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Information Collection</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold">Personal Data</h3>
              <p>
                Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Site.
              </p>

              <h3 className="text-xl font-semibold">Derivative Data</h3>
              <p>
                Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
              </p>

              <h3 className="text-xl font-semibold">Financial Data</h3>
              <p>
                Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor and you are encouraged to review their privacy policy and contact them directly for responses to your questions.
              </p>

              <h3 className="text-xl font-semibold">Mobile Device Data</h3>
              <p>
                Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Site from a mobile device.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Use of Information */}
          <section id="use-of-information" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Use of Your Information</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul>
                <li>Create and manage your account.</li>
                <li>Deliver targeted advertising, newsletters, and other information regarding promotions and the Site to you.</li>
                <li>Email you regarding your account or order.</li>
                <li>Enable user-to-user communications.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
                <li>Increase the efficiency and operation of the Site.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                <li>Notify you of updates to the Site.</li>
                <li>Offer new products, services, and/or recommendations to you.</li>
                <li>Perform other business activities as needed.</li>
                <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
                <li>Process payments and refunds.</li>
                <li>Request feedback and contact you about your use of the Site.</li>
                <li>Resolve disputes and troubleshoot problems.</li>
                <li>Respond to product and customer service requests.</li>
                <li>Send you a newsletter.</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Disclosure of Information */}
          <section id="disclosure-of-information" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Disclosure of Your Information</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>

              <h3 className="text-xl font-semibold">By Law or to Protect Rights</h3>
              <p>
                If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
              </p>

              <h3 className="text-xl font-semibold">Third-Party Service Providers</h3>
              <p>
                We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
              </p>

              <h3 className="text-xl font-semibold">Marketing Communications</h3>
              <p>
                With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.
              </p>

              <h3 className="text-xl font-semibold">Interactions with Other Users</h3>
              <p>
                If you interact with other users of the Site, those users may see your name, profile photo, and descriptions of your activity, including sending invitations to other users, chatting with other users, liking posts, following blogs.
              </p>

              <h3 className="text-xl font-semibold">Online Postings</h3>
              <p>
                When you post comments, contributions or other content to the Site, your posts may be viewed by all users and may be publicly distributed outside the Site in perpetuity.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Tracking Technologies */}
          <section id="tracking-technologies" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Tracking Technologies</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold">Cookies and Web Beacons</h3>
              <p>
                We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
              </p>

              <h3 className="text-xl font-semibold">Internet-Based Advertising</h3>
              <p>
                Additionally, we may use third-party software to serve ads on the Site, implement email marketing campaigns, and manage other interactive marketing initiatives. This third-party software may use cookies or similar tracking technology to help manage and optimize your online experience with us.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Third-Party Websites */}
          <section id="third-party-websites" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Websites</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                The Site may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing any information to any third-party websites, you should inform yourself of the privacy policies and practices (if any) of the third party responsible for that website, and should take those steps necessary to, in your discretion, protect the privacy of your information. We are not responsible for the content or privacy and security practices and policies of any third parties, including other sites, services or applications that may be linked to or from the Site.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Contact Us */}
          <section id="contact-us" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
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

          {/* Privacy Policy Updates */}
          <section className="bg-muted/40 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-4">Stay Informed About Privacy Policy Updates</h2>
            <p className="text-muted-foreground mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us With Questions</Link>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
