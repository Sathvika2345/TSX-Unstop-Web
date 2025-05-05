import React from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-10 max-w-3xl mx-auto text-center">
      <h2 className="font-mono text-portfolio-green mb-4">04. What's Next?</h2>
      <h2 className="text-4xl md:text-5xl font-bold text-portfolio-lightestSlate mb-5">Get In Touch</h2>
      
      <p className="text-lg mb-12">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
        I'll do my best to get back to you!
      </p>
      
      <Button asChild className="bg-transparent hover:bg-portfolio-green/10 text-portfolio-green border border-portfolio-green px-8 py-6 rounded">
        <a href="mailto:your.portfolio@gmail.com">Say Hello</a>
      </Button>
    </section>
  );
};

export default Contact;
