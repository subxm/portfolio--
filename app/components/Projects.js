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
    <section id="projects" className="flex flex-col items-center justify-center max-w-2xl mx-auto px-4 gap-6 py-8">
      <h2 className="text-2xl font-bold w-full text-left mb-2">Projects</h2>
      <div className="flex flex-col gap-4 w-full">
        {projects.map((p) => (
          <div key={p.title} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:scale-[1.01] transition-transform">
            <div>
              <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
              <p className="text-neutral-400 text-sm mb-2">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-1">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs text-indigo-300 bg-indigo-900/10 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 items-center min-w-fit">
              <a href={p.github} className="text-neutral-400 hover:text-white" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;