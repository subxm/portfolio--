import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const Divider = () => <div className="w-full h-px bg-zinc-800 my-8" />;

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <main className="w-full flex flex-col gap-0 items-center justify-center max-w-2xl px-4">
        <Hero />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
