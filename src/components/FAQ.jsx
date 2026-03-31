import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Ce cercle est-il fait pour moi ?",
    a: "Si vous êtes dirigeant(e), membre d'un COMEX ou CODIR, fondateur(rice) de startup, et que vous souhaitez démultiplier votre impact managérial et asseoir votre autorité naturelle sans forcer, ce Cercle est pour vous."
  },
  {
    q: "Quelle est la part de théorie vs. pratique ?",
    a: "Le programme est 100% axé sur la pratique. Nous partons de VOS cas réels (préparation de CA, intervention en plénière, levée de fonds, conflits). Vous repartez à chaque fois avec des clés applicables dès le lendemain."
  },
  {
    q: "Où se déroulent les séances ?",
    a: "En présentiel au Studio Étoile (Paris, M° Charles de Gaulle – Étoile) et à Boulogne. Le lieu est choisi pour garantir confidentialité et confort de travail."
  },
  {
    q: "Le programme est-il finançable par l'entreprise ?",
    a: "Oui. L'organisme de formation de Stéphanie Raphaël possède un numéro de déclaration d'activité (N° 11 92 29538 92), ce qui le rend éligible aux financements OPCO (plan de développement des compétences)."
  }
];

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-6 flex items-center justify-between text-left font-bold text-lg text-brand-dark hover:text-brand-orange transition-colors"
        onClick={onClick}
      >
        <span>{item.q}</span>
        <span className="ml-6 shrink-0 text-brand-orange">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 text-[15px] leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-brand-off-white py-24" id="faq">
      <div className="container-custom max-w-[800px]">
        <div className="text-center mb-16">
          <span className="tag">Questions fréquentes</span>
          <h2 className="font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] uppercase leading-[1.15]">
            Tout ce que vous devez savoir
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-200">
          {faqs.map((item, idx) => (
            <FAQItem 
              key={idx} 
              item={item} 
              isOpen={openIndex === idx} 
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
