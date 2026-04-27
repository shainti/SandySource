import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/#contact' },
  ];

  const serviceLinks = [
    'Web Design',
    'Web Development',
    'App Development',
    'Digital Marketing',
    'CMS Solutions',
    'E-Commerce',
    'AI & Chatbots',
  ];

  return (
    <footer className="relative bg-[#0B1120] overflow-hidden">
      {/* Subtle gradient overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Ambient blurs */}
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-indigo-600/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6 transition-transform duration-300 hover:scale-105" onClick={() => window.scrollTo(0, 0)}>
              <img src="/sandysourcelogo.png" alt="SandySource" className="h-9 sm:h-10 object-contain brightness-0 invert opacity-90" />
            </Link>

            <p className="text-[#8B95A8] text-sm font-bold leading-relaxed max-w-xs mb-6">
              SandySource is a premium freelance agency delivering top-tier web development, stunning design, and intelligent AI solutions.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-white/[0.05] hover:bg-blue-600/20 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/[0.05] hover:border-blue-500/30">
                <svg className="w-4 h-4 text-[#5A667A] group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-white/[0.05] hover:bg-blue-600/20 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/[0.05] hover:border-blue-500/30">
                <svg className="w-4 h-4 text-[#5A667A] group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a href="#" aria-label="Twitter" className="w-10 h-10 bg-white/[0.05] hover:bg-blue-600/20 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/[0.05] hover:border-blue-500/30">
                <svg className="w-4 h-4 text-[#5A667A] group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a href="#" aria-label="GitHub" className="w-10 h-10 bg-white/[0.05] hover:bg-blue-600/20 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/[0.05] hover:border-blue-500/30">
                <svg className="w-4 h-4 text-[#5A667A] group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[11px] font-black text-white/40 uppercase tracking-[0.25em] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-[#8B95A8] text-sm font-bold hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-blue-400 group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-black text-white/40 uppercase tracking-[0.25em] mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service, i) => (
                <li key={i}>
                  <Link
                    to="/#services"
                    className="text-[#8B95A8] text-sm font-bold hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-blue-400 group-hover:w-3 transition-all duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-black text-white/40 uppercase tracking-[0.25em] mb-5">Get In Touch</h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-9 h-9 bg-white/[0.05] rounded-lg flex items-center justify-center shrink-0 mt-0.5 border border-white/[0.05] group-hover:bg-blue-600/10 group-hover:border-blue-500/20 transition-all duration-300">
                  <svg className="w-4 h-4 text-[#5A667A] group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] font-black text-white/25 uppercase tracking-[0.2em] mb-1">Email</div>
                  <a href="mailto:solutions@sandysource.com" className="text-[#8B95A8] text-sm font-bold hover:text-blue-400 transition-colors duration-300">
                    solutions@sandysource.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-9 h-9 bg-white/[0.05] rounded-lg flex items-center justify-center shrink-0 mt-0.5 border border-white/[0.05] group-hover:bg-blue-600/10 group-hover:border-blue-500/20 transition-all duration-300">
                  <svg className="w-4 h-4 text-[#5A667A] group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] font-black text-white/25 uppercase tracking-[0.2em] mb-1">Phone</div>
                  <a href="tel:+919876543210" className="text-[#8B95A8] text-sm font-bold hover:text-blue-400 transition-colors duration-300">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-9 h-9 bg-white/[0.05] rounded-lg flex items-center justify-center shrink-0 mt-0.5 border border-white/[0.05] group-hover:bg-blue-600/10 group-hover:border-blue-500/20 transition-all duration-300">
                  <svg className="w-4 h-4 text-[#5A667A] group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] font-black text-white/25 uppercase tracking-[0.2em] mb-1">Location</div>
                  <span className="text-[#8B95A8] text-sm font-bold">New Delhi, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#5A667A] text-xs font-bold tracking-wide">
              © {currentYear} <span className="text-white/40 font-serif italic">SandySource</span>. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a href="#" className="text-[#5A667A] text-xs font-bold hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <a href="#" className="text-[#5A667A] text-xs font-bold hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <a href="#" className="text-[#5A667A] text-xs font-bold hover:text-blue-400 transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
