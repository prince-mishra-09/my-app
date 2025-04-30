import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
// import Test from './components/Test';

function App() {
  

  return (
    <div className="w-full">
      <Navbar />
      {/* <Test /> */}
      <Hero />
      <Projects />
      <Testimonials />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
