import React from 'react';
import { KLLogo } from './KLLogo';
import { AngkorSilhouette } from './AngkorSilhouette';

interface SplashScreenProps {
  onProceed?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onProceed }) => {
  return (
    <div 
      onClick={onProceed}
      className="relative flex flex-col justify-between items-center min-h-full h-full bg-gradient-to-b from-[#0e0e13] via-[#0b0b0e] to-[#120f0a] text-slate-100 overflow-hidden cursor-pointer select-none p-6"
    >
      {/* Top ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Spacer */}
      <div className="h-10"></div>

      {/* Center Logo & Title */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-5">
        <KLLogo size="lg" showText={true} />

        {/* Shimmering Circular Loader */}
        <div className="pt-4 flex items-center justify-center">
          <div className="w-9 h-9 rounded-full border-2 border-amber-900/40 border-t-amber-400 animate-spin"></div>
        </div>

        <p className="text-xs text-amber-200/60 font-medium tracking-wide">
          កំពុងដំណើរការ...
        </p>
      </div>

      {/* Golden Angkor Wat Silhouette at bottom */}
      <div className="relative z-10 w-full max-w-sm mt-auto">
        <AngkorSilhouette opacity={0.8} />
      </div>
    </div>
  );
};
