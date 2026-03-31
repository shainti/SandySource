import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Digital Marketing",
      description: "Amplify your brand's reach with data-driven strategies and high-conversion campaigns across all digital channels.",
      image: "/assets/digital_marketing.png",
      delay: 0
    },
    {
      title: "CMS Solutions",
      description: "Empower your team with intuitive, custom-built content management systems designed for scale and complete creative control.",
      image: "/assets/cms_solutions.png",
      delay: 100
    },
    {
      title: "E-Commerce Solutions",
      description: "High-performance online stores engineered to maximize sales, reduce friction, and provide seamless customer journeys.",
      image: "/assets/ecommerce_solutions.png",
      delay: 200
    },
    {
      title: "AI Agents & Chatbots",
      description: "Sophisticated AI automation that enhances customer engagement, streamlines support, and operates your business 24/7.",
      image: "/assets/ai_agents.png",
      delay: 300
    }
  ];

  return (
    <section id="services" className=" pt-4 pb-20 bg-[#F8FAFC] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 mb-8 on-scroll-reveal animate-fade-up">
          <span className="text-blue-500">✨</span>
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Our Expertise</span>
        </div>

        {/* Heading */}
        <h2 className="text-[28px] sm:text-[48px] font-bold text-slate-900 mb-16 leading-tight on-scroll-reveal animate-fade-up delay-100">
          Tailored solutions for <span className="text-blue-600 font-serif italic">SandySource</span>
        </h2>

        {/* Grid - Switched to 4 columns for smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] p-5 sm:p-6 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 group on-scroll-reveal animate-fade-up"
              style={{ animationDelay: `${service.delay + 300}ms` }}
            >
              <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl bg-slate-50 border border-slate-100/50">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="text-left space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                  {service.description}
                </p>
                <div className="pt-3 flex items-center gap-3">
                  <div className="h-0.5 w-8 bg-blue-100 group-hover:w-12 group-hover:bg-blue-600 transition-all duration-500" />
                  <span className="text-[9px] font-black text-blue-600/40 uppercase tracking-[0.3em] group-hover:text-blue-600 transition-colors">Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
