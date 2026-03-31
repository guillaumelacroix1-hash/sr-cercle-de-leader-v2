import React from 'react';
import { motion } from 'framer-motion';

export default function FormatPrice() {
  const formatCards = [
    { icon: "👥", val: "10", subtitle: "Leaders max", desc: "8 secteurs représentés" },
    { icon: "⏱", val: "4h", subtitle: "Par mois", desc: "Intensif · Cas réels" },
    { icon: "📍", val: "Paris", subtitle: "Paris & Boulogne", desc: "Espace confidentiel" },
    { icon: "📅", val: "10", subtitle: "Mois d'engagement", desc: "Progression profonde" },
  ];

  return (
    <section className="bg-brand-off-white py-24" id="format">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="tag">Le format</span>
          <h2 className="font-bold text-[clamp(1.75rem,4vw,3.2rem)] uppercase leading-[1.15]">
            Exigeant par design.<br />Efficace par nature.
          </h2>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {formatCards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <span className="block font-bold text-4xl text-brand-dark-2 mb-2">{card.val}</span>
              <span className="block text-[13px] text-gray-500 leading-relaxed">
                <strong className="text-gray-700">{card.subtitle}</strong><br />
                {card.desc}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Pricing Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-dark-2 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle decoration */}
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-orange rounded-full blur-[120px] opacity-20 pointer-events-none" />

          {/* Price Context */}
          <div className="text-center lg:text-left relative z-10 flex-1">
            <h3 className="text-white font-bold text-2xl uppercase mb-2">Investissement 2026/27</h3>
            <p className="text-white/50 text-[13px] mb-4">Adhésion annuelle · Engagement 10 mois</p>
            <p className="text-[11px] text-white/30 uppercase tracking-[1px] font-bold">
              N° formation : 11 92 29538 92 · Île-de-France<br/>
              Éligible financement entreprise
            </p>
          </div>

          {/* Price Tag */}
          <div className="text-center relative z-10">
            <div className="font-bold text-[clamp(3.5rem,5vw,5rem)] text-brand-orange leading-none mb-2">450 €</div>
            <div className="text-[13px] text-white/50 uppercase tracking-[2px] font-bold">net de taxe / mois</div>
          </div>

          {/* CTA Box */}
          <div className="bg-brand-orange/15 border border-brand-orange/30 rounded-xl py-6 px-8 text-center w-full lg:w-auto min-w-[260px] relative z-10 backdrop-blur-sm">
            <span className="inline-block bg-brand-orange text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3">
              Places disponibles
            </span>
            <h3 className="text-white font-bold text-lg uppercase mb-1">Cercle N°4 — 2026</h3>
            <p className="text-white/60 text-[13px] mb-6">Adhésion en cours<br/>10 dirigeants maximum</p>
            <a href="#inscription" className="btn-orange w-full justify-center text-[13px]">
              Candidater →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
