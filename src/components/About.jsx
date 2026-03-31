import React from 'react';
import { motion } from 'framer-motion';

const clients = ["Shell", "Total", "EDHEC", "Schneider", "La Poste", "Crédit Agricole", "Vallourec", "INRIA", "Paris Dauphine", "Sciences Po", "Gustave Roussy", "Saipem", "Amundi", "Merck", "Malakoff"];

export default function About() {
  return (
    <section className="py-24" id="stephane">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-20 items-start">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-2xl relative"
          >
            {/* Dark overlay for a premium look, optionally */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/20 to-transparent pointer-events-none" />
            <img 
              src="https://www.methodestephanieraphael.com/wp-content/uploads/2025/05/Portrait-Stephanie-Raphael.png" 
              alt="Stéphanie Raphaël — Executive Coach Leadership" 
              className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-700"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="tag">La facilitatrice</span>
            <h2 className="font-bold text-[clamp(2.5rem,4vw,3.5rem)] uppercase leading-none mb-2">
              Stéphanie Raphaël
            </h2>
            <p className="text-[15px] font-bold text-gray-500 mb-8 leading-relaxed">
              Executive Coach en Communication orale, Leadership & Management<br/>
              Diplômée de l'École Supérieure de Communication
            </p>
            
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6">
              Depuis 17 ans, Stéphanie accompagne les dirigeants des plus grandes organisations 
              françaises et internationales pour transformer leur communication orale en levier de leadership. 
              Sa méthode unique, opérationnelle et à diagnostic immédiat, est recommandée par des professeurs 
              de neurologie, de biologie et des membres de l'Académie des Sciences.
            </p>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-10">
              Partenaire de <strong className="font-bold">l'Université Paris Dauphine</strong> (Master NRS), 
              intervenante à <strong className="font-bold">l'EDHEC</strong> (Advanced Management Programme — 
              <strong className="font-bold text-brand-orange"> 100% satisfaction 2023</strong>), membre de jury Master NRS.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-brand-off-white rounded-xl p-6 text-center shadow-sm">
                <span className="block font-bold text-[2rem] text-brand-orange leading-none mb-1">17</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-[1.5px] font-bold">Années d'expertise</span>
              </div>
              <div className="bg-brand-off-white rounded-xl p-6 text-center shadow-sm">
                <span className="block font-bold text-[2rem] text-brand-orange leading-none mb-1">100%</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-[1.5px] font-bold">Satisfaction EDHEC</span>
              </div>
              <div className="bg-brand-off-white rounded-xl p-6 text-center shadow-sm">
                <span className="block font-bold text-[2rem] text-brand-orange leading-none mb-1">3</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-[1.5px] font-bold">Cercles complets</span>
              </div>
            </div>

            {/* Tags array */}
            <div className="flex flex-wrap gap-2">
              {clients.map((client, idx) => (
                <span key={idx} className="bg-white border border-gray-200 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.5px] text-gray-500 shadow-sm hover:border-brand-orange hover:text-brand-orange transition-colors cursor-default">
                  {client}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
