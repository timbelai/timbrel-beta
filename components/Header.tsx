import React from 'react';

const scrollToSignup = () => {
  document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
};

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-fuchsia-500 to-purple-600">
          TIMBREL.AI
        </h1>
        <button
          onClick={scrollToSignup}
          className="hidden sm:inline-block bg-purple-500/10 hover:bg-purple-500/20 text-white font-semibold py-2 px-4 border border-purple-500/20 rounded-lg shadow-lg transition-all duration-300"
        >
          Participar do Beta
        </button>
      </div>
    </header>
  );
};