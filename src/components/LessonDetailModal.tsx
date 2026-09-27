import React, { useState } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  Award, 
  Download, 
  Heart,
  Volume2,
  Maximize2
} from 'lucide-react';
import { LessonItem } from '../types';

interface LessonDetailModalProps {
  lesson: LessonItem | null;
  onClose: () => void;
  onCompleteExercise?: () => void;
}

export const LessonDetailModal: React.FC<LessonDetailModalProps> = ({
  lesson,
  onClose,
  onCompleteExercise,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'syllabus' | 'quiz' | 'info'>('syllabus');
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  if (!lesson) return null;

  const handleAnswer = (index: number) => {
    setQuizAnswer(index);
    setQuizSubmitted(true);
    if (onCompleteExercise) {
      onCompleteExercise();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-4 animate-fadeIn">
      <div className="relative w-full max-w-lg max-h-[90vh] bg-[#111116] border border-amber-500/40 rounded-2xl overflow-hidden flex flex-col shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-[#14141a]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
              {lesson.category}
            </span>
            <h3 className="text-sm font-bold text-slate-100 truncate max-w-[240px]">
              {lesson.titleKhmer}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative w-full aspect-video bg-black overflow-hidden group">
          <img
            src={lesson.imageUrl}
            alt={lesson.titleKhmer}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isPlaying ? 'opacity-30 blur-xs' : 'opacity-80'
            }`}
            referrerPolicy="no-referrer"
          />

          {/* Playing Simulation Animation */}
          {isPlaying && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-1.5 h-6 bg-amber-400 animate-pulse"></div>
                <div className="w-1.5 h-10 bg-amber-300 animate-pulse delay-75"></div>
                <div className="w-1.5 h-8 bg-amber-400 animate-pulse delay-150"></div>
                <div className="w-1.5 h-4 bg-amber-500 animate-pulse"></div>
              </div>
              <p className="text-xs font-semibold text-amber-200">
                កំពុងចាក់វីដេអូបង្រៀន... (កម្រិត HD)
              </p>
            </div>
          )}

          {/* Player controls */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-14 h-14 rounded-full bg-amber-400/90 text-neutral-950 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform cursor-pointer"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" fill="currentColor" />}
            </button>
          </div>

          {/* Video Scrubber bottom */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-2.5 flex items-center justify-between text-xs text-zinc-300">
            <span className="font-mono text-[10px]">
              {isPlaying ? '04:15' : '00:00'} / {lesson.duration}
            </span>
            <div className="flex items-center gap-2">
              <Volume2 size={16} className="text-zinc-400 hover:text-white cursor-pointer" />
              <Maximize2 size={16} className="text-zinc-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs inside modal */}
        <div className="flex border-b border-zinc-800 bg-[#14141a]">
          <button
            onClick={() => setActiveTab('syllabus')}
            className={`flex-1 py-2.5 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'syllabus'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            កម្រងមេរៀន (Syllabus)
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex-1 py-2.5 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'quiz'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            លំហាត់តេស្ត (Quiz)
          </button>
          <button
            onClick={() => setActiveTab('info')}
            className={`flex-1 py-2.5 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'info'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            ព័ត៌មាន (Overview)
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 overflow-y-auto max-h-64 space-y-3">
          {activeTab === 'syllabus' && (
            <div className="space-y-2">
              {lesson.syllabus?.map((item, idx) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#171720] border border-zinc-800 hover:border-amber-500/30 transition-all cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-zinc-800 text-amber-400 flex items-center justify-center text-xs font-bold font-mono">
                      {idx + 1}
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-slate-200">
                        {item.title}
                      </h5>
                      <span className="text-[10px] text-zinc-400 flex items-center gap-1 mt-0.5">
                        <Clock size={10} />
                        {item.duration}
                      </span>
                    </div>
                  </div>
                  {item.completed ? (
                    <CheckCircle2 size={16} className="text-emerald-400" />
                  ) : (
                    <Play size={14} className="text-zinc-500" />
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'quiz' && (
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs">
                សាកល្បងឆ្លើយសំណួរដើម្បីវាស់ស្ទង់សមត្ថភាព និងបង្កើនពិន្ទុរបស់អ្នក!
              </div>

              <div className="p-3 rounded-xl bg-[#171720] border border-zinc-800 space-y-2.5">
                <p className="text-xs font-bold text-slate-100">
                  សំណួរ៖ តើចំណុចគន្លឹះសំខាន់បំផុតក្នុងមេរៀននេះជាអ្វី?
                </p>

                <div className="space-y-1.5 text-xs">
                  {[
                    'ការយល់ដឹងពីទ្រឹស្តីគ្រឹះ និងអនុវត្តជាក់ស្តែង',
                    'ការទន្ទេញចាំរូបមន្តដោយមិនចាំបាច់អនុវត្ត',
                    'ការអានសៀវភៅតែមួយមុខគត់',
                  ].map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      className={`w-full text-left p-2.5 rounded-lg border transition-all cursor-pointer ${
                        quizAnswer === idx
                          ? 'bg-amber-500/20 border-amber-400 text-amber-200'
                          : 'bg-[#121217] border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      {idx + 1}. {option}
                    </button>
                  ))}
                </div>

                {quizSubmitted && (
                  <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle2 size={16} />
                    <span>ចម្លើយត្រឹមត្រូវ! អ្នកទទួលបាន +5 ពិន្ទុក្នុងប្រព័ន្ធ!</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'info' && (
            <div className="space-y-3 text-xs text-zinc-300">
              <p className="leading-relaxed">{lesson.description}</p>
              <div className="p-3 rounded-xl bg-[#171720] border border-zinc-800 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-zinc-400">គ្រូបង្រៀន:</span>
                  <span className="font-semibold text-amber-300">{lesson.instructor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">សិស្សបានចុះឈ្មោះ:</span>
                  <span className="font-mono text-slate-200">{lesson.totalEnrolled}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">ការវាយតម្លៃ:</span>
                  <span className="text-amber-400 font-bold">★ {lesson.rating} / 5.0</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-3 bg-[#14141a] border-t border-zinc-800 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-xl bg-[#1a1a24] text-zinc-300 hover:text-amber-300 border border-zinc-800 hover:border-amber-500/40 cursor-pointer">
              <Heart size={16} />
            </button>
            <button className="p-2 rounded-xl bg-[#1a1a24] text-zinc-300 hover:text-amber-300 border border-zinc-800 hover:border-amber-500/40 cursor-pointer">
              <Download size={16} />
            </button>
          </div>

          <button
            onClick={() => setIsPlaying(true)}
            className="flex-1 py-2 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-neutral-950 font-bold text-xs shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer text-center"
          >
            បន្តការសិក្សាឥឡូវនេះ
          </button>
        </div>
      </div>
    </div>
  );
};
