'use client';

import React from 'react';

const XLogo = (props) => (
  <svg
    fill="currentColor"
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    {...props}
  >
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
  </svg>
);

const HeroSection = () => {
  return (
    <section className="flex flex-col items-start justify-start max-w-xl mx-auto px-4 pt-12 pb-12 w-full">
      <div className="w-full mb-6">
        <div className="mb-6 rounded-lg overflow-hidden h-40 flex items-center justify-center bg-black">
          <img 
            src="/dragon.jpg" 
            alt="Dragon Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Hi, I'm Subham</h1>
        
        <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed mb-6">
          I'm a developer who loves learning by building. you'll usually find me working on something new. I'm comfortable across the full stack, from backend APIs to frontends, and I like pushing myself to learn and build things that actually matter.
        </p>
      </div>

      <div className="flex items-center justify-between w-full">
        <a 
          href="/Subham_Singh_Negi_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-700 rounded-lg bg-neutral-900/50 text-white hover:border-neutral-600 hover:bg-neutral-900 transition-all duration-200"
          aria-label="Resume"
        >
          <img 
            src="/resume-icon.svg" 
            alt="Resume"
            className="w-5 h-5"
          />
          <span className="text-sm font-medium">Resume</span>
        </a>
        <div className="flex gap-2">
          <a 
            href="https://github.com/subxm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-neutral-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.002 12.002 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a 
            href="https://x.com/subhamfr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-neutral-400 transition-colors duration-200"
            aria-label="X"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
            </svg>
          </a>
          <a 
            href="mailto:subhamsinghnegi03@gmail.com" 
            className="text-white hover:text-neutral-400 transition-colors duration-200"
            aria-label="Email"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="m2 6 10 7 10-7" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/subxm/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-neutral-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.849 0-9.449h3.554v1.338c-.009.015-.021.029-.033.042h.033v-.042c.418-.644 1.162-1.554 2.828-1.554 2.065 0 3.612 1.347 3.612 4.246v5.419zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.704 1.956-1.704 1.185 0 1.916.753 1.938 1.704 0 .946-.753 1.704-1.979 1.704zm1.586 11.019H3.737V9.983h3.186v10.469zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
