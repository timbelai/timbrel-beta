import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { BetaBenefits } from './components/BetaBenefits';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans leading-relaxed">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-neutral-800/[0.2] [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
      <Header />
      <main className="relative z-10">
        <Hero />
        <Features />
        <BetaBenefits />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;