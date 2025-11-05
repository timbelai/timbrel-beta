import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-neutral-800">
      <div className="container mx-auto px-6 text-center text-neutral-500">
        <p>&copy; {new Date().getFullYear()} TIMBREL.AI. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};