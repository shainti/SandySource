import React, { useState, useEffect } from 'react';

// ── SVG Icons ──────────────────────────────────────────────────────────────────

const IconWebDesign = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="40" height="28" rx="4" stroke="#2563EB" strokeWidth="2" fill="none" />
    <rect x="6" y="10" width="40" height="8" rx="4" fill="#DBEAFE" />
    <circle cx="12" cy="14" r="2" fill="#2563EB" />
    <circle cx="19" cy="14" r="2" fill="#93C5FD" />
    <circle cx="26" cy="14" r="2" fill="#BFDBFE" />
    <rect x="12" y="24" width="12" height="8" rx="2" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1" />
    <rect x="28" y="24" width="12" height="3" rx="1.5" fill="#BFDBFE" />
    <rect x="28" y="29" width="8" height="3" rx="1.5" fill="#DBEAFE" />
    <rect x="20" y="42" width="12" height="2" rx="1" fill="#93C5FD" />
    <rect x="16" y="44" width="20" height="2" rx="1" fill="#DBEAFE" />
  </svg>
);

const IconWebDev = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="40" height="30" rx="4" stroke="#7C3AED" strokeWidth="2" fill="none" />
    <rect x="6" y="10" width="40" height="7" rx="4" fill="#EDE9FE" />
    <circle cx="12" cy="13.5" r="1.8" fill="#7C3AED" />
    <circle cx="18" cy="13.5" r="1.8" fill="#A78BFA" />
    <circle cx="24" cy="13.5" r="1.8" fill="#C4B5FD" />
    <path d="M14 24l-4 4 4 4" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 21l-4 11" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
    <path d="M26 24l4 4-4 4" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="32" y="22" width="8" height="3" rx="1.5" fill="#EDE9FE" />
    <rect x="32" y="27" width="6" height="3" rx="1.5" fill="#EDE9FE" />
    <rect x="32" y="32" width="7" height="3" rx="1.5" fill="#EDE9FE" />
  </svg>
);

const IconAppDev = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="17" y="4" width="18" height="32" rx="4" stroke="#0891B2" strokeWidth="2" fill="none" />
    <rect x="17" y="4" width="18" height="32" rx="4" fill="#CFFAFE" opacity="0.3" />
    <rect x="21" y="9" width="10" height="18" rx="2" fill="#A5F3FC" opacity="0.7" />
    <circle cx="26" cy="31" r="2" fill="#0891B2" />
    <rect x="22" y="7" width="8" height="1.5" rx="0.75" fill="#0891B2" />
    <path d="M10 20h5M37 20h5" stroke="#0891B2" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
    <rect x="4" y="28" width="10" height="16" rx="3" stroke="#0891B2" strokeWidth="1.5" fill="none" />
    <rect x="38" y="28" width="10" height="16" rx="3" stroke="#0891B2" strokeWidth="1.5" fill="none" />
    <circle cx="9" cy="39" r="1.5" fill="#0891B2" />
    <circle cx="43" cy="39" r="1.5" fill="#0891B2" />
  </svg>
);

const IconUXStrategy = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="26" r="18" stroke="#2563EB" strokeWidth="2" fill="none" />
    <circle cx="26" cy="26" r="10" stroke="#93C5FD" strokeWidth="1.5" fill="none" />
    <circle cx="26" cy="26" r="3" fill="#2563EB" />
    <path d="M26 8v6M26 38v6M8 26h6M38 26h6" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
    <path d="M13.5 13.5l4.2 4.2M34.3 34.3l4.2 4.2M34.3 13.5l-4.2 4.2M17.7 34.3l-4.2 4.2" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="26" cy="8" r="2" fill="#DBEAFE" />
    <circle cx="26" cy="44" r="2" fill="#DBEAFE" />
    <circle cx="8" cy="26" r="2" fill="#DBEAFE" />
    <circle cx="44" cy="26" r="2" fill="#DBEAFE" />
  </svg>
);

const IconMarketing = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 38l8-10 6 6 8-12 8 4 8-14" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="14" cy="28" r="3" fill="#BBF7D0" />
    <circle cx="20" cy="34" r="3" fill="#BBF7D0" />
    <circle cx="28" cy="22" r="3" fill="#86EFAC" />
    <circle cx="36" cy="26" r="3" fill="#86EFAC" />
    <circle cx="44" cy="12" r="3.5" fill="#16A34A" />
    <path d="M38 6h8v8" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M44 6l-7 7" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" fill="none" />
    <rect x="6" y="40" width="40" height="2" rx="1" fill="#DCFCE7" />
  </svg>
);

