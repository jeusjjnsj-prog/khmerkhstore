import React, { useState } from 'react';
import { 
  Smartphone, 
  LayoutGrid, 
  LogIn, 
  UserPlus, 
  Sparkles, 
  Home, 
  BookOpen, 
  BarChart3, 
  User as UserIcon,
  ChevronRight
} from 'lucide-react';
import { HomeScreen } from './components/HomeScreen';
import { LessonsScreen } from './components/LessonsScreen';
import { StatsScreen } from './components/StatsScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { ContestsScreen } from './components/ContestsScreen';
import { BottomNavBar } from './components/BottomNavBar';
import { DrawerMenu } from './components/DrawerMenu';
import { SplashScreen } from './components/SplashScreen';
import { LoginScreen } from './components/LoginScreen';
import { RegisterScreen } from './components/RegisterScreen';
import { LessonDetailModal } from './components/LessonDetailModal';
import { PosterOverview } from './components/PosterOverview';
import { DeviceFrame } from './components/DeviceFrame';
import { LESSONS_DATA } from './data/mockData';
import { TabType, LessonItem } from './types';

export default function App() {
  // Mode: 'interactive' (single mobile phone) vs 'showcase' (full poster mockup view)
  const [viewMode, setViewMode] = useState<'interactive' | 'showcase'>('interactive');
  
  // Current tab in mobile interactive mode
  const [activeTab, setActiveTab] = useState<TabType>('home');
  
  // Alternative full-screen mobile screens (login, register, splash)
  const [authScreen, setAuthScreen] = useState<'none' | 'login' | 'register' | 'splash'>('none');
  
  // Drawer state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  // Active lesson for detail/video modal
  const [selectedLesson, setSelectedLesson] = useState<LessonItem | null>(null);

  const handleSelectScreenFromPoster = (screenId: string, tab?: TabType) => {
    setViewMode('interactive');
    if (screenId === 'login') {
      setAuthScreen('login');
    } else if (screenId === 'register') {
      setAuthScreen('register');
    } else if (screenId === 'splash') {
      setAuthScreen('splash');
    } else if (screenId === 'drawer') {
      setAuthScreen('none');
      setIsDrawerOpen(true);
    } else {
      setAuthScreen('none');
      if (tab) {
        setActiveTab(tab);
      }
    }
  };

  const renderActiveScreen = () => {
    // If user has navigated to an auth or splash view
    if (authScreen === 'splash') {
      return <SplashScreen onProceed={() => setAuthScreen('none')} />;
    }
    if (authScreen === 'login') {
      return (
        <LoginScreen
          onSuccessLogin={() => setAuthScreen('none')}
          onNavigateToRegister={() => setAuthScreen('register')}
        />
      );
    }
    if (authScreen === 'register') {
      return (
        <RegisterScreen
          onSuccessRegister={() => setAuthScreen('none')}
          onNavigateToLogin={() => setAuthScreen('login')}
        />
      );
    }

    // Standard Tab navigation
    switch (activeTab) {
      case 'home':
        return (
          <HomeScreen
            onOpenDrawer={() => setIsDrawerOpen(true)}
            onSelectLesson={(lesson) => setSelectedLesson(lesson)}
            onViewAllLessons={() => setActiveTab('lessons')}
            onStartLearning={() => setActiveTab('lessons')}
          />
        );
      case 'lessons':
        return (
          <LessonsScreen
            onOpenDrawer={() => setIsDrawerOpen(true)}
            onSelectLesson={(lesson) => setSelectedLesson(lesson)}
          />
        );
      case 'contests':
        return (
          <ContestsScreen
            onStartQuiz={() => setSelectedLesson(LESSONS_DATA[0])}
          />
        );
      case 'stats':
        return (
          <StatsScreen
            onBack={() => setActiveTab('home')}
          />
        );
      case 'profile':
        return (
          <ProfileScreen
            onLogout={() => setAuthScreen('login')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-300">
      {/* Top Application Control Toolbar */}
      <header className="sticky top-0 z-40 bg-[#0e0e13]/95 backdrop-blur-md border-b border-amber-900/30 px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-md">
        {/* App Branding */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-neutral-950 font-black text-xs shadow-[0_0_10px_rgba(245,158,11,0.4)]">
            KL
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 leading-tight">
              រៀនជាមួយ Khmer Learning
            </h1>
            <p className="text-[10px] text-zinc-400 hidden sm:block">
              គំរូរចនាដូចដើម 100% (គ្មានម៉ោងខាងលើទូរស័ព្ទ)
            </p>
          </div>
        </div>

        {/* View Mode Toggle & Screen Navigators */}
        <div className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar">
          {/* Toggle Interactive Mobile vs Full Showcase Poster */}
          <div className="flex items-center bg-[#15151c] p-1 rounded-xl border border-zinc-800">
            <button
              id="btn-mode-interactive"
              onClick={() => {
                setViewMode('interactive');
                setAuthScreen('none');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'interactive' && authScreen === 'none'
                  ? 'bg-amber-400 text-neutral-950 shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Smartphone size={14} />
              <span>ទូរស័ព្ទផ្ទាល់</span>
            </button>

            <button
              id="btn-mode-showcase"
              onClick={() => setViewMode('showcase')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'showcase'
                  ? 'bg-amber-400 text-neutral-950 shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <LayoutGrid size={14} />
              <span>ផ្ទាំងផ្សព្វផ្សាយ (Poster)</span>
            </button>
          </div>

          {/* Quick Jump Buttons for Reviewing All Screens */}
          <div className="hidden md:flex items-center gap-1 pl-2 border-l border-zinc-800">
            <button
              onClick={() => {
                setViewMode('interactive');
                setAuthScreen('login');
              }}
              className={`px-2.5 py-1 rounded-lg text-xs transition-colors cursor-pointer ${
                authScreen === 'login'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              ចូលប្រើប្រាស់
            </button>
            <button
              onClick={() => {
                setViewMode('interactive');
                setAuthScreen('register');
              }}
              className={`px-2.5 py-1 rounded-lg text-xs transition-colors cursor-pointer ${
                authScreen === 'register'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              បង្កើតគណនី
            </button>
            <button
              onClick={() => {
                setViewMode('interactive');
                setAuthScreen('splash');
              }}
              className={`px-2.5 py-1 rounded-lg text-xs transition-colors cursor-pointer ${
                authScreen === 'splash'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Splash
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-2 sm:p-6 overflow-x-hidden">
        {viewMode === 'showcase' ? (
          <PosterOverview
            onSelectScreen={handleSelectScreenFromPoster}
            onSelectLesson={(lesson) => {
              setSelectedLesson(lesson);
              setViewMode('interactive');
            }}
          />
        ) : (
          <div className="w-full max-w-md my-auto">
            {/* Realistic Mobile Device Frame - STRICTLY WITHOUT TOP CLOCK / STATUS BAR */}
            <DeviceFrame platformType="android">
              <div className="relative flex flex-col h-full bg-[#0b0b0e]">
                {/* Active screen content */}
                <div className="flex-1 overflow-y-auto no-scrollbar">
                  {renderActiveScreen()}
                </div>

                {/* Bottom navigation bar only on main app tabs */}
                {authScreen === 'none' && (
                  <BottomNavBar
                    activeTab={activeTab}
                    onSelectTab={(tab) => {
                      setActiveTab(tab);
                      setAuthScreen('none');
                    }}
                  />
                )}
              </div>
            </DeviceFrame>
          </div>
        )}
      </main>

      {/* Side Drawer Menu (Screen 5) */}
      <DrawerMenu
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onLogout={() => {
          setIsDrawerOpen(false);
          setAuthScreen('login');
        }}
        onNavigateToTab={(tabId) => {
          setActiveTab(tabId as TabType);
          setAuthScreen('none');
        }}
      />

      {/* Lesson Detail & Video Player Modal */}
      <LessonDetailModal
        lesson={selectedLesson}
        onClose={() => setSelectedLesson(null)}
      />
    </div>
  );
}
