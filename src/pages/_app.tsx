// Import React and other dependencies
import React from 'react';
import '../styles/style.scss';

// Import the required Next.js modules
import { GoogleAnalytics } from "nextjs-google-analytics";
import { GoogleAdSense } from "nextjs-google-adsense";

// Define the props for the WHOIS component
interface WHOISProps {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}

// Define the WHOIS component as a functional component
const WHOIS: React.FC<WHOISProps> = ({ Component, pageProps }) => {
  return (
    // Render the Google Analytics and Google AdSense components, followed by the component passed as a prop
    <>
      <GoogleAnalytics />
      <GoogleAdSense publisherId="pub-4778248135015291" />
      <Component {...pageProps} />
    </>
  );
};

// Export the WHOIS component as the default export
export default WHOIS;
