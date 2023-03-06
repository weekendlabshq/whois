import React, { useState, FormEvent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from "next/script";
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';

export default function Changelog(): JSX.Element {
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
                        <h1>Changelog</h1>
                    </div>
                </section>
                <section className="changelog">
                    <div className="container">
                    <div className="changelog__item">
                            <h1>v1.0.1</h1>
                            <time>Mar 7, 2023</time>
                            <p>We have some quick updates for the latest version.</p>
                            <ul>
                                <li>
                                    Added light mode option
                                </li>
                            </ul>
                        </div>
                        <div className="changelog__item">
                            <h1>v1.0</h1>
                            <time>Mar 5, 2023</time>
                            <p>🎉 We have launched ImpossibleChess.com</p>
                        </div>
                    </div>
                </section>
            </Layout>
            <Footer />
        </>
    );
}
