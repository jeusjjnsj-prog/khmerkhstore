import React from 'react';
import { 
  Menu, 
  Bell, 
  BookOpen, 
  Calculator, 
  FlaskConical, 
  Sparkles, 
  Users, 
  ClipboardList, 
  Trophy, 
  ChevronRight,
  Play
} from 'lucide-react';
import { SUBJECTS_DATA, LESSONS_DATA } from '../data/mockData';
import { LessonItem } from '../types';

interface HomeScreenProps {
  onOpenDrawer: () => void;
  onSelectLesson: (lesson: LessonItem) => void;
  onViewAllLessons: () => void;
  onStartLearning: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onOpenDrawer,
  onSelectLesson,
  onViewAllLessons,
  onStartLearning,
}) => {
  return (
    <div className="flex flex-col min-h-full pb-20 text-slate-100 bg-[#0b0b0e]">
      {/* Top Header - Strictly without phone clock/status bar */}
      <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-[#0b0b0e]/95 backdrop-blur-md border-b border-amber-900/20">
        <button
          id="btn-home-menu"
          onClick={onOpenDrawer}
          className="p-2 rounded-lg text-amber-400 hover:bg-amber-500/10 active:scale-95 transition-all cursor-pointer"
          aria-label="បើកម៉ឺនុយ"
        >
          <Menu size={22} />
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
            រៀនជាមួយ
          </span>
        </div>

        <button
          id="btn-home-notifications"
          className="relative p-2 rounded-lg text-amber-400 hover:bg-amber-500/10 active:scale-95 transition-all cursor-pointer"
          aria-label="ការជូនដំណឹង"
        >
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_8px_#f59e0b]"></span>
        </button>
      </header>

      <div className="px-4 space-y-5 pt-3">
        {/* Hero Banner with Angkor backdrop & student */}
        <div 
          id="hero-learning-banner"
          className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-[#1c170d] via-[#131317] to-[#0d0d10] p-4 shadow-[0_8px_25px_rgba(0,0,0,0.5)]"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex items-center justify-between gap-3">
            <div className="flex-1 space-y-2">
              <p className="text-xs text-amber-200/80 font-medium">
                ស្វាគមន៍មកកាន់
              </p>
              <h2 className="text-xl font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-400">
                រៀនជាមួយ
                <span className="block text-sm font-semibold tracking-wider text-amber-400 mt-0.5">
                  Khmer Learning
                </span>
              </h2>

              <button
                id="btn-hero-start-learning"
                onClick={onStartLearning}
                className="mt-2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-neutral-950 font-bold text-xs shadow-md shadow-amber-950/40 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <span>ចាប់ផ្តើមសិក្សា</span>
                <ChevronRight size={14} strokeWidth={2.5} />
              </button>
            </div>

            {/* Student visual with backpack & gold crest */}
            <div className="relative w-28 h-32 shrink-0">
              <div className="absolute inset-0 rounded-xl overflow-hidden border border-amber-500/40 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80"
                  alt="Student learner"
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131317] via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-1 -left-1 bg-amber-500/90 text-[10px] font-bold text-neutral-950 px-1.5 py-0.5 rounded shadow">
                KL Pro
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats Badges Strip */}
        <div 
          id="stats-strip"
          className="grid grid-cols-4 gap-2 bg-[#131318] p-2.5 rounded-xl border border-zinc-800/80 text-center"
        >
          <div className="flex flex-col items-center justify-center p-1">
            <Users size={16} className="text-amber-400 mb-1" />
            <span className="text-xs font-bold text-amber-300">12,580+</span>
            <span className="text-[10px] text-zinc-400 mt-0.5">សិស្សកំពុងរៀន</span>
          </div>

          <div className="flex flex-col items-center justify-center p-1 border-l border-zinc-800/80">
            <BookOpen size={16} className="text-amber-400 mb-1" />
            <span className="text-xs font-bold text-amber-300">450+</span>
            <span className="text-[10px] text-zinc-400 mt-0.5">មេរៀន</span>
          </div>

          <div className="flex flex-col items-center justify-center p-1 border-l border-zinc-800/80">
            <ClipboardList size={16} className="text-amber-400 mb-1" />
            <span className="text-xs font-bold text-amber-300">1,200+</span>
            <span className="text-[10px] text-zinc-400 mt-0.5">លំហាត់</span>
          </div>

          <div className="flex flex-col items-center justify-center p-1 border-l border-zinc-800/80">
            <Trophy size={16} className="text-amber-400 mb-1" />
            <span className="text-xs font-bold text-amber-300">96%</span>
            <span className="text-[10px] text-zinc-400 mt-0.5">ជោគជ័យ</span>
          </div>
        </div>

        {/* Popular Subjects (មុខវិជ្ជាពេញនិយម) */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
              <span className="w-1.5 h-3.5 bg-amber-400 rounded-full"></span>
              មុខវិជ្ជាពេញនិយម
            </h3>
            <button
              onClick={onViewAllLessons}
              className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center gap-0.5 cursor-pointer"
            >
              <span>មើលទាំងអស់</span>
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-5 gap-2">
            {SUBJECTS_DATA.map((subject) => {
              const renderIcon = () => {
                switch (subject.iconType) {
                  case 'book':
                    return <BookOpen size={18} className="text-amber-400" />;
                  case 'calculator':
                    return <Calculator size={18} className="text-blue-400" />;
                  case 'flag':
                    return (
                      <span className="text-base leading-none" role="img" aria-label="UK flag">
                        🇬🇧
                      </span>
                    );
                  case 'science':
                    return <FlaskConical size={18} className="text-emerald-400" />;
                  case 'tech':
                  default:
                    return <Sparkles size={18} className="text-purple-400" />;
                }
              };

              return (
                <button
                  key={subject.id}
                  id={`subject-btn-${subject.id}`}
                  onClick={onViewAllLessons}
                  className="flex flex-col items-center p-2 rounded-xl bg-[#141419] border border-zinc-800 hover:border-amber-500/50 hover:bg-[#1a1a22] active:scale-95 transition-all text-center cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1c1c24] flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                    {renderIcon()}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-200 line-clamp-1">
                    {subject.titleKhmer}
                  </span>
                  <span className="text-[9px] text-zinc-400 mt-0.5">
                    {subject.lessonCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Latest Lessons (មេរៀនថ្មីៗ) */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
              <span className="w-1.5 h-3.5 bg-amber-400 rounded-full"></span>
              មេរៀនថ្មីៗ
            </h3>
            <button
              onClick={onViewAllLessons}
              className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center gap-0.5 cursor-pointer"
            >
              <span>មើលទាំងអស់</span>
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Horizontal carousel matching mockups */}
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            {LESSONS_DATA.map((lesson) => (
              <div
                key={lesson.id}
                id={`latest-lesson-${lesson.id}`}
                onClick={() => onSelectLesson(lesson)}
                className="w-36 shrink-0 rounded-xl overflow-hidden bg-[#141419] border border-zinc-800 hover:border-amber-500/50 cursor-pointer group transition-all"
              >
                <div className="relative h-22 w-full overflow-hidden">
                  <img
                    src={lesson.imageUrl}
                    alt={lesson.titleKhmer}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
                  
                  {/* Timestamp in top corner */}
                  <span className="absolute top-1.5 left-1.5 bg-black/75 backdrop-blur-xs text-white text-[9px] font-mono px-1.5 py-0.5 rounded">
                    {lesson.duration}
                  </span>

                  {/* Free / Premium Badge */}
                  <span
                    className={`absolute bottom-1.5 left-1.5 text-[9px] font-bold px-1.5 py-0.5 rounded ${
                      lesson.isFree
                        ? 'bg-emerald-600/90 text-white'
                        : 'bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 shadow-sm'
                    }`}
                  >
                    {lesson.isFree ? 'FREE' : '👑 PREMIUM'}
                  </span>

                  <div className="absolute bottom-1.5 right-1.5 w-6 h-6 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow">
                    <Play size={10} fill="currentColor" />
                  </div>
                </div>

                <div className="p-2 space-y-1">
                  <h4 className="text-xs font-semibold text-slate-200 line-clamp-1 group-hover:text-amber-300 transition-colors">
                    {lesson.titleKhmer}
                  </h4>
                  <p className="text-[10px] text-zinc-400">
                    {lesson.lessonsCountText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
