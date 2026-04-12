import React from 'react';

// Custom SVG Icons (Lucide equivalent without package dependency)
const IconUsers = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconZap = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconGem = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="6 3 18 3 22 10 12 22 2 10 6 3" />
    <path d="M12 22 8 10 12 3" />
    <path d="M12 22 16 10 12 3" />
    <path d="M2 10h20" />
  </svg>
);

const IconRocket = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5-4 5-4" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 4-5 4-5" />
  </svg>
);

const IconLayout = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <line x1="3" x2="21" y1="9" y2="9" />
    <line x1="9" x2="9" y1="21" y2="9" />
  </svg>
);

const IconCheck = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const WhyUs = () => {
  const cards = [
    {
      tag: "The Approach",
      headline: "Client-First",
      subtitle: "Your vision drives every decision we make",
      icon: IconUsers,
      features: [
        "100% Client-Centric Process",
        "Dedicated Project Manager",
        "Transparent Communication",
        "Regular Progress Updates",
        "Feedback-Driven Development",
        "Post-Launch Support"
      ]
    },
    {
      tag: "The Standards",
      headline: "Quality & Performance",
      subtitle: "An experienced team delivering excellence",
      featured: true,
      icon: IconZap,
      features: [
        "Experienced Senior Team",
        "Performance-Optimized Code",
        "End-to-End Services",
        "Mobile-First Development",
        "Cross-Browser Testing",
        "Scalable Architecture"
      ]
    },
    {
      tag: "Exclusive Benefits",
      headline: "Unmatched Value",
      subtitle: "Premium perks no other agency offers",
      icon: IconGem,
      features: [
        { text: "1 Year Free Maintenance", highlight: true },
        { text: "Free Hosting & Domain", highlight: true },
        { text: "Free SEO Strategy", highlight: true },
        "Free SSL Certificate",
        "Priority Bug Fixes",
        "24/7 Technical Support"
      ]
    },
    {
      tag: "Innovation",
      headline: "Future-Ready Tech",
      subtitle: "Stay ahead with modern solutions",
      icon: IconRocket,
      features: [
        "Latest Frameworks & Tools",
        "AI-Powered Solutions",
        "Cloud-Native Architecture",
        "API-First Development",
        "Automated Testing",
        "Continuous Deployment"
      ]
    },
    {
      tag: "Design",
      headline: "Pixel-Perfect UI",
      subtitle: "Stunning interfaces that convert visitors",
      icon: IconLayout,
      features: [
        "Modern UI/UX Design",
        "Responsive Layouts",
        "Micro-Animations",
        "Brand-Consistent Theming",
        "Accessibility Standards",
        "High-Fidelity Prototypes"
      ]
    }
  ];

  return (
    <section id="why-us" className="pt-8 sm:pt-12 pb-12 sm:pb-20 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-br from-blue-50/25 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-slate-100 mb-4 sm:mb-5 on-scroll-reveal animate-fade-up">
            <span className="text-blue-500">✦</span>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Why Choose Us</span>
          </div>

          <h2 className="text-2xl sm:text-[42px] font-bold text-slate-900 mb-3 sm:mb-4 leading-tight on-scroll-reveal animate-fade-up delay-100">
            Why <span className="text-blue-600 font-serif italic">SandySource</span>?
          </h2>




          <p className="text-slate-950 max-w-lg mx-auto text-xs sm:text-base font-black on-scroll-reveal animate-fade-up delay-200">
            We deliver quality, value, and long-term partnerships — not just websites.
          </p>



        </div>

        {/* CSS Grid layout - 2-col on mobile, 3-col desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 justify-center">
          {cards.map((card, index) => {
            const isFeatured = card.featured;
            const IconComponent = card.icon;

            return (
              <div
                key={index}
                className={`w-full on-scroll-reveal animate-fade-up ${index === 4 && cards.length === 5 ? 'col-span-2 lg:col-span-1 max-w-[50%] lg:max-w-full mx-auto' : ''}`}
                style={{ animationDelay: `${(index % 3) * 150}ms` }}
              >
                <div
                  className={`rounded-2xl sm:rounded-3xl p-4 sm:p-8 h-full flex flex-col group transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${isFeatured
                      ? 'bg-white shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)] border-2 border-blue-500/20 hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.25)] hover:border-blue-500/40'
                      : 'bg-white shadow-[0_8px_30px_-10px_rgba(0,0,0,0.05)] border-2 border-transparent hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.25)] hover:border-blue-500/40'
                    }`}
                >
                  {/* Subtle highlight gradient for featured card / hover all */}
                  <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/10 rounded-bl-full shrink-0 -mr-6 -mt-6 sm:-mr-8 sm:-mt-8 pointer-events-none transition-all duration-700 group-hover:scale-150 ${isFeatured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`} />

                  {/* Icon & Tag Flex Header */}
                  <div className="flex sm:items-center flex-col sm:flex-row items-start gap-2 sm:gap-4 mb-3 sm:mb-6 relative z-10 w-full overflow-hidden">
                    <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-blue-600 group-hover:shadow-md group-hover:shadow-blue-500/30 group-hover:text-white ${isFeatured ? 'bg-blue-600 shadow-md shadow-blue-500/30 text-white' : 'bg-slate-50 border border-slate-100/80 text-blue-600'
                      }`}>
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
                    </div>

                    <span className={`inline-block text-[8px] sm:text-[11px] font-bold uppercase tracking-widest px-2 sm:px-4 py-1 sm:py-1.5 rounded-full whitespace-nowrap overflow-hidden text-ellipsis w-min max-w-full transition-colors duration-500 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100/50 ${isFeatured
                        ? 'bg-blue-50 text-blue-600 border border-blue-100/50'
                        : 'bg-slate-50 text-slate-500 border border-slate-100'
                      }`}>
                      {card.tag}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className={`text-sm sm:text-[28px] font-semibold mb-1 sm:mb-2 tracking-tight relative z-10 leading-tight transition-colors duration-500 group-hover:text-blue-700 ${isFeatured ? 'text-slate-900 group-hover:text-blue-700 transition-colors' : 'text-slate-800'
                    }`}>



                    {card.headline}
                  </h3>

                  {/* Subtitle */}
                  <p className={`text-[10px] sm:text-sm font-bold mb-3 sm:mb-6 leading-relaxed sm:leading-relaxed relative z-10 line-clamp-2 sm:line-clamp-none transition-colors duration-500 group-hover:text-slate-700 ${isFeatured ? 'text-slate-600' : 'text-slate-700'
                    }`}>


                    {card.subtitle}
                  </p>

                  {/* Divider */}
                  <div className={`h-px w-full mb-3 sm:mb-6 relative z-10 transition-colors duration-500 group-hover:bg-blue-100/80 ${isFeatured ? 'bg-blue-100/80' : 'bg-slate-100'
                    }`} />

                  {/* Feature List */}
                  <ul className="space-y-1.5 sm:space-y-3.5 mt-auto relative z-10">
                    {card.features.map((feature, fIndex) => {
                      const isObject = typeof feature === 'object';
                      const text = isObject ? feature.text : feature;
                      const isHighlighted = isObject && feature.highlight;

                      return (
                        <li key={fIndex} className="flex items-start sm:items-center gap-1.5 sm:gap-3">
                          <IconCheck
                            className={`w-3 h-3 sm:w-4 sm:h-4 shrink-0 mt-0.5 sm:mt-0 transition-transform duration-300 group-hover:scale-110 ${isFeatured
                                ? isHighlighted ? 'text-blue-600 stroke-[3px]' : 'text-blue-500 stroke-[2.5px]'
                                : isHighlighted ? 'text-blue-600 stroke-[3px]' : 'text-slate-500 stroke-[2.5px]'
                              }`}
                          />
                          <span className={`text-[8.5px] sm:text-[13px] leading-[1.2] sm:leading-normal font-bold ${isFeatured
                              ? isHighlighted ? 'text-blue-600 font-black' : 'text-slate-900'
                              : isHighlighted ? 'text-blue-600 font-black' : 'text-slate-950 group-hover:text-black transition-colors'
                          }`}>



                            {text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
