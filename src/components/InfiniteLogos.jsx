import React from 'react';

const B = import.meta.env.BASE_URL;
const logos = [
  { src: `${B}logos/logo-eads-300x300.png`, alt: "EADS" },
  { src: `${B}logos/logo-total-300x300.png`, alt: "TotalEnergies" },
  { src: `${B}logos/logo-schneider-300x300.png`, alt: "Schneider Electric" },
  { src: `${B}logos/logo-edhec-300x300.png`, alt: "EDHEC" },
  { src: `${B}logos/logo-dauphine-psl-300x300.png`, alt: "Paris Dauphine PSL" },
  { src: `${B}logos/logo-CA-300x300.png`, alt: "Crédit Agricole" },
  { src: `${B}logos/logo-laposte-300x300.png`, alt: "La Poste" },
  { src: `${B}logos/logo-inria-300x300.png`, alt: "INRIA" },
  { src: `${B}logos/logo-G-roussy-300x300.png`, alt: "Gustave Roussy" },
  { src: `${B}logos/logo-amundi-300x300.png`, alt: "Amundi" },
  { src: `${B}logos/logo-malakoff-300x300.png`, alt: "Malakoff Humanis" },
  { src: `${B}logos/logo-valoourec-300x300.png`, alt: "Vallourec" },
  { src: `${B}logos/logo-saipem-300x300.png`, alt: "Saipem" },
  { src: `${B}logos/logo-SC-Po-300x300.png`, alt: "Sciences Po" },
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
          opacity: 0.7,
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
