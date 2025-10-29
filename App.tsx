
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import IdeaGenerator from './components/IdeaGenerator';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-800 antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <IdeaGenerator />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
