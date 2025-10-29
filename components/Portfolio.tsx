
import React from 'react';
import type { Project } from '../types';

const projects: Project[] = [
  { id: 1, imageUrl: 'https://picsum.photos/seed/project1/600/400', title: 'Residência Moderna', category: 'Construção' },
  { id: 2, imageUrl: 'https://picsum.photos/seed/project2/600/400', title: 'Área Gourmet', category: 'Reforma' },
  { id: 3, imageUrl: 'https://picsum.photos/seed/project3/600/400', title: 'Banheiro de Luxo', category: 'Revestimento' },
  { id: 4, imageUrl: 'https://picsum.photos/seed/project4/600/400', title: 'Muro de Contenção', category: 'Alvenaria' },
  { id: 5, imageUrl: 'https://picsum.photos/seed/project5/600/400', title: 'Piso Externo', category: 'Pisos' },
  { id: 6, imageUrl: 'https://picsum.photos/seed/project6/600/400', title: 'Fachada Comercial', category: 'Construção' },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-800">Portfólio de Projetos</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Veja alguns dos trabalhos que realizei com dedicação e profissionalismo.</p>
           <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-sm bg-orange-500 px-3 py-1 rounded-full mt-2">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
