import { useState } from 'react';

export default function GlassCard({ children, style = {}, noHover, glow }) {
  const [hov, setHov] = useState(false);
  const glowColor = glow || '#38bdf8';
  return (
    <div
      onMouseEnter={() => !noHover && setHov(true)}
      onMouseLeave={() => !noHover && setHov(false)}
      style={{
        background: 'rgba(255,255,255,0.035)',
        border: hov && glow ? `1px solid ${glowColor}55` : '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        borderRadius: 24,
        boxShadow: hov
          ? `0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px ${glowColor}33, inset 0 1px 0 rgba(255,255,255,0.10)`
          : '0 8px 40px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.05)',
        transform: hov && !noHover ? 'translateY(-8px) scale(1.015)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
