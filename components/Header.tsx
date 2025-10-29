import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#services', label: 'Serviços' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#about', label: 'Sobre Nós' },
    { href: '#contact', label: 'Contato' },
  ];

  const linkClasses = "block py-2 px-3 text-slate-700 rounded hover:bg-orange-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 transition-colors duration-300";

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className={`self-center text-2xl font-semibold whitespace-nowrap transition-colors duration-300 ${isScrolled ? 'text-slate-800' : 'text-white md:text-slate-800'}`}>
            DRYes Construtora S.A
          </span>
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors duration-300 ${isScrolled ? 'text-gray-500 hover:bg-gray-100' : 'text-gray-200 hover:bg-white/20'}`}
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Abrir menu principal</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ${isScrolled || isMenuOpen ? 'bg-white md:bg-transparent' : 'bg-black/20 md:bg-transparent'}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClasses} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;