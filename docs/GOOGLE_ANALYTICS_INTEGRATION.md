# Google Analytics Integration Documentation

## Overview
This document outlines the complete Google Analytics (GA4) integration for the IllumiNews website using gtag.js.

## Analytics Account Details
- **Tracking ID**: `G-KH9FBLXVRL`
- **Implementation**: Google Analytics 4 (GA4) with gtag.js
- **Framework**: Next.js 15 with App Router
- **Consent Management**: Integrated with existing consent banner

## Files Created/Modified

### Core Integration Files
1. **`src/app/layout.tsx`** - Root layout with Google Analytics scripts
2. **`src/components/analytics/google-analytics.tsx`** - Analytics utility component
3. **`src/components/analytics/index.ts`** - Export file for analytics components

### Integration Details

#### 1. Script Loading (`src/app/layout.tsx`)
- Google Analytics script loaded with `afterInteractive` strategy
- Default consent state set to 'denied' for GDPR compliance
- Integrates with existing consent management system

#### 2. Page View Tracking
- Automatic page view tracking on route changes
- Uses Next.js `usePathname` and `useSearchParams` hooks
- Tracks both pathname and search parameters

#### 3. Consent Integration
- Works seamlessly with existing `ConsentBanner` component
- Respects user consent preferences for analytics cookies
- Updates consent state using Google Consent Mode v2

## Usage Examples

### Basic Page View Tracking
Page views are automatically tracked when users navigate between pages.

### Custom Event Tracking
```typescript
import { useAnalytics } from '@/components/analytics';

function MyComponent() {
  const { trackEvent } = useAnalytics();
  
  const handleButtonClick = () => {
    trackEvent('click', 'button', 'header-cta');
  };
  
  return <button onClick={handleButtonClick}>Click me</button>;
}
```

### Manual Page View Tracking
```typescript
import { useAnalytics } from '@/components/analytics';

function MyComponent() {
  const { trackPageView } = useAnalytics();
  
  const handleCustomNavigation = () => {
    trackPageView('/custom-page', 'Custom Page Title');
  };
  
  return <button onClick={handleCustomNavigation}>Go to custom page</button>;
}
```

## Privacy and Compliance

### GDPR Compliance
- Default consent state is 'denied' until user provides consent
- Integrates with existing consent banner
- Respects user preferences for analytics cookies

### Data Collection
Google Analytics collects:
- Page views and navigation patterns
- User interactions (when custom events are implemented)
- Device and browser information
- Geographic location (country/region level)
- Traffic sources and referrers

### User Control
Users can:
- Accept or reject analytics cookies via the consent banner
- Change preferences at any time
- View detailed information in the Privacy Policy and Cookie Policy

## Testing

### Verification Steps
1. Open browser developer tools
2. Navigate to Network tab
3. Visit the website
4. Look for requests to `googletagmanager.com` and `google-analytics.com`
5. Check that `gtag` function is available in console: `window.gtag`
6. Verify consent updates work by accepting/rejecting analytics cookies

### Real-time Testing
1. Go to Google Analytics dashboard
2. Navigate to Reports > Realtime
3. Visit your website in another tab
4. Verify that page views appear in real-time (may take 1-2 minutes)

## Troubleshooting

### Common Issues
1. **Analytics not tracking**: Check that consent has been granted for analytics cookies
2. **Script not loading**: Verify network connectivity and script URLs
3. **Route changes not tracked**: Ensure `GoogleAnalytics` component is included in layout

### Debug Mode
Add this to browser console to enable debug mode:
```javascript
window.gtag('config', 'G-KH9FBLXVRL', {
  debug_mode: true
});
```

## Future Enhancements

### Recommended Additions
1. Enhanced e-commerce tracking (if applicable)
2. Custom dimensions for user segments
3. Goal and conversion tracking
4. Enhanced measurement events
5. Cross-domain tracking (if needed)

### Event Tracking Opportunities
- Article reading time
- Search queries
- Newsletter signups
- Social media shares
- Download tracking
- Outbound link clicks

## Maintenance

### Regular Tasks
1. Monitor analytics data quality
2. Review and update event tracking
3. Check for script loading errors
4. Verify consent compliance
5. Update tracking configuration as needed

### Updates
- Keep Google Analytics tracking ID current
- Monitor Google Analytics updates and deprecations
- Update consent management as regulations change
