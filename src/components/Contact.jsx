import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Connect to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // TODO: Replace with your actual Web3Forms Access Key (get it at https://web3forms.com/)
          access_key: "YOUR_ACCESS_KEY_HERE",
          Subject: "New Contact Form Submission",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
      }
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const services = [
    "Web Design",
    "Web Development",
    "App Development",
    "UI/UX Strategy",
    "Digital Marketing",
    "CMS Solutions",
    "E-Commerce",
    "AI & Chatbots"
  ];

  const budgetRanges = [
    "Under ₹25,000",
    "₹25,000 – ₹50,000",
    "₹50,000 – ₹1,00,000",
    "₹1,00,000+"
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/40 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-blue-50/30 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 mb-5 on-scroll-reveal animate-fade-up shadow-sm">
            <span className="text-blue-500">✉</span>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight on-scroll-reveal animate-fade-up delay-100">
            Let's Build Something{' '}
            <span className="text-blue-600 font-serif italic">Extraordinary</span>
          </h2>

          <p className="text-slate-700 max-w-lg mx-auto text-sm sm:text-base font-bold on-scroll-reveal animate-fade-up delay-200">
            Share your vision with us and we'll craft the perfect digital solution for your business.
          </p>
        </div>

        {/* Main content - Split layout */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Left column - Info cards */}
          <div className="lg:w-[380px] xl:w-[420px] flex flex-col gap-4 sm:gap-6 shrink-0">
            {/* Quick contact info card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white/50 on-scroll-reveal animate-slide-left delay-100">
              <h3 className="text-[12px] font-black text-slate-900 uppercase tracking-[0.2em] mb-6">Contact Info</h3>

              <div className="space-y-5">
                {/* Email */}
                <div className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-500 cursor-pointer">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center ring-1 ring-blue-100 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Email</div>
                    <div className="text-sm font-bold text-slate-900">solutions@sandysource.com</div>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-500 cursor-pointer">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center ring-1 ring-blue-100 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Phone</div>
                    <div className="text-sm font-bold text-slate-900">+91 90150 61513</div>
                  </div>
                </div>

                {/* Location */}
                <div className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-500 cursor-pointer">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center ring-1 ring-blue-100 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Location</div>
                    <div className="text-sm font-bold text-slate-900">Himachal Pradesh, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social / CTA card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 rounded-3xl shadow-[0_25px_70px_-20px_rgba(0,0,0,0.25)] border border-slate-700/50 on-scroll-reveal animate-slide-left delay-200 relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-600/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl" />

              <div className="relative z-10">
                <h3 className="text-[12px] font-black text-white/60 uppercase tracking-[0.2em] mb-4">Follow Us</h3>
                <p className="text-white/70 text-sm font-bold leading-relaxed mb-6">
                  Stay connected for insights, project showcases, and industry updates.
                </p>

                <div className="flex items-center gap-3">
                  {/* Instagram */}
                  <a href="#" className="w-11 h-11 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/5 hover:border-blue-500">
                    <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a href="#" className="w-11 h-11 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/5 hover:border-blue-500">
                    <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>

                  {/* Twitter / X */}
                  <a href="#" className="w-11 h-11 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/5 hover:border-blue-500">
                    <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a href="#" className="w-11 h-11 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/5 hover:border-blue-500">
                    <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                </div>

                {/* Response time badge */}
                <div className="mt-6 flex items-center gap-3 bg-white/5 px-4 py-3 rounded-2xl border border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_12px_rgba(74,222,128,0.5)]" />
                  <span className="text-[11px] font-bold text-white/50 uppercase tracking-[0.15em]">Avg response: Under 2 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="flex-1">
            <div className="bg-white p-6 sm:p-10 rounded-3xl sm:rounded-[40px] shadow-[0_25px_70px_-20px_rgba(0,0,0,0.07)] border border-white/50 on-scroll-reveal animate-slide-right delay-100 relative overflow-hidden">
              {/* Decorative top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-30" />

              {/* Success overlay */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex items-center justify-center rounded-3xl sm:rounded-[40px]">
                  <div className="text-center animate-fade-up">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5 ring-4 ring-green-100">
                      <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                    <p className="text-sm font-bold text-slate-500">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <h3 className="text-[12px] font-black text-slate-900 uppercase tracking-[0.2em] mb-8">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'name' || formData.name
                        ? 'top-2 text-[9px] font-black text-blue-500 uppercase tracking-[0.2em]'
                        : 'top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400'
                    }`}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pt-6 pb-3 px-4 rounded-2xl border-2 transition-all duration-300 text-sm font-bold text-slate-900 outline-none bg-slate-50/50 ${
                        focusedField === 'name'
                          ? 'border-blue-300 bg-white shadow-[0_0_0_4px_rgba(37,99,235,0.08)]'
                          : 'border-slate-100 hover:border-slate-200'
                      }`}
                    />
                  </div>

                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'email' || formData.email
                        ? 'top-2 text-[9px] font-black text-blue-500 uppercase tracking-[0.2em]'
                        : 'top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400'
                    }`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pt-6 pb-3 px-4 rounded-2xl border-2 transition-all duration-300 text-sm font-bold text-slate-900 outline-none bg-slate-50/50 ${
                        focusedField === 'email'
                          ? 'border-blue-300 bg-white shadow-[0_0_0_4px_rgba(37,99,235,0.08)]'
                          : 'border-slate-100 hover:border-slate-200'
                      }`}
                    />
                  </div>
                </div>

                {/* Phone + Service Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'phone' || formData.phone
                        ? 'top-2 text-[9px] font-black text-blue-500 uppercase tracking-[0.2em]'
                        : 'top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400'
                    }`}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pt-6 pb-3 px-4 rounded-2xl border-2 transition-all duration-300 text-sm font-bold text-slate-900 outline-none bg-slate-50/50 ${
                        focusedField === 'phone'
                          ? 'border-blue-300 bg-white shadow-[0_0_0_4px_rgba(37,99,235,0.08)]'
                          : 'border-slate-100 hover:border-slate-200'
                      }`}
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute left-4 top-2 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] pointer-events-none z-10">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('service')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pt-6 pb-3 px-4 rounded-2xl border-2 transition-all duration-300 text-sm font-bold text-slate-900 outline-none bg-slate-50/50 appearance-none cursor-pointer ${
                        focusedField === 'service'
                          ? 'border-blue-300 bg-white shadow-[0_0_0_4px_rgba(37,99,235,0.08)]'
                          : 'border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <option value="">Select a service</option>
                      {services.map((s, i) => (
                        <option key={i} value={s}>{s}</option>
                      ))}
                    </select>
                    {/* Dropdown arrow */}
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Budget */}
                <div className="relative">
                  <label className="absolute left-4 top-2 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] pointer-events-none z-10">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('budget')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pt-6 pb-3 px-4 rounded-2xl border-2 transition-all duration-300 text-sm font-bold text-slate-900 outline-none bg-slate-50/50 appearance-none cursor-pointer ${
                      focusedField === 'budget'
                        ? 'border-blue-300 bg-white shadow-[0_0_0_4px_rgba(37,99,235,0.08)]'
                        : 'border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <option value="">Select your budget</option>
                    {budgetRanges.map((b, i) => (
                      <option key={i} value={b}>{b}</option>
                    ))}
                  </select>
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {/* Message */}
                <div className="relative">
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'message' || formData.message
                      ? 'top-2 text-[9px] font-black text-blue-500 uppercase tracking-[0.2em]'
                      : 'top-5 text-sm font-bold text-slate-400'
                  }`}>
                    Tell Us About Your Project
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pt-7 pb-4 px-4 rounded-2xl border-2 transition-all duration-300 text-sm font-bold text-slate-900 outline-none bg-slate-50/50 resize-none ${
                      focusedField === 'message'
                        ? 'border-blue-300 bg-white shadow-[0_0_0_4px_rgba(37,99,235,0.08)]'
                        : 'border-slate-100 hover:border-slate-200'
                    }`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-b from-[#3B82F6] to-[#2563EB] text-white py-4 rounded-2xl font-bold text-[15px] transition-all duration-300 shadow-[0_8px_25px_-8px_rgba(37,99,235,0.6)] hover:shadow-[0_12px_30px_-8px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 border border-[#60A5FA]/20 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
