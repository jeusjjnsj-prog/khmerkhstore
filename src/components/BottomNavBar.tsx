import React from 'react';
import { Home, BookOpen, Trophy, BarChart3, User } from 'lucide-react';
import { TabType } from '../types';

interface BottomNavBarProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, onSelectTab }) => {
  const tabs = [
    { id: 'home' as TabType, labelKhmer: 'ទីតាំងដើម', icon: Home },
    { id: 'lessons' as TabType, labelKhmer: 'មេរៀន', icon: BookOpen },
    { id: 'contests' as TabType, labelKhmer: 'ការប្រកួត', icon: Trophy },
    { id: 'stats' as TabType, labelKhmer: 'លទ្ធផល', icon: BarChart3 },
    { id: 'profile' as TabType, labelKhmer: 'គណនី', icon: User },
  ];

  return (
    <nav
      id="bottom-nav-bar"
      aria-label="Mobile Navigation"
      className="sticky bottom-0 left-0 right-0 z-30 bg-[#111114]/95 backdrop-blur-md border-t border-amber-900/30 px-2 py-2"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              id={`nav-btn-${tab.id}`}
              onClick={() => onSelectTab(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'text-amber-400 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <div className="relative">
                <Icon
                  size={20}
                  className={`transition-transform duration-200 ${
                    isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)] text-amber-400' : ''
                  }`}
                  strokeWidth={isActive ? 2.2 : 1.8}
                />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full shadow-[0_0_6px_#f59e0b]"></span>
                )}
              </div>
              <span className="text-[11px] mt-1 leading-tight tracking-tight whitespace-nowrap">
                {tab.labelKhmer}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
