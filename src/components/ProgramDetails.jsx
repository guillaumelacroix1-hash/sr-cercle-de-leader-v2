import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const themes = [
  {
    title: "Posture & Présence",
    items: [
      "Supprimer les tics de langage et parasites",
      "Développer assurance et affirmation à l'oral",
      "Posture assertive et autorité naturelle",
      "Gagner en détente et résistance"
    ]
  },
  {
    title: "Communication & Influence",
    items: [
      "Structurer efficacement son discours",
      "S'adapter à son public rapidement",
      "Garder la maîtrise quel que soit l'enjeu",
      "Préparation et improvisation"
    ]
  },
  {
    title: "Leadership & Management",
    items: [
      "Recadrer un collaborateur dans la détente",
      "Fédérer ses équipes, obtenir l'engagement",
      "Prendre toute sa place au CODIR / COMEX"
    ]
  },
  {
    title: "Visibilité & Impact",
    items: [
      "Aisance face caméra / Conversationnel spontané",
      "Media Training",
      "Convaincre sa hiérarchie et/ou les Fonds"
    ]
  }
];

export default function ProgramDetails() {
  return (
    <section className="py-24" id="programme">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="tag mb-4">Le programme</span>
            <h2 className="font-bold text-[clamp(1.75rem,4vw,3.2rem)] uppercase leading-[1.15] mb-6">
              Un curriculum complet,<br />100% cas réels
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
              Chaque session est conçue autour de vos enjeux concrets. Mises en situation adaptées et personnalisées — pas de théorie creuse, uniquement ce qui fonctionne face à votre réalité de dirigeant.
            </p>
            
            <ul className="flex flex-col gap-3">
              {[
                "Diagnostic de votre potentiel de leader communicant",
                "Équilibrage non verbal et verbal",
                "Gagner en charisme, clarté et leadership à l'oral",
                "Convaincre rapidement en présentation et en réunion",
                "Savoir rebondir face aux objections",
                "Porter la vision et la stratégie à l'oral",
                "Prendre toute sa place au sein du CODIR / COMEX",
                "Fédérer ses équipes et obtenir l'engagement",
                "Aisance face caméra et Media Training",
                "Convaincre sa hiérarchie et/ou les Fonds"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm leading-relaxed text-brand-dark-2">
                  <ArrowRight className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {themes.map((theme, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10, backgroundColor: "#fdf8f4" }}
                className="bg-brand-off-white border-l-4 border-brand-orange rounded-r-xl p-6 transition-all duration-300"
              >
                <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-brand-orange mb-3">
                  {theme.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {theme.items.map((item, j) => (
                    <li key={j} className="text-[13px] text-gray-700 flex gap-2">
                      <span className="text-brand-orange font-bold">·</span> 
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
