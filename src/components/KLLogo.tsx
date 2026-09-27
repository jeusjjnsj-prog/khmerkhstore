import React from 'react';

interface KLLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  layout?: 'vertical' | 'horizontal';
  className?: string;
}

export const KLLogo: React.FC<KLLogoProps> = ({
  size = 'md',
  showText = true,
  layout = 'vertical',
  className = '',
}) => {
  const iconSizes = {
    xs: 'w-8 h-8',
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
  };

  const titleSizes = {
    xs: 'text-sm',
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const subtitleSizes = {
    xs: 'text-[9px]',
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  return (
    <div
      className={`flex items-center ${
        layout === 'vertical' ? 'flex-col justify-center text-center' : 'flex-row gap-3'
      } ${className}`}
    >
      {/* Golden Crest Emblem */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center select-none`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(234,179,8,0.45)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="35%" stopColor="#F59E0B" />
              <stop offset="70%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
            <linearGradient id="crestGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#B45309" stopOpacity="0.4" />
            </linearGradient>
            <filter id="goldShine" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#F59E0B" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Laurel Wreath Left */}
          <path
            d="M 28 72 C 14 62 12 40 22 28 C 24 35 27 42 32 46 C 26 40 24 32 25 24 C 20 34 19 50 29 65 Z"
            fill="url(#goldGradient)"
          />
          <path
            d="M 18 50 C 14 44 14 36 19 30 C 19 36 21 42 24 46 C 21 44 19 41 18 36 Z"
            fill="url(#goldGradient)"
          />
          <path
            d="M 22 66 C 18 60 17 52 21 44 C 22 51 25 56 29 60 Z"
            fill="url(#goldGradient)"
          />
          <path
            d="M 33 77 C 27 74 23 68 24 60 C 27 66 31 70 36 73 Z"
            fill="url(#goldGradient)"
          />

          {/* Laurel Wreath Right */}
          <path
            d="M 72 72 C 86 62 88 40 78 28 C 76 35 73 42 68 46 C 74 40 76 32 75 24 C 80 34 81 50 71 65 Z"
            fill="url(#goldGradient)"
          />
          <path
            d="M 82 50 C 86 44 86 36 81 30 C 81 36 79 42 76 46 C 79 44 81 41 82 36 Z"
            fill="url(#goldGradient)"
          />
          <path
            d="M 78 66 C 82 60 83 52 79 44 C 78 51 75 56 71 60 Z"
            fill="url(#goldGradient)"
          />
          <path
            d="M 67 77 C 73 74 77 68 76 60 C 73 66 69 70 64 73 Z"
            fill="url(#goldGradient)"
          />

          {/* Central Shield / Crest Outline */}
          <path
            d="M 32 34 Q 50 30 68 34 C 68 55 60 74 50 82 C 40 74 32 55 32 34 Z"
            stroke="url(#goldGradient)"
            strokeWidth="2.5"
            fill="#121216"
          />
          <path
            d="M 35 37 Q 50 33 65 37 C 65 53 58 69 50 76 C 42 69 35 53 35 37 Z"
            stroke="url(#goldGradient)"
            strokeWidth="1"
            fill="url(#crestGlow)"
            opacity="0.3"
          />

          {/* Mortarboard / Graduation Cap on top */}
          <polygon
            points="50,12 76,21 50,29 24,21"
            fill="url(#goldGradient)"
            filter="url(#goldShine)"
          />
          {/* Cap Base */}
          <path
            d="M 36 24 C 36 28 42 32 50 32 C 58 32 64 28 64 24"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            fill="none"
          />
          {/* Tassel */}
          <path
            d="M 50 21 L 72 26 L 73 35"
            stroke="#FDE68A"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="73" cy="36" r="1.5" fill="#FBBF24" />

          {/* 'KL' Letters inside shield */}
          <text
            x="50"
            y="61"
            textAnchor="middle"
            fill="url(#goldGradient)"
            fontFamily="'Cinzel', 'Trajan Pro', 'Kantumruy Pro', Georgia, serif"
            fontWeight="bold"
            fontSize="23"
            letterSpacing="1"
            filter="url(#goldShine)"
          >
            KL
          </text>

          {/* Bottom tie ribbon */}
          <circle cx="50" cy="80" r="2.5" fill="url(#goldGradient)" />
        </svg>
      </div>

      {showText && (
        <div className={layout === 'vertical' ? 'mt-2 text-center' : 'text-left'}>
          <div
            className={`font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 drop-shadow-[0_2px_8px_rgba(245,158,11,0.3)] ${titleSizes[size]}`}
            style={{ fontFamily: "'Kantumruy Pro', sans-serif" }}
          >
            រៀនជាមួយ
          </div>
          <div
            className={`font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 ${subtitleSizes[size]}`}
            style={{ letterSpacing: '0.08em' }}
          >
            Khmer Learning
          </div>
        </div>
      )}
    </div>
  );
};
