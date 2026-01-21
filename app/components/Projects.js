import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Real-Time Chat Application',
      description: 'A full-stack real-time messaging application using WebSocket protocol for instant communication between multiple users with low latency message delivery.',
      tech: ['WebSocket', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/subxm/Springboot_RealTime_Chat_App'
    },
    {
      title: 'Web Scraper',
      description: 'An automated web scraping tool using Node.js and Puppeteer for efficient data extraction from dynamic websites with JavaScript-rendered content.',
      tech: ['Node.js', 'Puppeteer', 'React', 'Tailwind CSS'],
      github: 'https://github.com/subxm/Web-Scraper'
    }
  ];

  return (
    <section id="projects" className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-left">Projects</h2>
      <div className="grid gap-6">
        {projects.map((p) => (
          <a key={p.title} href={p.github} className="block rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{p.title}</h3>
            </div>
            <p className="mt-2 text-neutral-400">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs text-indigo-300 bg-indigo-900/10 px-2 py-1 rounded">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;