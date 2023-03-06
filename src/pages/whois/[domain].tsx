import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/router";
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { IoSearchSharp } from "react-icons/io5";

export default function Whois(): JSX.Element {
    const router = useRouter();
    const { domain } = router.query;
    const [domainValue, setDomainValue] = useState<string>('');
    const [whoisData, setWhoisData] = useState<any[]>([]);
    const [searchAttempts, setSearchAttempts] = useState<number>(0);
    const [lastAttemptTime, setLastAttemptTime] = useState<number>(0);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,60}[a-zA-Z0-9]?\.[a-zA-Z]{2,}$/;
        const now = Date.now();
        if (searchAttempts >= 3 && now - lastAttemptTime < 5000) {
            alert('Wow hold on there, slow it down. You have triggered the search too quickly.');
            return;
        }
        if (domainRegex.test(domainValue)) {
            router.push(`/whois/${domainValue}`);
            setSearchAttempts(searchAttempts + 1);
            setLastAttemptTime(now);
            if (searchAttempts >= 2) {
                setIsButtonDisabled(true);
            }
        } else {
            alert("That is not a valid domain name.")
        }
    };

    useEffect(() => {
        const fetchWhoisData = async () => {
            const res = await fetch(`/api/whois?domain=${domain}`);
            const data = await res.json();
            setWhoisData(Object.entries(data));
        };

        if (domain) {
            fetchWhoisData();
        }
    }, [domain]);

    const renderKeyValue = (key: string, value: string) => (
        <li key={key}>
            <strong>{key === "domainName" ? "Domain Name" : key === "registryDomainId" ? "Registry Domain ID" : key === "registrarWhoisServer" ? "Registry WHOIS Server" : key === "registrarUrl" ? "Registrar URL" : key === "updatedDate" ? "Updated Date" : key === "creationDate" ? "Creation Date" : key === "registrarRegistrationExpirationDate" ? "Expiration Date" : key === "registrar" ? "Registrar" : key === "registrarIanaId" ? "Registrar IANA ID" : key === "registrarAbuseContactEmail" ? "Registrar Abuse Email" : key === "registrarAbuseContactPhone" ? "Registrar Abuse Phone" : key === "reseller" ? "Reseller" : key === "domainStatus" ? "Domain Status" : key === "registrantName" ? "Registrant Name" : key === "registrantOrganization" ? "Registrant Organization" : key === "registrantStreet" ? "Registrant Address 1" : key === "registrantCity" ? "Registrant City" : key === "registrantStateProvince" ? "Registrant State / Province" : key === "registrantPostalCode" ? "Registrant Zip Code" : key === "registrantCountry" ? "Registrant Country" : key === "registrantPhone" ? "Registrant Phone" : key === "registrantEmail" ? "Registrant Email" : key === "adminName" ? "Admin Name" : key === "adminOrganization" ? "Admin Organization" : key === "adminStreet" ? "Admin Address 1" : key === "adminCity" ? "Admin City" : key === "adminStateProvince" ? "Admin State / Province" : key === "adminCountry" ? "Admin Country" : key === "adminPostalCode" ? "Admin Zip Code" : key === "adminPhone" ? "Admin Phone" : key === "adminEmail" ? "Admin Email" : key === "techName" ? "Tech Name" : key === "techOrganization" ? "Tech Organization" : key === "techStreet" ? "Tech Address 1" : key === "techCity" ? "Tech City" : key === "techStateProvince" ? "Tech State / Province" : key === "techPostalCode" ? "Tech Zip Code" : key === "techCountry" ? "Tech Country" : key === "techPhone" ? "Tech Phone" : key === "techEmail" ? "Tech Email" : key === "nameServer" ? "Nameservers" : key === "dnssec" ? "DNSSEC" : key === "urlOfTheIcannWhoisDataProblemReportingSystem" ? "ICANN WHOIS Data Problem Report URL" : key === "lastUpdateOfWhoisDatabase" ? "Last WHOIS Database Update" : key}: </strong>
            {value}
        </li>
    );
    return (
        <>
            <Head>
                <title>{domain} – WHOIS by Weekend</title>
                <link rel="icon" href="./static/favicon.ico" />
                <meta name="description" content="WHOIS by Weekend Labs" />
                <meta name="author" content="Weekend Labs" />
            </Head>
            <Header />
            <Layout>
                <section className="hero">
                    <div className="container">
                        <h1>{domain}<Link href={`https://${domain}`} target="_blank" rel="nofollow noreferrer" className="external"></Link></h1>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={domainValue}
                                onChange={(e) => setDomainValue(e.target.value)}
                                placeholder="Type in any domain name..."
                            />
                            <button type="submit"><IoSearchSharp />&nbsp;Search&nbsp;<span>WHOIS</span></button>
                        </form>
                    </div>
                </section>
                <section className="whois">
                    <div className="container">
                        {whoisData.length > 0 ? (
                            <ul>
                                {whoisData.map(([key, value]) => renderKeyValue(key, value))}
                            </ul>
                        ) : (
                            <div>Loading...</div>
                        )}
                    </div>
                </section>
            </Layout>
            <Footer />
        </>
    );
}
