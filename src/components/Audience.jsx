import React from 'react';
import { User, Briefcase, Check, ArrowRight } from 'lucide-react';

export default function Audience() {
  const seekerBenefits = [
    'Create your profile once and use it across opportunities',
    'Get matched with relevant openings',
    'Track where each application stands',
    'Receive job match and shortlist updates directly on WhatsApp without missing them'
  ];

  const recruiterBenefits = [
    'Reach candidates who match your role requirements',
    'Review structured candidate profiles',
    'Manage applications from one place',
    'Communicate faster with shortlisted candidates'
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* For Seekers */}
        <div id="for-seekers" data-aos="fade-right" className="p-8 rounded-3xl bg-emerald-50/40 dark:bg-slate-900/40 border border-emerald-100/30 dark:border-slate-800/50 flex flex-col justify-between space-y-6 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 scroll-mt-24">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              <User className="w-3.5 h-3.5" /> For Job Seekers
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-tight">
              Move closer to the right job.
            </h3>
            <ul className="space-y-3 pt-2">
              {seekerBenefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                  <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full sm:w-fit px-6 py-3.5 rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white font-semibold flex items-center justify-center gap-2 hover:bg-emerald-700 dark:hover:bg-emerald-600 active-press transition-all shadow-md shadow-emerald-600/10">
            Join as Job Seeker <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* For Recruiters */}
        <div id="for-recruiters" data-aos="fade-left" className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/20 border border-slate-200/40 dark:border-slate-800/30 flex flex-col justify-between space-y-6 hover:shadow-xl hover:shadow-slate-500/10 transition-all duration-300 scroll-mt-24">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
              <Briefcase className="w-3.5 h-3.5" /> For Hiring Teams
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-tight">
              Find better-fit candidates faster.
            </h3>
            <ul className="space-y-3 pt-2">
              {recruiterBenefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                  <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full sm:w-fit px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-slate-950 text-white border border-slate-800 dark:border-slate-850 font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-slate-900 active-press transition-all shadow-md">
            Join as Hiring Team <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
      </div>
    </section>
  );
}
