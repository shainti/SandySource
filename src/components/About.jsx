import React from 'react';

// Custom SVG Icons
const IconCheckSquare = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>;
const IconUsers = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const IconBriefcase = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16"></path></svg>;
const IconClock = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;

const About = () => {
  const stats = [
    { label: "Projects Completed", value: "25+" },
    { label: "Happy Clients", value: "20+" },
    { label: "Years of Excellence", value: "2+" },
    { label: "Client Support", value: "24/7" },
  ];

  const experts = [
    { name: "Shainti", role: "Full Stack Developer", projects: 7, status: "On Track", color: "bg-slate-950" },
    { name: "Bunty", role: "App Developer", projects: 5, status: "Under Pressure", color: "bg-blue-600" },
    { name: "Aditi", role: "Digital marketing expert", projects: 7, status: "Sustained", color: "bg-slate-800" },
    { name: "Abhinam", role: "UI&UX expert", projects: 7, status: "Sustained", color: "bg-slate-800" },
  ];

  return (
    <section id="about" className="h-auto bg-[#F8FAFC] py-0 sm:pt-6 sm:pb-0 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col items-center">
      {/* Background Ambient Blur */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10 blur-3xl opacity-50 pointer-events-none" />

      {/* Main Content Area */}
      <main className="w-full flex-1 flex flex-col gap-5 sm:gap-8 max-w-[1400px] mx-auto pt-4 sm:pt-0 on-scroll-reveal animate-fade-up">
        {/* Header Summary */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 bg-white p-6 sm:p-10 rounded-3xl sm:rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white/50 on-scroll-reveal animate-fade-up delay-100">
          <div className="space-y-6 max-w-2xl text-left">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
                Welcome to <span className="text-blue-600 font-serif italic">SandySource</span>
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full" />
            </div>
            <p className="text-sm sm:text-lg text-slate-700 leading-relaxed font-bold">
              SandySource engineers <span className="text-slate-950 font-black">scalable web architectures</span> and <span className="text-slate-950 font-black">AI-driven solutions</span>, transforming complex technical challenges into high-performance digital assets.
            </p>

            <p className="text-[10px] sm:text-xs font-black text-blue-600/40 uppercase tracking-[0.5em]">
              Innovating with Precision
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-widest border border-blue-100">Strategic Partner</span>
              <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full uppercase tracking-widest border border-slate-100">Global Delivery</span>
            </div>
          </div>
          <div className="flex items-center gap-6 bg-slate-50/80 p-6 sm:p-8 rounded-[32px] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -mr-12 -mt-12 transition-transform duration-700 group-hover:scale-150" />
            <img src="/sandysourcelogo.png" alt="SandySource" className="h-16 sm:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-110 relative z-10" />
            <div className="pr-4 border-l-2 border-slate-200 pl-6 space-y-2 relative z-10">
              <div className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.2em] leading-none">Official Repository</div>
              <div className="text-[10px] text-slate-600 font-bold tracking-wide">solutions@sandysource.com</div>
              <div className="pt-2">
                <div className="text-[9px] text-white bg-slate-900 px-2 py-0.5 rounded inline-block font-bold uppercase tracking-tighter shadow-sm">v2.0 PRO</div>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Row - Mapping from Image 1 */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`bg-white py-5 px-4 sm:py-8 sm:px-6 rounded-2xl sm:rounded-[32px] shadow-[0_15px_40px_-5px_rgba(0,0,0,0.03)] border border-slate-100/50 hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.08)] transition-all duration-700 group text-center on-scroll-reveal ${i % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'} flex flex-col items-center justify-center aspect-square sm:aspect-auto`}
              style={{ animationDelay: `${(i * 150) + 300}ms` }}
            >
              <div className="text-2xl sm:text-4xl font-black text-blue-600 mb-1 sm:mb-2 tracking-tighter tabular-nums group-hover:scale-110 transition-transform duration-500 leading-none">
                {stat.value}
              </div>
              <div className="text-[9px] sm:text-[12px] font-bold text-slate-400 uppercase tracking-[0.2em] sm:tracking-[0.25em] leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </section>


        {/* Workspace Tables - Team Workload look */}
        <section className="grid grid-cols-1 gap-8 mb-4 text-left">
          <div className="bg-white p-5 sm:p-8 rounded-3xl sm:rounded-[48px] shadow-[0_25px_70px_-20px_rgba(0,0,0,0.07)] border border-white/50 on-scroll-reveal animate-reveal-wipe relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-20" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <div className="space-y-1">
                <h3 className="text-xl font-black tracking-widest text-slate-900 uppercase text-[12px] opacity-100">Human Capital Allocation</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Capacity Management & Lifecycle Matrix</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="sm:hidden flex items-center gap-2 text-[10px] font-bold text-blue-500 animate-pulse bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  <span>Swipe to scroll</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
                <span className="text-xs font-bold text-blue-600 cursor-pointer hover:text-blue-700 font-serif italic tracking-wider px-5 py-2.5 bg-blue-50 rounded-full transition-all hover:bg-blue-100 border border-blue-200/50">Consultancy Portfolio</span>
              </div>
            </div>
            <div className="overflow-x-auto pb-4 scrollbar-hide">
              <table className="w-full text-left min-w-[800px]">
                <thead>
                  <tr className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] border-b border-slate-50">
                    <th className="pb-10">Expertise Profile</th>
                    <th className="pb-10">Units Executed</th>
                    <th className="pb-10">Lifecycle Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {experts.map((exp, i) => (
                    <tr key={i} className="group hover:bg-slate-50/10 transition-all duration-500 animate-fade-up" style={{ animationDelay: `${(i + 8) * 100}ms` }}>
                      <td className="py-8">
                        <div className="flex items-center gap-6">
                          <div className={`w-16 h-16 rounded-2xl ${exp.color} flex items-center justify-center text-white font-black uppercase text-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                            {exp.name[0]}
                          </div>
                          <div className="text-left space-y-1">
                            <div className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-500">{exp.name}</div>
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{exp.role}</div>
                          </div>

                        </div>
                      </td>
                      <td className="py-8 font-black text-blue-600 text-3xl tracking-tighter tabular-nums">
                        {exp.projects}
                        <span className="text-[10px] font-bold uppercase text-slate-300 tracking-[0.2em] ml-4 overflow-hidden inline-block align-middle opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">Projects</span>
                      </td>
                      <td className="py-8">
                        <div className="flex items-center gap-4">
                          <div className={`w-2.5 h-2.5 rounded-full ${exp.color} animate-pulse shadow-[0_0_12px_currentColor]`} />
                          <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">{exp.status}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default About;
