import React from 'react';
import { Trophy, Award, Flame, Users, Clock, ChevronRight } from 'lucide-react';

interface ContestsScreenProps {
  onStartQuiz: () => void;
}

export const ContestsScreen: React.FC<ContestsScreenProps> = ({ onStartQuiz }) => {
  const contests = [
    {
      id: '1',
      title: 'ការប្រកួតគណិតវិទ្យាប្រចាំសប្តាហ៍',
      reward: 'ពានរង្វាន់មាស + $500',
      participants: '1,420 នាក់',
      timeLeft: '2 ថ្ងៃទៀត',
      badge: 'HOT',
    },
    {
      id: '2',
      title: 'តេស្តសមត្ថភាពភាសាខ្មែរទូទាំងប្រទេស',
      reward: 'អាហារូបករណ៍ ១០០%',
      participants: '3,850 នាក់',
      timeLeft: '5 ថ្ងៃទៀត',
      badge: 'TOP',
    },
    {
      id: '3',
      title: 'English Speaking & Grammar Contest',
      reward: 'Laptop + Tablet',
      participants: '920 នាក់',
      timeLeft: '1 សប្តាហ៍ទៀត',
      badge: 'NEW',
    },
  ];

  return (
    <div className="flex flex-col min-h-full pb-20 text-slate-100 bg-[#0b0b0e]">
      {/* Top Header - No phone status bar / clock */}
      <header className="sticky top-0 z-20 px-4 py-3 bg-[#0b0b0e]/95 backdrop-blur-md border-b border-amber-900/20">
        <h2 className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
          ការប្រកួតប្រជែង
        </h2>
      </header>

      <div className="p-4 space-y-4">
        {/* Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/50 via-[#1c1811] to-[#121217] border border-amber-500/40 relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400">
                <Flame size={14} className="text-amber-400" />
                កំពុងពេញនិយម
              </span>
              <h3 className="text-base font-bold text-slate-100 mt-1">
                ប្រឡងប្រជែងវាស់ស្ទង់សមត្ថភាព
              </h3>
              <p className="text-xs text-zinc-300 mt-0.5">
                ឈ្នះរង្វាន់ និងទទួលពិន្ទុឡើងចំណាត់ថ្នាក់
              </p>
            </div>
            <Trophy size={36} className="text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.5)] shrink-0" />
          </div>
        </div>

        {/* Contest List */}
        <div className="space-y-3">
          {contests.map((item) => (
            <div
              key={item.id}
              className="p-3.5 rounded-2xl bg-[#131318] border border-zinc-800 hover:border-amber-500/40 transition-all space-y-2.5"
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-xs font-bold text-slate-100">
                  {item.title}
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {item.badge}
                </span>
              </div>

              <div className="flex items-center gap-3 text-[11px] text-zinc-400">
                <span className="flex items-center gap-1 text-amber-300 font-semibold">
                  <Award size={13} className="text-amber-400" />
                  {item.reward}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={13} />
                  {item.timeLeft}
                </span>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-zinc-800/80">
                <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                  <Users size={12} />
                  {item.participants}
                </span>
                <button
                  onClick={onStartQuiz}
                  className="px-3 py-1 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 text-xs font-bold hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                >
                  ចុះឈ្មោះប្រកួត
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
