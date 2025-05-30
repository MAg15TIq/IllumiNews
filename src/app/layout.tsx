import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
