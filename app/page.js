import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const Divider = () => <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />;

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <main className="w-full max-w-4xl flex flex-col gap-16 py-10 px-6 md:px-12">
        <Hero />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Footer />
      </main>
    </div>
  );
}
