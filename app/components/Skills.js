import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://www.svgrepo.com/show/374118/tailwind.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
  ];

  return (
    <section id="skills" className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-left">Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center justify-center">
        {skills.map((s) => (
          <div key={s.name} className="flex flex-col items-center gap-2">
            <img src={s.icon} alt={s.name} className="w-10 h-10 object-contain" />
            <span className="text-xs text-neutral-300">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;