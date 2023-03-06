import React from 'react';
import '../styles/style.scss';

interface BickProps {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}

const Bick: React.FC<BickProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default Bick;