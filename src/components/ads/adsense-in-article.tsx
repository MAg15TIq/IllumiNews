"use client";

import { useEffect } from "react";

// Extend Window interface to include adsbygoogle
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSenseInArticleProps {
  adSlot: string;
  className?: string;
}

export function AdSenseInArticle({
  adSlot,
  className = "",
}: AdSenseInArticleProps) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error("AdSense In-Article error:", error);
    }
  }, []);

  return (
    <div className={`adsense-in-article my-8 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-5754219619080083"
        data-ad-slot={adSlot}
      />
    </div>
  );
}
