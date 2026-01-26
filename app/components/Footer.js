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

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-4 py-6 mt-8 border-t border-zinc-800 w-full">
      <div className="flex gap-5 text-neutral-400">
        <a href="https://github.com/subxm" aria-label="GitHub" className="hover:text-white"><Github size={18} /></a>
        <a href="https://x.com/subhamfr" aria-label="X" className="hover:text-white"><XLogo size={18} /></a>
        <a href="https://www.linkedin.com/in/subxm/" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
      </div>
    </footer>
  );
};

export default Footer;
