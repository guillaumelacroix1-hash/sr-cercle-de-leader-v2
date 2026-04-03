import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Clock } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/stephanie-raphael/le-cercle-des-leaders-communicants-echanges';

export default function LeadForm() {
  return (
    <section id="inscription" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-brand-dark-2" />

      <div className="container-custom relative z-10 max-w-[1280px]">

        {/* Header — centré */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="tag mb-3 sm:mb-4">Processus de sélection</span>
          <h2 className="text-[clamp(1.75rem,4vw,3.2rem)] font-bold uppercase leading-tight text-white mb-3 sm:mb-4">
            On ne prend pas <span className="text-brand-orange">tout le monde.</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed">
            Le Cercle réunit 10 dirigeants triés sur le volet. Pour garantir l'excellence du groupe,
            chaque candidature passe par un entretien de sélection avec Stéphanie.
          </p>
        </div>

        {/* 3 steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-10 sm:mb-16">
          <div className="flex flex-row sm:flex-col items-center sm:text-center gap-4 p-4 sm:p-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-orange flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-lg sm:text-xl">1</span>
            </div>
            <div>
              <p className="text-white font-bold text-lg sm:text-xl mb-0.5 sm:mb-1">Réservez un créneau</p>
              <p className="text-white/35 text-sm sm:text-base">Directement ci-dessous</p>
            </div>
          </div>
          <div className="flex flex-row sm:flex-col items-center sm:text-center gap-4 p-4 sm:p-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-orange/20 border-2 border-brand-orange/40 flex items-center justify-center shrink-0">
              <span className="text-brand-orange font-bold text-lg sm:text-xl">2</span>
            </div>
            <div>
              <p className="text-white font-bold text-lg sm:text-xl mb-0.5 sm:mb-1">Entretien de sélection</p>
              <p className="text-white/35 text-sm sm:text-base">45 min · Sans engagement</p>
            </div>
          </div>
          <div className="flex flex-row sm:flex-col items-center sm:text-center gap-4 p-4 sm:p-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border-2 border-white/10 flex items-center justify-center shrink-0">
              <span className="text-white/30 font-bold text-lg sm:text-xl">3</span>
            </div>
            <div>
              <p className="text-white/50 font-bold text-lg sm:text-xl mb-0.5 sm:mb-1">Intégration au Cercle</p>
              <p className="text-white/25 text-sm sm:text-base">Si profil retenu</p>
            </div>
          </div>
        </div>

        {/* Calendly — iframe direct */}
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
            height="700"
            frameBorder="0"
            scrolling="no"
            className="block w-full border-none min-h-[600px] sm:min-h-[700px] lg:min-h-[800px]"
            style={{ colorScheme: 'light', background: 'white' }}
          />
        </motion.div>

        {/* Trust signals */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-8 md:gap-14 mt-8 sm:mt-12">
          <div className="flex items-center gap-3 sm:gap-4 text-white/70 text-sm sm:text-lg">
            <Clock className="w-5 h-5 sm:w-7 sm:h-7 text-brand-orange shrink-0" />
            <span>45 minutes · Gratuit · Sans engagement</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-white/70 text-sm sm:text-lg">
            <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7 text-brand-orange shrink-0" />
            <span>Confidentialité absolue garantie</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-white/70 text-sm sm:text-lg">
            <Users className="w-5 h-5 sm:w-7 sm:h-7 text-brand-orange shrink-0" />
            <span>10 places maximum par Cercle</span>
          </div>
        </div>

      </div>
    </section>
  );
}
