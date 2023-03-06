import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <ul className="footer__list">
                    <li className="footer__list__item">
                        <Link href="/" className="footer__list__link">
                            WHOIS Search
                        </Link>
                    </li>
                    <li className="footer__list__item">
                        <Link href="#" className="footer__list__link disabled">
                            API
                        </Link>
                    </li>
                    <li className="footer__list__item">
                        <Link href="#" className="footer__list__link disabled">
                            Docs
                        </Link>
                    </li>
                    <li className="footer__list__item">
                        <Link href="/changelog" className="footer__list__link">
                            Changelog
                        </Link>
                    </li>
                    <li className="footer__list__item">
                        <Link href="mailto:whois@weekendlabs.net?subject=WHOIS" className="footer__list__link">
                            Support
                        </Link>
                    </li>
                    <li className="footer__list__item footer__list__social footer__list__social-margin">
                        <Link href="https://github.com/weekendlabsllc/whois" className="footer__list__link" target="_blank" rel="nofollow">
                            <FaGithub />
                        </Link>
                    </li>
                    <li className="footer__list__item footer__list__social">
                        <Link href="https://twitter.com/weekendlabsllc" className="footer__list__link" target="_blank" rel="nofollow">
                            <FaTwitter />
                        </Link>
                    </li>
                </ul>
                <span>
                    Copyright &copy; {(new Date().getFullYear())} <Link href="https://weekendlabs.net" target="_blank" rel="nofollow">Weekend Labs</Link>. All Rights Reserved. Made with ❤️ and ☕ in Boston.
                </span>
            </div>
        </footer>
    )
}