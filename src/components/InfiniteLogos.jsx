import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'EADS', src: 'https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-eads-300x300.jpg' },
  { name: 'Total', src: 'https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-total-300x300.jpg' },
  { name: 'Schneider Electric', src: 'https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-schneider-300x300.jpg' },
  { name: 'EDHEC', src: 'https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-edhec-300x300.jpg' },
  { name: 'Paris Dauphine', src: 'https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-dauphine-psl-300x300.jpg' },
  { name: 'Crédit Agricole', src: 'https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-CA-300x300.jpg' },
  { name: 'La Poste', src: 'https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-laposte-300x300.jpg' },
  { name: 'INRIA', src: 'https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-inria-300x300.jpg' },
  { name: 'Gustave Roussy', src: 'https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-G-roussy-300x300.jpg' },
  { name: 'Amundi', src: 'https://www.methodestephanieraphael.com/wp-content/uploads/2025/06/logo-amundi-300x300.jpg' },
];

export default function InfiniteLogos() {
  return (
    <section className="bg-brand-off-white py-12 border-y border-brand-dark/10 overflow-hidden">
      <div className="container-custom">
        <p className="text-[11px] font-bold tracking-[3px] uppercase text-gray-500 text-center mb-8">
          Ils font confiance à Stéphanie Raphaël
        </p>
        
        {/* Infinite scrolling track */}
        <div className="relative w-full flex overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-12 sm:gap-20 min-w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
          >
            {/* Array doubled for infinite effect */}
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
