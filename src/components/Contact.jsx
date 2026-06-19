import React from 'react';
import { Mail, Check, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card */}
        <div data-aos="fade-up" className="p-8 rounded-3xl bg-emerald-50/40 dark:bg-slate-900/40 border border-emerald-100/30 dark:border-slate-800/50 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Community Updates
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-tight">
              Join our official WhatsApp Channel
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Get instant notifications on new placements, curated job alerts, and priority access to platform updates.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>100% Privacy Protected</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>No Chat Spam</span>
              </div>
            </div>
          </div>
          <a href="#join-channel" className="w-full sm:w-fit px-5 py-3 rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white font-semibold flex items-center justify-center gap-2 hover:bg-emerald-700 dark:hover:bg-emerald-600 active-press transition-all shadow-md">
            <svg className="w-4 h-4 fill-current shrink-0 text-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
            Join Channel
          </a>
        </div>

        {/* Right Card */}
        <div data-aos="fade-up" data-aos-delay="100" className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/20 border border-slate-200/40 dark:border-slate-800/30 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
             <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700">
              <Mail className="w-3 h-3" /> Get in Touch
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-tight">
              General Inquiries
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Have questions about the Udhavimaghil platform, or want to get in touch with our team? Send us an email and we will get back to you.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 pt-2">
               <Mail className="w-3.5 h-3.5 text-emerald-500" />
               <a href="mailto:jobsupport@udhavimaghil.com" className="hover:text-emerald-600 transition-colors">jobsupport@udhavimaghil.com</a>
            </div>
          </div>
          <a href="mailto:jobsupport@udhavimaghil.com" className="w-full sm:w-fit px-5 py-3 rounded-xl bg-slate-700 dark:bg-slate-800 text-white font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-slate-700 active-press transition-all shadow-md">
            <Mail className="w-4 h-4" /> Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
