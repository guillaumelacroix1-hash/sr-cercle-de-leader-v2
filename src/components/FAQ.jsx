import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Ce cercle est-il fait pour moi ?",
    a: "Si vous êtes dirigeant(e), membre d'un COMEX ou CODIR, fondateur(rice), et que vous souhaitez gagner en impact, en charisme et en leadership à l'oral, ce Cercle est fait pour vous."
  },
  {
    q: "Quelle est la part de théorie vs. pratique ?",
    a: "Le programme est 100% axé sur la pratique. Chaque session est conçue autour de vos enjeux concrets : mises en situation adaptées et personnalisées. Pas de théorie creuse, uniquement ce qui fonctionne face à votre réalité de dirigeant."
  },
  {
    q: "Où se déroulent les séances ?",
    a: "En présentiel à Paris et à Boulogne-Billancourt, dans un espace confidentiel dédié. Le lieu est choisi pour garantir la confidentialité et le confort de travail."
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
            <p className="pb-6 text-gray-600 text-lg leading-relaxed">
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
    <section className="bg-white py-24 relative overflow-hidden" id="faq">
      <div className="container-custom max-w-[800px]">
        <div className="mb-14">
          <span className="tag">Questions fréquentes</span>
          <h2 className="font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] uppercase leading-[1.15]">
            Tout ce qu'il faut savoir <span className="text-brand-orange">avant de postuler</span>
          </h2>
        </div>

        <div className="bg-white rounded-xl p-6 md:p-10 shadow-sm border border-gray-200">
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
