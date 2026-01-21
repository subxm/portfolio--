import React from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="flex flex-col max-w-3xl mx-auto px-4">
      <div className="w-full h-48">
        <img
          src="https://i.pinimg.com/1200x/e4/76/6c/e4766cb84baa3b38f176adadd05fbfa8.jpg"
          alt="Cloudy sky"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start text-left gap-6 mt-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Hi, I'm <span className="text-white">Subham</span>
        </h1>
        <p className="text-neutral-400 max-w-prose">
          I build meaningful web apps, from backend APIs to polished frontends.
        </p>
        <div className="flex items-center gap-4 mt-2">
          <a href="/Subham_Singh_Negi_Resume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-95">
            <Download size={16} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;