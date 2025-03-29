import React from 'react';

interface HeaderProps {
  darkMode: boolean;
  language: string;
  setDarkMode: (mode: boolean) => void;
  setLanguage: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, language, setDarkMode, setLanguage }) => (
  <header className="fixed top-0 w-full bg-opacity-90 backdrop-blur-sm z-50 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold font-['Orbitron']">José Ortega</h1>
      <div className="flex gap-4">
        <button
          onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
          className="px-3 py-1 rounded-md border border-current hover:bg-opacity-10 hover:bg-current transition-all"
        >
          {language === 'es' ? 'EN' : 'ES'}
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 rounded-md border border-current hover:bg-opacity-10 hover:bg-current transition-all"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </div>
  </header>
);

export default Header;