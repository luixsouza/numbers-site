import React from 'react';

const HeroBanner = () => {
  return (
    // <<< MUDANÇA: Espaçamento (gap) foi reduzido para aproximar os logos
    <div className="w-full flex items-center justify-center gap-x-6 sm:gap-x-8 animate-fade-in">
      
      {/* Logo 1 - Tamanho aumentado novamente */}
      <img
        src="/images/numbers_logo_full_white.png"
        alt="Numbers Logo"
        // <<< MUDANÇA: de h-16 md:h-20 para h-20 md:h-24
        className="h-20 md:h-24 w-auto"
      />

      {/* <<< MUDANÇA: Linha vertical do meio foi removida >>> */}

      {/* Logo 2 - Tamanho aumentado novamente e src atualizado */}
      <img
        src="/images/ifg_text.svg"
        alt="IFG Logo"
        // <<< MUDANÇA: de h-16 md:h-20 para h-20 md:h-24
        className="h-20 md:h-24 w-auto"
      />

    </div>
  );
};

export default HeroBanner;