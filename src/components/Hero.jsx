import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const circles = [
  { id: 1, status: "Complet", desc: "Février 2025", active: false },
  { id: 2, status: "Complet", desc: "Avril 2025", active: false },
  { id: 3, status: "Complet", desc: "Septembre 2025", active: false },
  { id: 4, status: "Inscriptions ouvertes", desc: "2026", active: true },
];

const RING_SIZE = 250;
const STROKE = 5;
const RADIUS = (RING_SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const CYCLE_DURATION = 16000; // 16s pour un tour complet (4s par quart)
const STEP_DURATION = CYCLE_DURATION / circles.length;

function CircleSlider() {
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let animFrame;
    let start = null;

    const tick = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) % CYCLE_DURATION;
      const pct = (elapsed / CYCLE_DURATION) * 100;
      setProgress(pct);

      const idx = Math.min(Math.floor(elapsed / STEP_DURATION), circles.length - 1);
      setCurrentIndex(idx);

      animFrame = requestAnimationFrame(tick);
    };

    animFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  const current = circles[currentIndex];
  const offset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;
  const isActive = current.active;

  return (
    <div className="relative w-full max-w-[280px] ml-auto mt-16 lg:mt-0 flex items-center justify-center">

      {/* Glow behind when active */}
      <motion.div
        animate={{ opacity: isActive ? 0.3 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute w-[260px] h-[260px] rounded-full bg-brand-orange blur-[60px] pointer-events-none"
      />

      {/* SVG ring */}
      <svg width={RING_SIZE} height={RING_SIZE} className="relative z-10">
        {/* Track */}
        <circle
          cx={RING_SIZE / 2}
          cy={RING_SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={STROKE}
        />
        {/* Quarter marks */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i / 4) * 360 - 90;
          const rad = (angle * Math.PI) / 180;
          const x = RING_SIZE / 2 + RADIUS * Math.cos(rad);
          const y = RING_SIZE / 2 + RADIUS * Math.sin(rad);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={3}
              fill={currentIndex >= i ? (circles[i].active ? "#f49619" : "rgba(255,255,255,0.4)") : "rgba(255,255,255,0.15)"}
            />
          );
        })}
        {/* Continuous progress arc */}
        <circle
          cx={RING_SIZE / 2}
          cy={RING_SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke={isActive ? "#f49619" : "rgba(255,255,255,0.35)"}
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center",
            transition: "stroke 0.5s ease",
          }}
        />
      </svg>

      {/* Glass circle center */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <motion.div
          animate={{
            backgroundColor: isActive ? "rgba(244,150,25,0.15)" : "rgba(255,255,255,0.05)",
            borderColor: isActive ? "rgba(244,150,25,0.3)" : "rgba(255,255,255,0.1)",
          }}
          transition={{ duration: 0.8 }}
          className="w-[200px] h-[200px] rounded-full backdrop-blur-md border flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-center px-4"
            >
              <span className={`text-[9px] uppercase font-bold tracking-[2px] block mb-2 ${
                isActive ? 'text-brand-orange' : 'text-white/40'
              }`}>
                Cercle
              </span>
              <h3 className="text-white text-4xl font-bold leading-none mb-1">
                N°{current.id}
              </h3>
              <p className="text-white/50 text-sm mb-3">{current.desc}</p>
              <span className={`inline-block px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full ${
                isActive
                  ? 'bg-brand-orange text-white shadow-[0_0_20px_rgba(244,150,25,0.4)]'
                  : 'bg-white/10 text-white/50'
              }`}>
                {current.status}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="relative min-h-[600px] lg:min-h-[100svh] flex items-center pt-24 pb-12 overflow-hidden bg-brand-dark">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Poster — always visible instantly */}
        <img
          src={`${import.meta.env.BASE_URL}posters/hero.jpg`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-80 scale-105"
          style={{ display: videoReady ? 'none' : 'block' }}
        />
        {/* Video — invisible until loaded and playing */}
        <video
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoReady(true)}
          className="absolute inset-0 w-full h-full object-cover opacity-80 scale-105"
          style={{ opacity: videoReady ? 0.8 : 0, transition: 'opacity 0.8s ease' }}
        >
          <source src={`${import.meta.env.BASE_URL}hero-video.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* Left Text Block */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-3/5 text-left"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="tag text-brand-orange mb-6"
            >
              Programme exclusif — Dirigeants & membres de CODIR
            </motion.span>
            
            <h1 className="text-white font-bold leading-[1.05] uppercase mb-8">
              <span className="block text-[clamp(2.5rem,5vw,4.5rem)] text-white/90">Le Cercle des</span>
              <span className="block text-[clamp(2.5rem,5vw,4.5rem)] text-brand-orange">LEADERS</span>
              <span className="block text-[clamp(2.5rem,5vw,4.5rem)] text-white">Communicants</span>
            </h1>
            
            <p className="text-white/70 text-[clamp(16px,1.8vw,22px)] leading-relaxed max-w-xl mb-10 font-medium">
              Le cercle exclusif qui transforme la prise de parole des dirigeants
              en avantage compétitif. Gagnez en charisme, en clarté et en leadership à l'oral.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a href="#inscription" className="btn-orange w-full sm:w-auto justify-center text-[13px] py-4 px-8">
                Réserver mon entretien de sélection
              </a>
              <a href="#programme" className="btn-white-outline w-full sm:w-auto justify-center text-[13px] py-4 px-8 border-white/20 hover:bg-white/10 hover:text-white">
                Découvrir le programme
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Status Carousel */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-2/5"
          >
            <CircleSlider />
          </motion.div>
          
        </div>
      </div>

      {/* Logo marquee — overlaid at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-4 pt-6">
        <p className="text-center text-[10px] md:text-[11px] font-bold uppercase tracking-[3px] text-white/40 mb-3">
          Ils font confiance à Stéphanie Raphaël
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />
          <div className="flex w-max animate-marquee">
            {[0, 1].map(set => (
              <div key={set} className="flex items-center shrink-0">
                {[
                  { src: `${import.meta.env.BASE_URL}logos/logo-eads-300x300.png`, alt: "EADS" },
                  { src: `${import.meta.env.BASE_URL}logos/logo-total-300x300.png`, alt: "TotalEnergies" },
                  { src: `${import.meta.env.BASE_URL}logos/logo-schneider-300x300.png`, alt: "Schneider Electric" },
                  { src: `${import.meta.env.BASE_URL}logos/logo-edhec-300x300.png`, alt: "EDHEC" },
                  { src: `${import.meta.env.BASE_URL}logos/logo-dauphine-psl-300x300.png`, alt: "Paris Dauphine PSL" },
                  { src: `${import.meta.env.BASE_URL}logos/logo-CA-300x300.png`, alt: "Crédit Agricole" },
                  { src: `${import.meta.env.BASE_URL}logos/logo-laposte-300x300.png`, alt: "La Poste" },
                  { src: `${import.meta.env.BASE_URL}logos/logo-inria-300x300.png`, alt: "INRIA" },
                  { src: `${import.meta.env.BASE_URL}logos/logo-G-roussy-300x300.png`, alt: "Gustave Roussy" },
                  { src: `${import.meta.env.BASE_URL}logos/logo-amundi-300x300.png`, alt: "Amundi" },
                  { src: `${import.meta.env.BASE_URL}logos/logo-malakoff-300x300.png`, alt: "Malakoff Humanis" },
                  { src: `${import.meta.env.BASE_URL}logos/logo-valoourec-300x300.png`, alt: "Vallourec" },
                  { src: `${import.meta.env.BASE_URL}logos/logo-saipem-300x300.png`, alt: "Saipem" },
                  { src: `${import.meta.env.BASE_URL}logos/logo-SC-Po-300x300.png`, alt: "Sciences Po" },
                ].map((logo, i) => (
                  <div key={`${set}-${i}`} className="shrink-0 w-[80px] h-[50px] md:w-[120px] md:h-[65px] overflow-hidden mx-3 md:mx-5 flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className="w-full h-full object-contain brightness-0 invert opacity-60"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
