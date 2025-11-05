import React from 'react';
import { Icons } from './Icons';

const benefits = [
  {
    icon: <Icons.access />,
    title: 'Acesso Antecipado',
    description: 'Seja o primeiro a explorar as principais funções da plataforma.',
  },
  {
    icon: <Icons.feedback />,
    title: 'Feedback Direto',
    description: 'Oportunidade de sugerir melhorias diretamente à equipe de criação.',
  },
  {
    icon: <Icons.founder />,
    title: 'Vantagens Exclusivas',
    description: 'Receba benefícios como usuário fundador na versão oficial.',
  },
];

export const BetaBenefits: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🌟 Por que participar do <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-orange-500">Beta</span>?
          </h2>
          <p className="text-neutral-400 text-lg mb-12">
            Ao se juntar agora, você não apenas obtém acesso antecipado, mas também se torna uma parte fundamental da nossa jornada.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 text-center">
              <div className="text-lime-400 mb-4 inline-block">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-neutral-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};