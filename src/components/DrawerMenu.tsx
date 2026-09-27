import React from 'react';
import { 
  User, 
  CreditCard, 
  Download, 
  Heart, 
  History, 
  Settings, 
  HelpCircle, 
  LogOut, 
  X, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { KLLogo } from './KLLogo';

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  onNavigateToTab: (tabId: string) => void;
}

export const DrawerMenu: React.FC<DrawerMenuProps> = ({
  isOpen,
  onClose,
  onLogout,
  onNavigateToTab,
}) => {
  if (!isOpen) return null;

  const menuItems = [
    { id: 'profile', titleKhmer: 'ព័ត៌មានផ្ទាល់ខ្លួន', icon: User, action: () => onNavigateToTab('profile') },
    { id: 'payment', titleKhmer: 'ការទូទាត់', icon: CreditCard, action: () => onNavigateToTab('profile') },
    { id: 'downloads', titleKhmer: 'មេរៀនដែលបានទាញយក', icon: Download, action: () => onNavigateToTab('lessons') },
    { id: 'favorites', titleKhmer: 'មេរៀនដែលបានពេញចិត្ត', icon: Heart, action: () => onNavigateToTab('lessons') },
    { id: 'history', titleKhmer: 'ប្រវត្តិសិក្សា', icon: History, action: () => onNavigateToTab('stats') },
    { id: 'settings', titleKhmer: 'ការកំណត់', icon: Settings, action: () => onNavigateToTab('profile') },
    { id: 'help', titleKhmer: 'ជំនួយ', icon: HelpCircle, action: () => onNavigateToTab('profile') },
  ];

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Content */}
      <div 
        id="side-drawer-menu"
        className="relative w-72 max-w-[85%] h-full bg-[#101015] border-r border-amber-500/30 flex flex-col justify-between shadow-2xl z-10 animate-slideRight"
      >
        {/* Drawer Header with KL Logo */}
        <div className="p-4 border-b border-zinc-800/80">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <KLLogo size="xs" showText={false} />
              <div>
                <h3 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
                  ម៉ឺនុយ
                </h3>
                <span className="text-[10px] text-zinc-400">Khmer Learning</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="បិទម៉ឺនុយ"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Menu Items matching Screen 5 */}
        <div className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  item.action();
                  onClose();
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#181822] text-zinc-300 hover:text-amber-300 transition-all text-left cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#1a1a24] flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Icon size={15} />
                  </div>
                  <span className="text-xs font-semibold">
                    {item.titleKhmer}
                  </span>
                </div>
                <ChevronRight size={15} className="text-zinc-600 group-hover:text-amber-400" />
              </button>
            );
          })}
        </div>

        {/* Logout button at bottom (Screen 5: ចាកចេញ with red text/icon) */}
        <div className="p-4 border-t border-zinc-800/80">
          <button
            onClick={() => {
              onLogout();
              onClose();
            }}
            className="w-full flex items-center justify-start gap-3 p-3 rounded-xl hover:bg-red-500/10 text-red-400 hover:text-red-300 transition-all text-xs font-bold cursor-pointer"
          >
            <div className="w-7 h-7 rounded-lg bg-red-950/40 border border-red-500/30 flex items-center justify-center text-red-400">
              <LogOut size={15} />
            </div>
            <span>ចាកចេញ</span>
          </button>
        </div>
      </div>
    </div>
  );
};
