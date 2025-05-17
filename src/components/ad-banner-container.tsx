"use client"

import { useEffect, useRef } from 'react';

export function AdBannerContainer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = '//pl26666468.profitableratecpm.com/8e1412fe3e62901b60c6ddf9eefbf62b/invoke.js';
    
    // Add script to document
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full my-8">
      <div id="container-8e1412fe3e62901b60c6ddf9eefbf62b" ref={containerRef}></div>
    </div>
  );
}
