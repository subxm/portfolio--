'use client';

import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const XLogo = (props) => (
  <svg
    fill="currentColor"
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 22}
    height={props.size || 22}
    {...props}
  >
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
  </svg>
);

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center max-w-2xl mx-auto px-4 pt-10 pb-8 text-center">
      <div className="w-full h-48 rounded-xl overflow-hidden mb-6">
        <img
          src="https://i.pinimg.com/1200x/e4/76/6c/e4766cb84baa3b38f176adadd05fbfa8.jpg"
          alt="Cloudy sky"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 text-left w-full">
        Hi, I'm <span className="text-white">Subham</span>
      </h1>
      <p className="text-neutral-400 mb-4 text-left w-full">
        I build meaningful web apps, from backend APIs to polished frontends.
      </p>
      <div className="flex flex-row items-center w-full justify-between gap-4">
        <a href="/Subham_Singh_Negi_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-white text-black font-medium shadow hover:bg-neutral-200 transition-colors">
          Resume
        </a>
        <div className="flex gap-3 text-neutral-400 text-lg">
          <a href="https://github.com/subxm" aria-label="GitHub" className="hover:text-white"><Github size={18} /></a>
          <a href="https://x.com/subhamfr" aria-label="X" className="hover:text-white"><XLogo size={18} /></a>
          <a href="https://www.linkedin.com/in/subxm/" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;