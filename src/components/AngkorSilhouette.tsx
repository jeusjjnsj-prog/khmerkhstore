import React from 'react';

interface AngkorSilhouetteProps {
  className?: string;
  opacity?: number;
}

export const AngkorSilhouette: React.FC<AngkorSilhouetteProps> = ({
  className = '',
  opacity = 0.55,
}) => {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none select-none ${className}`} style={{ opacity }}>
      <svg
        viewBox="0 0 800 240"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="angkorGold" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#F59E0B" stopOpacity="0.75" />
            <stop offset="85%" stopColor="#B45309" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1E1609" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="glowFloor" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0" />
            <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Shimmering particles in sky */}
        <circle cx="180" cy="50" r="1.5" fill="#FDE68A" opacity="0.8" />
        <circle cx="340" cy="30" r="1.2" fill="#FDE68A" opacity="0.6" />
        <circle cx="460" cy="40" r="1.8" fill="#FDE68A" opacity="0.7" />
        <circle cx="620" cy="65" r="1.5" fill="#FDE68A" opacity="0.5" />
        <circle cx="280" cy="80" r="1" fill="#FDE68A" opacity="0.4" />
        <circle cx="510" cy="75" r="1.3" fill="#FDE68A" opacity="0.6" />

        {/* Angkor Wat Central & Side Lotus Towers Silhouette */}
        {/* Central Lotus Tower */}
        <path
          d="M 390 220 L 390 120 C 390 100 395 65 398 40 C 399 22 401 22 402 40 C 405 65 410 100 410 120 L 410 220 Z"
          fill="url(#angkorGold)"
        />
        <path
          d="M 382 135 C 385 105 392 70 400 35 C 408 70 415 105 418 135 L 425 220 L 375 220 Z"
          fill="url(#angkorGold)"
        />

        {/* Left Towers */}
        <path
          d="M 330 220 L 330 135 C 330 115 336 85 342 62 C 344 50 346 50 347 62 C 352 85 358 115 358 135 L 358 220 Z"
          fill="url(#angkorGold)"
        />
        <path
          d="M 270 220 L 270 150 C 270 130 278 105 284 88 C 285 78 287 78 288 88 C 294 105 302 130 302 150 L 302 220 Z"
          fill="url(#angkorGold)"
        />

        {/* Right Towers */}
        <path
          d="M 442 220 L 442 135 C 442 115 448 85 454 62 C 456 50 458 50 459 62 C 465 85 471 115 471 135 L 471 220 Z"
          fill="url(#angkorGold)"
        />
        <path
          d="M 498 220 L 498 150 C 498 130 505 105 512 88 C 513 78 515 78 516 88 C 522 105 530 130 530 150 L 530 220 Z"
          fill="url(#angkorGold)"
        />

        {/* Galleries and tiered structures */}
        <path
          d="M 160 220 L 160 190 L 210 190 L 210 178 L 240 178 L 240 168 L 260 168 L 260 220 Z"
          fill="url(#angkorGold)"
        />
        <path
          d="M 540 220 L 540 168 L 560 168 L 560 178 L 590 178 L 590 190 L 640 190 L 640 220 Z"
          fill="url(#angkorGold)"
        />
        <rect x="220" y="180" width="360" height="40" fill="url(#angkorGold)" />
        <rect x="180" y="200" width="440" height="20" fill="url(#angkorGold)" />

        {/* Ground golden glow line */}
        <rect x="50" y="216" width="700" height="3" fill="url(#glowFloor)" />
      </svg>
    </div>
  );
};
