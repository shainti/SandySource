import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.on-scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Map clean paths to section IDs
    const pathToSection = {
      '/about': 'about',
      '/services': 'services',
    };

    // Determine target section: from pathname or from hash
    const sectionId = pathToSection[location.pathname] || (location.hash ? location.hash.substring(1) : null);

    if (sectionId) {
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Wait a small bit for any image layouts or mounting to stabilize
        const timer = setTimeout(() => {
          const navHeight = 90; // Balanced offset for the header
          const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Manually trigger the reveal animation of the specific section
          element.classList.add('active');
          
          // Also search for any children with reveal animations inside this section
          const children = element.querySelectorAll('.on-scroll-reveal');
          children.forEach(child => child.classList.add('active'));
        }, 100);
        return () => clearTimeout(timer);
      }
    } else if (location.pathname === '/') {
      // If no section target and we are at root, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);


  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
