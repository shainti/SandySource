import React from 'react';

const WhyUs = () => {
  const cards = [
    {
      tag: "The Approach",
      headline: "Client-First Strategy",
      subtitle: "We put your vision and goals at the center of everything we build.",
      buttonText: "Learn More",
      highlighted: false,
      features: [
        "100% Client-Centric Approach",
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
      subtitle: "An experienced team delivering end-to-end excellence on every project.",
      buttonText: "Get Started",
      highlighted: true,
      features: [
        "Experienced Senior Team",
        "Performance-Optimized Code",
        "End-to-End Services",
        "Mobile-First Development",
        "Cross-Browser Testing",
        "Scalable Architecture",
        "Security Best Practices"
      ]
    },
    {
      tag: "Exclusive Benefits",
      headline: "Unmatched Value",
      subtitle: "Premium perks that no other agency offers at this level.",
      buttonText: "Contact Us",
      highlighted: false,
      features: [
        { text: "1 Year Free Maintenance", highlight: true },
        { text: "Free Hosting & Domain (1 Year)", highlight: true },
        { text: "Free SEO Strategy", highlight: true },
        "Free SSL Certificate",
        "Free Performance Audit",
        "Priority Bug Fixes",
        "24/7 Technical Support"
      ]
    }
  ];

  return (
    <section id="why-us" className="pt-28 pb-32 bg-white relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-50/40 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1300px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 mb-8 on-scroll-reveal animate-fade-up">
            <span className="text-blue-500">✦</span>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Why Choose Us</span>
          </div>

          <h2 className="text-[32px] sm:text-[48px] font-bold text-slate-900 mb-6 leading-tight on-scroll-reveal animate-fade-up delay-100">
            Why <span className="text-blue-600 font-serif italic">SandySource</span>?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base on-scroll-reveal animate-fade-up delay-200">
            We don't just build websites — we build long-term partnerships with unmatched value.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-[24px] p-7 sm:p-9 transition-all duration-700 on-scroll-reveal animate-fade-up group relative ${card.highlighted
                  ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-[0_30px_80px_-20px_rgba(37,99,235,0.35)] scale-[1.02]'
                  : 'bg-white text-slate-900 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]'
                }`}
              style={{ animationDelay: `${200 + index * 150}ms` }}
            >
              {/* Tag */}
              <div className="mb-6">
                <span
                  className={`inline-block text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full ${card.highlighted
                      ? 'bg-white/15 text-white/90'
                      : 'bg-slate-100 text-slate-500'
                    }`}
                >
                  {card.tag}
                </span>
              </div>

              {/* Headline */}
              <h3 className={`text-2xl sm:text-3xl font-bold mb-2 tracking-tight ${card.highlighted ? 'text-white' : 'text-slate-900'
                }`}>
                {card.headline}
              </h3>

              {/* Subtitle */}
              <p className={`text-sm mb-8 leading-relaxed ${card.highlighted ? 'text-blue-100' : 'text-slate-400'
                }`}>
                {card.subtitle}
              </p>

              {/* Button */}
              <button
                className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-500 mb-10 ${card.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg shadow-blue-900/20'
                    : 'bg-slate-900 text-white hover:bg-slate-800 shadow-md'
                  }`}
              >
                {card.buttonText}
              </button>

              {/* Divider */}
              <div className={`h-px w-full mb-8 ${card.highlighted ? 'bg-white/15' : 'bg-slate-100'
                }`} />

              {/* Feature List */}
              <ul className="space-y-4">
                {card.features.map((feature, fIndex) => {
                  const isObject = typeof feature === 'object';
                  const text = isObject ? feature.text : feature;
                  const isHighlighted = isObject && feature.highlight;

                  return (
                    <li key={fIndex} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 shrink-0 mt-0.5 ${card.highlighted
                            ? 'text-blue-200'
                            : isHighlighted
                              ? 'text-blue-600'
                              : 'text-slate-400'
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
                      <span
                        className={`text-sm font-medium leading-snug ${card.highlighted
                            ? isHighlighted
                              ? 'text-white font-bold'
                              : 'text-blue-100'
                            : isHighlighted
                              ? 'text-blue-600 font-bold'
                              : 'text-slate-600'
                          }`}
                      >
                        {text}
                        {isHighlighted && !card.highlighted && (
                          <span className="ml-2 inline-block text-[9px] font-black bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full uppercase tracking-wider">Free</span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
