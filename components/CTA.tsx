import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section id="signup" className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Faça parte da próxima revolução no mundo dos eventos.</h2>
          <p className="text-lg text-neutral-400 mb-8">
            👉 As vagas são limitadas. Cadastre-se agora para garantir seu lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://forms.gle/mR9S6U13a8f1xMs6A" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-orange-500 to-fuchsia-600 hover:from-orange-600 hover:to-fuchsia-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Cadastrar como Talento 🚀
            </a>
            <a 
              href="https://forms.gle/ynHJE5UUjmKnk8nY7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-purple-600 to-lime-400 hover:from-purple-700 hover:to-lime-500 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Cadastrar como Produtor 🎤
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};