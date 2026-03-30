import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
