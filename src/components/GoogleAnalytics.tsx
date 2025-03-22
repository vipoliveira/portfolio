import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
}

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`; // Replace with your GA4 measurement ID
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };

    // Track page views
    window.gtag('config', 'G-XXXXXXXXXX', { // Replace with your GA4 measurement ID
      page_path: location.pathname,
      send_page_view: true
    });

    return () => {
      document.head.removeChild(script);
    };
  }, [location]);

  return null;
};

export default GoogleAnalytics; 