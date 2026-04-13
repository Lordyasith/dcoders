import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import GradientText from '../components/GradientText';
import Btn from '../components/Btn';
import { SERVICES_ALL } from '../tokens';
import styles from './Services.module.css';

export default function Services() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.label}>What We Build</div>
        <h1 className={styles.h1}>Our <GradientText>Services</GradientText></h1>
        <p className={styles.sub}>
          End-to-end digital solutions crafted with precision — from idea to launch and beyond.
        </p>
      </div>

      <div className={styles.grid}>
        {SERVICES_ALL.map(s => (
          <GlassCard key={s.title} glow={s.color} style={{ padding: '36px 32px' }}>
            <div className={styles.cardInner}>
              <div
                className={styles.iconBox}
                style={{
                  background: `${s.color}18`,
                  border: `1px solid ${s.color}33`,
                  boxShadow: `0 4px 24px ${s.color}22`,
                  color: s.color,
                }}
              >
                {s.icon}
              </div>
              <div>
                <div className={styles.cardTitle} style={{ color: s.color }}>{s.title}</div>
                <p className={styles.cardDesc}>{s.desc}</p>
                <div className={styles.tags}>
                  {s.tags.map(t => (
                    <span
                      key={t}
                      className={styles.tag}
                      style={{ background: `${s.color}15`, color: s.color, border: `1px solid ${s.color}30` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className={styles.cta}>
        <p className={styles.ctaText}>Have a project in mind? Let's talk.</p>
        <Link to="/contact">
          <Btn primary>Get a Free Consultation ↗</Btn>
        </Link>
      </div>
    </div>
  );
}
