'use client';

import React from 'react';

/**
 * BrandIcon component: Renders the stylized 'X' logo with gradients,
 * circuit board patterns, and an upward-right arrow.
 */
export const BrandIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 48,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-transform duration-300 hover:scale-105`}
    >
      <defs>
        {/* Main futuristic cyan-to-blue gradient */}
        <linearGradient id="brandXGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0B1C41" />
          <stop offset="40%" stopColor="#005AEE" />
          <stop offset="80%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#29FFFF" />
        </linearGradient>

        {/* Glow effect filter */}
        <filter id="neonGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main Back-slash Left Prong (\) */}
      <path
        d="M28 24 C28 20, 36 20, 42 26 L94 102 C100 108, 92 108, 86 102 L34 26 C31 22, 28 24, 28 24 Z"
        fill="url(#brandXGradient)"
        opacity="0.8"
      />

      {/* Circuit lines on the Back-slash */}
      <path
        d="M38 32 L80 94"
        stroke="#00D4FF"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.9"
      />
      <rect x="79" y="93" width="4" height="4" fill="#29FFFF" rx="1" />

      {/* Main Fore-slash Right Prong (/) with Arrow direction */}
      {/* Starting from bottom-left (28, 104) going to top-right (100, 24) */}
      <path
        d="M32 104 C26 110, 20 102, 26 96 L86 36 L100 24 L102 38 L92 48 L32 104 Z"
        fill="url(#brandXGradient)"
      />

      {/* Arrow Head at top right */}
      <path
        d="M102 20 L104 46 L94 40 L80 48 L76 34 L90 26 Z"
        fill="url(#brandXGradient)"
        filter="url(#neonGlow)"
      />

      {/* Arrow tip glow accent */}
      <path
        d="M100 20 L103 23 L90 28 L91 25 Z"
        fill="#29FFFF"
      />

      {/* Circuit track running up-right */}
      <path
        d="M34 88 L52 70 L74 70 L92 52"
        stroke="#29FFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Decorative Node dots */}
      <circle cx="34" cy="88" r="3.5" fill="#00D4FF" />
      <circle cx="52" cy="70" r="3" fill="#29FFFF" />
      <rect x="71" y="68" width="5" height="5" fill="#005AEE" rx="1" stroke="#29FFFF" strokeWidth="1" />
      <circle cx="92" cy="52" r="3.5" fill="#29FFFF" />
    </svg>
  );
};

interface LogoProps {
  showTagline?: boolean;
  size?: number;
  light?: boolean;
}

/**
 * Logo component: Combines BrandIcon with high fidelity Typography.
 */
export const Logo: React.FC<LogoProps> = ({
  showTagline = true,
  size = 40,
  light = false,
}) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <BrandIcon size={size} />
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline">
          <span
            className={`font-sans font-extrabold text-2xl tracking-tight leading-none ${
              light ? 'text-white' : 'text-[#0A2540]'
            }`}
          >
            NATTON
          </span>
          <span className="font-sans font-normal text-2xl tracking-normal leading-none ml-1.5 text-blue-600">
            Skill
          </span>
          <span className="font-sans font-black text-2xl tracking-tighter leading-none text-cyan-500">
            X
          </span>
        </div>
        {showTagline && (
          <span
            className={`font-sans font-bold text-[8px] tracking-[0.2em] mt-1 leading-none ${
              light ? 'text-slate-300' : 'text-[#0A2540]'
            }`}
          >
            FUTURE SKILLS. AI. GROWTH.
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
