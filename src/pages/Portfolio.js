import { useState } from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import GradientText from '../components/GradientText';
import Btn from '../components/Btn';
import { PROJECTS } from '../tokens';
import styles from './Portfolio.module.css';

const CATS = ['All', 'Web App', 'Mobile App', 'E-Commerce', 'AI & Automation', 'Cloud & DevOps'];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.label}>Our Work</div>
        <h1 className={styles.h1}>Featured <GradientText>Projects</GradientText></h1>
        <p className={styles.sub}>Real products, real impact. A selection of work we're proud of.</p>
      </div>

      {/* Filter pills */}
      <div className={styles.filters}>
        {CATS.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`${styles.pill} ${filter === c ? styles.pillActive : ''}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map(p => (
          <GlassCard key={p.title} glow={p.color} style={{ padding: '32px 28px' }}>
            <div className={styles.cardTop}>
              <span
                className={styles.catBadge}
                style={{ background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}33` }}
              >
                {p.category}
              </span>
              <span className={styles.year}>{p.year}</span>
            </div>
            <div
              className={styles.divider}
              style={{ background: `linear-gradient(90deg,${p.color},transparent)` }}
            />
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardDesc}>{p.desc}</p>
            <div className={styles.tags}>
              {p.tags.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className={styles.empty}>No projects in this category yet.</div>
      )}

      <div className={styles.cta}>
        <Link to="/contact"><Btn primary>Build Your Project ↗</Btn></Link>
      </div>
    </div>
  );
}
