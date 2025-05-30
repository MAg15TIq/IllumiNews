"use client";

import { useEffect } from "react";

// Extend Window interface to include adsbygoogle
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSenseSidebarProps {
  adSlot: string;
  className?: string;
}

export function AdSenseSidebar({
  adSlot,
  className = "",
}: AdSenseSidebarProps) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error("AdSense Sidebar error:", error);
    }
  }, []);

  return (
    <div className={`adsense-sidebar ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5754219619080083"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
