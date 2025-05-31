"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";

interface ConsentPreferences {
  essential: boolean;
  analytics: boolean;
  advertising: boolean;
  functional: boolean;
}

export function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    advertising: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made consent choices
    const consentGiven = localStorage.getItem('illuminews-consent');
    if (!consentGiven) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent = {
      essential: true,
      analytics: true,
      advertising: true,
      functional: true,
    };
    setPreferences(allConsent);
    saveConsent(allConsent);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const minimalConsent = {
      essential: true,
      analytics: false,
      advertising: false,
      functional: false,
    };
    setPreferences(minimalConsent);
    saveConsent(minimalConsent);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const saveConsent = (consent: ConsentPreferences) => {
    localStorage.setItem('illuminews-consent', JSON.stringify({
      ...consent,
      timestamp: new Date().toISOString(),
      version: '1.0'
    }));

    // Initialize Google Consent Mode v2
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': consent.analytics ? 'granted' : 'denied',
        'ad_storage': consent.advertising ? 'granted' : 'denied',
        'ad_user_data': consent.advertising ? 'granted' : 'denied',
        'ad_personalization': consent.advertising ? 'granted' : 'denied',
        'functionality_storage': consent.functional ? 'granted' : 'denied',
        'personalization_storage': consent.functional ? 'granted' : 'denied',
      });
    }
  };

  const updatePreference = (key: keyof ConsentPreferences, value: boolean) => {
    if (key === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur border-t">
      <div className="container mx-auto max-w-6xl">
        {!showPreferences ? (
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Cookie Consent</CardTitle>
              <CardDescription>
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  <Link href="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  {" • "}
                  <Link href="/cookies" className="text-primary hover:underline">
                    Cookie Policy
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowPreferences(true)}
                  >
                    Manage Preferences
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRejectAll}
                  >
                    Reject All
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleAcceptAll}
                  >
                    Accept All
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Cookie Preferences</CardTitle>
              <CardDescription>
                Choose which cookies you want to allow. You can change these settings at any time.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-medium">Essential Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Required for the website to function properly. Cannot be disabled.
                    </p>
                  </div>
                  <Switch checked={true} disabled />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-medium">Analytics Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => updatePreference('analytics', checked)}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-medium">Advertising Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Used to deliver personalized advertisements and measure ad performance.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.advertising}
                    onCheckedChange={(checked) => updatePreference('advertising', checked)}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-medium">Functional Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Enable enhanced functionality like chat widgets and social media features.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.functional}
                    onCheckedChange={(checked) => updatePreference('functional', checked)}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setShowPreferences(false)}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  onClick={handleSavePreferences}
                  className="flex-1"
                >
                  Save Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
