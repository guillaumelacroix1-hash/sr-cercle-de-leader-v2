import React from 'react';
import { motion } from 'framer-motion';

const objectifs = [
  "Guidez",
  "Boostez",
  "Inspirez",
  "Performez",
];

export default function VideoSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="video">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange rounded-full blur-[150px] opacity-[0.07] pointer-events-none" />
      <div className="container-custom relative z-10">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="tag mb-4">Objectifs</span>
          <h2 className="font-bold text-[clamp(2rem,3.5vw,3rem)] uppercase leading-tight mb-5">
            Un leader communicant est un leader <span className="text-brand-orange">plus performant</span>
          </h2>
          <div className="space-y-3 text-gray-500 text-lg leading-relaxed">
            <p>Incarnez pleinement votre vision et stratégie.</p>
            <p>Obtenez l'adhésion plus rapidement de vos équipes.</p>
            <p>Développez votre autorité naturelle dans la détente avec vos clients, vos partenaires, vos pairs et votre hiérarchie.</p>
          </div>
        </div>

        {/* Two-column: Video + Objectifs */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* Left — Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/5 rounded-xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.15)] bg-brand-dark shrink-0"
          >
            <iframe
              className="w-full aspect-video border-none block"
              src="https://www.youtube.com/embed/RIeCwLuisR4?rel=0&modestbranding=1&color=white"
              title="Stéphanie Raphaël — Cercle des Leaders Communicants"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* Right — Objectifs */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center gap-6">
            {objectifs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-brand-dark-2 font-bold text-xl uppercase tracking-wide mb-2">
                  + {item}
                </p>
                <div className="h-[3px] bg-brand-orange rounded-full" />
              </motion.div>
            ))}
            <a href="#programme" className="text-brand-orange font-bold text-lg mt-4 hover:underline underline-offset-4 w-fit">
              En savoir plus
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
