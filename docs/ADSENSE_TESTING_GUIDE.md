# Google AdSense Testing Guide

## Quick Verification Checklist

### ✅ Integration Complete
- [x] AdSense script added to root layout
- [x] Auto ads enabled globally
- [x] Manual ad components created
- [x] Strategic ad placements implemented
- [x] Standalone HTML pages updated
- [x] Build successful without errors
- [x] Documentation created

### 🧪 Testing Steps

#### 1. Development Server Test
```bash
npm run dev
```
- Open http://localhost:3000
- Check browser console for any errors
- Verify page loads correctly

#### 2. Browser Developer Tools Check
1. Open DevTools (F12)
2. Go to Network tab
3. Refresh page
4. Look for requests to `pagead2.googlesyndication.com`
5. Check Console tab for any AdSense-related messages

#### 3. Page Source Verification
1. Right-click on any page → "View Page Source"
2. Search for "adsbygoogle" (Ctrl+F)
3. Confirm script is present in HTML

#### 4. Ad Container Verification
1. Open DevTools → Elements tab
2. Search for elements with class "adsbygoogle"
3. Verify ad containers exist (even if empty during development)

### 📍 Ad Placement Locations

#### Homepage (/)
- **Top Banner**: After hero section
- **Middle Banner**: Between featured and recent articles

#### Article Pages (/article/*)
- **Top Banner**: After introduction
- **In-Article Ads**: Every 2nd section
- **Bottom Banner**: Before author bio

#### Standalone HTML Pages
- **Auto Ads**: Script in head section

### 🔧 Troubleshooting

#### Common Issues During Development

**Issue**: Ads not showing
- **Solution**: Normal behavior during development
- **Note**: Ads only show after AdSense approval

**Issue**: Console errors about adsbygoogle
- **Solution**: Check network connectivity
- **Note**: May occur if AdSense servers are unreachable

**Issue**: Layout shifts
- **Solution**: Add CSS to ad containers for consistent spacing
- **Note**: Auto ads handle this automatically

#### Production Issues

**Issue**: Ads still not showing after approval
- **Solution**: 
  1. Check AdSense dashboard for policy violations
  2. Verify ad slot IDs are correct
  3. Ensure site is added to AdSense account

**Issue**: Low ad fill rate
- **Solution**:
  1. Improve content quality
  2. Increase traffic
  3. Optimize ad placements

### 🚀 Next Steps After Testing

1. **Submit for AdSense Review**
   - Ensure content meets AdSense policies
   - Have sufficient high-quality content
   - Submit application through AdSense dashboard

2. **Create Real Ad Units**
   - Replace placeholder slot IDs with real ones
   - Configure ad sizes and types in AdSense dashboard
   - Test different ad formats

3. **Monitor Performance**
   - Track ad revenue in AdSense dashboard
   - Monitor page load speeds
   - Analyze user engagement metrics

4. **Optimize Placements**
   - A/B test different ad positions
   - Monitor click-through rates
   - Adjust based on performance data

### 📊 Performance Monitoring

#### Key Metrics to Track
- **Page Load Speed**: Ensure ads don't slow down site
- **Ad Viewability**: Percentage of ads actually seen
- **Click-Through Rate**: User engagement with ads
- **Revenue Per Visitor**: Overall monetization effectiveness

#### Tools for Monitoring
- Google AdSense Dashboard
- Google Analytics
- PageSpeed Insights
- Core Web Vitals

### 🔒 Compliance Notes

- Privacy policy updated to mention advertising cookies
- GDPR compliance for EU visitors
- AdSense policy compliance maintained
- User experience not compromised by ad placements

### 📞 Support Resources

- [Google AdSense Help Center](https://support.google.com/adsense)
- [AdSense Policies](https://support.google.com/adsense/answer/48182)
- [AdSense Implementation Guide](https://support.google.com/adsense/answer/181947)
- Project documentation: `docs/ADSENSE_INTEGRATION.md`

---

**Status**: ✅ AdSense integration complete and ready for production
**Last Updated**: $(date)
**Next Review**: After AdSense approval
