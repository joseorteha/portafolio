import React from 'react';

interface FooterProps {
  darkMode: boolean;
  language: string;
}

const Footer: React.FC<FooterProps> = ({ darkMode, language }) => (
  <footer className={`py-8 px-4 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'} fade-in`}>
    <div className="container mx-auto max-w-4xl text-center">
      <p className="opacity-90">
        © 2024 José Ortega. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
      </p>
    </div>
  </footer>
);

export default Footer;