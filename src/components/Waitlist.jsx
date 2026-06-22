import React, { useState } from 'react';
import { ArrowRight, Check, Loader2, User, Briefcase, Mail, Phone } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

export default function Waitlist() {
  const [userType, setUserType] = useState('seeker');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const { data, error } = await supabase
        .from('waitlist')
        .insert([{ email, user_type: userType, name, phone }]);
        
      if (error) {
        if (error.code === '23505') { // Unique violation
          setErrorMessage('This email is already on the waitlist.');
        } else {
          setErrorMessage(`Database error: ${error.message || 'Something went wrong.'}`);
          console.error('Supabase error:', error);
        }
        setStatus('error');
      } else {
        setStatus('success');
        setName('');
        setEmail('');
        setPhone('');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Network error. Please try again later.');
      setStatus('error');
    }
  };

  return (
    <section id="signup-form" className="py-20 px-6 bg-slate-50 dark:bg-slate-950/20 border-t border-slate-100 dark:border-slate-900 relative">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left text */}
        <div data-aos="fade-right" className="lg:col-span-5 flex flex-col space-y-6 text-center lg:text-left">
          <div>
            <h2 className="font-display font-extrabold text-3xl text-slate-900 dark:text-white leading-tight">
              Secure your placement spot.
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
              We are actively building Udhavimaghil. Join the waitlist to receive priority matching and placement invitations the second we go live.
            </p>
          </div>
          <ul className="space-y-4 pt-2 text-left max-w-sm mx-auto lg:mx-0">
            <li className="flex items-start gap-3.5 text-sm text-slate-600 dark:text-slate-300">
              <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              <span>Early access to the platform</span>
            </li>
            <li className="flex items-start gap-3.5 text-sm text-slate-600 dark:text-slate-300">
              <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              <span>Priority matching upon launch</span>
            </li>
            <li className="flex items-start gap-3.5 text-sm text-slate-600 dark:text-slate-300">
              <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              <span>Updates on development progress</span>
            </li>
          </ul>
        </div>

        {/* Right form */}
        <div data-aos="fade-left" className="lg:col-span-7 w-full max-w-md mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200/60 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50">
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-6">Join Waitlist</h3>
            
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-8 space-y-4 text-center">
                <div className="h-16 w-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-2">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white">You're on the list!</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Thank you for joining. We'll be in touch soon.
                </p>
                <button onClick={() => setStatus('idle')} className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 mt-4">
                  Join with another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Account Type toggle */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">I am a</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      type="button"
                      onClick={() => setUserType('seeker')}
                      className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border font-medium text-sm transition-all duration-200 ${
                        userType === 'seeker' 
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 shadow-sm' 
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <User className="w-4 h-4" /> Job Seeker
                    </button>
                    <button 
                      type="button"
                      onClick={() => setUserType('recruiter')}
                      className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border font-medium text-sm transition-all duration-200 ${
                        userType === 'recruiter' 
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 shadow-sm' 
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <Briefcase className="w-4 h-4" /> Hiring Team
                    </button>
                  </div>
                </div>

                {/* Full Name input */}
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-slate-400" />
                    </div>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`block w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-950 border ${status === 'error' ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-colors`}
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email input */}
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {userType === 'recruiter' ? 'Work Email' : 'Email Address'}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                    </div>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`block w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-950 border ${status === 'error' ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-colors`}
                      placeholder={userType === 'recruiter' ? "john@company.com" : "john@example.com"}
                    />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-500 text-xs font-medium mt-1.5">{errorMessage}</p>
                  )}
                </div>

                {/* Phone Number input */}
                <div className="space-y-3">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {userType === 'recruiter' ? 'Phone Number (Optional)' : 'Phone Number (For WhatsApp)'}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-slate-400" />
                    </div>
                    <input 
                      type="tel" 
                      id="phone" 
                      required={userType === 'seeker'}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`block w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-950 border ${status === 'error' ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-colors`}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active-press transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
                  ) : (
                    <>Join Waitlist <ArrowRight className="w-4.5 h-4.5" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
        
      </div>
    </section>
  );
}
