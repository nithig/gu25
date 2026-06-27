export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 24" className={className} fill="none" aria-hidden>
      <line x1="0" y1="12" x2="92" y2="12" stroke="url(#og)" strokeWidth="1" />
      <line x1="148" y1="12" x2="240" y2="12" stroke="url(#og)" strokeWidth="1" />
      <g transform="translate(120 12)">
        <circle r="3" fill="#D4AF37" />
        <circle r="7" fill="none" stroke="#D4AF37" strokeWidth="0.7" />
        <path d="M-14 0 L-7 -4 L0 0 L7 -4 L14 0 L7 4 L0 0 L-7 4 Z" fill="none" stroke="#D4AF37" strokeWidth="0.7" />
      </g>
      <defs>
        <linearGradient id="og" x1="0" x2="1">
          <stop offset="0" stopColor="#D4AF37" stopOpacity="0" />
          <stop offset="1" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function GopuramSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 500" className={className} fill="none" aria-hidden>
      <defs>
        <linearGradient id="gop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D4AF37" stopOpacity="0.9" />
          <stop offset="1" stopColor="#D4AF37" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <g stroke="url(#gop)" strokeWidth="1" fill="none">
        <path d="M200 10 L210 35 L200 60 L190 35 Z" />
        <line x1="200" y1="60" x2="200" y2="85" />
        <path d="M170 85 H230 V100 H170 Z" />
        <path d="M150 100 L250 100 L240 140 L160 140 Z" />
        <path d="M140 140 L260 140 L250 195 L150 195 Z" />
        <path d="M125 195 L275 195 L262 260 L138 260 Z" />
        <path d="M105 260 L295 260 L280 335 L120 335 Z" />
        <path d="M85 335 L315 335 L300 420 L100 420 Z" />
        <rect x="80" y="420" width="240" height="70" />
        <rect x="180" y="430" width="40" height="60" />
        {/* fine carvings */}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={i} x1={120 + i * 30} y1={335} x2={120 + i * 30} y2={420} strokeOpacity="0.4" />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={`a${i}`} x1={138 + i * 30} y1={260} x2={138 + i * 30} y2={335} strokeOpacity="0.4" />
        ))}
      </g>
    </svg>
  );
}

export function LotusIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <g stroke="#D4AF37" strokeWidth="0.8" fill="none">
        <path d="M32 50 C18 42 12 32 12 24 C18 28 26 30 32 30 C38 30 46 28 52 24 C52 32 46 42 32 50Z" />
        <path d="M32 50 C24 38 24 26 32 14 C40 26 40 38 32 50Z" />
        <path d="M32 50 C22 44 16 34 16 22 C24 30 30 36 32 50Z" />
        <path d="M32 50 C42 44 48 34 48 22 C40 30 34 36 32 50Z" />
      </g>
    </svg>
  );
}
