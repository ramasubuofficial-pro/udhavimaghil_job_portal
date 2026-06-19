import React, { useState } from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-panel backdrop-blur-md transition-all border-b border-slate-100 dark:border-slate-900">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer select-none">
          <img src="/images/udhavimaghil-logo.png" alt="Udhavimaghil" className="h-10 w-auto" />
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight leading-none text-emerald-600 dark:text-emerald-400">Udhavimaghil</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold tracking-wider uppercase mt-0.5">Job Portal</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600 dark:text-slate-300">
          <a href="#how-it-works" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors relative py-1 group">
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 transition-all group-hover:w-full"></span>
          </a>
          <a href="#for-seekers" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors relative py-1 group">
            For Seekers
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 transition-all group-hover:w-full"></span>
          </a>
          <a href="#for-recruiters" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors relative py-1 group">
            For Recruiters
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 transition-all group-hover:w-full"></span>
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <a href="#join-channel" className="inline-flex items-center justify-center gap-2 h-10 px-4 text-sm font-semibold rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/40 text-emerald-600 dark:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all duration-200 select-none shadow-sm">
            <svg className="w-4 h-4 fill-current shrink-0 text-[#25D366]" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
            Join Channel
          </a>
          <a href="#signup-form" className="inline-flex items-center justify-center h-10 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white text-sm font-semibold shadow-sm active-press transition-all">
            Join Waitlist
          </a>
        </div>
        <button
          className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-slate-600 dark:text-slate-300 active:scale-95 duration-150"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
      {/* Mobile Menu logic would go here */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-slate-200/60 dark:border-slate-900 shadow-lg py-6 px-6 flex flex-col gap-5 z-40 transition-all duration-300">
          <nav className="flex flex-col gap-4 font-semibold text-base text-slate-700 dark:text-slate-300">
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-left py-1.5 border-b border-slate-100 dark:border-slate-900/50">How It Works</a>
            <a href="#for-seekers" onClick={() => setIsMenuOpen(false)} className="text-left py-1.5 border-b border-slate-100 dark:border-slate-900/50">For Seekers</a>
            <a href="#for-recruiters" onClick={() => setIsMenuOpen(false)} className="text-left py-1.5 border-b border-slate-100 dark:border-slate-900/50">For Recruiters</a>
            
            <div className="flex flex-col gap-3 mt-2">
              <a href="#join-channel" onClick={() => setIsMenuOpen(false)} className="inline-flex items-center justify-center gap-2 h-12 w-full text-sm font-semibold rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-emerald-600 dark:text-emerald-400">
                <svg className="w-5 h-5 fill-current shrink-0 text-[#25D366]" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
                Join Channel
              </a>
              <a href="#signup-form" onClick={() => setIsMenuOpen(false)} className="inline-flex items-center justify-center h-12 w-full rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white text-sm font-semibold shadow-sm">
                Join Waitlist
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
