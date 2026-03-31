import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    prenom: '', nom: '', fonction: '', entreprise: '', linkedin: '', email: '', telephone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementation for sending the form
    alert("Votre demande a été envoyée. L'équipe Méthode Stéphanie Raphaël vous recontactera rapidement.");
  };

  return (
    <section className="py-24" id="inscription">
      <div className="container-custom">
        <div className="bg-brand-dark-2 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Form Context / Pitch */}
          <div className="p-10 lg:p-14 lg:w-5/12 bg-gradient-to-br from-brand-dark-3 to-brand-dark text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange rounded-full blur-[100px] opacity-10 pointer-events-none" />
            
            <span className="tag text-brand-orange/80">Candidature</span>
            <h2 className="font-bold text-[clamp(1.75rem,3vw,2.5rem)] uppercase leading-[1.15] mb-6">
              Rejoindre le prochain cercle
            </h2>
            <p className="text-[14px] text-white/70 leading-relaxed mb-8">
              La sélection s'effectue sur dossier et entretien afin de garantir la qualité et l'homogénéité du groupe.
            </p>

            <ul className="flex flex-col gap-5 text-[13px] text-white/80 font-bold">
              <li className="flex gap-3">
                <span className="text-brand-orange flex-shrink-0">1.</span>
                <span>Remplissez le formulaire de pré-candidature ci-contre.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-orange flex-shrink-0">2.</span>
                <span>Un appel individuel (15 min) sera planifié pour valider l'adéquation.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-orange flex-shrink-0">3.</span>
                <span>Validation du financement (Entreprise ou OPCO).</span>
              </li>
            </ul>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-[11px] font-bold uppercase tracking-[2px] text-brand-orange mb-2">Prochaine Rentée</p>
              <p className="font-bold text-2xl">Mardi 22 Septembre 2026</p>
              <p className="text-[12px] text-white/50 mt-1 uppercase tracking-wider">Cercle N°4 (Reste 10 places)</p>
            </div>
          </div>

          {/* Actual Form */}
          <div className="p-10 lg:p-14 lg:w-7/12 bg-white">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[1px] text-gray-500 mb-2">Prénom *</label>
                  <input required type="text" name="prenom" value={formData.prenom} onChange={handleChange} className="w-full bg-brand-off-white border-none rounded-md px-4 py-3 text-[14px] focus:ring-2 focus:ring-brand-orange outline-none transition-shadow" placeholder="Jean" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[1px] text-gray-500 mb-2">Nom *</label>
                  <input required type="text" name="nom" value={formData.nom} onChange={handleChange} className="w-full bg-brand-off-white border-none rounded-md px-4 py-3 text-[14px] focus:ring-2 focus:ring-brand-orange outline-none transition-shadow" placeholder="Dupont" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[1px] text-gray-500 mb-2">Fonction actuelle *</label>
                <input required type="text" name="fonction" value={formData.fonction} onChange={handleChange} className="w-full bg-brand-off-white border-none rounded-md px-4 py-3 text-[14px] focus:ring-2 focus:ring-brand-orange outline-none transition-shadow" placeholder="CEO, Directeur Marketing..." />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[1px] text-gray-500 mb-2">Entreprise *</label>
                <input required type="text" name="entreprise" value={formData.entreprise} onChange={handleChange} className="w-full bg-brand-off-white border-none rounded-md px-4 py-3 text-[14px] focus:ring-2 focus:ring-brand-orange outline-none transition-shadow" placeholder="Nom de l'entreprise" />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[1px] text-gray-500 mb-2">Profil LinkedIn *</label>
                <input required type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} className="w-full bg-brand-off-white border-none rounded-md px-4 py-3 text-[14px] focus:ring-2 focus:ring-brand-orange outline-none transition-shadow" placeholder="https://linkedin.com/in/..." />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[1px] text-gray-500 mb-2">Email Pro *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-brand-off-white border-none rounded-md px-4 py-3 text-[14px] focus:ring-2 focus:ring-brand-orange outline-none transition-shadow" placeholder="jean.dupont@entreprise.com" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[1px] text-gray-500 mb-2">Téléphone *</label>
                  <input required type="tel" name="telephone" value={formData.telephone} onChange={handleChange} className="w-full bg-brand-off-white border-none rounded-md px-4 py-3 text-[14px] focus:ring-2 focus:ring-brand-orange outline-none transition-shadow" placeholder="+33 6..." />
                </div>
              </div>

              <div className="pt-4">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full btn-orange justify-center py-4 text-[15px]"
                >
                  Envoyer ma candidature
                </motion.button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
