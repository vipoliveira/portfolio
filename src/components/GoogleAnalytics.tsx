import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
}

const GA_ID = import.meta.env.VITE_GA_ID;

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!GA_ID) {
      console.warn('Google Analytics ID not found. Analytics will not be tracked.');
      return;
    }

    // Initialize Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };

    // Track page views
    window.gtag('config', GA_ID, {
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