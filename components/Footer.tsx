import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">DRYes Construtora S.A</h3>
            <p>Qualidade e confiança para sua obra, do alicerce ao telhado.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contato Rápido</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start gap-3 hover:text-orange-400 transition-colors">
                <PhoneIcon small /> 237 99601-9618
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 hover:text-orange-400 transition-colors">
                <MailIcon small /> contato@dryesconstrutora.com
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 hover:text-orange-400 transition-colors">
                <MapPinIcon small /> São Paulo, SP
              </li>
            </ul>
          </div>
          <div>
             <h3 className="text-xl font-bold text-white mb-4">Links Úteis</h3>
             <ul className="space-y-2">
                <li><a href="#services" className="hover:text-orange-400 transition-colors">Serviços</a></li>
                <li><a href="#portfolio" className="hover:text-orange-400 transition-colors">Portfólio</a></li>
                <li><a href="#contact" className="hover:text-orange-400 transition-colors">Orçamento</a></li>
             </ul>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 py-4">
        <div className="container mx-auto px-4 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} DRYes Construtora S.A. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;