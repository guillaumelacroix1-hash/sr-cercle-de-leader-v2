import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, MapPin, Layers } from 'lucide-react';
import LazyVideo from './LazyVideo';

const features = [
  { val: "10", unit: "mois", label: "d'accompagnement intensif", icon: Clock },
  { val: "10", unit: "leaders", label: "max par cercle", icon: Users },
  { val: "4h", unit: "/mois", label: "sessions en présentiel à Paris", icon: MapPin },
  { val: "8", unit: "secteurs", label: "représentés pour enrichir les échanges", icon: Layers }
];

const modules = [
  {
    id: 1,
    title: "Posture & Présence",
    subtitle: "Axe I",
    details: [
      "Diagnostic de son potentiel de leader communicant",
      "Équilibrage non verbal et verbal",
      "Supprimer les tics de langage et les parasites",
      "Développer assurance et affirmation à l'oral",
      "Développer une posture assertive à l'oral",
      "Gagner en détente et résistance"
    ],
    videoFallback: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=1000"
  },
  {
    id: 2,
    title: "Communication & Influence",
    subtitle: "Axe II",
    details: [
      "Gagner en charisme, clarté et leadership à l'oral",
      "Convaincre rapidement en présentation et en réunion",
      "Structurer efficacement son discours",
      "Apprendre à s'adapter à son public rapidement",
      "La nécessité d'une bonne préparation",
      "Garder la maîtrise de son discours quel que soit l'enjeu",
      "Savoir rebondir face aux objections"
    ],
    videoFallback: "https://images.unsplash.com/photo-1541844053589-346841d0b34c?q=80&w=1000"
  },
  {
    id: 3,
    title: "Leadership & Management",
    subtitle: "Axe III",
    details: [
      "Porter la vision et la stratégie à l'oral",
      "Recadrer un collaborateur dans la détente si besoin",
      "Fédérer ses équipes, et obtenir l'engagement plus facilement",
      "Prendre toute sa place au sein du CODIR/COMEX et/ou avec ses pairs",
      "Convaincre plus efficacement sa hiérarchie, et/ou les Fonds"
    ],
    videoFallback: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000"
  },
  {
    id: 4,
    title: "Visibilité & Impact",
    subtitle: "Axe IV",
    details: [
      "Gagner en aisance face caméra/Conversationnel spontané/Media Training"
    ],
    videoFallback: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000"
  }
];

