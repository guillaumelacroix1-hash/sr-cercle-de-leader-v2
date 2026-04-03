import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = ['Programme', 'Format', 'Témoignages'];

function navId(item) {
  return item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMobileOpen(false);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <>
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
            : 'py-3 sm:py-4'
        }`}
        style={{
          background: isScrolled || mobileOpen
            ? 'rgba(255, 255, 255, 0.65)'
            : 'rgba(255, 255, 255, 0)',
          backdropFilter: isScrolled || mobileOpen ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled || mobileOpen ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.06)' : '1px solid transparent',
        }}
      >
        <div className="container-custom flex items-center justify-between">
          <a href="#" className="flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}logo-sr.png`}
              alt="Logo Méthode Stéphanie Raphaël"
              className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-8 sm:h-10 md:h-14' : 'h-14 sm:h-20 md:h-28'}`}
              style={isScrolled || mobileOpen ? { filter: 'invert(1) brightness(0)' } : {}}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={idx}
                href={`#${navId(item)}`}
                className={`text-[13px] font-bold uppercase tracking-[1.5px] transition-colors duration-300 ${
                  isScrolled
                    ? 'text-brand-dark-2/70 hover:text-brand-orange'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#inscription" className="btn-orange text-[11px] sm:text-[12px] md:text-[13px] px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3.5">
              <span className="hidden sm:inline">Réserver un entretien</span>
              <span className="sm:hidden">Réserver</span>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                isScrolled || mobileOpen ? 'text-brand-dark-2' : 'text-white'
              }`}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-black/5"
            >
              <div className="container-custom py-4 flex flex-col gap-1">
                {NAV_ITEMS.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${navId(item)}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-brand-dark-2/70 hover:text-brand-orange font-bold text-[14px] uppercase tracking-[1.5px] py-3 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
