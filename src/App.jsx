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
  const [mode, setMode] = useState('light');

  const darkLight = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);

    // Tailwind dark mode toggle by class on HTML
    const root = window.document.documentElement;
    if (newMode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  useEffect(() => {
    // Ensure the mode persists on first load
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="bg-white text-black dark:bg-[#0f172a] dark:text-white transition-colors duration-500">
      <Navbar darkLight={darkLight} mode={mode} />
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
