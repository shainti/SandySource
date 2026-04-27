import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import collegianxImg from '../assets/collegianx.png';
import aryamealsImg from '../assets/aryameals.png';
import Footer from '../components/Footer';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.on-scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "CollegianX",
      description: "A sophisticated platform for university students to share resources, collaborate on projects, and manage academic life. Built with a focus on speed and user experience.",
      image: collegianxImg,
      link: "https://collegianx.vercel.app",
      tags: ["Next.js", "Tailwind CSS", "Vercel", "Community"],
      color: "from-blue-600 to-indigo-700"
    },
    {
      title: "Arya Meals",
      description: "Premium home-style food delivery service in Chamba. Featuring a seamless ordering experience, real-time tracking, and a vibrant, appetizing UI design.",
      image: aryamealsImg,
      link: "https://aryameals.com",
      tags: ["React", "Node.js", "FoodTech", "E-commerce"],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <>
      <div className="pt-24 min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center on-scroll-reveal animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 mb-5 shadow-sm">
            <span className="text-blue-500">◆</span>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Showcase</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            Our <span className="text-blue-600 font-serif italic">Digital Legacy</span>
          </h1>

          <p className="text-slate-700 text-sm sm:text-base font-bold max-w-2xl mx-auto leading-relaxed">
            Explore a curated selection of our most impactful digital solutions, engineered with precision and creative excellence.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group on-scroll-reveal animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-3xl sm:rounded-[40px] bg-[#F8FAFC] aspect-[16/10] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100/50 transition-all duration-700 group-hover:shadow-[0_35px_80px_-15px_rgba(37,99,235,0.15)] group-hover:-translate-y-3">
                  {/* Project Image */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-[2s] group-hover:scale-110"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8 sm:p-10">
                    <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-3.5 rounded-full font-bold text-[13px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-2xl"
                      >
                        Visit Project
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mt-8 px-2 sm:px-4 flex flex-col items-center text-center">
                  <div className="flex flex-wrap justify-center gap-2 mb-5">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-500 tracking-tight">
                    {project.title}
                  </h2>

                  <p className="text-sm text-slate-700 font-bold leading-relaxed mb-5 max-w-md">
                    {project.description}
                  </p>

                  <div className={`h-1 w-16 bg-gradient-to-r ${project.color} rounded-full transition-all duration-700 group-hover:w-full`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#F8FAFC] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/30 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto on-scroll-reveal animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 mb-6 shadow-sm">
              <span className="text-blue-500">🚀</span>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Start a Project</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Have a project <span className="text-blue-600 font-serif italic">in mind?</span>
            </h3>

            <p className="text-slate-700 text-sm sm:text-base font-bold mb-8 max-w-lg mx-auto">
              Let's collaborate and bring your vision to life with our expertise.
            </p>

            <Link 
              to="/#contact" 
              className="inline-flex items-center gap-3 bg-gradient-to-b from-[#3B82F6] to-[#2563EB] text-white px-10 py-4 rounded-full font-bold text-[14px] transition-all duration-300 shadow-[0_8px_25px_-8px_rgba(37,99,235,0.6)] hover:shadow-[0_12px_30px_-8px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 border border-[#60A5FA]/20"
            >
              Let's Build It
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Portfolio;