const IconCMS = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="40" height="10" rx="3" stroke="#D97706" strokeWidth="1.8" fill="#FEF3C7" opacity="0.8" />
    <rect x="6" y="20" width="18" height="26" rx="3" stroke="#D97706" strokeWidth="1.8" fill="#FEF9C3" opacity="0.6" />
    <rect x="28" y="20" width="18" height="12" rx="3" stroke="#D97706" strokeWidth="1.8" fill="none" />
    <rect x="28" y="36" width="18" height="10" rx="3" stroke="#D97706" strokeWidth="1.8" fill="#D97706" opacity="0.25" />
    <path d="M10 10h8M10 25h10M10 29h8M10 33h10M10 37h7" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M32 25h10M32 29h7" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconEcommerce = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8h5l5 22h22l4-14H16" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="22" cy="36" r="3.5" stroke="#EA580C" strokeWidth="1.8" fill="#FED7AA" />
    <circle cx="34" cy="36" r="3.5" stroke="#EA580C" strokeWidth="1.8" fill="#FED7AA" />
    <path d="M24 18h8M28 14v8" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
    <rect x="30" y="4" width="14" height="10" rx="3" fill="#FFF7ED" stroke="#EA580C" strokeWidth="1.5" />
    <path d="M33 9h8M33 11.5h5" stroke="#EA580C" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const IconAI = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="10" width="24" height="20" rx="5" stroke="#7C3AED" strokeWidth="2" fill="none" />
    <path d="M20 18h12M20 22h8" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M26 30v4" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 34h20" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
    <circle cx="20" cy="15" r="1.5" fill="#7C3AED" />
    <circle cx="32" cy="15" r="1.5" fill="#7C3AED" />
    <path d="M8 16c-2 2-2 6 0 8" stroke="#C4B5FD" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M44 16c2 2 2 6 0 8" stroke="#C4B5FD" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M4 14c-2 4-2 8 0 12" stroke="#EDE9FE" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M48 14c2 4 2 8 0 12" stroke="#EDE9FE" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <circle cx="26" cy="44" r="2.5" fill="#7C3AED" />
    <path d="M22 44c0-2 2-3 4-3s4 1 4 3" stroke="#A78BFA" strokeWidth="1.2" strokeLinecap="round" fill="none" />
  </svg>
);

// ── Icon wrapper styles per card tag ──────────────────────────────────────────
const iconConfig = {
  Design: { bg: 'bg-blue-50', ring: 'ring-blue-100' },
  Engineering: { bg: 'bg-violet-50', ring: 'ring-violet-100' },
  Mobile: { bg: 'bg-cyan-50', ring: 'ring-cyan-100' },
  Strategy: { bg: 'bg-blue-50', ring: 'ring-blue-100' },
  Growth: { bg: 'bg-green-50', ring: 'ring-green-100' },
  Management: { bg: 'bg-amber-50', ring: 'ring-amber-100' },
  Commerce: { bg: 'bg-orange-50', ring: 'ring-orange-100' },
  Automation: { bg: 'bg-violet-50', ring: 'ring-violet-100' },
};

const iconMap = {
  Design: <IconWebDesign />,
  Engineering: <IconWebDev />,
  Mobile: <IconAppDev />,
  Strategy: <IconUXStrategy />,
  Growth: <IconMarketing />,
  Management: <IconCMS />,
  Commerce: <IconEcommerce />,
  Automation: <IconAI />,
};

// ── Component ─────────────────────────────────────────────────────────────────

const Services = () => {
  const cards = [
    {
      tag: "Design",
      headline: "Web Design",
      subtitle: "Bespoke, high-conversion digital experiences",
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
      features: [
        "Custom LLM Chatbots",
        "24/7 Support Agents",
        "Workflow Automation",
        "Internal Data Search",
        "CRM Integrations"
      ]
    }
  ];

  const allCards = [...cards, ...cards];
  const totalOriginal = cards.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisible = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 3);
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

          <p className="text-slate-700 max-w-lg mx-auto text-sm sm:text-base font-bold on-scroll-reveal animate-fade-up delay-200">
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
              const cfg = iconConfig[card.tag] || { bg: 'bg-slate-50', ring: 'ring-slate-100' };

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
                    {/* Icon Banner — replaces image */}
                    <div className={`relative w-full aspect-[2/1] mb-6 overflow-hidden rounded-2xl flex items-center justify-center shrink-0 ring-1 ${cfg.bg} ${cfg.ring}`}>
                      <div className="transform transition-transform duration-500 hover:scale-110">
                        {iconMap[card.tag]}
                      </div>
                      {/* Subtle corner decoration */}
                      <div className="absolute bottom-3 right-4 opacity-10">
                        {iconMap[card.tag]}
                      </div>
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
                      <p className={`text-sm mb-6 leading-relaxed font-bold ${isCenter ? 'text-slate-700' : 'text-slate-800'
                        }`}>
                        {card.subtitle}
                      </p>

                      {/* Divider */}
                      <div className={`h-px w-full mb-6 ${isCenter ? 'bg-blue-100' : 'bg-slate-100'}`} />

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
                                  ? isHighlighted ? 'text-blue-600 font-black' : 'text-slate-950'
                                  : isHighlighted ? 'text-blue-600 font-black' : 'text-slate-900'
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