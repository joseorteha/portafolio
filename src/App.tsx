import React, { useState, useEffect } from 'react';
// Removed unused FontAwesomeIcon import
// Removed unused imports from '@fortawesome/free-brands-svg-icons'
import emailjs from '@emailjs/browser';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

// Definición de tipos para los datos
interface SkillData {
  [category: string]: string[];
}

interface PortfolioItem {
  title: string;
  description: { [key: string]: string };
  image: string;
  tags: string[];
  link: string;
}

interface ContentData {
  about: {
    title: { [key: string]: string };
    description: { [key: string]: string };
  };
  skills: SkillData;
  portfolio: PortfolioItem[];
}


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [data, setData] = useState<ContentData | null>(null);

  // Cargar datos desde content.json
  useEffect(() => {
    fetch('/data/content.json')
      .then((res) => {
        if (!res.ok) throw new Error('Error fetching content.json');
        return res.json();
      })
      .then(setData)
      .catch((err) => console.error('Error loading content:', err));
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // Componente SkillsSection
  const SkillsSection = () => (
    <section className="py-16 px-4 bg-opacity-50 backdrop-blur-sm fade-in">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-3xl font-bold mb-8 text-center font-['Orbitron']">
          {language === 'es' ? 'Habilidades' : 'Skills'}
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(data.skills).map(([category, items]) => (
            <div
              key={category}
              className={`p-6 rounded-lg ${
                darkMode ? 'bg-[#1a1a1a]' : 'bg-white'
              } shadow-lg`}
            >
              <h4 className="text-xl font-bold mb-4 capitalize font-['Oxygen']">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode
                        ? 'bg-[#FF5733] text-white'
                        : 'bg-[#3498DB] text-white'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Componente ContactSection con EmailJS
  const ContactSection = () => {
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      emailjs
        .sendForm(
          'service_xyz',
          'template_123',
          e.target as HTMLFormElement,
          'abc123'
        )
        .then(() =>
          alert(language === 'es' ? '¡Mensaje enviado!' : 'Message sent!')
        )
        .catch(() =>
          alert(
            language === 'es'
              ? 'Error al enviar el mensaje.'
              : 'Error sending message.'
          )
        );
      (e.target as HTMLFormElement).reset();
    };

    return (
      <section className="py-16 px-4 fade-in">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold mb-8 text-center font-['Orbitron']">
            {language === 'es' ? 'Contacto' : 'Contact'}
          </h3>
          <div
            className={`p-8 rounded-lg ${
              darkMode ? 'bg-[#1a1a1a]' : 'bg-white'
            } shadow-lg`}
          >
            <form onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'es' ? 'Nombre' : 'Name'}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className={`w-full px-4 py-2 rounded-md border ${
                    darkMode
                      ? 'bg-[#2d2d2d] border-gray-700 text-white'
                      : 'bg-gray-50 border-gray-300 text-[#333333]'
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className={`w-full px-4 py-2 rounded-md border ${
                    darkMode
                      ? 'bg-[#2d2d2d] border-gray-700 text-white'
                      : 'bg-gray-50 border-gray-300 text-[#333333]'
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'es' ? 'Mensaje' : 'Message'}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className={`w-full px-4 py-2 rounded-md border ${
                    darkMode
                      ? 'bg-[#2d2d2d] border-gray-700 text-white'
                      : 'bg-gray-50 border-gray-300 text-[#333333]'
                  }`}
                />
              </div>
              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-md ${
                  darkMode ? 'bg-[#FF5733]' : 'bg-[#3498DB]'
                } text-white font-medium hover:opacity-90 transition-opacity`}
              >
                {language === 'es' ? 'Enviar Mensaje' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };

  // Renderizado principal
  return (
    <div
      className={`min-h-screen ${
        darkMode ? 'bg-[#121212] text-white' : 'bg-[#F5F5F5] text-[#333333]'
      }`}
    >
      <Header
        darkMode={darkMode}
        language={language}
        setDarkMode={setDarkMode}
        setLanguage={(lang: string) => setLanguage(lang as 'es' | 'en')}
      />
      <HeroSection
        data={data}
        language={language}
      />
      <SkillsSection />
      <ProjectsSection
        data={data}
        darkMode={darkMode}
        language={language}
      />
      <ContactSection />
      <Footer
        darkMode={darkMode}
        language={language}
      />
    </div>
  );
}

export default App;