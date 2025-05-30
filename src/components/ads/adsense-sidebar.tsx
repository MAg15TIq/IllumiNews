"use client";

import { useEffect } from "react";

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
      if (typeof window !== "undefined" && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
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
