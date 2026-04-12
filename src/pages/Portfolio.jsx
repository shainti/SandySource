import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import collegianxImg from '../assets/collegianx.png';
import aryamealsImg from '../assets/aryameals.png';

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
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center on-scroll-reveal animate-fade-up">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-[0.3em] text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
          Showcase
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-8">
          Our <span className="text-blue-600 font-serif italic">Digital Legacy</span>
        </h1>


        <p className="text-xl sm:text-2xl text-slate-900 font-black max-w-3xl mx-auto leading-relaxed">
          Explore a curated selection of our most impactful digital solutions, engineered with precision and creative excellence.
        </p>



      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {projects.map((project, index) => (


            <div 
              key={index} 
              className="group on-scroll-reveal animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-[40px] bg-slate-100 aspect-[16/10] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] border border-slate-100/50 transition-all duration-700 group-hover:shadow-[0_45px_100px_-20px_rgba(37,99,235,0.15)] group-hover:-translate-y-4">
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-[2s] group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10">
                  <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-2xl"
                    >
                      Visit Project
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-10 px-4 flex flex-col items-center text-center">
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-4 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h2>

                <p className="text-sm sm:text-lg text-slate-900 font-black leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className={`h-1 w-20 bg-gradient-to-r ${project.color} rounded-full transition-all duration-700 group-hover:w-full`} />
              </div>


            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 text-center text-white rounded-t-[80px]">
        <h3 className="text-3xl sm:text-4xl font-medium mb-10">Have a project in mind?</h3>
        <Link 
          to="/" 
          onClick={() => window.scrollTo(0, 0)}
          className="inline-flex items-center gap-3 bg-blue-600 text-white px-12 py-5 rounded-full font-medium text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-blue-600 transition-all shadow-glow-blue"
        >
          Let's Build It
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>
      </section>

    </div>
  );
};

export default Portfolio;
