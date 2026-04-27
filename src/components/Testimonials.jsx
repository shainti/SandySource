import React, { useState, useEffect, useCallback } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      quote: "Before SandySource, our team struggled with visibility and missed deadlines. Now everything is clear, organized, and easy to track. Their agents are phenomenal.",
      author: "Shaurya Sharma",
      role: "Product Manager, Bharat Tech"
    },
    {
      quote: "SandySource transformed our digital presence. Their attention to detail and creative vision is unmatched. They don't just build; they innovate with precision.",
      author: "Anjali Gupta",
      role: "CEO, Creative Catalyst"
    },
    {
      quote: "The most seamless collaboration we've ever had. Their AI solutions are top-tier and the results speak for themselves. Highly recommended for growth.",
      author: "Rohan Varma",
      role: "Founder, Indica Solutions"
    },
    {
      quote: "Strategic and precise. SandySource engineers solutions that are not just beautiful but technically superior. A true partner for our digital journey.",
      author: "Priya Nair",
      role: "Director, Keraline"
    },
    {
      quote: "Their commitment to delivery and architecture is impressive. Scalable systems delivered on time. They are the best in the business.",
      author: "Aryan Singh",
      role: "Tech Lead, Delhi Systems"
    }
  ];

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % (testimonials.length - 1));
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + (testimonials.length - 1)) % (testimonials.length - 1));
    setIsAutoPlaying(false);
  };

  const handleNextManual = () => {
    nextTestimonial();
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-white overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 on-scroll-reveal animate-fade-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
            ✦ Reviews
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Loved by Teams Who Value <br />
            <span className="text-blue-600 font-serif italic">Clarity and Performance</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Grid Layout for 2 Reviews */}
          <div 
            className="flex flex-col md:flex-row gap-6 transition-all duration-1000 ease-in-out" 
            style={{ transform: `translateX(0)` }}
          >
            {[0, 1].map((offset) => {
              const index = (activeIndex + offset) % testimonials.length;
              const item = testimonials[index];
              return (
                <div 
                  key={`${index}-${offset}`}
                  className="flex-1 bg-[#F8FAFC] rounded-[32px] p-8 sm:p-12 shadow-[0_15px_45px_-10px_rgba(0,0,0,0.05)] border border-white/50 relative overflow-hidden on-scroll-reveal animate-fade-up delay-100 flex flex-col justify-between min-h-[350px]"
                  style={{ animationDelay: `${offset * 200}ms` }}
                >
                  <div className="mb-8">
                    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" className="text-blue-600/30">
                      <path d="M12 36C10.3 36 8.8 35.4 7.6 34.2C6.4 33.1 5.8 31.6 5.8 29.9C5.8 28.2 6.4 26.7 7.6 25.5C8.8 24.4 10.3 23.8 12 23.8C12.3 23.8 12.6 23.8 12.9 23.9C13.2 23.9 13.5 24 13.8 24.1C13.5 22.3 12.8 20.6 11.7 19.1C10.7 17.6 9.3 16.3 7.6 15.3L9.6 12C11.9 13.4 13.8 15.2 15.4 17.5C17 19.8 18 22.4 18.5 25.3C18.8 27.2 19 29.1 19 30.9C19 32.7 18.3 34.2 17.1 35.4C15.9 36.6 14.2 37.2 12 37.2L12 36ZM34 36C32.3 36 30.8 35.4 29.6 34.2C28.4 33.1 27.8 31.6 27.8 29.9C27.8 28.2 28.4 26.7 29.6 25.5C30.8 24.4 32.3 23.8 34 23.8C34.3 23.8 34.6 23.8 34.9 23.9C35.2 23.9 35.5 24 35.8 24.1C35.5 22.3 34.8 20.6 33.7 19.1C32.7 17.6 31.3 16.3 29.6 15.3L31.6 12C33.9 13.4 35.8 15.2 37.4 17.5C39 19.8 40 22.4 40.5 25.3C40.8 27.2 41 29.1 41 30.9C41 32.7 40.3 34.2 39.1 35.4C37.9 36.6 36.2 37.2 34 37.2L34 36Z" fill="currentColor" />
                    </svg>
                    <p className="text-xl sm:text-[22px] font-bold text-slate-900 leading-relaxed mt-6 line-clamp-4">
                      "{item.quote}"
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-300">
                    <h4 className="text-lg font-black text-slate-950 tracking-tight">{item.author}</h4>
                    <p className="text-slate-600 font-black tracking-[0.1em] uppercase text-[10px] mt-1">{item.role}</p>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-12 lg:-left-16 z-20">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all duration-300 group border border-slate-100"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-12 lg:-right-16 z-20">
            <button 
              onClick={handleNextManual}
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all duration-300 group border border-slate-100"
            >
              <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2.5 mt-10">
            {Array.from({ length: testimonials.length - 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  setIsAutoPlaying(false);
                }}
                className={`h-1 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-8 bg-blue-600' : 'w-2 bg-slate-200 hover:bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
