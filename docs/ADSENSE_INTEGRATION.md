# Google AdSense Integration Documentation

## Overview
This document outlines the complete Google AdSense integration for the IllumiNews website, including auto ads and manual ad placements.

## AdSense Account Details
- **Publisher ID**: `ca-pub-5754219619080083`
- **Integration Type**: Auto Ads + Manual Ad Placements
- **Implementation**: Next.js with TypeScript

## Files Modified/Created

### Core Integration Files
1. **`src/app/layout.tsx`** - Root layout with AdSense script
2. **`src/components/ads/`** - Ad component library
   - `adsense-banner.tsx` - Banner ad component
   - `adsense-in-article.tsx` - In-article ad component
   - `adsense-sidebar.tsx` - Sidebar ad component
   - `index.ts` - Export file

### Pages with Ad Integration
1. **`src/app/page.tsx`** - Homepage with banner ads
2. **`src/components/article-template.tsx`** - Article template with strategic ad placements
3. **`src/app/category/technology/quantum-computing-future.html`** - Standalone HTML page
4. **`src/app/category/environment/climate-initiatives-results.html`** - Standalone HTML page

## AdSense Script Implementation

### Auto Ads Script (Global)
```typescript
// In src/app/layout.tsx
<Script
  id="google-adsense"
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5754219619080083"
  crossOrigin="anonymous"
  strategy="afterInteractive"
  onLoad={() => {
    console.log('Google AdSense script loaded successfully');
  }}
  onError={(e) => {
    console.error('Failed to load Google AdSense script:', e);
  }}
/>
```

### Manual Ad Placements

#### Banner Ads
```typescript
<AdSenseBanner 
  adSlot="1234567890" 
  adFormat="horizontal"
  className="mb-8"
/>
```

#### In-Article Ads
```typescript
<AdSenseInArticle 
  adSlot="0987654321"
  className="my-8"
/>
```

#### Sidebar Ads
```typescript
<AdSenseSidebar 
  adSlot="2468135790"
  className="mb-4"
/>
```

## Ad Placement Strategy

### Homepage (`src/app/page.tsx`)
- **Top Banner**: After hero section
- **Middle Banner**: Between featured and recent articles

### Article Pages (`src/components/article-template.tsx`)
- **Top Banner**: After introduction
- **In-Article Ads**: Every 2nd section
- **Bottom Banner**: Before author bio

### Standalone HTML Pages
- **Auto Ads Only**: Script in `<head>` section

## Ad Slot Configuration

| Location | Ad Slot ID | Format | Purpose |
|----------|------------|--------|---------|
| Homepage Top | 1357924680 | horizontal | Header banner |
| Homepage Middle | 8642097531 | rectangle | Content separator |
| Article Top | 1234567890 | horizontal | Post-intro banner |
| Article In-Content | 0987654321 | fluid | In-article ads |
| Article Bottom | 2468135790 | rectangle | Pre-author banner |

**Note**: These are placeholder ad slot IDs. Replace with actual slot IDs from your AdSense account once approved.

## Performance Optimizations

1. **Loading Strategy**: `afterInteractive` for non-blocking load
2. **Error Handling**: Console logging for debugging
3. **Conditional Rendering**: Ads only show when appropriate
4. **Responsive Design**: Full-width responsive enabled

## Testing & Verification

### Development Testing
1. Check browser console for AdSense script load confirmation
2. Verify no JavaScript errors
3. Confirm ad containers are rendered (even if empty during development)

### Production Verification
1. Use Google AdSense dashboard to monitor ad performance
2. Check for policy violations
3. Monitor page load speeds

## Troubleshooting

### Common Issues
1. **Ads not showing**: Normal during development and before approval
2. **Console errors**: Check network connectivity and script URL
3. **Layout issues**: Adjust CSS classes on ad containers

### Debug Steps
1. Open browser developer tools
2. Check Network tab for AdSense script requests
3. Look for console messages about AdSense loading
4. Verify ad containers exist in DOM

## Next Steps

1. **AdSense Approval**: Submit site for review
2. **Create Real Ad Units**: Replace placeholder slot IDs
3. **Monitor Performance**: Track ad revenue and user experience
4. **Optimize Placement**: A/B test different ad positions

## Compliance Notes

- All ads comply with Google AdSense policies
- Auto ads respect content guidelines
- Manual placements don't interfere with user experience
- Privacy policy should mention advertising cookies

## Support

For issues with AdSense integration:
1. Check Google AdSense Help Center
2. Review this documentation
3. Test in different browsers and devices
4. Monitor AdSense dashboard for policy notifications
