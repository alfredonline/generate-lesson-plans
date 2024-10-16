"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies. For more information, please read our{' '}
          <Link href="/privacy" className="underline hover:text-primary">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="/terms" className="underline hover:text-primary">
            Terms of Service
          </Link>
          .
        </p>
        <Button onClick={acceptCookies} className="whitespace-nowrap">
          Accept Cookies
        </Button>
      </div>
    </div>
  );
}