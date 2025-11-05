import React from 'react';
import { Icons } from './Icons';

const talentFeatures = [
  {
    icon: <Icons.discover />,
    title: 'Seja Descoberto',
    description: 'Por produtores e organizadores de eventos que buscam exatamente o seu perfil.',
  },
  {
    icon: <Icons.portfolio />,
    title: 'Portfólio com IA',
    description: 'Crie um portfólio dinâmico e inteligente que destaca o melhor do seu trabalho.',
  },
  {
    icon: <Icons.inbox />,
    title: 'Receba Convites',
    description: 'Receba convites e propostas de trabalho diretamente pelo nosso aplicativo.',
  },
];

const producerFeatures = [
  {
    icon: <Icons.search />,
    title: 'Encontre Talentos',
    description: 'Encontre talentos próximos com o perfil ideal para o seu evento com filtros inteligentes.',
  },
  {
    icon: <Icons.manage />,
    title: 'Gerencie com IA',
    description: 'Gerencie equipes, orçamentos e tarefas com o suporte da nossa inteligência artificial.',
  },
  {
    icon: <Icons.experience />,
    title: 'Crie Experiências',
    description: 'Crie experiências únicas com pessoas que compartilham o mesmo propósito que você.',
  },
];

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-neutral-950 p-6 rounded-xl border border-neutral-800 transform hover:-translate-y-1 transition-transform duration-300">
    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-neutral-400">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* For Talents */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold text-center lg:text-left">🚀 Para <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-fuchsia-500">Talentos</span></h2>
            <p className="text-neutral-400 text-center lg:text-left">Se você é músico, fotógrafo, filmmaker, técnico de som, decorador ou artista, o Timbrel.AI vai te ajudar a:</p>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {talentFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>

          {/* For Producers */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold text-center lg:text-left">🎤 Para <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-fuchsia-500">Produtores</span> de Eventos</h2>
            <p className="text-neutral-400 text-center lg:text-left">Se você é organizador, líder de ministério, gestor cultural ou produtor, o Timbrel.AI vai te permitir:</p>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {producerFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};