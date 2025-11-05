import React from 'react';
import { CountdownTimer } from './CountdownTimer';

const scrollToSignup = () => {
  document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
};

export const Hero: React.FC = () => {
  return (
    <section 
      className="relative pt-32 pb-20 text-center bg-cover bg-center" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-orange-500 to-fuchsia-500">
            Espetáculos para seu talento. Talentos para seu espetáculo.
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mt-6 mb-8">
            O Timbrel.AI é a nova plataforma que conecta artistas, produtores e eventos em um só lugar. Seja você quem faz o espetáculo acontecer ou quem sobe ao palco, este é o seu espaço.
          </p>
          <div className="bg-purple-900/30 border border-purple-500/50 rounded-lg p-4 max-w-lg mx-auto">
            <p className="text-purple-300"><span className="font-bold">💡 Vagas exclusivas para usuários beta.</span> Participe da fase inicial e ajude a construir a rede que vai transformar o mundo dos eventos.</p>
          </div>

          <CountdownTimer />

          <button
            onClick={scrollToSignup}
            className="bg-gradient-to-r from-orange-500 to-fuchsia-600 hover:from-orange-600 hover:to-fuchsia-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            QUERO FAZER PARTE DO BETA 🔥
          </button>
        </div>
      </div>
    </section>
  );
};