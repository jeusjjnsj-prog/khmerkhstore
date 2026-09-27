import React from 'react';
import { ArrowLeft, Bell, Check, TrendingUp, Award, Target, Calendar } from 'lucide-react';
import { MONTHLY_STATS, USER_PROFILE } from '../data/mockData';

interface StatsScreenProps {
  onBack: () => void;
}

export const StatsScreen: React.FC<StatsScreenProps> = ({ onBack }) => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (68 / 100) * circumference;

  return (
    <div className="flex flex-col min-h-full pb-20 text-slate-100 bg-[#0b0b0e]">
      {/* Top Header - Strictly without phone clock/status bar */}
      <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-[#0b0b0e]/95 backdrop-blur-md border-b border-amber-900/20">
        <button
          id="btn-stats-back"
          onClick={onBack}
          className="p-2 rounded-lg text-amber-400 hover:bg-amber-500/10 active:scale-95 transition-all cursor-pointer"
          aria-label="ត្រឡប់ក្រោយ"
        >
          <ArrowLeft size={22} />
        </button>

        <h2 className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
          ប្រវត្តិលទ្ធផល
        </h2>

        <button
          id="btn-stats-bell"
          className="relative p-2 rounded-lg text-amber-400 hover:bg-amber-500/10 active:scale-95 transition-all cursor-pointer"
          aria-label="ការជូនដំណឹង"
        >
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_8px_#f59e0b]"></span>
        </button>
      </header>

      <div className="p-4 space-y-5">
        {/* Card: 68% Progress Ring + Checklists */}
        <div 
          id="progress-summary-card"
          className="p-5 rounded-2xl bg-gradient-to-b from-[#16161d] to-[#101014] border border-amber-500/30 shadow-lg relative overflow-hidden"
        >
          <div className="flex items-center justify-between gap-4">
            {/* Circular Progress Meter */}
            <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                {/* Background Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  stroke="#272730"
                  strokeWidth="8"
                  fill="transparent"
                />
                {/* Active Golden Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  stroke="url(#progressGradient)"
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-1000 ease-out"
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FDE68A" />
                    <stop offset="50%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#D97706" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-black text-amber-300 tracking-tight">
                  68%
                </span>
                <span className="text-[9px] text-zinc-400 font-medium -mt-1">
                  ជោគជ័យ
                </span>
              </div>
            </div>

            {/* Metrics Checklist */}
            <div className="flex-1 space-y-2 text-xs">
              <div className="flex items-center justify-between text-zinc-300">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <Check size={14} className="text-emerald-400" />
                  មេរៀន
                </span>
                <span className="font-mono font-bold text-amber-300">
                  {USER_PROFILE.lessonsCompleted}/{USER_PROFILE.totalLessons}
                </span>
              </div>

              <div className="flex items-center justify-between text-zinc-300">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <Check size={14} className="text-emerald-400" />
                  លំហាត់
                </span>
                <span className="font-mono font-bold text-amber-300">
                  {USER_PROFILE.exercisesDone}/{USER_PROFILE.totalExercises}
                </span>
              </div>

              <div className="flex items-center justify-between text-zinc-300">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <Check size={14} className="text-emerald-400" />
                  ពិន្ទុ
                </span>
                <span className="font-mono font-bold text-amber-300">
                  {USER_PROFILE.score}/100
                </span>
              </div>

              <div className="flex items-center justify-between text-zinc-300">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <Check size={14} className="text-emerald-400" />
                  ពិន្ទុរត់ឡើង
                </span>
                <span className="font-semibold text-emerald-400">
                  {USER_PROFILE.percentile}
                </span>
              </div>
            </div>
          </div>

          {/* Action Button: មើលលម្អិត */}
          <button
            id="btn-view-stats-detail"
            className="w-full mt-4 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-neutral-950 font-bold text-sm shadow-lg shadow-amber-950/40 hover:brightness-110 active:scale-98 transition-all cursor-pointer"
          >
            មើលលម្អិត
          </button>
        </div>

        {/* Section: សិក្សាប្រចាំខែ (Monthly Bar Chart) */}
        <div 
          id="monthly-study-chart"
          className="p-5 rounded-2xl bg-[#131318] border border-zinc-800/90 space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
              <Calendar size={16} className="text-amber-400" />
              សិក្សាប្រចាំខែ
            </h3>
            <span className="text-xs text-amber-400/90 font-medium">ឆ្នាំ ២០២៦</span>
          </div>

          {/* Bar Chart matching image with exact percentages: 75%, 60%, 80%, 68%, 90%, 70% */}
          <div className="pt-8 pb-2">
            <div className="h-44 flex items-end justify-between gap-2 px-1 border-b border-zinc-800 pb-2">
              {MONTHLY_STATS.map((stat, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 group h-full justify-end">
                  {/* Percentage label floating above bar */}
                  <span className="text-[10px] font-bold text-amber-300">
                    {stat.percentage}%
                  </span>

                  {/* Golden Bar */}
                  <div className="w-full max-w-[28px] bg-zinc-800/60 rounded-t-lg overflow-hidden flex flex-col justify-end" style={{ height: '80%' }}>
                    <div
                      className="w-full bg-gradient-to-t from-amber-600 via-amber-400 to-yellow-300 rounded-t-lg group-hover:brightness-125 transition-all shadow-[0_0_12px_rgba(245,158,11,0.25)]"
                      style={{ height: `${stat.percentage}%` }}
                    ></div>
                  </div>

                  {/* Khmer Month label */}
                  <span className="text-[10px] text-zinc-400 font-medium mt-1">
                    {stat.monthKhmer}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-zinc-400 pt-1">
            <span className="flex items-center gap-1">
              <TrendingUp size={14} className="text-amber-400" />
              កំណើនសិក្សាជាមធ្យម: <strong className="text-amber-300">+18%</strong>
            </span>
            <span className="text-zinc-500">គិតជាភាគរយ</span>
          </div>
        </div>
      </div>
    </div>
  );
};
