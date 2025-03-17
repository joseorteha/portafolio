import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCode, faGraduationCap, faTrophy } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('es');

  const content = {
    es: {
      greeting: '¡Hola, soy José Ortega!',
      description: 'Soy un apasionado desarrollador web con experiencia en React, JavaScript y tecnologías modernas. Actualmente estudio Ingeniería en Sistemas y desarrollo proyectos innovadores en web y móvil. Me encanta crear experiencias interactivas y aprender nuevas tecnologías. 🚀',
      sections: {
        about: 'Sobre Mí',
        education: 'Educación',
        skills: 'Habilidades',
        projects: 'Proyectos',
        contact: 'Contacto'
      }
    },
    en: {
      greeting: "Hi, I'm José Ortega!",
      description: "I'm a passionate web developer with experience in React, JavaScript, and modern technologies. Currently studying Systems Engineering and developing innovative web and mobile projects. I love creating interactive experiences and learning new technologies. 🚀",
      sections: {
        about: 'About Me',
        education: 'Education',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact'
      }
    }
  };

  const skills = {
    frontend: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind'],
    backend: ['Node.js', 'Express', 'Firebase'],
    databases: ['MySQL', 'PostgreSQL', 'Firebase Firestore'],
    tools: ['Git', 'Vite', 'Netlify', 'Expo (React Native)']
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#121212] text-white' : 'bg-[#F5F5F5] text-[#333333]'}`}>
      {/* Header */}
      <header className="fixed top-0 w-full bg-opacity-90 backdrop-blur-sm z-50 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold font-['Orbitron']">José Ortega</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setLanguage(lang => lang === 'es' ? 'en' : 'es')}
              className="px-3 py-1 rounded-md border border-current"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
            <button
              onClick={() => setDarkMode(mode => !mode)}
              className="px-3 py-1 rounded-md border border-current"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-['Orbitron']">
              {content[language].greeting}
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto font-['Oxygen']">
              {content[language].description}
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://github.com/joseorteha" target="_blank" rel="noopener noreferrer" 
               className="text-3xl hover:text-[#FF5733] dark:hover:text-[#3498DB] transition-colors">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/josé-ortega-497387321" target="_blank" rel="noopener noreferrer"
               className="text-3xl hover:text-[#FF5733] dark:hover:text-[#3498DB] transition-colors">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://instagram.com/mr.orteg4" target="_blank" rel="noopener noreferrer"
               className="text-3xl hover:text-[#FF5733] dark:hover:text-[#3498DB] transition-colors">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-opacity-50 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold mb-8 text-center font-['Orbitron']">
            {content[language].sections.skills}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={`p-6 rounded-lg ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'} shadow-lg`}>
                <h4 className="text-xl font-bold mb-4 capitalize font-['Oxygen']">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} 
                          className={`px-3 py-1 rounded-full text-sm ${
                            darkMode ? 'bg-[#FF5733] text-white' : 'bg-[#3498DB] text-white'
                          }`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold mb-8 text-center font-['Orbitron']">
            {content[language].sections.projects}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
              <img src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=800" 
                   alt="Guau y Miau" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Guau y Miau</h4>
                <p className="opacity-90 mb-4">
                  {language === 'es' ? 'Plataforma de adopción de mascotas.' : 'Pet adoption platform.'}
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 text-sm rounded bg-opacity-20 bg-current">React</span>
                  <span className="px-2 py-1 text-sm rounded bg-opacity-20 bg-current">Firebase</span>
                </div>
              </div>
            </div>
            
            <div className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
              <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800" 
                   alt="Biblioteca Digital" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Biblioteca Digital</h4>
                <p className="opacity-90 mb-4">
                  {language === 'es' ? 'Proyecto en React Native + Expo.' : 'React Native + Expo project.'}
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 text-sm rounded bg-opacity-20 bg-current">React Native</span>
                  <span className="px-2 py-1 text-sm rounded bg-opacity-20 bg-current">Expo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold mb-8 text-center font-['Orbitron']">
            {content[language].sections.contact}
          </h3>
          <div className={`p-8 rounded-lg ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'} shadow-lg`}>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'es' ? 'Nombre' : 'Name'}
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 rounded-md border ${
                    darkMode ? 'bg-[#2d2d2d] border-gray-700' : 'bg-gray-50 border-gray-300'
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className={`w-full px-4 py-2 rounded-md border ${
                    darkMode ? 'bg-[#2d2d2d] border-gray-700' : 'bg-gray-50 border-gray-300'
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'es' ? 'Mensaje' : 'Message'}
                </label>
                <textarea
                  rows={4}
                  className={`w-full px-4 py-2 rounded-md border ${
                    darkMode ? 'bg-[#2d2d2d] border-gray-700' : 'bg-gray-50 border-gray-300'
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

      {/* Footer */}
      <footer className={`py-8 px-4 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
        <div className="container mx-auto max-w-4xl text-center">
          <p className="opacity-90">© 2024 José Ortega. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;