
import React from 'react';
import type { Service } from '../types';
import { BrickIcon, TileIcon, PaintRollerIcon, FoundationIcon, WrenchIcon, HomeIcon } from './IconComponents';

const servicesList: Service[] = [
  {
    icon: <BrickIcon />,
    title: 'Alvenaria Estrutural',
    description: 'Construção de paredes, muros e estruturas robustas com precisão e segurança.'
  },
  {
    icon: <TileIcon />,
    title: 'Revestimentos e Pisos',
    description: 'Aplicação de porcelanatos, cerâmicas, azulejos e outros revestimentos com acabamento impecável.'
  },
  {
    icon: <HomeIcon />,
    title: 'Construção do Zero',
    description: 'Execução de projetos residenciais e comerciais completos, da fundação ao acabamento.'
  },
  {
    icon: <FoundationIcon />,
    title: 'Fundações e Lajes',
    description: 'Criação de bases sólidas e seguras para qualquer tipo de construção, incluindo vigas e baldrames.'
  },
  {
    icon: <WrenchIcon />,
    title: 'Reformas em Geral',
    description: 'Modernização de ambientes, demolições, ampliações e reparos estruturais.'
  },
  {
    icon: <PaintRollerIcon />,
    title: 'Acabamentos Finos',
    description: 'Serviços de reboco, contrapiso e preparação de superfícies para pintura e decoração.'
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center transform hover:-translate-y-2">
    <div className="text-orange-500 mb-4">{service.icon}</div>
    <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
    <p className="text-slate-600 flex-grow">{service.description}</p>
  </div>
);


const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-800">Meus Serviços</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Oferecendo soluções completas para sua obra, com excelência em cada detalhe.</p>
          <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
