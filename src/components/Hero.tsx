import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center pt-16 px-6 md:px-10 max-w-5xl mx-auto"
    >
      <div className="space-y-5" style={{ animationDelay: '100ms' }}>
        <h1 className="font-mono text-portfolio-green animate-fade-in">Hi, my name is</h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-portfolio-lightestSlate animate-fade-in" style={{ animationDelay: '200ms' }}>
          John Doe.
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-slate animate-fade-in" style={{ animationDelay: '300ms' }}>
          I build things for the web.
        </h3>
        
        <p className="max-w-xl text-lg text-portfolio-slate mt-5 animate-fade-in" style={{ animationDelay: '400ms' }}>
          I'm a full-stack developer specializing in building exceptional digital experiences.
          Currently, I'm focused on creating accessible, user-centered applications
          that solve real-world problems.
        </p>

        <div className="pt-5 animate-fade-in" style={{ animationDelay: '500ms' }}>
          <Button asChild className="bg-transparent hover:bg-portfolio-green/10 text-portfolio-green border border-portfolio-green px-7 py-5 rounded">
            <a href="#projects" className="flex items-center space-x-2">
              <span>Check out my work</span>
              <ChevronRight size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
