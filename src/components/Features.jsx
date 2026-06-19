import React from 'react';
import { Briefcase, ShieldCheck, LayoutDashboard, MessageSquare, ArrowRight } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-950/20 border-y border-slate-100 dark:border-slate-900 px-6">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
            From job search to job placement
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto text-center">
            Udhavimaghil is built to make hiring direct, organized, and seamless for both candidates and companies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div data-aos="fade-up" data-aos-delay="100" className="md:col-span-2 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/80 hover:border-emerald-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex-1 space-y-4 text-left">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Relevant Job Alerts</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
                  Get matched with openings based on your profile, skills, role preference, and availability. No manual searching required.
                </p>
              </div>
            </div>
            <div className="w-full md:w-auto shrink-0 flex justify-center">
              <div className="bg-slate-50 dark:bg-slate-950/40 p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/80 flex flex-col gap-3 font-sans w-full max-w-[280px]">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">98% Match</span>
                  <span className="text-[10px] text-slate-400 font-medium">Just now</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-none">Senior React Developer</h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block">Emerald Tech • Remote</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="text-[9px] bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded border border-slate-200/20">React</span>
                  <span className="text-[9px] bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded border border-slate-200/20">TypeScript</span>
                  <span className="text-[9px] bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded border border-slate-200/20">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div data-aos="fade-up" data-aos-delay="200" className="md:col-span-1 p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/80 hover:border-emerald-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
            <div className="space-y-4 text-left">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Verified Hiring</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  All job posts will be from trusted sources. Recruiters are verified before they can create a job posting.
                </p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex justify-start">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50/80 dark:bg-emerald-950/20 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/10">
                <ShieldCheck className="w-3 h-3 stroke-[2.5]" />
                Verified Recruiters
              </span>
            </div>
          </div>
          
          {/* Card 3 */}
          <div data-aos="fade-up" data-aos-delay="300" className="md:col-span-1 p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/80 hover:border-emerald-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
            <div className="space-y-4 text-left">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <LayoutDashboard className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">End to end status</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Track every stage of your application. Seekers will know each and every status and step in the job flow.
                </p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5 text-[9px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                <span className="text-emerald-600 dark:text-emerald-400">Applied</span>
                <ArrowRight className="w-2.5 h-2.5 text-slate-400" />
                <span>Shortlisted</span>
                <ArrowRight className="w-2.5 h-2.5 text-slate-400" />
                <span>Hired</span>
              </div>
            </div>
          </div>
          
          {/* Card 4 */}
          <div data-aos="fade-up" data-aos-delay="400" className="md:col-span-2 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/80 hover:border-emerald-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex-1 space-y-4 text-left">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Faster Candidate Communication</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
                  Receive important updates through WhatsApp, so you never miss new job matches or application shortlist updates.
                </p>
              </div>
            </div>
            <div className="w-full md:w-auto shrink-0 flex justify-center">
              <div className="bg-[#efeae2] dark:bg-slate-950/40 p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/80 flex flex-col gap-2 font-whatsapp w-full max-w-[280px]">
                <div className="bg-white p-2.5 rounded-[8px] rounded-tl-none shadow-sm relative">
                  <p className="text-[10.5px] leading-relaxed text-[#111b21] font-sans">
                    🔔 <strong>Application Shortlisted!</strong><br/>
                    NorBit Solutions has shortlisted you. Visit your dashboard to view next steps.
                  </p>
                  <span className="text-[8px] text-[#667781] float-right mt-1 font-sans">12:35 PM</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
