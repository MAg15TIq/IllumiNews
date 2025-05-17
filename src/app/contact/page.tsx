import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { NewsletterSignup } from "@/components/newsletter-signup";

export const metadata: Metadata = {
  title: "Contact Us - Illuminews",
  description: "Get in touch with the Illuminews team. We'd love to hear from you with feedback, story ideas, or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-4 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { label: "Home", href: "/" },
              { label: "Contact", href: "/contact", current: true }
            ]} 
          />
          
          <div className="my-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground md:text-lg md:w-2/3">
              We'd love to hear from you. Whether you have a question about our content, want to suggest a story, or are interested in partnering with us, our team is here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-1">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Our Offices</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">Headquarters</h3>
                    <address className="not-italic text-muted-foreground">
                      123 News Avenue<br />
                      New York, NY 10001<br />
                      United States
                    </address>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">European Office</h3>
                    <address className="not-italic text-muted-foreground">
                      45 Media Square<br />
                      London, EC1V 9HX<br />
                      United Kingdom
                    </address>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">General Inquiries</h3>
                    <p className="text-muted-foreground">info@illuminews.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Press & Media</h3>
                    <p className="text-muted-foreground">press@illuminews.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Careers</h3>
                    <p className="text-muted-foreground">careers@illuminews.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Advertising</h3>
                    <p className="text-muted-foreground">ads@illuminews.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-muted/40 rounded-lg p-8 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Have a Story Tip?
              </h2>
              <p className="text-muted-foreground mb-6">
                If you have information about a breaking news story or a potential investigation, we want to hear from you. Your confidentiality is our priority.
              </p>
              <Button size="lg" asChild>
                <a href="mailto:tips@illuminews.com">Submit a Tip</a>
              </Button>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
