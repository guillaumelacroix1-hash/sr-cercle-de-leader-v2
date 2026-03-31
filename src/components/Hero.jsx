import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden text-white">
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay muted loop playsInline
      >
        <source src="https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/bandeau-les-cercles-methode-Stephanie-Raphael.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-brand-dark/40" />
      
      <div className="container-custom relative z-20 w-full pb-20 pt-10">
        <div className="max-w-[700px]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/40 text-brand-orange px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[2px] uppercase mb-7"
          >
            <span className="text-sm">★</span> Cercles N°1 · N°2 · N°3 — Complets
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="font-bold text-[clamp(2.5rem,6vw,5rem)] uppercase leading-[1.05] tracking-tight mb-4"
          >
            Les Cercles de<br/>LEADERS <span className="text-brand-orange block">Communicants</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-[clamp(1rem,2vw,1.375rem)] italic text-white/75 mb-10 leading-relaxed tracking-wide"
          >
            Cultivez votre puissance.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="#inscription" className="btn-orange">
              Candidater au Cercle N°4 →
            </a>
            <a href="#programme" className="btn-white-outline">
              Découvrir le programme
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-16 h-0.5 bg-brand-orange mb-8 origin-left"
          />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-wrap gap-8 md:gap-12"
          >
            <div>
              <span className="font-bold text-4xl text-brand-orange leading-none block mb-1">17</span>
              <span className="text-[11px] text-white/50 uppercase tracking-[1.5px]">ans d'expérience</span>
            </div>
            <div>
              <span className="font-bold text-4xl text-brand-orange leading-none block mb-1">3</span>
              <span className="text-[11px] text-white/50 uppercase tracking-[1.5px]">Cercles complets</span>
            </div>
            <div>
              <span className="font-bold text-4xl text-brand-orange leading-none block mb-1">100%</span>
              <span className="text-[11px] text-white/50 uppercase tracking-[1.5px]">Satisfaction EDHEC 2023</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Aside / Availability Card */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-brand-dark/80 backdrop-blur-xl border-l border-white/10 p-8 w-[320px]"
      >
        <p className="text-[11px] font-bold tracking-[2px] uppercase text-white/40 mb-5">État des Cercles</p>
        
        <div className="flex justify-between items-center py-3 border-b border-white/10 text-[13px] text-white/80 font-bold">
          <span>Cercle N°1 — Fév. 2025</span>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-500/15 text-red-400 border border-red-500/30">Complet</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-white/10 text-[13px] text-white/80 font-bold">
          <span>Cercle N°2 — Avr. 2025</span>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-500/15 text-red-400 border border-red-500/30">Complet</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-white/10 text-[13px] text-white/80 font-bold">
          <span>Cercle N°3 — Sep. 2025</span>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-500/15 text-red-400 border border-red-500/30">Complet</span>
        </div>
        <div className="flex justify-between items-center pt-4 mt-2 border-t border-brand-orange/30 text-[13px] font-bold">
          <span className="text-brand-orange">Cercle N°4 — 2026</span>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-green-500/15 text-green-400 border border-green-500/30">Ouvert</span>
        </div>
        
        <a href="#inscription" className="btn-orange w-full justify-center mt-6 text-[13px]">
          Candidater →
        </a>
      </motion.div>
    </section>
  );
}
