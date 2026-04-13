import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollY } from '../hooks/useScrollY';
import Logo from './Logo';
import Btn from './Btn';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Home',      path: '/' },
  { label: 'Services',  path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About',     path: '/about' },
  { label: 'Contact',   path: '/contact' },
];

function Hamburger({ open, onClick }) {
  return (
    <button className={styles.hamburger} onClick={onClick} aria-label="Toggle menu">
      <span className={`${styles.bar} ${open ? styles.bar1Open : ''}`} />
      <span className={`${styles.bar} ${open ? styles.bar2Open : ''}`} />
      <span className={`${styles.bar} ${open ? styles.bar3Open : ''}`} />
    </button>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const y = useScrollY();
  const loc = useLocation();
  const scrolled = y > 40;

  useEffect(() => { setMenuOpen(false); }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <Link to="/" className={styles.brand}>
          <Logo size={38} />
          <div>
            <div className={styles.brandName}>Dcoders</div>
            <div className={styles.brandSub}>Software Solutions</div>
          </div>
        </Link>

        <div className={styles.desktopLinks}>
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`${styles.link} ${loc.pathname === path ? styles.active : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className={styles.desktopCta}>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Btn primary sm>Get a Quote ↗</Btn>
          </Link>
        </div>

        <Hamburger open={menuOpen} onClick={() => setMenuOpen(o => !o)} />
      </nav>

      <div
        className={`${styles.backdrop} ${menuOpen ? styles.backdropVisible : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerInner}>
          <Link to="/" className={styles.drawerBrand} onClick={() => setMenuOpen(false)}>
            <Logo size={32} />
            <div>
              <div className={styles.brandName}>Dcoders</div>
              <div className={styles.brandSub}>Software Solutions</div>
            </div>
          </Link>

          <div className={styles.drawerDivider} />

          <nav className={styles.drawerLinks}>
            {NAV_LINKS.map(({ label, path }, i) => (
              <Link
                key={path}
                to={path}
                className={`${styles.drawerLink} ${loc.pathname === path ? styles.drawerLinkActive : ''}`}
                style={{ animationDelay: menuOpen ? `${i * 0.06}s` : '0s' }}
              >
                <span className={styles.drawerLinkNum}>0{i + 1}</span>
                {label}
                {loc.pathname === path && <span className={styles.drawerActiveDot} />}
              </Link>
            ))}
          </nav>

          <div className={styles.drawerDivider} />

          <div className={styles.drawerCta}>
            <Link to="/contact" style={{ textDecoration: 'none', display: 'block' }} onClick={() => setMenuOpen(false)}>
              <Btn primary style={{ width: '100%', justifyContent: 'center' }}>
                Get a Free Quote ↗
              </Btn>
            </Link>
            <div className={styles.drawerContact}>
              <a href="mailto:hello@dcoders.lk" className={styles.drawerContactLink}>hello@dcoders.lk</a>
              <span className={styles.drawerContactSep}>·</span>
              <a href="tel:+94112345678" className={styles.drawerContactLink}>+94 11 234 5678</a>
            </div>
          </div>

          <div className={styles.drawerOrb} />
        </div>
      </div>
    </>
  );
}
