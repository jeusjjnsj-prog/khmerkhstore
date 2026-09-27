import React, { useState } from 'react';
import { User, Mail, Phone, Lock, Eye, EyeOff } from 'lucide-react';

interface RegisterScreenProps {
  onSuccessRegister: () => void;
  onNavigateToLogin: () => void;
}

export const RegisterScreen: React.FC<RegisterScreenProps> = ({
  onSuccessRegister,
  onNavigateToLogin,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccessRegister();
  };

  return (
    <div className="relative flex flex-col justify-between min-h-full h-full bg-[#0b0b0e] text-slate-100 overflow-y-auto p-5">
      <div className="relative z-10 w-full max-w-sm mx-auto space-y-5 pt-3">
        {/* Header */}
        <div className="text-center space-y-1">
          <h2 className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
            បង្កើតគណនី
          </h2>
          <p className="text-xs font-semibold text-amber-400/90">
            Khmer Learning
          </p>
        </div>

        {/* Inputs form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Full Name */}
          <div className="relative flex items-center">
            <div className="absolute left-3.5 text-zinc-400">
              <User size={18} />
            </div>
            <input
              id="register-name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="ឈ្មោះពេញ"
              className="w-full bg-[#141419] border border-zinc-800 focus:border-amber-400 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder:text-zinc-500 focus:outline-hidden transition-all"
              required
            />
          </div>

          {/* Email */}
          <div className="relative flex items-center">
            <div className="absolute left-3.5 text-zinc-400">
              <Mail size={18} />
            </div>
            <input
              id="register-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="អ៊ីមែល"
              className="w-full bg-[#141419] border border-zinc-800 focus:border-amber-400 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder:text-zinc-500 focus:outline-hidden transition-all"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="relative flex items-center">
            <div className="absolute left-3.5 text-zinc-400">
              <Phone size={18} />
            </div>
            <input
              id="register-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="លេខទូរស័ព្ទ"
              className="w-full bg-[#141419] border border-zinc-800 focus:border-amber-400 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder:text-zinc-500 focus:outline-hidden transition-all"
              required
            />
          </div>

          {/* Password */}
          <div className="relative flex items-center">
            <div className="absolute left-3.5 text-zinc-400">
              <Lock size={18} />
            </div>
            <input
              id="register-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="ពាក្យសម្ងាត់"
              className="w-full bg-[#141419] border border-zinc-800 focus:border-amber-400 rounded-xl pl-10 pr-10 py-2.5 text-xs text-slate-100 placeholder:text-zinc-500 focus:outline-hidden transition-all"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 text-zinc-400 hover:text-zinc-200"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative flex items-center">
            <div className="absolute left-3.5 text-zinc-400">
              <Lock size={18} />
            </div>
            <input
              id="register-confirm-password"
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="បញ្ជាក់ពាក្យសម្ងាត់"
              className="w-full bg-[#141419] border border-zinc-800 focus:border-amber-400 rounded-xl pl-10 pr-10 py-2.5 text-xs text-slate-100 placeholder:text-zinc-500 focus:outline-hidden transition-all"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3.5 text-zinc-400 hover:text-zinc-200"
            >
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {/* Submit button */}
          <button
            id="btn-register-submit"
            type="submit"
            className="w-full mt-2 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-neutral-950 font-bold text-xs shadow-lg shadow-amber-950/40 hover:brightness-110 active:scale-98 transition-all cursor-pointer"
          >
            បង្កើតគណនី
          </button>
        </form>

        {/* Back to login */}
        <div className="text-center pt-2">
          <p className="text-xs text-zinc-400">
            មានគណនីរួចហើយ?{' '}
            <button
              id="btn-goto-login"
              type="button"
              onClick={onNavigateToLogin}
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 ml-1 cursor-pointer"
            >
              ចូលប្រើប្រាស់
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
