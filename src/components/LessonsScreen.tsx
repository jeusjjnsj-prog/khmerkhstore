import React, { useState } from 'react';
import { Menu, Search, Filter, X, Play, Clock, BookOpen, CheckCircle2 } from 'lucide-react';
import { LESSONS_DATA } from '../data/mockData';
import { LessonItem } from '../types';

interface LessonsScreenProps {
  onOpenDrawer: () => void;
  onSelectLesson: (lesson: LessonItem) => void;
}

export const LessonsScreen: React.FC<LessonsScreenProps> = ({
  onOpenDrawer,
  onSelectLesson,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ទាំងអស់');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const categories = ['ទាំងអស់', 'ភាសាខ្មែរ', 'គណិតវិទ្យា', 'ភាសាអង់គ្លេស', 'វិទ្យាសាស្ត្រ'];

  const filteredLessons = LESSONS_DATA.filter((lesson) => {
    const matchesCategory =
      selectedCategory === 'ទាំងអស់' || lesson.category === selectedCategory;
    const matchesSearch =
      lesson.titleKhmer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lesson.description && lesson.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-full pb-20 text-slate-100 bg-[#0b0b0e]">
      {/* Top Header - No phone status bar / clock */}
      <header className="sticky top-0 z-20 px-4 py-3 bg-[#0b0b0e]/95 backdrop-blur-md border-b border-amber-900/20">
        <div className="flex items-center justify-between">
          <button
            id="btn-lessons-menu"
            onClick={onOpenDrawer}
            className="p-2 rounded-lg text-amber-400 hover:bg-amber-500/10 active:scale-95 transition-all cursor-pointer"
            aria-label="បើកម៉ឺនុយ"
          >
            <Menu size={22} />
          </button>

          <h2 className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
            មេរៀន
          </h2>

          <button
            id="btn-lessons-search-toggle"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-lg text-amber-400 hover:bg-amber-500/10 active:scale-95 transition-all cursor-pointer"
            aria-label="ស្វែងរក"
          >
            {isSearchOpen ? <X size={20} /> : <Search size={20} />}
          </button>
        </div>

        {/* Expandable Search Input */}
        {isSearchOpen && (
          <div className="mt-2.5 relative animate-fadeIn">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ស្វែងរកមេរៀន ឬមុខវិជ្ជា..."
              className="w-full bg-[#16161c] border border-amber-500/40 rounded-xl pl-9 pr-8 py-2 text-xs text-slate-100 placeholder:text-zinc-500 focus:outline-hidden focus:border-amber-400"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                <X size={14} />
              </button>
            )}
          </div>
        )}

        {/* Filter Category Chips */}
        <div className="flex gap-2 overflow-x-auto pt-3 pb-1 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                id={`cat-filter-${cat}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-500/20'
                    : 'bg-[#141419] text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </header>

      {/* Course List matching Screen 2 */}
      <div className="p-4 space-y-3.5">
        {filteredLessons.map((lesson) => (
          <div
            key={lesson.id}
            id={`course-card-${lesson.id}`}
            className="flex items-center gap-3.5 p-2.5 rounded-2xl bg-[#131318] border border-zinc-800/90 hover:border-amber-500/40 transition-all shadow-sm group"
          >
            {/* Thumbnail with duration */}
            <div className="relative w-28 h-20 shrink-0 rounded-xl overflow-hidden">
              <img
                src={lesson.imageUrl}
                alt={lesson.titleKhmer}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Duration badge */}
              <span className="absolute top-1 left-1 bg-black/80 text-[10px] text-zinc-200 px-1.5 py-0.5 rounded font-mono">
                {lesson.duration}
              </span>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow-lg">
                  <Play size={14} fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Info and Actions */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <h3 className="text-sm font-bold text-slate-100 truncate group-hover:text-amber-300 transition-colors">
                  {lesson.titleKhmer}
                </h3>
              </div>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-zinc-400 flex items-center gap-1">
                  <BookOpen size={12} className="text-amber-400/80" />
                  {lesson.lessonsCountText}
                </span>

                <span
                  className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                    lesson.isFree
                      ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                      : 'bg-amber-950/80 text-amber-300 border border-amber-500/40'
                  }`}
                >
                  {lesson.isFree ? 'FREE' : '👑 PREMIUM'}
                </span>
              </div>

              <div className="mt-2.5 flex items-center justify-end">
                <button
                  id={`btn-enroll-${lesson.id}`}
                  onClick={() => onSelectLesson(lesson)}
                  className="px-3 py-1 rounded-lg bg-gradient-to-r from-amber-500/20 to-yellow-500/20 hover:from-amber-500 hover:to-yellow-500 text-amber-300 hover:text-neutral-950 border border-amber-500/40 text-xs font-bold transition-all cursor-pointer active:scale-95 shadow-xs"
                >
                  ចូលរៀន
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredLessons.length === 0 && (
          <div className="text-center py-12 text-zinc-400">
            <BookOpen size={36} className="mx-auto mb-2 text-zinc-600" />
            <p className="text-sm font-medium">រកមិនឃើញមេរៀនដែលត្រូវនឹងលក្ខខណ្ឌស្វែងរក</p>
          </div>
        )}
      </div>
    </div>
  );
};
