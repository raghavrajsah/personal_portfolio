import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { trackPageView } from '@/lib/analytics';

export function useAnalytics() {
  const [location] = useLocation();

  useEffect(() => {
    // Track page views when location changes
    if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
      trackPageView(location);
    }
  }, [location]);
}