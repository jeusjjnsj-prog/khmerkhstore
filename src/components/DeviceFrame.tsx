import React from 'react';

interface DeviceFrameProps {
  children: React.ReactNode;
  label?: string;
  className?: string;
  showPlatformBadge?: boolean;
  platformType?: 'android' | 'ios';
}

export const DeviceFrame: React.FC<DeviceFrameProps> = ({
  children,
  label,
  className = '',
  showPlatformBadge = false,
  platformType = 'android',
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Optional Platform Header (like in uploaded poster: 🤖 ANDROID / 🍏 iOS / iPHONE) */}
      {showPlatformBadge && (
        <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 mb-2 uppercase tracking-wider">
          {platformType === 'android' ? (
            <>
              <span>🤖</span>
              <span>ANDROID</span>
            </>
          ) : (
            <>
              <span>🍏</span>
              <span>iOS / iPHONE</span>
            </>
          )}
        </div>
      )}

      {/* Phone Body with strictly NO top clock / status bar */}
      <div className="relative w-[340px] sm:w-[360px] h-[720px] rounded-[42px] bg-[#0c0c10] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.85)] border-[5px] border-[#22222b] ring-1 ring-amber-500/30 flex flex-col overflow-hidden">
        {/* Hardware details: Sleek subtle camera punch-hole (strictly without clock text) */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center pointer-events-none">
          {platformType === 'android' ? (
            <div className="w-3.5 h-3.5 rounded-full bg-black/90 border border-zinc-800 shadow-xs"></div>
          ) : (
            <div className="w-24 h-5 rounded-full bg-black border border-zinc-900 shadow-xs"></div>
          )}
        </div>

        {/* Screen container */}
        <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-[#0b0b0e] flex flex-col">
          {/* Note: STRICTLY NO 12:30 or 9:41 clock bar! The screen content starts cleanly */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
            {children}
          </div>
        </div>

        {/* Bottom indicator home bar */}
        <div className="w-32 h-1 bg-zinc-600/60 rounded-full mx-auto mt-2 shrink-0"></div>
      </div>

      {label && (
        <span className="text-xs font-semibold text-zinc-400 mt-2.5">
          {label}
        </span>
      )}
    </div>
  );
};
