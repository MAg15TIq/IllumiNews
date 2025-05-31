"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

// Google Analytics tracking ID
export const GA_TRACKING_ID = "G-KH9FBLXVRL";

// Track page views
export const pageview = (url: string, title?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_location: url,
      page_title: title || document.title,
    });
  }
};

// Track custom events
export const event = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Component to handle route change tracking
export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page view on route change
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}

// Hook for analytics events
export function useAnalytics() {
  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    event(action, category, label, value);
  };

  const trackPageView = (url?: string, title?: string) => {
    const currentUrl = url || window.location.pathname + window.location.search;
    pageview(currentUrl, title);
  };

  return {
    trackEvent,
    trackPageView,
  };
}
