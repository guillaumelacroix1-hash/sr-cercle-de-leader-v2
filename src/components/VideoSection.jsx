import React from 'react';
import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section className="py-24" id="video">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="tag">La parole à Stéphanie</span>
          <h2 className="font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] uppercase leading-[1.15] mb-4">
            Incarnez un leadership influent
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-lg mx-auto">
            Stéphanie vous présente la méthode, le format et ce que vous allez vivre pendant ces 10 mois d'entraînement intensif.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="max-w-[860px] mx-auto rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.15)] bg-brand-dark relative group"
        >
          {/* Playback Hover Effect (just visual flair) */}
          <div className="absolute inset-0 border-[4px] border-brand-orange/0 group-hover:border-brand-orange/20 transition-all duration-500 rounded-2xl pointer-events-none z-10" />

          <iframe
            className="w-full aspect-video border-none block"
            src="https://www.youtube.com/embed/RIeCwLuisR4?rel=0&modestbranding=1&color=white"
            title="Stéphanie Raphaël — Cercle des Leaders Communicants"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
