import React from 'react';
import { motion } from 'framer-motion';

const benefitsList = [
  { verb: "Gagnez", text: "En impact et légitimité dans votre posture de Leader Communicant" },
  { verb: "Incarnez", text: "Pleinement votre vision et stratégie à l'oral, avec force et conviction" },
  { verb: "Obtenez", text: "L'adhésion plus rapidement de vos équipes, partenaires et hiérarchie" },
  { verb: "Développez", text: "Votre autorité naturellement dans la détente, avec vos pairs et clients" },
  { verb: "Négociez", text: "Plus efficacement, en gardant la maîtrise quel que soit l'enjeu" }
];

export default function Benefits() {
  return (
    <section className="bg-brand-dark-2 text-white py-24" id="benefices">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="tag text-brand-orange/80">Ce que vous gagnez</span>
          <h2 className="font-bold text-[clamp(1.75rem,4vw,3rem)] uppercase leading-[1.15]">
            5 transformations concrètes<br />en 10 mois
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 divide-y sm:divide-y-0 sm:divide-x divide-white/10 lg:border-t lg:border-b lg:border-white/10">
          {benefitsList.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center px-6 py-8 hover:bg-white/[0.02] transition-colors duration-300"
            >
              <span className="block font-bold text-xl uppercase text-brand-orange mb-3">
                {item.verb}
              </span>
              <p className="text-[13px] text-white/60 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
