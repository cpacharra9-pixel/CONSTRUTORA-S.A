import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/seed/construction-team/600/600" 
              alt="Equipe da DRYes Construtora S.A" 
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto aspect-square object-cover"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-slate-800">Sobre Nós</h2>
            <div className="mt-4 mb-6 w-24 h-1 bg-orange-500 mx-auto lg:mx-0 rounded"></div>
            <p className="text-slate-600 mb-4 text-lg">
              Com mais de 15 anos de experiência no ramo da construção civil, somos uma empresa dedicada a transformar projetos em realidade. Nossa paixão é construir, garantindo que cada tijolo seja assentado com perfeição e cada acabamento atenda aos mais altos padrões de qualidade.
            </p>
            <p className="text-slate-600 mb-6 text-lg">
              Acreditamos na honestidade, no compromisso com os prazos e na comunicação clara com nossos clientes. Nosso objetivo é não apenas construir estruturas, mas também construir relações de confiança, garantindo a total satisfação de nossos clientes do início ao fim da obra.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-lg text-md transition-colors duration-300 shadow-lg"
            >
              Vamos Conversar sobre seu Projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;