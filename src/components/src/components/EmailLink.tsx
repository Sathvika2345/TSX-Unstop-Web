import React from 'react';

const EmailLink = () => {
  return (
    <div className="fixed bottom-0 right-5 hidden lg:block">
      <div className="flex flex-col items-center space-y-5 after:content-[''] after:block after:w-px after:h-24 after:bg-portfolio-lightSlate">
        <a 
          href="mailto:your.portfolio@gmail.com" 
          className="text-portfolio-lightSlate hover:text-portfolio-green transition-all hover:-translate-y-1 inline-block font-mono text-xs tracking-widest vertical-rl"
          style={{ writingMode: 'vertical-rl' }}
        >
          your.portfolio@gmail.com
        </a>
      </div>
    </div>
  );
};

export default EmailLink;
