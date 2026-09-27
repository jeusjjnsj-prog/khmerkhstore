export type TabType = 'home' | 'lessons' | 'contests' | 'stats' | 'profile';

export type ScreenView = 
  | 'home' 
  | 'lessons' 
  | 'stats' 
  | 'profile' 
  | 'drawer' 
  | 'login' 
  | 'register' 
  | 'splash';

export interface SubjectItem {
  id: string;
  titleKhmer: string;
  lessonCount: string;
  iconType: 'book' | 'calculator' | 'flag' | 'science' | 'tech';
  color: string;
}

export interface LessonItem {
  id: string;
  titleKhmer: string;
  duration: string;
  lessonsCountText: string;
  isFree: boolean;
  category: string;
  imageUrl: string;
  description?: string;
  rating?: number;
  totalEnrolled?: string;
  instructor?: string;
  syllabus?: {
    id: string;
    title: string;
    duration: string;
    completed: boolean;
  }[];
}

export interface MonthlyStat {
  monthKhmer: string;
  percentage: number;
}

export interface UserProfile {
  nameKhmer: string;
  email: string;
  isPremium: boolean;
  avatarUrl: string;
  lessonsCompleted: number;
  totalLessons: number;
  exercisesDone: number;
  totalExercises: number;
  score: number;
  percentile: string;
}
