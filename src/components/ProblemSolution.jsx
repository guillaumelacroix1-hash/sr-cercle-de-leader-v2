import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, MicOff } from 'lucide-react';

export default function ProblemSolution() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="py-24 bg-brand-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="tag">Vous reconnaissez-vous ?</span>
          <h2 className="font-bold text-[clamp(1.75rem,4vw,3rem)] uppercase leading-[1.15] mb-4">
            Le leadership ne se décrète pas.<br />Il se cultive.
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 border-t-4 border-t-brand-orange hover:shadow-xl transition-shadow duration-300">
            <Target className="w-10 h-10 text-brand-orange mb-6" />
            <h3 className="font-bold text-lg uppercase mb-3">Vous avez la vision.<br />Mais elle ne passe pas.</h3>
            <p className="text-sm text-gray-500 leading-relaxed">En réunion, en CODIR, face à vos équipes — votre message n'a pas l'impact qu'il devrait. Les mots sortent, mais le leadership ne suit pas toujours.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 border-t-4 border-t-brand-orange hover:shadow-xl transition-shadow duration-300">
            <Zap className="w-10 h-10 text-brand-orange mb-6" />
            <h3 className="font-bold text-lg uppercase mb-3">Vous portez seul<br />le poids des décisions.</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Sans espace de confiance pour partager vos enjeux, sans pairs avec qui vous entraîner, vous avancez à tâtons. Les dirigeants les plus performants ne font pas ça seuls.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 border-t-4 border-t-brand-orange hover:shadow-xl transition-shadow duration-300">
            <MicOff className="w-10 h-10 text-brand-orange mb-6" />
            <h3 className="font-bold text-lg uppercase mb-3">Les objections vous freinent.<br />L'aisance vous manque.</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Face caméra, en prise de parole publique, face à vos hiérarchies ou investisseurs — il vous manque cette détente et ce charisme naturel qui font que les gens vous suivent.</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-dark-2 rounded-2xl p-10 md:p-14 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-orange rounded-full blur-[100px] opacity-20 pointer-events-none" />
          
          <h3 className="relative z-10 font-bold text-[clamp(1.25rem,2.8vw,2rem)] uppercase text-white mb-4 leading-tight">
            C'est exactement pour ça que le Cercle des Leaders Communicants existe.
          </h3>
          <p className="relative z-10 text-white/60 text-[15px] font-italic">
            Exigeant dans la posture, profond dans le sens, concret dans l'impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
