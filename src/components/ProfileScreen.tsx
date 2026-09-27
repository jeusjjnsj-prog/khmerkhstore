import React, { useState } from 'react';
import { 
  User, 
  CreditCard, 
  Download, 
  History, 
  Settings, 
  HelpCircle, 
  Info, 
  ChevronRight,
  Crown,
  Heart,
  LogOut,
  Bell
} from 'lucide-react';
import { USER_PROFILE } from '../data/mockData';

interface ProfileScreenProps {
  onLogout: () => void;
  onOpenSettings?: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ onLogout }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const menuItems = [
    { id: 'personal', titleKhmer: 'ព័ត៌មានផ្ទាល់ខ្លួន', icon: User },
    { id: 'payment', titleKhmer: 'ការទូទាត់', icon: CreditCard },
    { id: 'downloads', titleKhmer: 'មេរៀនដែលបានទាញយក', icon: Download },
    { id: 'favorites', titleKhmer: 'មេរៀនដែលបានពេញចិត្ត', icon: Heart },
    { id: 'history', titleKhmer: 'ប្រវត្តិសិក្សា', icon: History },
    { id: 'settings', titleKhmer: 'ការកំណត់', icon: Settings },
    { id: 'help', titleKhmer: 'ជំនួយ', icon: HelpCircle },
    { id: 'about', titleKhmer: 'អំពីកម្មវិធី', icon: Info },
  ];

  return (
    <div className="flex flex-col min-h-full pb-20 text-slate-100 bg-[#0b0b0e]">
      {/* Top Header - No phone status bar / clock */}
      <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-[#0b0b0e]/95 backdrop-blur-md border-b border-amber-900/20">
        <h2 className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
          គណនីរបស់ខ្ញុំ
        </h2>

        <button
          id="btn-profile-bell"
          className="p-2 rounded-lg text-amber-400 hover:bg-amber-500/10 active:scale-95 transition-all cursor-pointer"
          aria-label="ការជូនដំណឹង"
        >
          <Bell size={20} />
        </button>
      </header>

      <div className="p-4 space-y-4">
        {/* User Card */}
        <div 
          id="user-profile-header-card"
          className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#171410] via-[#141419] to-[#121217] border border-amber-500/30 shadow-md"
        >
          {/* Avatar with gold ring */}
          <div className="relative w-16 h-16 shrink-0 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 to-yellow-300 shadow-[0_0_12px_rgba(245,158,11,0.35)]">
            <img
              src={USER_PROFILE.avatarUrl}
              alt={USER_PROFILE.nameKhmer}
              className="w-full h-full rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow">
              <Crown size={12} fill="currentColor" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-slate-100 truncate">
              {USER_PROFILE.nameKhmer}
            </h3>
            <p className="text-xs text-zinc-400 truncate mt-0.5 font-mono">
              {USER_PROFILE.email}
            </p>
            <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[11px] font-semibold">
              <Crown size={11} className="text-amber-400" />
              <span>Premium Member</span>
            </div>
          </div>
        </div>

        {/* Menu Items List */}
        <div className="rounded-2xl bg-[#131318] border border-zinc-800/90 divide-y divide-zinc-800/80 overflow-hidden">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                id={`profile-menu-${item.id}`}
                onClick={() => setActiveModal(item.titleKhmer)}
                className="w-full flex items-center justify-between p-3.5 hover:bg-[#1a1a22] active:bg-[#20202a] transition-all text-left cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1a1a24] flex items-center justify-center text-amber-400 group-hover:text-amber-300 transition-colors">
                    <Icon size={16} />
                  </div>
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {item.titleKhmer}
                  </span>
                </div>
                <ChevronRight size={16} className="text-zinc-500 group-hover:text-amber-400 transition-colors" />
              </button>
            );
          })}
        </div>

        {/* Logout Button */}
        <button
          id="btn-profile-logout"
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold transition-all cursor-pointer active:scale-98"
        >
          <LogOut size={16} />
          <span>ចាកចេញពីគណនី (Logout)</span>
        </button>
      </div>

      {/* Detail Dialog / Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4">
          <div className="w-full max-w-sm rounded-2xl bg-[#16161d] border border-amber-500/40 p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <h4 className="text-base font-bold text-amber-300">{activeModal}</h4>
              <button
                onClick={() => setActiveModal(null)}
                className="text-zinc-400 hover:text-white p-1 rounded"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              មុខងារ «{activeModal}» ត្រូវបានរៀបចំយ៉ាងត្រឹមត្រូវសម្រាប់គណនីរបស់ <strong>{USER_PROFILE.nameKhmer}</strong>។ ទិន្នន័យត្រូវបានរក្សាទុកដោយសុវត្ថិភាព។
            </p>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2 rounded-xl bg-amber-400 text-neutral-950 font-bold text-xs hover:bg-amber-300 transition-colors"
            >
              យល់ព្រម
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
