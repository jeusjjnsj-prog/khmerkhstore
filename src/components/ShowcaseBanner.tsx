import React from 'react';
import { BookOpen, Video, Trophy, BarChart3, ArrowRight } from 'lucide-react';
import { KLLogo } from './KLLogo';

interface ShowcaseBannerProps {
  onExploreApp?: () => void;
}

export const ShowcaseBanner: React.FC<ShowcaseBannerProps> = ({ onExploreApp }) => {
  const features = [
    { label: 'មេរៀនដើម', icon: BookOpen },
    { label: 'វីដេអូបង្រៀន', icon: Video },
    { label: 'ការប្រកួតប្រជែង', icon: Trophy },
    { label: 'តាមដានលទ្ធផល', icon: BarChart3 },
  ];

  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-md">
      {/* Golden KL Logo and App Name */}
      <div className="space-y-2">
        <KLLogo size="lg" layout="horizontal" showText={true} />
        <p className="text-sm font-semibold text-amber-200/90 tracking-wide pt-2">
          វេទិកាសិក្សាដែលពេញនិយមរដ្ឋប្រយោជន៍
        </p>
      </div>

      {/* 4 Feature Circles in Gold border */}
      <div className="grid grid-cols-4 gap-3 py-2 w-full max-w-sm">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div key={idx} className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-12 h-12 rounded-full border-2 border-amber-500/80 bg-gradient-to-b from-[#1c1811] to-[#121217] flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.4)] transition-all">
                <Icon size={20} />
              </div>
              <span className="text-[11px] font-medium text-zinc-300 mt-1.5 line-clamp-1">
                {feat.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* App Stores Badges */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
        {/* Google Play */}
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-black border border-zinc-700 hover:border-amber-500/50 transition-colors shadow-md cursor-pointer select-none">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M3.6 1.8l10.9 10.9L3.6 23.6c-.4-.4-.6-.9-.6-1.5V2.9c0-.4.1-.8.6-1.1z"
            />
            <path
              fill="#FBBC04"
              d="M18.2 16.4l-3.7-3.7L3.6 1.8c.4-.4 1-.4 1.5-.1l13.1 7.4c1 .6 1 1.5 0 2.1l-.8.5z"
            />
            <path
              fill="#EA4335"
              d="M3.6 23.6l10.9-10.9 3.7 3.7-13.1 7.4c-.5.3-1.1.2-1.5-.2z"
            />
            <path
              fill="#34A853"
              d="M21.5 12.1c.4-.4.4-1.2 0-1.6l-2.5-1.4-3.7 3.7 3.7 3.7 2.5-1.4c.4-.4.4-1.2 0-1.6z"
            />
          </svg>
          <div className="text-left leading-tight">
            <span className="block text-[8px] uppercase tracking-wider text-zinc-400 font-sans">
              GET IT ON
            </span>
            <span className="block text-xs font-bold text-white font-sans">
              Google Play
            </span>
          </div>
        </div>

        {/* App Store */}
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-black border border-zinc-700 hover:border-amber-500/50 transition-colors shadow-md cursor-pointer select-none">
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.65-.79 1.1-1.88.98-2.97-.95.04-2.07.63-2.73 1.41-.58.67-1.09 1.77-.96 2.84 1.05.08 2.11-.54 2.71-1.28z" />
          </svg>
          <div className="text-left leading-tight">
            <span className="block text-[8px] uppercase tracking-wider text-zinc-400 font-sans">
              Download on the
            </span>
            <span className="block text-xs font-bold text-white font-sans">
              App Store
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
