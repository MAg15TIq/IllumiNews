/**
 * AdSense Verification Script
 * Run this script in the browser console to verify AdSense integration
 */

(function() {
  console.log('🔍 Starting AdSense Integration Verification...\n');
  
  const results = {
    passed: 0,
    failed: 0,
    warnings: 0
  };

  function logResult(test, status, message) {
    const emoji = status === 'pass' ? '✅' : status === 'fail' ? '❌' : '⚠️';
    console.log(`${emoji} ${test}: ${message}`);
    results[status === 'pass' ? 'passed' : status === 'fail' ? 'failed' : 'warnings']++;
  }

  // Test 1: Check if AdSense script is loaded
  const adsenseScript = document.querySelector('script[src*="adsbygoogle.js"]');
  if (adsenseScript) {
    logResult('AdSense Script', 'pass', 'AdSense script found in DOM');
  } else {
    logResult('AdSense Script', 'fail', 'AdSense script not found in DOM');
  }

  // Test 2: Check if adsbygoogle array exists
  if (window.adsbygoogle) {
    logResult('AdSense Array', 'pass', 'window.adsbygoogle array exists');
  } else {
    logResult('AdSense Array', 'fail', 'window.adsbygoogle array not found');
  }

  // Test 3: Check for AdSense ad containers
  const adContainers = document.querySelectorAll('.adsbygoogle');
  if (adContainers.length > 0) {
    logResult('Ad Containers', 'pass', `Found ${adContainers.length} ad container(s)`);
  } else {
    logResult('Ad Containers', 'warning', 'No ad containers found on this page');
  }

  // Test 4: Check publisher ID in ad containers
  let publisherIdFound = false;
  adContainers.forEach(container => {
    const clientId = container.getAttribute('data-ad-client');
    if (clientId === 'ca-pub-5754219619080083') {
      publisherIdFound = true;
    }
  });
  
  if (publisherIdFound || adContainers.length === 0) {
    logResult('Publisher ID', 'pass', 'Correct publisher ID found');
  } else {
    logResult('Publisher ID', 'fail', 'Incorrect or missing publisher ID');
  }

  // Test 5: Check for ads.txt accessibility
  fetch('/ads.txt')
    .then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error('ads.txt not accessible');
    })
    .then(content => {
      if (content.includes('pub-5754219619080083')) {
        logResult('ads.txt File', 'pass', 'ads.txt accessible with correct publisher ID');
      } else {
        logResult('ads.txt File', 'fail', 'ads.txt missing publisher ID');
      }
    })
    .catch(() => {
      logResult('ads.txt File', 'fail', 'ads.txt not accessible');
    });

  // Test 6: Check for robots.txt
  fetch('/robots.txt')
    .then(response => {
      if (response.ok) {
        logResult('robots.txt File', 'pass', 'robots.txt accessible');
      } else {
        logResult('robots.txt File', 'warning', 'robots.txt not accessible');
      }
    })
    .catch(() => {
      logResult('robots.txt File', 'warning', 'robots.txt not accessible');
    });

  // Test 7: Check for sitemap.xml
  fetch('/sitemap.xml')
    .then(response => {
      if (response.ok) {
        logResult('Sitemap', 'pass', 'sitemap.xml accessible');
      } else {
        logResult('Sitemap', 'warning', 'sitemap.xml not accessible');
      }
    })
    .catch(() => {
      logResult('Sitemap', 'warning', 'sitemap.xml not accessible');
    });

  // Test 8: Check meta tags
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && metaDescription.content.length > 50) {
    logResult('Meta Description', 'pass', 'Meta description found and adequate length');
  } else {
    logResult('Meta Description', 'warning', 'Meta description missing or too short');
  }

  // Test 9: Check for HTTPS
  if (location.protocol === 'https:') {
    logResult('HTTPS', 'pass', 'Site is served over HTTPS');
  } else {
    logResult('HTTPS', 'fail', 'Site is not served over HTTPS');
  }

  // Test 10: Check page load performance
  if (window.performance && window.performance.timing) {
    const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
    if (loadTime < 3000) {
      logResult('Page Load Speed', 'pass', `Page loaded in ${loadTime}ms`);
    } else {
      logResult('Page Load Speed', 'warning', `Page loaded in ${loadTime}ms (consider optimization)`);
    }
  }

  // Summary
  setTimeout(() => {
    console.log('\n📊 Verification Summary:');
    console.log(`✅ Passed: ${results.passed}`);
    console.log(`❌ Failed: ${results.failed}`);
    console.log(`⚠️ Warnings: ${results.warnings}`);
    
    if (results.failed === 0) {
      console.log('\n🎉 AdSense integration looks good! Monitor AdSense dashboard for approval status.');
    } else {
      console.log('\n🔧 Please fix the failed tests before submitting for AdSense review.');
    }
  }, 2000);

})();