export default function ProgramDetails() {
  const [activeTab, setActiveTab] = useState(modules[0].id);
  const active = modules.find(m => m.id === activeTab);

  return (
    <section id="programme" className="py-16 sm:py-24 md:py-32 bg-brand-light text-brand-dark overflow-hidden">
      <div className="container-custom">
        <div className="mb-10 sm:mb-16">
          <span className="tag mb-4 sm:mb-6 inline-block">Le Programme</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-[1.1] mb-3 sm:mb-4">
            Un curriculum complet, <span className="text-brand-orange">100% cas réels</span>
          </h2>
          <p className="text-base sm:text-lg italic text-brand-dark-2/60">
            Mises en situation adaptées, personnalisées — pas de théorie creuse.
          </p>
        </div>

        {/* Horizontal tab bar — scrollable on mobile */}
        <div className="flex gap-2 sm:gap-3 mb-8 sm:mb-12 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
          {modules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActiveTab(mod.id)}
              className={`relative px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base uppercase tracking-wide transition-all duration-300 cursor-pointer shrink-0 ${
                activeTab === mod.id
                  ? 'text-white shadow-lg bg-gradient-to-br from-brand-dark-2 via-brand-dark-3 to-brand-dark-2 border border-brand-orange/20'
                  : 'bg-gradient-to-br from-brand-orange/[0.06] to-transparent text-brand-dark-2/60 border border-brand-orange/15 hover:border-brand-orange/30 hover:text-brand-orange shadow-sm'
              }`}
            >
              {activeTab === mod.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-br from-brand-dark-2 via-brand-dark-3 to-brand-dark-2 border border-brand-orange/20 rounded-xl"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  style={{ zIndex: -1 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md flex items-center justify-center text-xs sm:text-sm ${
                  activeTab === mod.id ? 'bg-brand-orange text-white' : 'bg-brand-dark-2/10 text-brand-dark-2/40'
                }`}>
                  {mod.id}
                </span>
                <span className="hidden sm:inline">{mod.title}</span>
                <span className="sm:hidden">{mod.subtitle}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="relative w-full bg-white rounded-2xl shadow-xl border border-brand-dark-2/5 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col lg:flex-row"
            >
              {/* Left — image banner */}
              <div className="w-full lg:w-5/12 relative min-h-[200px] sm:min-h-[250px] lg:min-h-[360px]">
                <img
                  src={active.videoFallback}
                  alt={active.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-2 via-brand-dark-2/50 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 sm:bottom-6 sm:left-8 sm:right-8 lg:bottom-10 lg:left-10">
                  <span className="text-brand-orange font-bold uppercase tracking-widest text-xs sm:text-sm mb-1.5 sm:mb-2 block">
                    {active.subtitle}
                  </span>
                  <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                    {active.title}
                  </h3>
                </div>
              </div>

              {/* Right — content list */}
              <div className="w-full lg:w-7/12 px-5 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6 flex flex-col justify-center">
                <ul className="space-y-1.5 sm:space-y-2">
                  {active.details.map((detail, idx) => (
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.06 }}
                      key={idx}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <span className="text-brand-orange font-bold text-lg sm:text-xl mt-0.5 shrink-0">→</span>
                      <span className="text-brand-dark-2/80 text-base sm:text-xl font-bold leading-relaxed">
                        {detail}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ========== FORMAT ========== */}
        <div className="mt-16 sm:mt-28" id="format">
          <div className="max-w-2xl mb-10 sm:mb-14">
            <span className="tag mb-3 sm:mb-4">Le format</span>
            <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-bold uppercase leading-tight">
              Exigeant par design. <span className="text-brand-orange">Efficace par nature.</span>
            </h2>
          </div>

          {/* 4 metrics — open layout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-12 gap-x-4 sm:gap-x-8 mb-12 sm:mb-16">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative ${index < 3 ? 'lg:border-r lg:border-brand-dark-2/10 lg:pr-8' : ''}`}
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange" />
                    </div>
                    <div className="flex items-baseline gap-1 sm:gap-1.5">
                      <span className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-brand-dark-2 leading-none">{item.val}</span>
                      <span className="text-sm sm:text-lg font-bold text-brand-dark-2/30 uppercase tracking-wide">{item.unit}</span>
                    </div>
                  </div>
                  <p className="text-brand-dark-2/50 text-sm sm:text-lg leading-relaxed">{item.label}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Price block with video background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-xl p-6 sm:p-12 lg:p-16 flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 overflow-hidden"
          >
            <div className="absolute inset-0 z-0">
              <LazyVideo
                src={`${import.meta.env.BASE_URL}oeil-video.mp4`}
                poster={`${import.meta.env.BASE_URL}posters/oeil.jpg`}
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-brand-dark/50 sm:bg-brand-dark/40" />
            </div>

            {/* Info */}
            <div className="relative z-10">
              <h3 className="text-white font-bold text-xl sm:text-2xl uppercase mb-1.5 sm:mb-2">Investissement 2026/27</h3>
              <p className="text-white/75 text-base sm:text-lg">Adhésion annuelle · Engagement 10 mois</p>
              <p className="text-white/60 text-sm sm:text-base mt-1.5 sm:mt-2">N° formation : 11 92 29538 92 · Île-de-France · Éligible financement entreprise</p>
            </div>

            {/* Price */}
            <div className="text-left lg:text-center shrink-0 relative z-10">
              <div className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-brand-orange leading-none">450 €</div>
              <p className="text-white/70 text-base sm:text-lg mt-1">net de taxe / mois</p>
            </div>

            {/* CTA card */}
            <div className="relative z-10 bg-brand-orange/10 border border-brand-orange/25 rounded-lg p-5 sm:p-6 text-center shrink-0 lg:min-w-[220px]">
              <span className="inline-block bg-brand-orange text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-3 sm:px-4 py-1.5 rounded-full mb-2 sm:mb-3">Places disponibles</span>
              <h4 className="text-white font-bold uppercase text-lg sm:text-xl mb-1">Cercle N°4 — 2026</h4>
              <p className="text-white/50 text-sm sm:text-base mb-3 sm:mb-4">10 dirigeants maximum</p>
              <a href="#inscription" className="btn-orange w-full justify-center text-xs sm:text-sm py-2.5 sm:py-3">Réserver un entretien →</a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
