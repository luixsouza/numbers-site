import React from 'react';

const HeroBanner = () => {
  return (
    <div className="w-full flex items-center justify-center gap-x-6 sm:gap-x-8 animate-fade-in">
      <img
        src="/images/numbers_logo_full_white.png"
        alt="Numbers Logo"
        className="h-24 md:h-28 w-auto"
      />
      <img
        src="/images/ifg_text.svg"
        alt="IFG Logo"
        className="h-24 md:h-28 w-auto"
      />
    </div>
  );
};

export default HeroBanner;