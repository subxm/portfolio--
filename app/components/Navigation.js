const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-lg hover:text-neutral-300 transition-colors">
          Subham
        </a>
        
        <div className="flex gap-8 items-center">
          <a href="#about" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
            About
          </a>
          <a href="#projects" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
            Projects
          </a>
          <a href="#skills" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
            Skills
          </a>
          <a href="#contact" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
