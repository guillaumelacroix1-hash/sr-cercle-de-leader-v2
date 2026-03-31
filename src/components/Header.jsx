import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-dark/95 backdrop-blur-md py-4 shadow-[0_4px_32px_rgba(0,0,0,0.4)]' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#">
            <img 
              src="https://www.methodestephanieraphael.com/wp-content/uploads/2025/05/LOGO_SRM_HAUT_BLANC.png" 
              alt="Méthode Stéphanie Raphaël" 
              className="h-10 md:h-12 w-auto"
            />
          </a>
          <a 
            href="#inscription" 
            className="btn-orange hidden sm:inline-flex"
          >
            Rejoindre le Cercle N°4 →
          </a>
        </div>
      </div>
    </motion.header>
  );
}
