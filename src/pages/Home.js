import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import GradientText from '../components/GradientText';
import Btn from '../components/Btn';
import AnimCounter from '../components/AnimCounter';
import { useInView } from '../hooks/useInView';
import { C, STATS } from '../tokens';
import styles from './Home.module.css';

const HERO_CARDS = [
  { icon: '◈', title: 'Web Apps',   color: C.cyan,   sub: 'React · Next.js · Vue' },
  { icon: '◉', title: 'Mobile',     color: C.indigo, sub: 'iOS · Android · Flutter' },
  { icon: '◎', title: 'AI & ML',    color: C.green,  sub: 'LLMs · Automation' },
  { icon: '⬢', title: 'Cloud',      color: C.orange, sub: 'AWS · GCP · DevOps' },
];

const WHY_US = [
  { icon: '⚡', title: 'Lightning Fast Delivery',  desc: 'Agile sprints and clear milestones. Most projects launch within 8–12 weeks.', color: C.cyan },
  { icon: '🔒', title: 'Security First',            desc: 'OWASP-compliant code, penetration testing, and SOC2-ready infrastructure.',    color: C.indigo },
  { icon: '♾',  title: 'Ongoing Partnership',      desc: "We don't disappear post-launch. Long-term maintenance and scaling included.",  color: C.green },
];

export default function Home() {
  const [statsRef, statsVis] = useInView();

  return (
    <div>
      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroLeft}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Innovative Software Since 2018
          </div>

          <h1 className={styles.h1}>
            Building Digital<br />
            <GradientText>Solutions</GradientText><br />
            That Scale
          </h1>

          <p className={styles.heroSub}>
            We design and develop custom software, mobile apps, and web platforms
            that transform how businesses operate and grow globally.
          </p>

          <div className={styles.heroBtns}>
            <Link to="/contact"><Btn primary>Start a Project ↗</Btn></Link>
            <Link to="/portfolio"><Btn>View Our Work</Btn></Link>
          </div>

          {/* Stats */}
          <div className={styles.stats} ref={statsRef}>
            {STATS.map((s, i) => (
              <div key={s.label} className={styles.statItem} style={{ borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <div className={styles.statNum}>
                  <AnimCounter target={s.value} suffix={s.suffix} visible={statsVis} />
                </div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroRight}>
          {HERO_CARDS.map((card, i) => (
            <GlassCard key={card.title} glow={card.color} style={{ padding: '28px 22px', animationDelay: `${i * 0.12}s` }} >
              <div style={{ fontSize: 30, marginBottom: 14, color: card.color, filter: `drop-shadow(0 0 14px ${card.color}99)` }}>
                {card.icon}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 5 }}>{card.title}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)' }}>{card.sub}</div>
              <div style={{ marginTop: 16, height: 2, borderRadius: 2, background: `linear-gradient(90deg,${card.color},transparent)`, opacity: 0.55 }} />
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div className={styles.sectionLabel}>Why Dcoders</div>
          <h2 className={styles.h2}>What sets us <GradientText>apart</GradientText></h2>
        </div>
        <div className={styles.grid3}>
          {WHY_US.map(item => (
            <GlassCard key={item.title} glow={item.color} style={{ padding: '32px 28px' }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{item.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, color: item.color }}>{item.title}</div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.48)', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className={styles.ctaSection}>
        <GlassCard noHover style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(56,189,248,0.09),transparent)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div className={styles.ctaInner}>
            <div style={{ position: 'relative' }}>
              <h2 className={styles.ctaTitle}>
                Ready to build something <GradientText>remarkable?</GradientText>
              </h2>
              <p className={styles.ctaSub}>Let's turn your vision into a world-class product.</p>
            </div>
            <div className={styles.ctaBtns}>
              <Link to="/contact" style={{ textDecoration: 'none' }}><Btn primary>Start a Project ↗</Btn></Link>
              <Link to="/services" style={{ textDecoration: 'none' }}><Btn>Explore Services</Btn></Link>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
