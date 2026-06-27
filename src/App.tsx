import { useState, useEffect } from 'react';
import Particles from './components/Particles';
import CursorGlow from './components/CursorGlow';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen text-white grid-bg">
      {/* ambient gradient orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25"
          style={{ background: '#00F5FF' }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20"
          style={{ background: '#6C63FF' }}
        />
        <div
          className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[140px] opacity-10"
          style={{ background: '#00FF88' }}
        />
      </div>

      <Particles />
      <CursorGlow />
      {loading && <Loader />}

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
