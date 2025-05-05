import React from 'react';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 px-4 text-center">
      <div className="flex justify-center space-x-5 mb-4">
        <a 
          href="https://github.com/your-username" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-portfolio-lightSlate hover:text-portfolio-green transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://linkedin.com/in/your-username" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-portfolio-lightSlate hover:text-portfolio-green transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="https://twitter.com/your-username" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-portfolio-lightSlate hover:text-portfolio-green transition-colors"
          aria-label="Twitter"
        >
          <Twitter size={20} />
        </a>
      </div>
      
      <div className="font-mono text-xs text-portfolio-slate">
        <p>Designed & Built with ❤️</p>
        <p>© {new Date().getFullYear()} John Doe</p>
      </div>
    </footer>
  );
};

export default Footer;
