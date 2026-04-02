import React from 'react';

const logos = [
  { src: "https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-eads-300x300.jpg", alt: "EADS" },
  { src: "https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-total-300x300.jpg", alt: "TotalEnergies" },
  { src: "https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-schneider-300x300.jpg", alt: "Schneider Electric" },
  { src: "https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-edhec-300x300.jpg", alt: "EDHEC" },
  { src: "https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-dauphine-psl-300x300.jpg", alt: "Paris Dauphine PSL" },
  { src: "https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-CA-300x300.jpg", alt: "Crédit Agricole" },
  { src: "https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-laposte-300x300.jpg", alt: "La Poste" },
  { src: "https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-inria-300x300.jpg", alt: "INRIA" },
  { src: "https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-G-roussy-300x300.jpg", alt: "Gustave Roussy" },
  { src: "https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-amundi-300x300.jpg", alt: "Amundi" },
  { src: "https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-malakoff-300x300.jpg", alt: "Malakoff Humanis" },
  { src: "https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-valoourec-300x300.jpg", alt: "Vallourec" },
  { src: "https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-saipem-300x300.jpg", alt: "Saipem" },
  { src: "https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-SC-Po-300x300.jpg", alt: "Sciences Po" },
];

function LogoItem({ logo }) {
  return (
    <div className="shrink-0 w-[100px] h-[60px] md:w-[140px] md:h-[80px] overflow-hidden mx-3 md:mx-5 flex items-center justify-center">
      <img
        src={logo.src}
        alt={logo.alt}
        loading="lazy"
        className="w-full h-full object-contain"
        style={{
          filter: 'brightness(0) invert(1)',
          mixBlendMode: 'screen',
          transform: 'scale(1.7)',
          opacity: 0.65,
        }}
      />
    </div>
  );
}

export default function InfiniteLogos() {
  return (
    <div className="relative bg-brand-dark border-t border-white/10 py-5 overflow-hidden">
      <p className="text-center text-[10px] md:text-[11px] font-bold uppercase tracking-[3px] text-white/60 mb-4">
        Ils font confiance à Stéphanie Raphaël
      </p>

      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

        {/* CSS animation marquee — two identical strips side by side */}
        <div className="flex w-max animate-marquee">
          <div className="flex items-center shrink-0">
            {logos.map((logo, i) => <LogoItem key={`a-${i}`} logo={logo} />)}
          </div>
          <div className="flex items-center shrink-0">
            {logos.map((logo, i) => <LogoItem key={`b-${i}`} logo={logo} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
