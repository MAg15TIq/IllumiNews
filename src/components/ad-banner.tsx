"use client"

import { useEffect, useRef } from 'react';

export function AdBanner() {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create script elements
    const scriptOptions = document.createElement('script');
    scriptOptions.type = 'text/javascript';
    scriptOptions.text = `
      atOptions = {
        'key' : '65cdf76065fae209fe23ea7ee8a39aa5',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
      };
    `;

    const scriptInvoke = document.createElement('script');
    scriptInvoke.type = 'text/javascript';
    scriptInvoke.src = '//www.highperformanceformat.com/65cdf76065fae209fe23ea7ee8a39aa5/invoke.js';

    // Append scripts to the container
    if (adContainerRef.current) {
      adContainerRef.current.appendChild(scriptOptions);
      adContainerRef.current.appendChild(scriptInvoke);
    }

    // Cleanup function
    return () => {
      if (adContainerRef.current) {
        if (scriptOptions.parentNode === adContainerRef.current) {
          adContainerRef.current.removeChild(scriptOptions);
        }
        if (scriptInvoke.parentNode === adContainerRef.current) {
          adContainerRef.current.removeChild(scriptInvoke);
        }
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center my-8">
      <div ref={adContainerRef} className="ad-container"></div>
    </div>
  );
}
