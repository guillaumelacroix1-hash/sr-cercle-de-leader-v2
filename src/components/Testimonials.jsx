import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "Stéphanie est tout simplement brillante ! Sa méthode de coaching est d'une intelligence et d'une efficacité rare. La justesse de son analyse de personnalité en quelques minutes est tout simplement impressionnante. Son feedback sur les éléments de langage verbaux et corporels est particulièrement puissant, fin et bien choisi. Les exercices qu'elle propose permettent de transformer sa posture à l'oral en créant des déclics comportementaux.",
    author: "Lina",
    role: "Programme Executive EDHEC",
    isBig: true
  },
  {
    text: "Les résultats dépassent les objectifs que nous avions visés. Je recommande vivement les compétences et les qualités humaines d'écoute, d'empathie et de rigueur de Stéphanie Raphaël.",
    author: "Anna Altea",
    role: "DRH — Institut Gustave Roussy",
    isBig: false
  },
  {
    text: "Résultats clairement visibles en fin de journée — Succès total.",
    author: "Daniel Estève",
    role: "Directeur de recherche au CEA — Académie des Sciences",
    isBig: false
  },
  {
    text: "Mon expérience de coaching m'a littéralement transformée. J'ai gagné en confiance, en assertivité et en aisance dans mon expression grâce à sa méthode ultra efficace. Aujourd'hui ma confiance en moi est solide.",
    author: "Sarah",
    role: "Dirigeante",
    isBig: false
  },
  {
    text: "Les exercices sont pratico-pratiques. Les progrès sont impressionnants et visibles au fur et à mesure. Je suis impressionné, c'est bluffant !",
    author: "Medhi",
    role: "Cadre dirigeant",
    isBig: false
  },
  {
    text: "Coach exceptionnelle, qui en si peu de temps arrive à nous faire gagner en impact et nous donner confiance en nous.",
    author: "Vincent",
    role: "Dirigeant",
    isBig: false
  },
  {
    text: "Ses interventions s'appuient sur un mélange de lucidité et bienveillance implacables, nous poussant hors de notre zone de confort tout en nous fournissant des outils concrets pour améliorer notre posture et notre impact.",
    author: "Lydie",
    role: "Advanced Leadership Program EDHEC",
    isBig: false
  },
  {
    text: "Certains participants ont souligné être définitivement changés quant à leur capacité à récupérer leur confiance en eux.",
    author: "Prof. Agnès Bernet",
    role: "Directrice de recherche — Université Claude Bernard",
    isBig: false
  },
  {
    text: "La marge de progression a été rapidement identifiée pour chacun d'entre nous — la progression est réelle et pour certains vraiment spectaculaire.",
    author: "Maud",
    role: "Dirigeante",
    isBig: false
  }
];

export default function Testimonials() {
  return (
    <section className="bg-brand-off-white py-24" id="temoignages">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="tag">Ils témoignent</span>
          <h2 className="font-bold text-[clamp(1.75rem,4vw,3.2rem)] uppercase leading-[1.15]">
            Ce que disent ceux<br />qui ont franchi le cap
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`flex flex-col p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 ${
                t.isBig ? 'lg:col-span-2 bg-brand-dark-2 text-white' : 'bg-white border border-gray-200'
              }`}
            >
              <div className="font-serif text-5xl text-brand-orange leading-[0.5] mb-4">"</div>
              <p className={`flex-1 italic text-[14px] leading-relaxed mb-8 ${t.isBig ? 'text-white/80' : 'text-gray-700'}`}>
                {t.text}
              </p>
              <div>
                <p className="font-bold text-[14px]">{t.author}</p>
                <p className={`text-[12px] mt-1 ${t.isBig ? 'text-white/50' : 'text-gray-500'}`}>{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
