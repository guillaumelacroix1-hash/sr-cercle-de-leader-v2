import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedNumber({ value, suffix = '', duration = 1.5 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const numValue = parseInt(value);

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * numValue));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="block font-bold text-[1.5rem] sm:text-[2rem] text-brand-orange leading-none mb-1">
      {display}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-brand-off-white relative overflow-hidden" id="stephane">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-10 sm:gap-12 lg:gap-20 items-start">

          {/* Left column: Photo + Stats underneath */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative max-w-[320px] sm:max-w-none mx-auto lg:mx-0"
            >
              <img
                src="https://www.methodestephanieraphael.com/wp-content/uploads/2025/05/Portrait-Stephanie-Raphael.png"
                alt="Stéphanie Raphaël — Executive Coach Leadership"
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Stats under the photo */}
            <div className="flex justify-center gap-6 sm:gap-10 mt-6 sm:mt-8">
              <div className="text-center">
                <AnimatedNumber value="17" />
                <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-[1px] sm:tracking-[1.5px] font-bold leading-tight block">Années<br className="sm:hidden" /> d'expertise</span>
              </div>
              <div className="text-center">
                <AnimatedNumber value="100" suffix="%" />
                <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-[1px] sm:tracking-[1.5px] font-bold leading-tight block">Satisfaction<br className="sm:hidden" /> EDHEC</span>
              </div>
              <div className="text-center">
                <AnimatedNumber value="3" duration={1} />
                <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-[1px] sm:tracking-[1.5px] font-bold leading-tight block">Cercles<br className="sm:hidden" /> complets</span>
              </div>
            </div>
          </div>

          {/* Right column: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="tag">La facilitatrice</span>
            <h2 className="font-bold text-[clamp(2rem,4vw,3.5rem)] uppercase leading-none mb-2">
              Stéphanie Raphaël
            </h2>
            <p className="text-base sm:text-lg font-bold text-gray-500 mb-6 sm:mb-8 leading-relaxed">
              Executive Coach en Communication orale, Leadership & Management<br/>
              Diplômée de l'École Supérieure de Communication
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              Depuis 17 ans, Stéphanie accompagne les dirigeants des plus grandes organisations
              françaises et internationales pour transformer leur communication orale en levier de leadership.
              Sa méthode unique, opérationnelle et à diagnostic immédiat, est recommandée par des professeurs
              de neurologie, de biologie et des membres de l'Académie des Sciences.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Partenaire de <strong className="font-bold">l'Université Paris Dauphine</strong> (Master NRS),
              intervenante à <strong className="font-bold">l'EDHEC</strong> (Advanced Management Programme —
              <strong className="font-bold text-brand-orange"> 100% satisfaction 2023</strong>), membre de jury Master NRS.
            </p>
          </motion.div>

        </div>

        {/* Video — Stéphanie présente le programme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <span className="tag mb-3 sm:mb-4 block">La parole à Stéphanie</span>
          <h3 className="font-bold text-[clamp(1.3rem,2.5vw,2rem)] uppercase leading-tight mb-6 sm:mb-8">
            Découvrez la méthode <span className="text-brand-orange">en vidéo</span>
          </h3>
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.15)] bg-brand-dark">
            <iframe
              className="w-full aspect-video border-none block"
              src="https://www.youtube.com/embed/RIeCwLuisR4?rel=0&modestbranding=1&color=white"
              title="Stéphanie Raphaël — Cercle des Leaders Communicants"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
