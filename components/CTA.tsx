import React, { useState } from 'react';

export const CTA: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Obrigado por se inscrever, ${email}! Enviaremos novidades em breve.`);
    setEmail('');
  };
  
  return (
    <section id="signup" className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Faça parte da próxima revolução no mundo dos eventos.</h2>
          <p className="text-lg text-neutral-400 mb-8">
            👉 As vagas são limitadas. Cadastre-se agora para garantir seu lugar.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              required
              className="flex-grow w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-fuchsia-600 hover:from-orange-600 hover:to-fuchsia-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              QUERO FAZER PARTE DO BETA 🔥
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};