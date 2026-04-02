import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-2 shadow-[0_1px_30px_rgba(0,0,0,0.08)]'
          : 'py-4'
      }`}
      style={{
        background: isScrolled
          ? 'rgba(255, 255, 255, 0.65)'
          : 'rgba(255, 255, 255, 0)',
        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.06)' : '1px solid transparent',
      }}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}logo-sr.png`}
            alt="Logo Méthode Stéphanie Raphaël"
            className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-10 md:h-14' : 'h-20 md:h-28'}`}
            style={isScrolled ? { filter: 'invert(1) brightness(0)' } : {}}
          />
        </a>

        {/* Navigation In-Page */}
        <nav className="hidden lg:flex items-center gap-8">
          {['Programme', 'Format', 'Témoignages'].map((item, idx) => {
            const id = item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return (
              <a
                key={idx}
                href={`#${id}`}
                className={`text-[13px] font-bold uppercase tracking-[1.5px] transition-colors duration-300 ${
                  isScrolled
                    ? 'text-brand-dark-2/70 hover:text-brand-orange'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#inscription" className="btn-orange text-[12px] md:text-[13px] px-4 md:px-6 py-2.5 md:py-3.5">
            Réserver un entretien
          </a>
        </div>
      </div>
    </motion.header>
  );
}
