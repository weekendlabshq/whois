import React from 'react';
import '../styles/style.scss';
import { GoogleAnalytics } from "nextjs-google-analytics";
import { GoogleAdSense } from "nextjs-google-adsense";

interface WHOISProps {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}

const WHOIS: React.FC<WHOISProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAnalytics />
      <GoogleAdSense publisherId="pub-4778248135015291" />
      <Component {...pageProps} />
    </>
  );
};

export default WHOIS;