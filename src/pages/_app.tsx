import React from 'react';
import '../styles/style.scss';
import { GoogleAnalytics } from "nextjs-google-analytics";


interface WHOISProps {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}

const WHOIS: React.FC<WHOISProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
};

export default WHOIS;