'use client';

import React, { useState, useEffect } from 'react';

const ContactSection = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="flex flex-col items-start justify-start max-w-4xl mx-auto px-4 py-16 w-full">
      <h2 className="text-3xl font-bold mb-12">Contact</h2>
      
      <div className="w-full space-y-8">
        <div>
          <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wide mb-4">Available for new projects</h3>
          <a 
            href="mailto:subhamsinghnegi03@gmail.com"
            className="text-lg text-white hover:text-neutral-300 transition-colors"
          >
            Send Email subhamsinghnegi03@gmail.com
          </a>
        </div>

        <div>
          <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wide mb-4">Other Socials</h3>
          <div className="space-y-2">
            <a href="https://github.com/subxm" target="_blank" rel="noopener noreferrer" className="block text-neutral-300 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://x.com/subhamfr" target="_blank" rel="noopener noreferrer" className="block text-neutral-300 hover:text-white transition-colors">
              X / Twitter
            </a>
            <a href="https://www.linkedin.com/in/subxm/" target="_blank" rel="noopener noreferrer" className="block text-neutral-300 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-zinc-800 pt-8 mt-8">
          <div>
            <p className="text-neutral-400 mb-2">Hyderabad, India</p>
            <p className="text-neutral-400">{time} IST</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
