export default function Logo({ size = 40 }) {
  const h = Math.round(size * 0.8);
  return (
    <svg width={size} height={h} viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="42" height="60" rx="6" stroke="url(#logoGrad)" strokeWidth="4" fill="none" />
      <path d="M18 32L6 20L18 8"  stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M28 8L40 32L28 56" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M46 12C64 12 74 20 74 32C74 44 64 52 46 52" stroke="url(#logoGrad)" strokeWidth="5" strokeLinecap="round" fill="none" />
    </svg>
  );
}
