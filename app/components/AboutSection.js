const AboutSection = () => {
  return (
    <section id="about" className="flex flex-col items-start justify-start max-w-4xl mx-auto px-4 py-16 w-full">
      <h2 className="text-3xl font-bold mb-8">About</h2>
      
      <p className="text-lg text-neutral-300 mb-12 leading-relaxed">
        I build meaningful web apps, from backend APIs to polished frontends.
      </p>

      <div className="w-full">
        <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wide mb-6">Education</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-1">Computer Science Undergraduate</h4>
            <p className="text-neutral-400">
              Pursuing hands-on experience in Full Stack Development
            </p>
            <p className="text-sm text-neutral-500 mt-2">
              See resume for detailed education information
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
