import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Audience from './components/Audience';
import Waitlist from './components/Waitlist';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Use dynamic import for AOS to avoid SSR issues if this were Next.js, but since it's Vite it's fine.
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 relative overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-500/5"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-500/10 blur-[120px] dark:bg-teal-500/5"></div>
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-[#25D366]/5 blur-[80px] dark:bg-[#25D366]/2"></div>
        <div className="absolute inset-0 dots-grid opacity-70"></div>
      </div>

      <Header />
      
      <main className="flex-1 relative z-10">
        <Hero />
        <HowItWorks />
        <Features />
        <Audience />
        <Waitlist />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;