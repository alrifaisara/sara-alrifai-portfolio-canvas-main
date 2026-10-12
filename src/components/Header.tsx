import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Menu,
  X,
  ArrowDown,
  FileText,
  Mail,
  Wrench,
} from 'lucide-react';

const titles = [
  'Mechatronics Engineering Student',
  'Hands-On Engineer',
];

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Typing effect
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (displayedText.length < currentTitle.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(
            currentTitle.slice(0, displayedText.length + 1)
          );
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 1800);
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentTitleIndex(
          (prev) => (prev + 1) % titles.length
        );
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentTitleIndex]);

  // Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        item.href.slice(1)
      );

      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scrolling with fixed header offset
  const scrollToSection = (
    href: string,
    closeMenu = false
  ) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);

    if (!element) return;

    if (closeMenu) {
      setIsMenuOpen(false);
    }

    const scroll = () => {
      if (sectionId === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });

        return;
      }

      const headerOffset = 85;

      const elementPosition =
        element.getBoundingClientRect().top;

      const offsetPosition =
        elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    };

    if (closeMenu) {
      requestAnimationFrame(() => {
        requestAnimationFrame(scroll);
      });
    } else {
      scroll();
    }
  };

  return (
    <header
      id="home"
      className="min-h-screen flex flex-col relative"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          {/* Branding */}
          <button
            type="button"
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-3 text-left"
            aria-label="Go to home section"
          >
            <img
              src="/logo.png"
              alt="Sara Alrifai logo"
              className="h-12 w-12 object-contain rounded-md"
            />

            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
                Sara Alrifai
              </h1>

              <p className="text-sm text-white min-h-[1.25rem]">
                {displayedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() =>
                  scrollToSection(item.href)
                }
                className={cn(
                  'text-sm font-medium transition-smooth hover:text-primary',
                  activeSection === item.href.slice(1)
                    ? 'text-primary'
                    : 'text-white'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={
              isMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isMenuOpen}
            onClick={() =>
              setIsMenuOpen((prev) => !prev)
            }
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md px-6 pb-4 pt-3 border-t border-border">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={() =>
                    scrollToSection(item.href, true)
                  }
                  className={cn(
                    'justify-start',
                    activeSection === item.href.slice(1)
                      ? 'text-primary'
                      : 'text-white'
                  )}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <div className="flex-1 flex items-center justify-center px-6 pt-24">
        <div className="text-center max-w-5xl mx-auto">

          {/* Name */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            Sara Alrifai
          </motion.h1>

          {/* Rotating Title */}
          <motion.div
            className="text-2xl md:text-3xl font-medium mb-8 h-12 flex items-center justify-center"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <span className="text-accent">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Summary */}
          <motion.p
            className="text-lg md:text-xl text-white/80 mb-5 max-w-3xl mx-auto leading-relaxed"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          >
            Mechatronics Engineering student at the University of Waterloo
            with hands-on experience in manufacturing automation, mechanical
            design, embedded systems, and engineering project work.
          </motion.p>

          {/* Availability */}
          <motion.p
            className="text-sm md:text-base font-medium text-white mb-10"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          >
            Seeking 4 or 8 month internships • Available Jan–Aug 2027
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-16"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
          >
            <Button
              size="lg"
              onClick={() =>
                scrollToSection('#resume')
              }
              className="gradient-primary hover:glow-primary px-7 py-6 rounded-full"
            >
              <FileText className="mr-2 h-5 w-5" />
              View Resume
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                scrollToSection('#projects')
              }
              className="glass hover:glow-primary px-7 py-6 rounded-full"
            >
              <ArrowDown className="mr-2 h-5 w-5" />
              View Projects
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                scrollToSection('#skills')
              }
              className="glass hover:glow-primary px-7 py-6 rounded-full"
            >
              <Wrench className="mr-2 h-5 w-5" />
              Explore Skills
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                scrollToSection('#contact')
              }
              className="glass hover:glow-primary px-7 py-6 rounded-full"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>
    </header>
  );
};

export default Header;