'use client';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'RESOLIO',
      description: 'AI-powered application for intelligent problem resolution and analysis. Built with modern technologies to provide seamless user experience.',
      link: 'https://resolio-ai.netlify.app/',
      github: 'https://github.com/subxm/RESOLIO'
    },
    {
      title: 'ReelWriteAI',
      description: 'AI-powered video script writing platform that generates engaging and creative scripts for content creators. Streamlines the video production process with intelligent content generation.',
      link: 'https://reelwrite-ai.netlify.app/',
      github: 'https://github.com/subxm/ReelWriteAI'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Full-stack real-time messaging application using SpringBoot and WebSocket protocol for instant communication between multiple users with low latency message delivery.',
      link: '',
      github: 'https://github.com/subxm/Springboot_RealTime_Chat_App'
    },
    {
      title: 'WebScraper',
      description: 'Automated web scraping tool using Node.js and Puppeteer for efficient data extraction from dynamic websites with JavaScript-rendered content. Supports flexible scraping logic and exports in JSON and CSV formats.',
      link: '',
      github: 'https://github.com/subxm/Web-Scraper'
    }
  ];

  return (
    <section id="projects" className="flex flex-col items-start justify-start max-w-xl mx-auto px-4 py-12 w-full border-t border-neutral-800">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
      
      <div className="w-full space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-neutral-700 rounded-lg bg-neutral-900/50 p-4 hover:border-neutral-600 transition-colors">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <div className="flex gap-2 flex-shrink-0">
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors"
                    aria-label="View project"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 19H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/>
                      <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </svg>
                  </a>
                )}
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                  aria-label="View on GitHub"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.002 12.002 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <p className="text-sm text-neutral-400 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
