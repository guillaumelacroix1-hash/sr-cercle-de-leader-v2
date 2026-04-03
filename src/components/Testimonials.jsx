import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Stéphanie est tout simplement brillante ! Sa méthode de coaching est d'une intelligence et d'une efficacité rare. La justesse de son analyse de personnalité en quelques minutes est tout simplement impressionnante. Son feedback sur les éléments de langage verbaux et corporels est particulièrement puissant, fin et bien choisi.",
    author: "Lina",
    role: "Programme Executive EDHEC"
  },
  {
    text: "Les résultats dépassent les objectifs que nous avions visés. Je recommande vivement les compétences et les qualités humaines d'écoute, d'empathie et de rigueur de Stéphanie Raphaël.",
    author: "Anna Altea",
    role: "DRH — Institut Gustave Roussy"
  },
  {
    text: "Résultats clairement visibles en fin de journée — Succès total.",
    author: "Daniel Estève",
    role: "Directeur de recherche au CEA — Académie des Sciences"
  },
  {
    text: "Mon expérience de coaching m'a littéralement transformée. J'ai gagné en confiance, en assertivité et en aisance dans mon expression grâce à sa méthode ultra efficace. Aujourd'hui ma confiance en moi est solide.",
    author: "Sarah",
    role: "Dirigeante"
  },
  {
    text: "Les exercices sont pratico-pratiques. Les progrès sont impressionnants et visibles au fur et à mesure. Je suis impressionné, c'est bluffant !",
    author: "Medhi",
    role: "Cadre dirigeant"
  },
  {
    text: "Coach exceptionnelle, qui en si peu de temps arrive à nous faire gagner en impact et nous donner confiance en nous.",
    author: "Vincent",
    role: "Dirigeant"
  },
  {
    text: "Ses interventions s'appuient sur un mélange de lucidité et bienveillance implacables, nous poussant hors de notre zone de confort tout en nous fournissant des outils concrets pour améliorer notre posture et notre impact.",
    author: "Lydie",
    role: "Advanced Leadership Program EDHEC"
  },
  {
    text: "Certains participants ont souligné être définitivement changés quant à leur capacité à récupérer leur confiance en eux.",
    author: "Prof. Agnès Bernet",
    role: "Directrice de recherche — Université Claude Bernard"
  },
  {
    text: "La marge de progression a été rapidement identifiée pour chacun d'entre nous — la progression est réelle et pour certains vraiment spectaculaire.",
    author: "Maud",
    role: "Dirigeante"
  }
];

// Duplicate for seamless loop
const loopTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section id="temoignages" className="bg-brand-light py-16 sm:py-24 md:py-32 overflow-hidden border-t border-brand-dark-2/5 relative">
      <div className="absolute top-1/3 left-1/4 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-brand-orange rounded-full blur-[150px] opacity-[0.12] pointer-events-none" />
      <div className="container-custom mb-6 sm:mb-8 md:mb-12">
        <div className="max-w-2xl">
          <span className="tag mb-3 sm:mb-4 inline-block">Ils témoignent</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-tight text-brand-dark-2">
            Ce que disent ceux qui ont <span className="text-brand-orange">franchi le cap</span>
          </h2>
        </div>
      </div>

      <div className="relative w-full flex overflow-hidden group pb-6 sm:pb-10">
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-48 bg-gradient-to-r from-brand-light to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-48 bg-gradient-to-l from-brand-light to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: [0, -2500] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex gap-4 sm:gap-6 md:gap-10 px-4 sm:px-10 items-stretch"
        >
          {loopTestimonials.map((item, index) => (
            <div
              key={index}
              className="w-[260px] sm:w-[300px] md:w-[450px] flex-shrink-0 bg-white p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-xl shadow-brand-dark-2/5 border border-brand-dark-2/5 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-7 h-7 sm:w-10 sm:h-10 text-brand-orange/20 mb-4 sm:mb-6" />
                <p className="text-brand-dark-2/80 text-sm sm:text-base md:text-lg leading-relaxed italic mb-6 sm:mb-8">
                  "{item.text}"
                </p>
              </div>
              <div className="border-t border-brand-dark-2/5 pt-4 sm:pt-6 mt-auto">
                <p className="font-bold text-brand-dark-2 text-[13px] sm:text-[15px] uppercase tracking-wider">{item.author}</p>
                <p className="text-brand-dark-2/50 text-[11px] sm:text-[13px]">{item.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
