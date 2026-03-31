import React, { useState, useEffect } from 'react';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  const services = [
    {
      title: "Web Design",
      description: "Bespoke, high-conversion digital experiences crafted with a blend of creativity and data-driven design principles.",
      image: "/assets/web_design.png"
    },
    {
      title: "Web Development",
      description: "Robust, scalable, and secure web architectures built using cutting-edge technologies to power your business growth.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications engineered for seamless performance and exceptional user engagement.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "UI/UX Strategy",
      description: "Comprehensive user journey mapping and interface strategy designed to maximize usability and customer satisfaction.",
      image: "https://images.unsplash.com/photo-1541462608141-ad457491d902?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Digital Marketing",
      description: "Amplify your brand's reach with data-driven strategies and high-conversion campaigns across all digital channels.",
      image: "/assets/digital_marketing.png"
    },
    {
      title: "CMS Solutions",
      description: "Empower your team with intuitive, custom-built content management systems designed for scale and complete creative control.",
      image: "/assets/cms_solutions.png"
    },
    {
      title: "E-Commerce Solutions",
      description: "High-performance online stores engineered to maximize sales, reduce friction, and provide seamless customer journeys.",
      image: "/assets/ecommerce_solutions.png"
    },
    {
      title: "AI Agents & Chatbots",
      description: "Sophisticated AI automation that enhances customer engagement, streamlines support, and operates your business 24/7.",
      image: "/assets/ai_agents.png"
    }
  ];

  const totalServices = services.length;

  // Sync visibleCards with window width
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Update maxIndex based on visibleCards
  const maxIndex = totalServices - visibleCards;

  // Ensure currentIndex is in bounds after card count change
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, maxIndex, currentIndex]);

  // Handle auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    }, 4500); // 4.5s for readability
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section id="services" className="pt-24 pb-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 mb-8 on-scroll-reveal animate-fade-up">
            <span className="text-blue-500">✨</span>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Our Services</span>
          </div>
          <h2 className="text-[32px] sm:text-[48px] font-bold text-slate-900 mb-6 leading-tight on-scroll-reveal animate-fade-up delay-100">
            Tailored solutions for <span className="text-blue-600 font-serif italic">SandySource</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base on-scroll-reveal animate-fade-up delay-200">
            Professional high-end digital solutions designed to elevate your business.
          </p>
        </div>

        {/* Outer Slider Wrapper to handle Centering and Padding */}
        <div className="relative overflow-visible">
          {/* Main Stage (Overflow Hidden but with vertical padding for shadows) */}
          <div className="overflow-hidden py-10 -my-10 px-2 sm:px-4">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                width: `${(totalServices / visibleCards) * 100}%`,
                transform: `translateX(-${(currentIndex * 100) / totalServices}%)`
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="px-3 shrink-0"
                  style={{ width: `${100 / totalServices}%` }}
                >
                  <div className="bg-white rounded-[32px] p-6 sm:p-8 h-full shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 group">
                    <div className="relative aspect-[1.3/1] mb-8 overflow-hidden rounded-2xl bg-slate-50">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    <div className="text-center space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium line-clamp-3">
                        {service.description}
                      </p>
                      <div className="pt-4 flex items-center justify-center gap-3">
                        <div className="h-0.5 w-8 bg-blue-100 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-700" />
                        <span className="text-[11px] font-black text-blue-600/30 uppercase tracking-[0.3em] group-hover:text-blue-600 transition-colors">Discover</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Nav */}
          <div className="flex justify-center flex-wrap gap-3 mt-16 pb-4">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-700 ${currentIndex === i ? 'w-12 bg-blue-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
