import React, { useState, FormEvent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from "next/script";
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';

export default function Home(): JSX.Element {
  const router = useRouter();
  const [domain, setDomain] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/whois/${domain}`);
  };

  return (
    <>
      <Head>
        <title>WHOIS API</title>
        <link rel="icon" href="./static/favicon.ico" />
        <meta
          name="description"
          content="Weekend Labs is a full-service software consultancy based in Boston."
        />
        <meta name="author" content="Weekend Labs" />
      </Head>
      <Header />
      <Layout>
        <section className="hero">
          <div className="container">
            <h1>WHOIS by Weekend Labs</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="Type in any domain name..."
              />
              <button type="submit">Search <span>WHOIS</span></button>
            </form>
          </div>
        </section>
        <section className='ad'>
          <div className='container'>
            <div className='ad__frame'>
              <Script id="Adsense-id" data-ad-client="ca-pub-4778248135015291"
                async strategy="afterInteractive"
                onError={(e) => { console.error('Script failed to load', e) }}
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4778248135015291"
              />
            </div>
          </div>
        </section>
      </Layout>
      <Footer />
    </>
  );
}
