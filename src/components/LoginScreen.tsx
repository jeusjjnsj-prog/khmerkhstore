import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import { KLLogo } from './KLLogo';
import { AngkorSilhouette } from './AngkorSilhouette';

interface LoginScreenProps {
  onSuccessLogin: () => void;
  onNavigateToRegister: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  onSuccessLogin,
  onNavigateToRegister,
}) => {
  const [email, setEmail] = useState('sovan.somang@email.com');
  const [password, setPassword] = useState('••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSuccessLogin();
    }, 600);
  };

  return (
    <div className="relative flex flex-col justify-between min-h-full h-full bg-[#0b0b0e] text-slate-100 overflow-y-auto p-5">
      {/* Top subtle glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-sm mx-auto space-y-6 pt-4">
        {/* Logo Section */}
        <div className="flex flex-col items-center text-center">
          <KLLogo size="md" showText={true} />
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="space-y-3.5 pt-2">
          {/* Email field */}
          <div className="space-y-1">
            <div className="relative flex items-center">
              <div className="absolute left-3.5 text-zinc-400">
                <User size={18} />
              </div>
              <input
                id="login-input-email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="អ៊ីមែល / Email"
                className="w-full bg-[#141419] border border-zinc-800 focus:border-amber-400 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder:text-zinc-500 focus:outline-hidden transition-all"
                required
              />
            </div>
          </div>

          {/* Password field */}
          <div className="space-y-1">
            <div className="relative flex items-center">
              <div className="absolute left-3.5 text-zinc-400">
                <Lock size={18} />
              </div>
              <input
                id="login-input-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="ពាក្យសម្ងាត់ / Password"
                className="w-full bg-[#141419] border border-zinc-800 focus:border-amber-400 rounded-xl pl-10 pr-10 py-2.5 text-xs text-slate-100 placeholder:text-zinc-500 focus:outline-hidden transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 text-zinc-400 hover:text-zinc-200"
                aria-label="បង្ហាញពាក្យសម្ងាត់"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end pt-0.5">
            <button
              type="button"
              className="text-[11px] text-amber-400 hover:text-amber-300 transition-colors"
            >
              ភ្លេចពាក្យសម្ងាត់?
            </button>
          </div>

          {/* Golden Submit Button */}
          <button
            id="btn-login-submit"
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-neutral-950 font-bold text-xs shadow-lg shadow-amber-950/40 hover:brightness-110 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <span>ចូលប្រើប្រាស់</span>
            )}
          </button>
        </form>

        {/* Social Logins */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-zinc-800"></div>
            <span className="text-[10px] text-zinc-400">ឬចូលតាមរយៈ</span>
            <div className="flex-1 h-px bg-zinc-800"></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={onSuccessLogin}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#141419] border border-zinc-800 hover:border-zinc-700 active:scale-95 transition-all text-xs font-medium cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
                />
                <path
                  fill="#4285F4"
                  d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12 0 12s.7 2.3 1.9 4.7l3.7-1.9z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2-6.4-4.8L1.9 16.4C3.7 20.1 7.5 23 12 23z"
                />
              </svg>
              <span>Google</span>
            </button>

            <button
              type="button"
              onClick={onSuccessLogin}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#141419] border border-zinc-800 hover:border-zinc-700 active:scale-95 transition-all text-xs font-medium cursor-pointer"
            >
              <svg className="w-4 h-4" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </button>
          </div>
        </div>

        {/* Register prompt */}
        <div className="text-center pt-2">
          <p className="text-xs text-zinc-400">
            មិនទាន់មានគណនីទេ?{' '}
            <button
              id="btn-goto-register"
              type="button"
              onClick={onNavigateToRegister}
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 ml-1 cursor-pointer"
            >
              ចុះឈ្មោះឥឡូវនេះ
            </button>
          </p>
        </div>
      </div>

      {/* Angkor Wat at bottom */}
      <div className="relative z-10 w-full max-w-sm mx-auto mt-6">
        <AngkorSilhouette opacity={0.35} />
      </div>
    </div>
  );
};
