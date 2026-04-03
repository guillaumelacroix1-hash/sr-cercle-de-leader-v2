import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-off-white text-brand-dark-2 pt-12 sm:pt-20 pb-8 sm:pb-10 border-t border-gray-200 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-16">

          <div className="sm:col-span-2 lg:col-span-2">
            <img
              src="https://www.methodestephanieraphael.com/wp-content/uploads/2025/05/LOGO-SRM-BAS-NX.png"
              alt="Méthode Stéphanie Raphaël"
              className="h-10 sm:h-14 w-auto mb-4 sm:mb-6"
            />
            <p className="text-brand-dark-2/60 text-sm sm:text-base leading-relaxed max-w-sm mb-4 sm:mb-6">
              Executive coaching et accompagnement des dirigeants d'entreprise. Cultivons ensemble votre puissance de leader.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/stephanieraphaelmethode/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-dark-2/5 border border-brand-dark-2/10 flex items-center justify-center text-brand-dark-2/50 hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-colors duration-220">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg uppercase mb-4 sm:mb-6 text-brand-dark-2">Contact</h4>
            <ul className="flex flex-col gap-3 sm:gap-4 text-brand-dark-2/60 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange shrink-0 mt-0.5" />
                <span>Île de France<br/>Paris & Boulogne</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange shrink-0" />
                <a href="tel:+33672890888" className="hover:text-brand-orange transition-colors">+33 (0)6 72 89 08 88</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange shrink-0 mt-0.5" />
                <a href="mailto:s.raphael@methodestephanieraphael.com" className="hover:text-brand-orange transition-colors break-all">s.raphael@methode<wbr/>stephanieraphael.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg uppercase mb-4 sm:mb-6 text-brand-dark-2">Légal</h4>
            <ul className="flex flex-col gap-3 text-brand-dark-2/60 text-sm sm:text-base">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">CGV</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Politique de Confidentialité</a></li>
            </ul>
            <p className="mt-4 sm:mt-6 text-[10px] sm:text-xs uppercase tracking-[1px] font-bold text-brand-dark-2/30 border-t border-gray-200 pt-3 sm:pt-4">
              N° Formation: 11 92 29538 92
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 sm:pt-8 border-t border-gray-200 text-brand-dark-2/40 text-[10px] sm:text-xs font-bold uppercase tracking-[1px] gap-2">
          <p>© {new Date().getFullYear()} Méthode Stéphanie Raphaël. Tous droits réservés.</p>
          <p>64 avenue Pierre Grenier · 92100 Boulogne-Billancourt</p>
        </div>
      </div>
    </footer>
  );
}
