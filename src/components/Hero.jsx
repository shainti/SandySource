import React, { useState, useEffect } from 'react';

const Hero = () => {
  const services = [
    "Web Development",
    "Web Design",
    "Digital Marketing",
    "E-Commerce Solutions",
    "AI Agents"
  ];

  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section id="home" className="relative h-[55vh] sm:h-auto min-h-[400px] sm:min-h-[80vh] pt-12 sm:pt-24 pb-8 sm:pb-20 overflow-hidden bg-white flex flex-col items-center justify-center">
      {/* Clean Static Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
        {/* Main Heading - Optimized for One-Page Fit */}
        <div className="max-w-[1100px] mx-auto mt-2 sm:mt-6 relative">
          
          {/* Entire Text Block Wrapper for Background Animation */}
          <div className="relative z-10 w-full py-2 sm:py-4 mb-2 sm:mb-4">
            {/* Detailed Air/Water Flow - Centered behind text */}
            <div className="absolute inset-x-0 inset-y-[-15%] w-[140vw] left-1/2 -translate-x-1/2 pointer-events-none z-[-1] opacity-75 blur-[7px]">
               <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none" preserveAspectRatio="none">
                 {[40, 120, 200, 280, 360, 440, 520, 580].map((yBase, i) => {
                   const stepX = 150; 
                   const amp = 30 + (i % 3) * 10;
                   
                   let d = `M -300 ${yBase}`;
                   for (let x = -300; x <= 1300; x += stepX) {
                     const up = (x / stepX) % 2 === 0;
                     const nextX = x + stepX;
                     const cp1x = x + stepX / 3;
                     const cp2x = x + (stepX * 2) / 3;
                     const ny = up ? yBase - amp : yBase + amp;
                     d += ` C ${cp1x} ${ny}, ${cp2x} ${ny}, ${nextX} ${yBase}`;
                   }
                   
                   const duration = `${15 + (i % 5) * 3}s`;
                   const delay = `-${i * 2}s`; 
                   
                   return (
                     <path
                       key={`snake-span-onepage-${i}`}
                       d={d}
                       stroke={i % 2 === 0 ? "url(#airWaterGrad)" : "url(#airWaterGrad2)"}
                       strokeWidth={10 + (i % 4) * 3}
                       strokeLinecap="round"
                       className="animate-snake-walk" 
                       style={{ animationDelay: delay, animationDuration: duration }}
                     />
                   );
                 })}
                 <defs>
                   <linearGradient id="airWaterGrad" x1="0" y1="0" x2="1" y2="0">
                     <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                     <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8" />
                     <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                   </linearGradient>
                   <linearGradient id="airWaterGrad2" x1="0" y1="0" x2="1" y2="0">
                     <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
                     <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.75" />
                     <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                   </linearGradient>
                 </defs>
               </svg>
            </div>

            <h1 className="text-[28px] xs:text-[36px] sm:text-[54px] md:text-[64px] lg:text-[76px] font-medium leading-[1.2] mb-4 sm:mb-6 tracking-tight text-[#1E293B]">
              Scale Your Digital Presence <br className="xs:hidden" /> With Expert{' '}
              <div className="relative block xs:inline-block h-[1.1em] overflow-visible align-bottom text-center xs:text-left min-w-[200px] xs:min-w-[280px] sm:min-w-[480px]">
                <span
                  key={currentService}
                  className="absolute inset-y-0 left-1/2 -translate-x-1/2 xs:left-0 xs:translate-x-0 flex items-center animate-word-swipe font-serif italic text-black whitespace-nowrap"
                >
                  {services[currentService]}
                </span>
              </div>
            </h1>
            
            <p className="text-[#64748B] text-[14px] sm:text-[18px] leading-relaxed max-w-[800px] mx-auto mb-1 sm:mb-2 font-normal">
              SandySource is a premium freelance agency delivering top-tier web development, stunning design, and intelligent AI solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-6 relative z-20">
            <a
              href="#work"
              className="w-full sm:w-auto bg-gradient-to-b from-[#3B82F6] to-[#2563EB] text-white px-10 py-3.5 rounded-full font-medium text-[16px] transition-all duration-300 shadow-[0_8px_25px_-8px_rgba(37,99,235,0.6)] hover:shadow-[0_12px_30px_-8px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 border border-[#60A5FA]/20 text-center"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto bg-white text-[#475569] px-10 py-3.5 rounded-full font-medium text-[16px] transition-all duration-300 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_35px_-8px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 border border-[#F1F5F9] text-center"
            >
              Hire Us
            </a>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Hero
