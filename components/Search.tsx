import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';

export default function Search() {
    const router = useRouter();
    const [domain, setDomain] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/whois/${domain}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="Type in any domain name to get WHOIS information..."
            />
            <button type="submit">Search <span>WHOIS</span></button>
        </form>
    );
}