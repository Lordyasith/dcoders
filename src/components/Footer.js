import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const COLS = [
  {
    heading: 'Company',
    links: [
      { label: 'Home',      to: '/' },
      { label: 'About',     to: '/about' },
      { label: 'Portfolio', to: '/portfolio' },
      { label: 'Contact',   to: '/contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Web Applications', to: '/services' },
      { label: 'Mobile Apps',      to: '/services' },
      { label: 'Cloud & DevOps',   to: '/services' },
      { label: 'AI & Automation',  to: '/services' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'LinkedIn', href: 'https://linkedin.com' },
      { label: 'GitHub',   href: 'https://github.com' },
      { label: 'Twitter',  href: 'https://twitter.com' },
      { label: 'Dribbble', href: 'https://dribbble.com' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.brandRow}>
            <span className={styles.brandName}>Dcoders</span>
            <span className={styles.brandSub}>Software Solutions</span>
          </div>
          <p className={styles.tagline}>
            Crafting digital products that drive growth, trusted by teams across Sri Lanka and globally.
          </p>
          <div className={styles.copy}>© {new Date().getFullYear()} Dcoders Software Solutions. All rights reserved.</div>
        </div>

        {COLS.map(col => (
          <div key={col.heading} className={styles.col}>
            <div className={styles.colHeading}>{col.heading}</div>
            {col.links.map(l =>
              l.to ? (
                <Link key={l.label} to={l.to} className={styles.footLink}>{l.label}</Link>
              ) : (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={styles.footLink}>{l.label}</a>
              )
            )}
          </div>
        ))}
      </div>
    </footer>
  );
}
