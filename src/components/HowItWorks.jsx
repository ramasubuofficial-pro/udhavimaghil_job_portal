import React from 'react';
import { Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Build Profile',
      desc: 'Create your detailed professional profile once. Set your role preferences, core skills, and availability.'
    },
    {
      num: '02',
      title: 'Get Matched',
      desc: 'Get matched with relevant openings. Receive instant alert notifications delivered straight to your WhatsApp.'
    },
    {
      num: '03',
      title: 'Apply & Pitch',
      desc: 'Apply instantly with a brief pitch. Your full CV and details are protected, shared only upon shortlisting.'
    },
    {
      num: '04',
      title: 'Interview & Hire',
      desc: 'Track each application stage in real-time, schedule interviews, and finalize your offer cleanly.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6 max-w-6xl mx-auto border-t border-slate-100 dark:border-slate-900 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold shadow-sm">
              <Sparkles className="w-3 h-3 text-emerald-500" />
              <span>The Placement Pipeline</span>
            </div>
            <div className="max-w-xl pr-0 lg:pr-12">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
                From application to placement, mapped out.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Udhavimaghil simplifies candidate-company matching into a direct, high-signal placement pipeline. Follow these four steps to secure your next role.
              </p>
              <div className="hidden lg:block">
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-7 space-y-1">
          {steps.map((step, idx) => (
            <div key={step.num} data-aos="fade-up" data-aos-delay={(idx + 1) * 100} className="group relative flex gap-6 pb-10 last:pb-0">
              <div className="flex flex-col items-center shrink-0">
                <div className="h-10 w-10 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300 z-10 shadow-sm">
                  {step.num}
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-px flex-1 bg-slate-200 dark:bg-slate-800 my-2 group-hover:bg-emerald-500/30 transition-colors duration-300"></div>
                )}
              </div>
              <div className="flex-1 pt-1.5">
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-2.5 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div data-aos="fade-up" data-aos-delay="200" className="mt-12 md:mt-16 flex justify-center">
        <a href="#signup-form" className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 text-white font-bold tracking-wide flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/20 dark:shadow-emerald-500/10 hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group/btn border border-emerald-500/10">
          <span>Join the Waitlist Now</span>
          <svg className="w-4.5 h-4.5 group-hover/btn:translate-x-1.5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
