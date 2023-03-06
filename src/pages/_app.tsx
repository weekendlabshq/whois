import React from 'react';
import '../styles/style.scss';
import Script from 'next/script'

interface BickProps {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}

const Bick: React.FC<BickProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y807Z4DEK2', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default Bick;