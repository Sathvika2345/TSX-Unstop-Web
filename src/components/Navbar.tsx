import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', url: '#about' },
  { name: 'Experience', url: '#experience' },
  { name: 'Projects', url: '#projects' },
  { name: 'Contact', url: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 z-50 w-full px-4 md:px-10 transition-all duration-300',
        scrolled ? 'bg-portfolio-navy/90 backdrop-blur shadow-md py-3' : 'py-5'
      )}
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <a href="#" className="text-portfolio-green font-mono text-2xl">
          <span className="hover:text-portfolio-green transition-colors">{'<JohnDoe />'}</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <ol className="flex space-x-5">
            {navLinks.map((link, i) => (
              <li key={i} className="font-mono text-sm">
                <a 
                  href={link.url}
                  className="text-portfolio-lightestSlate hover:text-portfolio-green transition-colors"
                >
                  <span className="text-portfolio-green">{`0${i + 1}. `}</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ol>
          <Button asChild variant="outline" className="ml-4 border border-portfolio-green text-portfolio-green hover:bg-portfolio-green/10 px-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-portfolio-green"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        <div className={cn(
          'md:hidden fixed inset-0 z-40 flex-col items-center justify-center bg-portfolio-lightNavy p-10',
          'transition-transform duration-300 ease-in-out transform',
          menuOpen ? 'flex translate-x-0' : 'translate-x-full'
        )}>
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link, i) => (
              <a 
                key={i}
                href={link.url}
                className="text-portfolio-lightestSlate hover:text-portfolio-green text-lg font-mono"
                onClick={() => setMenuOpen(false)}
              >
                <div className="text-portfolio-green">{`0${i + 1}.`}</div>
                {link.name}
              </a>
            ))}
            <Button variant="outline" className="mt-5 border border-portfolio-green text-portfolio-green hover:bg-portfolio-green/10">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
