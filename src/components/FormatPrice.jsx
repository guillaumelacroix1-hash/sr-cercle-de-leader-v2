import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { val: "10", unit: "mois", label: "d'accompagnement intensif" },
  { val: "10", unit: "leaders", label: "max par cercle" },
  { val: "4h", unit: "/mois", label: "sessions en présentiel à Paris" },
  { val: "8", unit: "secteurs", label: "représentés pour enrichir les échanges" }
];

export default function FormatPrice() {
  return (
    <section id="format" className="bg-brand-off-white text-brand-dark-2">

      {/* Format section */}
      <div className="py-24 md:py-32 container-custom">
        <div className="max-w-2xl mb-16">
          <span className="tag mb-4">Le format</span>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold uppercase leading-tight">
            Exigeant par design. <span className="text-brand-orange">Efficace par nature.</span>
          </h2>
        </div>

        {/* Metric strip — bold horizontal ticker style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden mb-24"
        >
          {/* Dark background */}
          <div className="absolute inset-0 bg-brand-dark" />
          {/* Subtle gradient accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 via-transparent to-brand-orange/5" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => (
              <div
                key={index}
                className={`p-8 lg:p-10 flex flex-col items-center text-center ${
                  index < features.length - 1 ? 'border-r border-white/10' : ''
                } ${index < 2 ? 'border-b lg:border-b-0 border-white/10' : ''}`}
              >
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-brand-orange leading-none">{item.val}</span>
                  <span className="text-sm font-bold text-white/40 uppercase tracking-wider">{item.unit}</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Price block — full width with video background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-20 lg:py-28 overflow-hidden"
      >
        {/* Background Video — Eye */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover bg-brand-dark"
          >
            <source src="https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/bandeau-oeil.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-brand-dark/50" />
        </div>

        <div className="container-custom relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <div>
            <h3 className="text-white font-bold text-3xl lg:text-4xl uppercase mb-4">Investissement 2026/27</h3>
            <p className="text-white/70 text-xl">Adhésion annuelle · Engagement 10 mois</p>
            <p className="text-white/50 text-lg mt-3">N° formation : 11 92 29538 92 · Île-de-France · Éligible financement entreprise</p>
          </div>

          <div className="text-left lg:text-center shrink-0">
            <div className="text-[clamp(3.5rem,6vw,5rem)] font-bold text-brand-orange leading-none">450 €</div>
            <p className="text-white/70 text-xl mt-2">net de taxe / mois</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center shrink-0 min-w-[260px]">
            <span className="inline-block bg-brand-orange text-white text-sm font-bold uppercase tracking-wider px-5 py-2 rounded-full mb-4">Places disponibles</span>
            <h4 className="text-white font-bold uppercase text-2xl mb-2">Cercle N°4 — 2026</h4>
            <p className="text-white/70 text-lg mb-6">10 dirigeants maximum</p>
            <a href="#inscription" className="btn-orange w-full justify-center text-base py-4">Réserver un entretien →</a>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
