import React from 'react';

const skills = [
  'JavaScript (ES6+)', 
  'TypeScript', 
  'React', 
  'Node.js', 
  'Python',
  'Django',
  'Flask', 
  'Express', 
  'MongoDB', 
  'SQL',
  'REST API',
  'Git',
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-10 max-w-5xl mx-auto">
      <h2 className="section-heading text-2xl font-bold">
        <span className="number-heading">01.</span> About Me
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-4">
          <p>
            Hello! I'm a passionate developer with a love for creating efficient, 
            user-friendly applications. My journey in software development began with 
            python scripting and has evolved into full-stack development.
          </p>
          
          <p>
            Currently, I'm focused on building accessible, responsive web applications
            that solve real-world problems. I enjoy working across the entire stack, 
            from designing intuitive user interfaces to optimizing backend systems.
          </p>
          
          <p>
            When I'm not coding, you can find me exploring new technologies, 
            contributing to open-source projects, or sharing my knowledge through 
            technical articles and tutorials.
          </p>

          <p>Here are a few technologies I've been working with recently:</p>
          
          <ul className="grid grid-cols-2 gap-2 mt-5">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="text-portfolio-green mr-2">▹</span>
                <span className="font-mono text-sm">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative group mx-auto md:mx-0">
          <div className="relative rounded-md overflow-hidden w-60 h-60 md:w-full md:h-auto">
            <div className="absolute inset-0 bg-portfolio-green/20 group-hover:bg-transparent z-10 transition-all"></div>
            <div className="rounded-md w-full h-full bg-portfolio-lightNavy flex items-center justify-center">
              {/* Replace with your image */}
              <span className="text-portfolio-green">Your Photo</span>
            </div>
          </div>
          <div className="absolute -inset-1 rounded-md border-2 border-portfolio-green -z-10 translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-all"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
