import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="fixed bottom-0 left-5 hidden lg:block">
      <ul className="flex flex-col items-center space-y-5 after:content-[''] after:block after:w-px after:h-24 after:bg-portfolio-lightSlate">
        <li>
          <a 
            href="https://github.com/your-username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolio-lightSlate hover:text-portfolio-green transition-all hover:-translate-y-1 inline-block"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </li>
        <li>
          <a 
            href="https://linkedin.com/in/your-username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolio-lightSlate hover:text-portfolio-green transition-all hover:-translate-y-1 inline-block"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </li>
        <li>
          <a 
            href="https://twitter.com/your-username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolio-lightSlate hover:text-portfolio-green transition-all hover:-translate-y-1 inline-block"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
        </li>
        <li>
          <a 
            href="mailto:your.portfolio@gmail.com" 
            className="text-portfolio-lightSlate hover:text-portfolio-green transition-all hover:-translate-y-1 inline-block"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
