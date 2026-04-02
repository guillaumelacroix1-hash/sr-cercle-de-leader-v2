import React from 'react';
import { motion } from 'framer-motion';

const problems = [
  {
    title: "Porter la vision à l'oral",
    desc: "Vous savez où vous voulez emmener l'entreprise, mais transmettre cette vision avec clarté et conviction à vos équipes reste un défi au quotidien.",
  },
  {
    title: "Gagner en impact en présentation",
    desc: "Vos prises de parole informent, mais ne mobilisent pas autant que vous le souhaiteriez. Votre potentiel de leader communicant mérite d'être pleinement exploité.",
  },
  {
    title: "Fédérer et convaincre",
    desc: "Obtenir l'adhésion rapide de vos équipes, partenaires et hiérarchie demande une maîtrise de l'oral que l'expérience seule ne suffit pas toujours à développer.",
  }
];

export default function ProblemSolution() {
  return (
    <section className="bg-brand-off-white py-24 md:py-32 relative overflow-hidden text-brand-dark-2">

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-[clamp(2.5rem,4.5vw,4rem)] uppercase leading-[1] tracking-tight"
          >
            Les leaders ne se décrètent pas, <span className="text-brand-orange block lg:inline">ils se cultivent.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-32">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pr-8"
            >
              {/* Modern Graphic Element instead of old icon */}
              <div className="mb-8 relative">
                <span className="text-[100px] font-bold text-brand-orange/10 absolute -top-12 -left-6 leading-none selection:bg-transparent pointer-events-none">
                  0{index + 1}
                </span>
                <div className="w-12 h-1 bg-brand-orange rounded-full relative z-10" />
              </div>

              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-brand-dark-2/70 text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* The Solution Call-out with Background Image dressing */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container-custom"
      >
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover bg-brand-dark"
          >
            <source src="https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/bandeau-accueil.mp4" type="video/mp4" />
          </video>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/50 to-transparent" />

          <div className="relative z-10 p-12 lg:p-24 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
              <span className="tag text-brand-orange mb-6">La Solution</span>
              <p className="text-white text-[clamp(1.5rem,2.5vw,2rem)] leading-snug font-bold mb-8">
                C'est exactement pour ça que le Cercle des Leaders Communicants existe.
              </p>
              <p className="text-white/80 text-lg lg:text-xl leading-relaxed max-w-2xl mb-10">
                Un espace confidentiel d'entraînement et de codéveloppement entre pairs de niveau exécutif.
                Des mises en situation sur vos cas réels pour progresser concrètement, séance après séance.
              </p>
              <a href="#programme" className="btn-orange text-[14px] px-8 py-4">
                Découvrir le parcours
              </a>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
