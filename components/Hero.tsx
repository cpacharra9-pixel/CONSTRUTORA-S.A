
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
    >
      <div className="absolute inset-0 bg-slate-900 bg-opacity-60"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
          Construindo Sonhos, Tijolo por Tijolo.
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
          Serviços de alvenaria com qualidade, confiança e compromisso com o prazo.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300 shadow-xl"
        >
          Solicitar Orçamento Gratuito
        </a>
      </div>
    </section>
  );
};

export default Hero;
