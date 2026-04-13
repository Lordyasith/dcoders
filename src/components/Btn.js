import { useState } from 'react';

export default function Btn({ children, primary, sm, onClick, style = {}, disabled, type = 'button' }) {
  const [press, setPress] = useState(false);
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      onMouseLeave={() => setPress(false)}
      style={{
        background: primary
          ? 'linear-gradient(135deg,#38bdf8 0%,#0ea5e9 45%,#2563eb 100%)'
          : 'rgba(255,255,255,0.06)',
        color: '#fff',
        border: primary ? 'none' : '1px solid rgba(255,255,255,0.14)',
        borderRadius: 12,
        padding: sm ? '9px 20px' : '13px 30px',
        fontSize: sm ? 13 : 15,
        fontWeight: 700,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        letterSpacing: '0.02em',
        fontFamily: 'inherit',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        boxShadow: primary
          ? press
            ? '0 2px 12px rgba(56,189,248,0.25)'
            : '0 8px 32px rgba(56,189,248,0.40), 0 2px 8px rgba(0,0,0,0.25)'
          : '0 4px 20px rgba(0,0,0,0.20)',
        transform: press ? 'scale(0.95) translateY(2px)' : 'scale(1)',
        transition: 'all 0.18s ease',
        backdropFilter: primary ? 'none' : 'blur(10px)',
        ...style,
      }}
    >
      {children}
    </button>
  );
}
