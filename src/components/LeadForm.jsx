import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Clock } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/stephanie-raphael/le-cercle-des-leaders-communicants-echanges';

export default function LeadForm() {
  return (
    <section id="inscription" className="relative py-24 md:py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-brand-dark-2" />

      <div className="container-custom relative z-10 max-w-[1280px]">

        {/* Header — centré */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="tag mb-4">Processus de sélection</span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold uppercase leading-tight text-white mb-4">
            On ne prend pas <span className="text-brand-orange">tout le monde.</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Le Cercle réunit 10 dirigeants triés sur le volet. Pour garantir l'excellence du groupe,
            chaque candidature passe par un entretien de sélection avec Stéphanie.
          </p>
        </div>

        {/* 3 steps — centré, pleine largeur */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <div className="flex flex-col items-center text-center gap-4 p-6">
            <div className="w-14 h-14 rounded-full bg-brand-orange flex items-center justify-center">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <div>
              <p className="text-white font-bold text-xl mb-1">Réservez un créneau</p>
              <p className="text-white/35 text-base">Directement ci-dessous</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4 p-6">
            <div className="w-14 h-14 rounded-full bg-brand-orange/20 border-2 border-brand-orange/40 flex items-center justify-center">
              <span className="text-brand-orange font-bold text-xl">2</span>
            </div>
            <div>
              <p className="text-white font-bold text-xl mb-1">Entretien de sélection</p>
              <p className="text-white/35 text-base">45 min · Sans engagement</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4 p-6">
            <div className="w-14 h-14 rounded-full bg-white/5 border-2 border-white/10 flex items-center justify-center">
              <span className="text-white/30 font-bold text-xl">3</span>
            </div>
            <div>
              <p className="text-white/50 font-bold text-xl mb-1">Intégration au Cercle</p>
              <p className="text-white/25 text-base">Si profil retenu</p>
            </div>
          </div>
        </div>

        {/* Calendly — iframe direct, pleine largeur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-2xl bg-white"
        >
          <iframe
            src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=1b1f29&primary_color=f49619`}
            title="Réserver un entretien avec Stéphanie Raphaël"
            width="100%"
            height="800"
            frameBorder="0"
            scrolling="no"
            className="block w-full border-none"
            style={{ colorScheme: 'light', background: 'white' }}
          />
        </motion.div>

        {/* Trust signals — inline under calendly */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 mt-12">
          <div className="flex items-center gap-4 text-white/70 text-lg">
            <Clock className="w-7 h-7 text-brand-orange shrink-0" />
            <span>45 minutes · Gratuit · Sans engagement</span>
          </div>
          <div className="flex items-center gap-4 text-white/70 text-lg">
            <ShieldCheck className="w-7 h-7 text-brand-orange shrink-0" />
            <span>Confidentialité absolue garantie</span>
          </div>
          <div className="flex items-center gap-4 text-white/70 text-lg">
            <Users className="w-7 h-7 text-brand-orange shrink-0" />
            <span>10 places maximum par Cercle</span>
          </div>
        </div>

      </div>
    </section>
  );
}
