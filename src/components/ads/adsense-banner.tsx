"use client";

import { useEffect } from "react";

// Extend Window interface to include adsbygoogle
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSenseBannerProps {
  adSlot: string;
  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal";
  fullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function AdSenseBanner({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  className = "",
  style = {},
}: AdSenseBannerProps) {
  useEffect(() => {
    try {
      // Check if adsbygoogle is available
      if (typeof window !== "undefined" && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          ...style,
        }}
        data-ad-client="ca-pub-5754219619080083"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
}
