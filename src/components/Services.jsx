import React, { useState, useEffect } from 'react';

const Services = () => {
  const cards = [
    {
      tag: "Design",
      headline: "Web Design",
      subtitle: "Bespoke, high-conversion digital experiences",
      image: "/assets/web_design.png",
      features: [
        "UI/UX Strategy",
        "Figma Prototyping",
        "Responsive Layouts",
        "Interactive Animations",
        "Creative Direction"
      ]
    },
    {
      tag: "Engineering",
      headline: "Web Development",
      subtitle: "Robust, scalable, and secure architectures",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      features: [
        "React & Next.js",
        "Node.js Backends",
        "Database Architecture",
        "Cloud Deployment",
        "API Integrations"
      ]
    },
    {
      tag: "Mobile",
      headline: "App Development",
      subtitle: "Native and cross-platform applications",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
      features: [
        "React Native",
        "iOS & Android",
        "Push Notifications",
        "App Store Publishing",
        "Offline Capabilities"
      ]
    },
    {
      tag: "Strategy",
      headline: "UI/UX Strategy",
      subtitle: "Comprehensive user journey mapping",
      image: "https://images.unsplash.com/photo-1541462608141-ad457491d902?q=80&w=2070&auto=format&fit=crop",
      features: [
        "User Research",
        "Wireframing",
        "A/B Testing",
        "Information Architecture",
        "Usability Testing"
      ]
    },
    {
      tag: "Growth",
      headline: "Digital Marketing",
      subtitle: "Amplify your brand's total reach",
      image: "/assets/digital_marketing.png",
      features: [
        "SEO Optimization",
        "PPC Campaigns",
        "Social Media Strategy",
        "Content Marketing",
        "Analytics & Reporting"
      ]
    },
    {
      tag: "Management",
      headline: "CMS Solutions",
      subtitle: "Custom content management systems",
      image: "/assets/cms_solutions.png",
      features: [
        "Headless Architecture",
        "WordPress & Sanity",
        "Content Modeling",
        "Editor Roles & Access",
        "Migration Services"
      ]
    },
    {
      tag: "Commerce",
      headline: "E-Commerce",
      subtitle: "High-performance online store systems",
      image: "/assets/ecommerce_solutions.png",
      features: [
        "Shopify & Custom Dev",
        "Payment Gateway Setup",
        "Inventory Management",
        "Cart Optimization",
        "Order Tracking"
      ]
    },
    {
      tag: "Automation",
      headline: "AI & Chatbots",
      subtitle: "Sophisticated AI automation agents",
      image: "/assets/ai_agents.png",
      features: [
        "Custom LLM Chatbots",
        "24/7 Support Agents",
        "Workflow Automation",
        "Internal Data Search",
        "CRM Integrations"
      ]
    }
  ];

  // Duplicate for infinite loop
  const allCards = [...cards, ...cards];
  const totalOriginal = cards.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleCards, setVisibleCards] = useState(3);

  // Responsive: show 1 card on mobile, 3 on desktop
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else {
        setVisibleCards(3);
      }
    };
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= totalOriginal) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - totalOriginal);
    }
  };

  // Determine which card is in the "center" position visually
  const getCenterIndex = () => {
    return (currentIndex % totalOriginal + 1) % totalOriginal;
  };

  return (
    <section id="services" className="pt-8 sm:pt-12 pb-12 sm:pb-16 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-gradient-to-bl from-blue-100/30 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 mb-5 on-scroll-reveal animate-fade-up shadow-sm">
            <span className="text-blue-500">✨</span>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Our Services</span>
          </div>

          <h2 className="text-[28px] sm:text-[42px] font-bold text-slate-900 mb-4 leading-tight on-scroll-reveal animate-fade-up delay-100">
            Tailored solutions for <span className="text-blue-600 font-serif italic">SandySource</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm sm:text-base on-scroll-reveal animate-fade-up delay-200">
            Professional high-end digital solutions designed to elevate your business.
          </p>
        </div>

        {/* Marquee Slider */}
        <div className="overflow-hidden py-4">
          <div
            className="flex items-center"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${currentIndex * (100 / allCards.length)}%)`,
              transition: isTransitioning ? 'transform 0.9s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none',
              width: `${(allCards.length / visibleCards) * 100}%`,
            }}
          >
            {allCards.map((card, index) => {
              const originalIndex = index % totalOriginal;
              const centerIdx = getCenterIndex();
              const isCenter = originalIndex === centerIdx;

              return (
                <div
                  key={index}
                  className="px-3 shrink-0"
                  style={{
                    width: `${100 / allCards.length}%`,
                    transition: 'transform 0.9s cubic-bezier(0.25, 0.1, 0.25, 1)',
                    transform: isCenter ? 'scale(1.06)' : 'scale(0.95)',
                    zIndex: isCenter ? 10 : 1,
                    position: 'relative',
                  }}
                >
                  <div
                    className={`rounded-3xl p-6 sm:p-7 h-full transition-all duration-700 flex flex-col ${isCenter
                        ? 'bg-white shadow-[0_30px_80px_-15px_rgba(37,99,235,0.18)] border-2 border-blue-100'
                        : 'bg-white/80 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.05)] border border-slate-100'
                      }`}
                  >
                    {/* Image Banner */}
                    <div className="relative w-full aspect-[2/1] mb-6 overflow-hidden rounded-2xl bg-slate-100 shrink-0">
                      <img
                        src={card.image}
                        alt={card.headline}
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop';
                        }}
                      />
                      {/* Subtle gradient overlay to match aesthetic */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent mix-blend-multiply opacity-50"></div>
                    </div>

                    <div className="flex-1">
                      {/* Tag */}
                      <div className="mb-4">
                        <span className={`inline-block text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full ${isCenter
                            ? 'bg-blue-50 text-blue-600 border border-blue-100'
                            : 'bg-slate-50 text-slate-500 border border-slate-100'
                          }`}>
                          {card.tag}
                        </span>
                      </div>

                      {/* Headline */}
                      <h3 className={`text-2xl sm:text-[28px] font-black mb-2 tracking-tight ${isCenter ? 'text-slate-900' : 'text-slate-950'
                        }`}>

                        {card.headline}
                      </h3>

                      {/* Subtitle */}
                      <p className={`text-sm mb-6 leading-relaxed font-bold ${isCenter ? 'text-slate-600' : 'text-slate-600'
                        }`}>
                        {card.subtitle}
                      </p>


                      {/* Divider */}
                      <div className={`h-px w-full mb-6 ${isCenter ? 'bg-blue-100' : 'bg-slate-100'
                        }`} />

                      {/* Feature List */}
                      <ul className="space-y-3.5 mt-auto">
                        {card.features.map((feature, fIndex) => {
                          const isObject = typeof feature === 'object';
                          const text = isObject ? feature.text : feature;
                          const isHighlighted = isObject && feature.highlight;

                          return (
                            <li key={fIndex} className="flex items-center gap-3">
                              <svg
                                className={`w-4 h-4 shrink-0 ${isCenter
                                    ? isHighlighted ? 'text-blue-600' : 'text-blue-400'
                                    : isHighlighted ? 'text-blue-600' : 'text-slate-300'
                                  }`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className={`text-[13px] font-bold ${isCenter
                                  ? isHighlighted ? 'text-blue-600 font-black' : 'text-slate-800'
                                  : isHighlighted ? 'text-blue-600 font-black' : 'text-slate-700'
                                }`}>

                                {text}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2.5 mt-6 flex-wrap">
          {cards.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-500 ${(currentIndex % totalOriginal) === i
                  ? 'w-10 bg-blue-600'
                  : 'w-2 bg-slate-200'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
