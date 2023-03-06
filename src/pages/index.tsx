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
            <h1>WHOIS by <br className='no-desktop' /> Weekend Labs</h1>
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
        <section className='about'>
          <div className='container'>
            <h1>What is WHOIS?</h1>
            <p>WHOIS is a protocol that provides information about domain names, IP addresses, and other resources registered with the Internet Assigned Numbers Authority (IANA). It is a public database that stores information about domain name registrants, such as their name, address, email, phone number, and other relevant information.</p>
            <p>The WHOIS protocol is used to query this database and retrieve information about a domain name, including its registration and expiration date, registrar information, and name servers. This information is helpful for website owners, domain buyers and sellers, and law enforcement agencies.</p>
            <p>While the WHOIS database is publicly accessible, some registrars and domain privacy services may provide a way to hide the registrant's personal information from public view. In general, domain registrars are required to collect and maintain accurate and up-to-date WHOIS information for their customers.</p>
          </div>
        </section>
      </Layout>
      <Footer />
    </>
  );
}
