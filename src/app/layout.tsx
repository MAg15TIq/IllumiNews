import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ConsentBanner } from "@/components/consent-banner";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Illuminews - Stay Informed with the Latest News",
  description: "Illuminews is your source for the latest news, articles, and insights from around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} font-sans antialiased`}>
        {/*
          Google AdSense Integration
          - Auto ads enabled globally across all pages
          - Client ID: ca-pub-5754219619080083
          - Loading strategy: afterInteractive (non-blocking)
          - Error handling and success logging included
          - See docs/ADSENSE_INTEGRATION.md for full documentation
        */}
        {/* Google Analytics Integration */}
        <Script
          id="google-analytics"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KH9FBLXVRL"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              // Initialize with default consent state (denied)
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'functionality_storage': 'denied',
                'personalization_storage': 'denied',
              });

              gtag('config', 'G-KH9FBLXVRL', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />

        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5754219619080083"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GoogleAnalytics />
          {children}
          <ConsentBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
