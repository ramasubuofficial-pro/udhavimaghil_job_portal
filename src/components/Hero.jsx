import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ChevronLeft, Plus, StickyNote, Camera, Mic } from 'lucide-react';

export default function Hero() {
  const [chatStep, setChatStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setChatStep(1), 800);
    const t2 = setTimeout(() => setChatStep(2), 2500);
    const t3 = setTimeout(() => setChatStep(3), 4000);
    const t4 = setTimeout(() => setChatStep(4), 6500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <section className="relative pt-10 pb-20 md:pt-20 md:pb-32 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Side: Text and Buttons */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
          <div data-aos="fade-up" className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-rose-400/20 dark:border-rose-550/20 bg-gradient-to-r from-rose-400 to-rose-500 dark:from-rose-650 dark:to-rose-750 text-white text-xs font-semibold self-center lg:self-start animate-pulse-subtle hover:scale-[1.02] transition-all duration-300 select-none">
            <Sparkles className="w-3 h-3 text-rose-100 fill-rose-200/20" />
            <span>Launching soon • Join Waitlist now</span>
          </div>
          
          <h1 data-aos="fade-up" data-aos-delay="100" style={{ textWrap: 'balance' }} className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Find the right job faster.
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mt-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Udhavimaghil helps job seekers connect with verified companies, apply to relevant openings, and move through the hiring process with direct WhatsApp updates, clarity, and less noise.
          </p>
          
          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a href="#signup-form" className="px-7 py-4 rounded-xl bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active-press transition-all">
              Join the Waitlist <ArrowRight className="w-4.5 h-4.5" />
            </a>
            <a href="#join-channel" className="px-7 py-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/40 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 font-semibold active-press transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5 fill-current shrink-0 text-[#25D366]" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
              Join Channel
            </a>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col space-y-2 lg:items-start items-center pt-2">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Built for job seekers, recruiters, and placement teams.</p>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Currently in active development</span>
            </div>
          </div>
        </div>

        {/* Right Side: Phone Mockup */}
        <div data-aos="fade-left" data-aos-delay="300" className="lg:col-span-5 flex justify-center w-full mt-8 lg:mt-0">
          <div className="relative w-full max-w-[320px] sm:max-w-[350px] aspect-[9/18.5] bg-slate-950 rounded-[44px] p-1.5 shadow-2xl border-[3px] border-slate-800 dark:border-slate-800 ring-1 ring-slate-900/10 dark:ring-white/10 animate-float mx-auto">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-950 rounded-full z-30 flex items-center justify-center">
              <div className="w-12 h-1 bg-slate-800 rounded-full"></div>
            </div>
            <div className="w-full h-full rounded-[38px] overflow-hidden flex flex-col relative bg-[#F5F2EB] z-20 border border-slate-900 font-whatsapp">
              <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-[0.98]">
                <img alt="WhatsApp Background" className="object-cover w-full h-full" src="/images/whatsapp-bg.png" />
              </div>
              
              <div className="h-9 w-full flex items-center justify-between px-6 text-[10px] font-semibold text-[#000000] select-none absolute top-0 left-0 right-0 z-30 pointer-events-none">
                <span className="font-sans">9:28</span>
                <div className="flex items-center gap-1.5">
                  <div className="flex items-end gap-[1.5px] h-[7px]">
                    <div className="w-[2px] h-[3px] bg-[#000000] rounded-[0.5px]"></div>
                    <div className="w-[2px] h-[4px] bg-[#000000] rounded-[0.5px]"></div>
                    <div className="w-[2px] h-[5px] bg-[#000000] rounded-[0.5px]"></div>
                    <div className="w-[2px] h-[6px] bg-[#000000] rounded-[0.5px]"></div>
                    <div className="w-[2px] h-[7px] bg-[#000000] rounded-[0.5px]"></div>
                  </div>
                  <svg className="w-3 h-3 fill-current text-[#000000]" viewBox="0 0 16 16"><path d="M15.3 4.8a11.2 11.2 0 00-14.6 0 .5.5 0 000 .7l.8.8c.2.2.5.2.7 0a9.2 9.2 0 0111.6 0 .5.5 0 00.7 0l.8-.8a.5.5 0 000-.7zM12.2 7.7a7.2 7.2 0 00-8.4 0 .5.5 0 000 .7l.8.8c.2.2.5.2.7 0a5.2 5.2 0 014.4 0 .5.5 0 00.7 0l.8-.8a.5.5 0 000-.7zM9.1 10.6a3.2 3.2 0 00-2.2 0 .5.5 0 000 .7l.8.8c.2.2.6.2.8 0l.8-.8a.5.5 0 000-.7z"></path></svg>
                  <div className="flex items-center gap-[1px]">
                    <span className="text-[9px] font-sans scale-90 text-[#000000]">72%</span>
                    <div className="w-[17px] h-[9px] border border-[#000000]/80 rounded-[2.5px] p-[1px] flex items-center relative">
                      <div className="h-full w-[72%] bg-[#000000] rounded-[1px]"></div>
                      <div className="w-[1.5px] h-[3.5px] bg-[#000000]/85 absolute -right-[2.5px] top-[2px] rounded-r-[0.5px]"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#f0f2f5] text-[#111b21] px-3 pt-9 pb-2 flex items-center justify-between shadow-sm relative z-20 select-none">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center text-[#008069] cursor-pointer hover:opacity-85 pr-0.5">
                    <ChevronLeft className="w-5 h-5" />
                  </div>
                  <div className="h-8 w-8 rounded-full bg-white border border-[#eae6df] flex items-center justify-center shrink-0 overflow-hidden relative shadow-inner">
                    <img src="/images/udhavimaghil-logo.png" alt="U" className="h-full w-full object-contain p-0.5" />
                  </div>
                  <div className="flex flex-col ml-0.5">
                    <div className="bg-[#25D366] px-1.5 py-0.5 rounded flex items-center justify-center">
                      <span className="font-semibold text-[13px] leading-tight text-[#111b21]">Udhavimaghil</span>
                    </div>
                    <span className="text-[9.5px] text-[#667781] font-normal leading-none mt-0.5">Business account</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 p-3 overflow-y-auto space-y-3 flex flex-col no-scrollbar relative z-10 text-[10px] sm:text-[11px] leading-relaxed bg-transparent">
                <div className="self-center bg-[#ffe596]/70 text-[#54656f] rounded-lg px-3 py-1.5 text-[8.5px] text-center max-w-[85%] shadow-sm border border-[#ffe596]/10">
                  🔒 Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them.
                </div>
                <div className="self-center bg-[#ffffff] text-[#54656f] rounded-md px-2.5 py-0.5 text-[9px] font-semibold my-1 select-none uppercase tracking-wider border border-[#eae6df]/60">
                  Today
                </div>

                {chatStep === 1 && (
                  <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 w-fit shadow-sm relative animate-fade-in-up">
                    <div className="flex items-center gap-1 h-3">
                      <span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                )}

                {chatStep >= 2 && (
                  <div className="bg-white text-[#111b21] rounded-2xl rounded-tl-sm p-2 w-[85%] shadow-sm relative animate-fade-in-up">
                    <p className="font-semibold text-[#00a884] mb-1">💼 New Job Alert!</p>
                    <p className="font-bold">Junior Product Designer <span className="font-normal text-[#54656f]">at NorBit Solutions</span></p>
                    <p className="text-[#54656f]">📍 Remote<br/>💰 $70k - $90k/yr<br/>⏱️ Full-time</p>
                    <p className="mt-2">We found a match based on your profile!</p>
                    <p className="mt-2 text-[#54656f]">Read details and apply directly on our portal:<br/><a href="#" className="text-[#027eb5]">🔗 udhavimaghil.com/apply</a></p>
                    <span className="text-[9px] text-[#667781] float-right mt-1">12:30 PM</span>
                  </div>
                )}

                {chatStep === 3 && (
                  <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 w-fit shadow-sm relative animate-fade-in-up">
                    <div className="flex items-center gap-1 h-3">
                      <span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                )}

                {chatStep >= 4 && (
                  <div className="bg-white text-[#111b21] rounded-2xl rounded-tl-sm p-2 w-[85%] shadow-sm relative animate-fade-in-up">
                    <p className="font-semibold text-[#00a884] mb-1">🔔 Application Status Update</p>
                    <p className="mt-1"><span className="font-bold">NorBit Solutions</span> has reviewed your application for <span className="font-bold">Junior Product Designer</span> and shortlisted you!</p>
                    <p className="mt-2 text-[#54656f]">To upload your CV and schedule your interview, please visit your portal dashboard:<br/><a href="#" className="text-[#027eb5]">🔗 udhavimaghil.com/dashboard</a></p>
                    <span className="text-[9px] text-[#667781] float-right mt-1">12:35 PM</span>
                  </div>
                )}
              </div>
              
              <div className="p-2 bg-[#f0f2f5] flex items-center gap-2.5 z-20 select-none border-t border-[#eae6df]/80">
                <Plus className="w-5.5 h-5.5 text-[#54656f] cursor-pointer hover:text-[#222] shrink-0" />
                <div className="flex-1 bg-[#ffffff] border border-[#eae6df]/85 rounded-full px-3.5 py-1.5 text-[#667781] text-[11px] flex items-center justify-between cursor-text shadow-sm">
                  <span>Message</span>
                  <StickyNote className="w-4 h-4 text-[#54656f] cursor-pointer hover:text-[#222] shrink-0" />
                </div>
                <Camera className="w-5.5 h-5.5 text-[#54656f] cursor-pointer hover:text-[#222] shrink-0" />
                <Mic className="w-5.5 h-5.5 text-[#54656f] cursor-pointer hover:text-[#222] shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
