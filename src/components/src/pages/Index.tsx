import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SocialLinks from '@/components/SocialLinks';
import EmailLink from '@/components/EmailLink';

const Index = () => {
  useEffect(() => {
    document.title = "John Doe | Portfolio";
  }, []);

  return (
    <div className="bg-portfolio-navy text-portfolio-slate">
      <Navbar />
      <main className="pb-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <SocialLinks />
      <EmailLink />
    </div>
  );
};

export default Index;
