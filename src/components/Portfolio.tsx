import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';
import Resume from './Resume';
import Contact from './Contact';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const Portfolio = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      // Load Vanta scripts
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
      threeScript.onload = () => {
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
        vantaScript.onload = () => {
          if (window.VANTA && window.THREE) {
            vantaEffect.current = window.VANTA.NET({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0x6366f1,
              backgroundColor: 0x0f0f23,
              points: 8.0,
              maxDistance: 25.0,
              spacing: 20.0
            });
          }
        };
        document.head.appendChild(vantaScript);
      };
      document.head.appendChild(threeScript);
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Vanta Background */}
      <div 
        ref={vantaRef} 
        className="fixed inset-0 z-0"
        style={{ zIndex: -1 }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Resume />
        <Contact />
      </div>
    </div>
  );
};

export default Portfolio;