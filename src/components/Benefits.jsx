import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, TrendingUp, Users, Sparkles, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const sectors = [
  "Finance", "Énergie", "Luxe", "Recrutement",
  "Médical", "Culture", "Agroalimentaire", "Numérique/Tech"
];

const benefits = [
  { verb: "Gagnez", desc: "en impact et légitimité dans votre posture de LEADER Communicant", icon: Target },
  { verb: "Incarnez", desc: "pleinement votre vision et stratégie à l'oral", icon: Sparkles },
  { verb: "Obtenez", desc: "l'adhésion plus rapidement de vos équipes", icon: Users },
  { verb: "Développez", desc: "votre autorité naturellement dans la détente, avec vos pairs, partenaires, clients et hiérarchie", icon: TrendingUp },
  { verb: "Négociez", desc: "plus efficacement", icon: Shield },
];

function Carousel3D({ benefits }) {
  const [active, setActive] = useState(0);
  const count = benefits.length;

  const next = useCallback(() => setActive((p) => (p + 1) % count), [count]);
  const prev = useCallback(() => setActive((p) => (p - 1 + count) % count), [count]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Swipe support for mobile
  const [touchStart, setTouchStart] = useState(null);
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    setTouchStart(null);
  };

  // Position each card relative to active
  function getCardStyle(index) {
    let offset = index - active;
    if (offset > 2) offset -= count;
    if (offset < -2) offset += count;

    const absOffset = Math.abs(offset);
    const x = offset * 320;
    const z = -absOffset * 180;
    const rotateY = offset * -12;
    const scale = 1 - absOffset * 0.12;
    const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.3;

    return { x, z, rotateY, scale, opacity };
  }

  return (
    <div className="mb-20 sm:mb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-10 sm:mb-14"
      >
        <div>
          <span className="tag text-brand-orange mb-3 sm:mb-4 block">Ce que vous gagnez</span>
          <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold uppercase leading-tight">
            5 transformations concrètes <span className="text-brand-orange">en 10 mois</span>
          </h3>
        </div>
        {/* Nav arrows */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-brand-orange hover:border-brand-orange/50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-brand-orange hover:border-brand-orange/50 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Mobile: simple card slider */}
      <div
        className="block md:hidden relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {(() => {
              const item = benefits[active];
              const Icon = item.icon;
              return (
                <div className="rounded-xl p-6 sm:p-8 border border-brand-orange/40 bg-gradient-to-br from-brand-orange/15 to-brand-orange/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-brand-orange/50 to-transparent" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-brand-orange/20 border border-brand-orange/30">
                      <Icon className="w-5 h-5 text-brand-orange" />
                    </div>
                    <span className="font-bold text-2xl uppercase block mb-3 text-brand-orange">
                      {item.verb}
                    </span>
                    <p className="text-base leading-relaxed text-white/70">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop: 3D Stage */}
      <div className="hidden md:block relative w-full h-[320px]" style={{ perspective: '1200px' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            const style = getCardStyle(index);
            const isActive = index === active;

            return (
              <motion.div
                key={index}
                animate={{
                  x: style.x,
                  z: style.z,
                  rotateY: style.rotateY,
                  scale: style.scale,
                  opacity: style.opacity,
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 28 }}
                onClick={() => setActive(index)}
                className="absolute w-[300px] cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className={`relative rounded-xl p-8 overflow-hidden border transition-colors duration-300 ${
                  isActive
                    ? 'border-brand-orange/40 bg-gradient-to-br from-brand-orange/15 to-brand-orange/5'
                    : 'border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.02]'
                }`}>
                  {isActive && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-brand-orange/50 to-transparent" />
                  )}

                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                      isActive ? 'bg-brand-orange/20 border border-brand-orange/30' : 'bg-white/[0.06] border border-white/[0.08]'
                    }`}>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-brand-orange' : 'text-white/40'}`} />
                    </div>
                    <span className={`font-bold text-2xl uppercase block mb-3 transition-colors duration-300 ${
                      isActive ? 'text-brand-orange' : 'text-white/60'
                    }`}>
                      {item.verb}
                    </span>
                    <p className={`text-base leading-relaxed transition-colors duration-300 ${
                      isActive ? 'text-white/70' : 'text-white/30'
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-6 sm:mt-8">
        {benefits.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === active ? 'w-8 bg-brand-orange' : 'w-2 bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Benefits() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 text-white overflow-hidden">

      {/* Layered background */}
      <div className="absolute inset-0 bg-brand-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(244,150,25,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(244,150,25,0.05)_0%,transparent_50%)]" />

      <div className="container-custom relative z-10">

        {/* ========== BLOCK 1 — Objectifs ========== */}
        <div className="mb-16 sm:mb-28">
          <div className="flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-20">

            {/* Left — Title + description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <span className="tag text-brand-orange mb-3 sm:mb-4 block">Objectifs</span>
              <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-bold uppercase leading-tight mb-6 sm:mb-8">
                Un leader communicant est un leader <span className="text-brand-orange">plus performant</span>
              </h2>
              <div className="space-y-3 sm:space-y-4 text-white/60 text-base sm:text-lg leading-relaxed">
                <p>Incarnez pleinement votre vision et stratégie.</p>
                <p>Obtenez l'adhésion plus rapidement de vos équipes.</p>
                <p>Développez votre autorité naturelle dans la détente avec vos clients, vos partenaires, vos pairs et votre hiérarchie.</p>
              </div>
            </motion.div>

            {/* Right — 4 keywords stacked with animated bars */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 sm:gap-8">
              {["Guidez", "Boostez", "Inspirez", "Performez"].map((word, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="group"
                >
                  <p className="text-white font-bold text-xl sm:text-2xl uppercase tracking-wider mb-2 sm:mb-3 group-hover:text-brand-orange transition-colors duration-300">
                    + {word}
                  </p>
                  <div className="relative h-[3px] w-full bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.2, ease: "easeOut" }}
                      className="absolute inset-y-0 left-0 bg-brand-orange rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* ========== BLOCK 2 — 5 Transformations 3D Carousel ========== */}
        <Carousel3D benefits={benefits} />

        {/* ========== BLOCK 3 — Sectors + Context ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Background gradient card */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-brand-orange/5 to-transparent border border-brand-orange/10 rounded-2xl" />

          <div className="relative z-10 p-6 sm:p-10 lg:p-16">
            <div className="flex flex-col lg:flex-row gap-10 sm:gap-14 lg:gap-20">

              {/* Left — Sectors */}
              <div className="w-full lg:w-5/12">
                <span className="tag text-brand-orange mb-4 sm:mb-6 block">Le Cercle</span>
                <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold uppercase leading-tight mb-6 sm:mb-8">
                  8 secteurs <span className="text-brand-orange">représentés</span>
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {sectors.map((sector, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-brand-orange/30 hover:bg-brand-orange/5 transition-all duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-brand-orange/50 group-hover:bg-brand-orange transition-colors duration-300 shrink-0" />
                      <span className="text-white/70 text-sm sm:text-base font-bold group-hover:text-white transition-colors duration-300">
                        {sector}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Context text */}
              <div className="w-full lg:w-7/12 flex flex-col justify-center">
                <p className="text-white/85 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8 font-medium">
                  Chaque LEADER est coaché au plus près de ses enjeux de communication,
                  pour cultiver un leadership influent, puissant et profondément aligné
                  au service de sa vision.
                </p>
                <p className="text-white/50 text-base sm:text-lg leading-relaxed">
                  Les Cercles de LEADERS Communicants sont des terrains d'entraînement exigeants.
                  On y prend du recul, on gagne en clarté, on s'affirme. On y forge une posture
                  solide, capable d'impacter à l'oral avec précision, force, détente et maîtrise.
                </p>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
