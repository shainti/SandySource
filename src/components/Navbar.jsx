import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      if (isOpen) setIsOpen(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Portfolio', path: '/portfolio' },
  ]

  const getActiveIndex = () => {
    if (location.pathname === '/portfolio') return 3;
    if (location.hash === '#services') return 2;
    if (location.hash === '#about') return 1;
    return 0;
  }

  const activeIndex = getActiveIndex();

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-5 sm:pt-8 animate-drop-down ${scrolled ? 'backdrop-blur-md bg-white/40' : ''}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center z-50 transition-transform duration-300 hover:scale-105" onClick={() => window.scrollTo(0,0)}>
              <img src="/sandysourcelogo.png" alt="SandySource" className="h-8 sm:h-10 object-contain" />
            </Link>

            {/* Desktop Nav in the middle (pill) */}
            <div className="hidden lg:flex items-center justify-center rounded-full px-1.5 py-1.5 transition-all duration-500 ease-out bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] border border-[#F1F5F9] relative overflow-hidden group">
              {/* Sliding Highlight Pill */}
              <div 
                className="absolute h-[calc(100%-12px)] top-[6px] left-[6px] bg-white shadow-[0_4px_16px_rgba(37,99,235,0.12)] border border-blue-50/50 rounded-full transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]"
                style={{ 
                  width: 'calc(112px - 8px)',
                  transform: `translateX(${activeIndex * 112}px)`
                }}
              />

              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative w-28 py-2 rounded-full text-[14px] font-medium transition-all duration-300 z-10 text-center ${activeIndex === index ? 'text-[#0F172A]' : 'text-[#64748B] hover:text-[#0F172A]'}`}
                >

                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Contact Button */}
            <div className="hidden lg:block z-50">
              <a
                href="#contact"
                className="bg-gradient-to-b from-[#3A3F47] to-[#1C1F24] hover:from-[#2e333a] hover:to-[#131518] text-white px-8 py-2.5 rounded-full font-medium text-[14px] transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(28,31,36,0.6)] hover:shadow-[0_12px_25px_-6px_rgba(28,31,36,0.7)] hover:-translate-y-0.5 border border-[#4B525C]/30"

              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 flex items-center gap-2.5 bg-white px-5 py-2.5 rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-white text-[#0F172A] font-medium text-[13px] hover:bg-gray-50 transition-colors"

               aria-label="Toggle menu"
            >
              <div className="w-3.5 h-2.5 flex flex-col justify-between">
                <span className={`block h-[2px] w-full bg-current rounded transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
                <span className={`block h-[2px] w-[70%] bg-current rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-[2px] w-full bg-current rounded transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
              </div>
              Menu
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-md z-40 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[350px] bg-white shadow-2xl z-40 lg:hidden transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col pt-28 px-8 gap-2 flex-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`px-5 py-3.5 rounded-2xl font-medium text-base transition-all ${activeIndex === index ? 'bg-[#F4F7FF] text-[#2563EB]' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}

            >


              {link.name}
            </Link>
          ))}
        </div>

        <div className="p-8 border-t border-gray-100">
           <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-[#2D3136] text-white px-4 py-4 rounded-xl font-semibold text-base text-center transition-all hover:bg-[#1a1c1f] shadow-[0_8px_20px_-6px_rgba(45,49,54,0.3)]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
