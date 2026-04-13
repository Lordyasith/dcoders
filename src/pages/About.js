import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import GradientText from '../components/GradientText';
import AnimCounter from '../components/AnimCounter';
import Btn from '../components/Btn';
import { useInView } from '../hooks/useInView';
import { C, STATS, TEAM } from '../tokens';
import styles from './About.module.css';

const VALUES = [
  'Radical transparency — no hidden costs or surprises',
  'Quality over speed — but we are fast anyway',
  'Long-term partnerships over one-off projects',
  'Documentation and knowledge transfer always included',
];

export default function About() {
  const [statsRef, statsVis] = useInView();

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.label}>Our Story</div>
        <h1 className={styles.h1}>
          Built by builders,<br />for <GradientText>builders</GradientText>
        </h1>
        <p className={styles.sub}>
          Dcoders was founded in 2018 by a group of engineers who were tired of cookie-cutter software.
          We set out to build a studio that treats every project like it's our own startup.
        </p>
      </div>

      {/* Mission + Values */}
      <GlassCard noHover style={{ padding: '48px 56px', marginBottom: 24, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -60, top: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle,rgba(56,189,248,0.07),transparent)', pointerEvents: 'none' }} />
        <div className={styles.missionGrid}>
          <div>
            <div className={styles.missionLabel} style={{ color: C.cyan }}>Our Mission</div>
            <h3 className={styles.missionTitle}>Ship software that actually matters</h3>
            <p className={styles.missionText}>
              We believe technology should solve real human problems. Every line of code we write is in service of
              making someone's work, life, or business measurably better. We obsess over craft — performance,
              accessibility, security, and beauty all matter equally.
            </p>
          </div>
          <div>
            <div className={styles.missionLabel} style={{ color: C.indigo }}>Our Values</div>
            <div className={styles.valuesList}>
              {VALUES.map((v, i) => (
                <div key={i} className={styles.valueItem}>
                  <div className={styles.valueDot} />
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Stats */}
      <div className={styles.statsGrid} ref={statsRef}>
        {STATS.map(s => (
          <GlassCard key={s.label} glow={C.cyan} style={{ padding: '32px 24px', textAlign: 'center' }}>
            <div className={styles.statNum}>
              <AnimCounter target={s.value} suffix={s.suffix} visible={statsVis} />
            </div>
            <div className={styles.statLabel}>{s.label}</div>
          </GlassCard>
        ))}
      </div>

      {/* Team */}
      <div className={styles.teamSection}>
        <div className={styles.teamHead}>
          <div className={styles.label}>The Team</div>
          <h2 className={styles.h2}>The people behind the <GradientText>magic</GradientText></h2>
        </div>
        <div className={styles.teamGrid}>
          {TEAM.map(m => (
            <GlassCard key={m.name} glow={m.color} style={{ padding: '32px 24px', textAlign: 'center' }}>
              <div
                className={styles.avatar}
                style={{
                  background: `linear-gradient(135deg,${m.color}44,${m.color}22)`,
                  border: `2px solid ${m.color}55`,
                  color: m.color,
                  boxShadow: `0 4px 20px ${m.color}33`,
                }}
              >
                {m.init}
              </div>
              <div className={styles.memberName}>{m.name}</div>
              <div className={styles.memberRole}>{m.role}</div>
            </GlassCard>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <Btn primary>Join Us or Work With Us ↗</Btn>
        </Link>
      </div>
    </div>
  );
}
