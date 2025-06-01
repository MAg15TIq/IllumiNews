'use client';

import { useEffect } from 'react';

/**
 * Client component to handle AdSense script loading events
 * This component runs only on the client side to avoid SSR issues
 */
export function AdSenseLogger() {
  useEffect(() => {
    // Check if AdSense script is already loaded
    const checkAdSenseScript = () => {
      const script = document.querySelector('script[src*="adsbygoogle.js"]');
      if (script) {
        console.log('Google AdSense script found in DOM');
        
        // Add event listeners if not already added
        if (!script.hasAttribute('data-listeners-added')) {
          script.addEventListener('load', () => {
            console.log('Google AdSense script loaded successfully');
          });
          
          script.addEventListener('error', (e) => {
            console.error('Failed to load Google AdSense script:', e);
          });
          
          script.setAttribute('data-listeners-added', 'true');
        }
      }
    };

    // Check immediately
    checkAdSenseScript();

    // Also check after a short delay in case script is added later
    const timeout = setTimeout(checkAdSenseScript, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return null; // This component doesn't render anything
}
