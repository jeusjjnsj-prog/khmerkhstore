import React from 'react';
import { ShowcaseBanner } from './ShowcaseBanner';
import { DeviceFrame } from './DeviceFrame';
import { SplashScreen } from './SplashScreen';
import { LoginScreen } from './LoginScreen';
import { RegisterScreen } from './RegisterScreen';
import { HomeScreen } from './HomeScreen';
import { LessonsScreen } from './LessonsScreen';
import { StatsScreen } from './StatsScreen';
import { ProfileScreen } from './ProfileScreen';
import { BottomNavBar } from './BottomNavBar';
import { LessonItem, TabType } from '../types';

interface PosterOverviewProps {
  onSelectScreen: (screenId: string, tab?: TabType) => void;
  onSelectLesson: (lesson: LessonItem) => void;
}

export const PosterOverview: React.FC<PosterOverviewProps> = ({
  onSelectScreen,
  onSelectLesson,
}) => {
  return (
    <div className="w-full min-h-screen bg-[#070709] text-slate-100 p-4 sm:p-8 space-y-12 overflow-x-auto">
      {/* Top Banner Row matching the upper part of user's image */}
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-start justify-between gap-10">
        {/* Left branding banner */}
        <div className="w-full xl:w-1/3 pt-4">
          <ShowcaseBanner />
        </div>

        {/* Right mockup phones (Top row of poster) */}
        <div className="w-full xl:w-2/3 flex flex-wrap lg:flex-nowrap items-center justify-center xl:justify-end gap-6 overflow-x-auto pb-4">
          {/* Android Section */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-300 mb-3 tracking-wider">
              <span>🤖</span>
              <span>ANDROID</span>
            </div>
            <div className="flex gap-4">
              {/* Android Splash */}
              <div 
                onClick={() => onSelectScreen('splash')}
                className="cursor-pointer hover:scale-[1.02] transition-transform"
                title="ចុចដើម្បីបើកទំព័រ Splash"
              >
                <DeviceFrame platformType="android" className="scale-90 sm:scale-95 origin-top">
                  <SplashScreen />
                </DeviceFrame>
              </div>

              {/* Android Login */}
              <div 
                onClick={() => onSelectScreen('login')}
                className="cursor-pointer hover:scale-[1.02] transition-transform"
                title="ចុចដើម្បីបើកទំព័រ ចូលប្រើប្រាស់"
              >
                <DeviceFrame platformType="android" className="scale-90 sm:scale-95 origin-top">
                  <LoginScreen
                    onSuccessLogin={() => onSelectScreen('interactive', 'home')}
                    onNavigateToRegister={() => onSelectScreen('register')}
                  />
                </DeviceFrame>
              </div>

              {/* Android Register */}
              <div 
                onClick={() => onSelectScreen('register')}
                className="cursor-pointer hover:scale-[1.02] transition-transform"
                title="ចុចដើម្បីបើកទំព័រ បង្កើតគណនី"
              >
                <DeviceFrame platformType="android" className="scale-90 sm:scale-95 origin-top">
                  <RegisterScreen
                    onSuccessRegister={() => onSelectScreen('interactive', 'home')}
                    onNavigateToLogin={() => onSelectScreen('login')}
                  />
                </DeviceFrame>
              </div>
            </div>
          </div>

          {/* iOS Section */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-300 mb-3 tracking-wider">
              <span>🍏</span>
              <span>iOS / iPHONE</span>
            </div>
            <div className="flex gap-4">
              {/* iOS Splash */}
              <div 
                onClick={() => onSelectScreen('splash')}
                className="cursor-pointer hover:scale-[1.02] transition-transform"
                title="ចុចដើម្បីបើកទំព័រ Splash"
              >
                <DeviceFrame platformType="ios" className="scale-90 sm:scale-95 origin-top">
                  <SplashScreen />
                </DeviceFrame>
              </div>

              {/* iOS Login */}
              <div 
                onClick={() => onSelectScreen('login')}
                className="cursor-pointer hover:scale-[1.02] transition-transform"
                title="ចុចដើម្បីបើកទំព័រ ចូលប្រើប្រាស់"
              >
                <DeviceFrame platformType="ios" className="scale-90 sm:scale-95 origin-top">
                  <LoginScreen
                    onSuccessLogin={() => onSelectScreen('interactive', 'home')}
                    onNavigateToRegister={() => onSelectScreen('register')}
                  />
                </DeviceFrame>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Golden Section Divider */}
      <div className="max-w-7xl mx-auto relative flex items-center justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
        <span className="absolute px-4 bg-[#070709] text-xs font-bold text-amber-400 tracking-widest uppercase">
          ទិដ្ឋភាពកម្មវិធីទូរស័ព្ទ (APP INTERFACE VIEWS)
        </span>
      </div>

      {/* Bottom Row Mockup Phones (Matching the 5 screens in user's image) */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-center gap-6 overflow-x-auto pb-6 no-scrollbar">
          {/* Screen 1: Home (ទីតាំងដើម) */}
          <div 
            onClick={() => onSelectScreen('interactive', 'home')}
            className="cursor-pointer hover:scale-[1.02] transition-transform shrink-0"
            title="ទំព័រដើម (ចុចដើម្បីបើក)"
          >
            <DeviceFrame platformType="android" label="ទីតាំងដើម (Home)">
              <div className="flex flex-col h-full justify-between">
                <HomeScreen
                  onOpenDrawer={() => onSelectScreen('drawer')}
                  onSelectLesson={onSelectLesson}
                  onViewAllLessons={() => onSelectScreen('interactive', 'lessons')}
                  onStartLearning={() => onSelectScreen('interactive', 'lessons')}
                />
                <BottomNavBar activeTab="home" onSelectTab={(t) => onSelectScreen('interactive', t)} />
              </div>
            </DeviceFrame>
          </div>

          {/* Screen 2: Lessons (មេរៀន) */}
          <div 
            onClick={() => onSelectScreen('interactive', 'lessons')}
            className="cursor-pointer hover:scale-[1.02] transition-transform shrink-0"
            title="ទំព័រមេរៀន (ចុចដើម្បីបើក)"
          >
            <DeviceFrame platformType="android" label="មេរៀន (Lessons)">
              <div className="flex flex-col h-full justify-between">
                <LessonsScreen
                  onOpenDrawer={() => onSelectScreen('drawer')}
                  onSelectLesson={onSelectLesson}
                />
                <BottomNavBar activeTab="lessons" onSelectTab={(t) => onSelectScreen('interactive', t)} />
              </div>
            </DeviceFrame>
          </div>

          {/* Screen 3: Stats / Progress (ប្រវត្តិលទ្ធផល) */}
          <div 
            onClick={() => onSelectScreen('interactive', 'stats')}
            className="cursor-pointer hover:scale-[1.02] transition-transform shrink-0"
            title="ប្រវត្តិលទ្ធផល (ចុចដើម្បីបើក)"
          >
            <DeviceFrame platformType="android" label="ប្រវត្តិលទ្ធផល (Progress)">
              <div className="flex flex-col h-full justify-between">
                <StatsScreen onBack={() => onSelectScreen('interactive', 'home')} />
                <BottomNavBar activeTab="stats" onSelectTab={(t) => onSelectScreen('interactive', t)} />
              </div>
            </DeviceFrame>
          </div>

          {/* Screen 4: Profile (គណនីរបស់ខ្ញុំ) */}
          <div 
            onClick={() => onSelectScreen('interactive', 'profile')}
            className="cursor-pointer hover:scale-[1.02] transition-transform shrink-0"
            title="គណនីរបស់ខ្ញុំ (ចុចដើម្បីបើក)"
          >
            <DeviceFrame platformType="android" label="គណនីរបស់ខ្ញុំ (Profile)">
              <div className="flex flex-col h-full justify-between">
                <ProfileScreen onLogout={() => onSelectScreen('login')} />
                <BottomNavBar activeTab="profile" onSelectTab={(t) => onSelectScreen('interactive', t)} />
              </div>
            </DeviceFrame>
          </div>

          {/* Screen 5: Drawer / Help Menu (ម៉ឺនុយ & ជំនួយ) */}
          <div 
            onClick={() => onSelectScreen('drawer')}
            className="cursor-pointer hover:scale-[1.02] transition-transform shrink-0"
            title="ម៉ឺនុយ និងជំនួយ (ចុចដើម្បីបើក)"
          >
            <DeviceFrame platformType="android" label="ម៉ឺនុយ & ជំនួយ (Menu / Help)">
              <div className="flex flex-col h-full justify-between bg-[#0e0e13]">
                <div className="p-4 border-b border-zinc-800">
                  <h3 className="text-sm font-bold text-amber-300">ម៉ឺនុយ</h3>
                </div>
                <div className="flex-1 p-3 space-y-1">
                  {[
                    'ព័ត៌មានផ្ទាល់ខ្លួន',
                    'ការទូទាត់',
                    'មេរៀនដែលបានទាញយក',
                    'មេរៀនដែលបានពេញចិត្ត',
                    'ប្រវត្តិសិក្សា',
                    'ការកំណត់',
                    'ជំនួយ',
                  ].map((label, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-[#141419] border border-zinc-800/80 text-xs text-zinc-300"
                    >
                      <span>{label}</span>
                      <span className="text-zinc-500">›</span>
                    </div>
                  ))}
                  <div className="pt-2">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-red-950/30 border border-red-500/30 text-xs font-bold text-red-400">
                      <span>ចាកចេញ</span>
                      <span>›</span>
                    </div>
                  </div>
                </div>
                <BottomNavBar activeTab="profile" onSelectTab={(t) => onSelectScreen('interactive', t)} />
              </div>
            </DeviceFrame>
          </div>
        </div>
      </div>
    </div>
  );
};
