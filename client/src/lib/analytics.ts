// Google Analytics 4 integration
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function initGA() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (!measurementId) {
    console.warn('GA Measurement ID not found');
    return;
  }

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(...args: any[]) {
    window.dataLayer!.push(args);
  };

  // Configure GA
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    page_title: document.title,
    page_location: window.location.href,
  });
}

export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (window.gtag) {
    window.gtag('event', eventName, parameters);
  }
}

export function trackPageView(pagePath: string, pageTitle?: string) {
  if (window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
  }
}