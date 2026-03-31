import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-brand-dark-3 text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <img 
              src="https://www.methodestephanieraphael.com/wp-content/uploads/2025/05/LOGO_SRM_HAUT_BLANC.png" 
              alt="Méthode Stéphanie Raphaël" 
              className="h-10 w-auto mb-6"
            />
            <p className="text-white/60 text-[14px] leading-relaxed max-w-sm mb-6">
              Executive coaching et accompagnement des dirigeants d'entreprise. Cultivons ensemble votre puissance de leader.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/stephanieraphael/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg uppercase mb-6 text-white">Contact</h4>
            <ul className="flex flex-col gap-4 text-white/60 text-[13px]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>Île de France<br/>Paris & Boulogne</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="tel:+33600000000" className="hover:text-brand-orange transition-colors">+33 (0)6 XX XX XX XX</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="mailto:contact@methodestephanieraphael.com" className="hover:text-brand-orange transition-colors">contact@methodestephanieraphael.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg uppercase mb-6 text-white">Légal</h4>
            <ul className="flex flex-col gap-3 text-white/60 text-[13px]">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">CGV</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Politique de Confidentialité</a></li>
            </ul>
            <p className="mt-6 text-[11px] uppercase tracking-[1px] font-bold text-white/30 border-t border-white/10 pt-4">
              N° Formation: 11 92 29538 92
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-white/40 text-[11px] font-bold uppercase tracking-[1px]">
          <p>© {new Date().getFullYear()} Méthode Stéphanie Raphaël. Tous droits réservés.</p>
          <p className="mt-4 md:mt-0 opacity-50">Design moderne exclusif</p>
        </div>
      </div>
    </footer>
  );
}
