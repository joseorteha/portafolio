import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

const App = () => {
  const [darkMode] = useState(true);
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Datos ultra personalizados de tu GitHub
  const portfolioData = {
    about: {
      title: { 
        es: "🚀 José 'MrOrtega' Ortega", 
        en: "🚀 José 'MrOrtega' Ortega" 
      },
      description: {
        es: "Desarrollador FullStack | Especialista React/Node.js | Estudiante de Ingeniería en Sistemas",
        en: "FullStack Developer | React/Node.js Specialist | Systems Engineering Student"
      }
    },
    skills: {
      frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Bootstrap'],
      backend: ['Node.js', 'Express', 'Firebase', 'MongoDB', 'MySQL'],
      mobile: ['React Native', 'Expo', 'Android Studio'],
      tools: ['Git', 'Docker', 'AWS', 'Vite', 'Jira']
    },
    projects: [
      {
        title: "Guau y Miau",
        description: {
          es: "Plataforma de adopción de mascotas con React + Firebase",
          en: "Pet adoption platform with React + Firebase"
        },
        image: "https://raw.githubusercontent.com/joseorteha/guau-y-miau/main/public/ss1.png",
        link: "https://github.com/joseorteha/guau-y-miau",
        tags: ["React", "Firebase", "Bootstrap"]
      },
      {
        title: "Biblioteca Digital",
        description: {
          es: "Aplicación móvil para gestión de libros con React Native",
          en: "Mobile book management app with React Native"
        },
        image: "https://raw.githubusercontent.com/joseorteha/biblioteca-digital/main/assets/ss1.jpg",
        link: "https://github.com/joseorteha/biblioteca-digital",
        tags: ["React Native", "Expo", "SQLite"]
      },
      {
        title: "Portafolio Profesional",
        description: {
          es: "Mi propio portafolio con React + TypeScript",
          en: "My personal portfolio with React + TypeScript"
        },
        image: "https://raw.githubusercontent.com/joseorteha/portfolio/main/public/ss1.png",
        link: "https://github.com/joseorteha/portfolio",
        tags: ["React", "TypeScript", "Tailwind"]
      }
    ],
    achievements: [
      {
        title: {
          es: "🏆 1er Lugar Hackathon ITSZ",
          en: "🏆 1st Place ITSZ Hackathon"
        },
        description: {
          es: "Desarrollo de app educativa en 24 horas",
          en: "Educational app development in 24h"
        },
        year: "2023"
      },
      {
        title: {
          es: "📜 Certificación React Profesional",
          en: "📜 Professional React Certification"
        },
        description: {
          es: "Platzi - 78 horas de formación",
          en: "Platzi - 78 hours of training"
        },
        year: "2023"
      }
    ]
  };

  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm('service_xyz', 'template_123', e.currentTarget, 'abc123')
      .then(() => alert(language === 'es' ? '🔥 Mensaje enviado!' : '🔥 Message sent!'))
      .catch(() => alert('💥 Error al enviar'));
    e.currentTarget.reset();
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'} text-cyan-100`}>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 z-50"
      />

      <Particles
        init={particlesInit}
        options={{
          particles: {
            number: { value: 50 },
            move: { enable: true, speed: 0.75 },
            links: {
              enable: true,
              distance: 150,
              color: '#0FF0FC'
            },
            size: { value: 1.5 },
            opacity: { value: 0.8 }
          }
        }}
        className="absolute inset-0"
      />

      <header className="fixed w-full top-0 p-4 bg-gray-900/90 backdrop-blur-sm z-40 border-b border-cyan-400/20">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold font-['Orbitron']">
            <span className="text-cyan-400">&lt;</span>
            MrOrtega
            <span className="text-pink-400">/&gt;</span>
          </h1>
          <div className="flex gap-4">
            <button
              onClick={() => setLanguage(l => l === 'es' ? 'en' : 'es')}
              className="px-4 py-2 rounded-lg bg-cyan-400/20 hover:bg-cyan-400/30 transition-all font-['Rajdhani']"
            >
              {language === 'es' ? 'EN 🇺🇸' : 'ES 🇲🇽'}
            </button>
          </div>
        </div>
      </header>

      {/* Sección Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-['Orbitron']">
              {portfolioData.about.title[language]}
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 max-w-3xl mx-auto leading-relaxed font-['Rajdhani']">
              {portfolioData.about.description[language]}
            </p>
          </motion.div>

          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/joseorteha"
              target="_blank"
              className="p-2 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 transition-all"
            >
              <img src="https://img.icons8.com/3d-fluency/48/github.png" alt="GitHub" className="w-8 h-8"/>
            </a>
            <a
              href="https://linkedin.com/in/josé-ortega-497387321"
              target="_blank"
              className="p-2 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 transition-all"
            >
              <img src="https://img.icons8.com/3d-fluency/48/linkedin.png" alt="LinkedIn" className="w-8 h-8"/>
            </a>
            <a
              href="https://instagram.com/mr.orteg4"
              target="_blank"
              className="p-2 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 transition-all"
            >
              <img src="https://img.icons8.com/3d-fluency/48/instagram-new.png" alt="Instagram" className="w-8 h-8"/>
            </a>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font-['Orbitron'] text-cyan-400">
            {language === 'es' ? 'Tecnologías Dominadas' : 'Mastered Technologies'}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-800/50 rounded-xl border border-cyan-400/20 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold mb-4 text-pink-400 font-['Rajdhani']">
                  {category.toUpperCase()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 text-sm font-['Rajdhani']"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font-['Orbitron'] text-pink-400">
            {language === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-cyan-400/20 backdrop-blur-sm"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover border-b border-cyan-400/20"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-cyan-300">{project.title}</h3>
                  <p className="text-cyan-400/80 mb-4 font-['Rajdhani']">
                    {project.description[language]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-pink-400/20 text-pink-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/20 rounded-lg hover:bg-cyan-400/30 transition-all font-['Rajdhani']"
                  >
                    <span>{language === 'es' ? 'Ver código' : 'View code'}</span>
                    <span className="text-cyan-400">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logros */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font-['Orbitron'] text-cyan-400">
            {language === 'es' ? 'Logros Relevantes' : 'Key Achievements'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800/50 rounded-xl border border-cyan-400/20 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-pink-400/20 flex items-center justify-center">
                      <span className="text-pink-400">🏆</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-300 mb-2">
                      {achievement.title[language]}
                    </h3>
                    <p className="text-cyan-400/80 font-['Rajdhani']">
                      {achievement.description[language]}
                    </p>
                    <div className="mt-3 text-sm text-pink-400/80">
                      {achievement.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-cyan-400/20 backdrop-blur-sm">
            <h2 className="text-4xl font-bold mb-8 text-center font-['Orbitron'] text-pink-400">
              {language === 'es' ? 'Contacto Directo' : 'Direct Contact'}
            </h2>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
              <div>
                <label className="block text-cyan-300 mb-2 font-['Rajdhani']">
                  {language === 'es' ? 'Nombre completo' : 'Full name'}
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full p-3 bg-gray-900/50 rounded-lg border border-cyan-400/20 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-cyan-300 mb-2 font-['Rajdhani']">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@example.com"
                  className="w-full p-3 bg-gray-900/50 rounded-lg border border-cyan-400/20 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-cyan-300 mb-2 font-['Rajdhani']">
                  {language === 'es' ? 'Mensaje' : 'Message'}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder={language === 'es' ? "Tu mensaje aquí..." : "Your message here..."}
                  className="w-full p-3 bg-gray-900/50 rounded-lg border border-cyan-400/20 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-lg font-bold hover:opacity-90 transition-opacity font-['Rajdhani']"
              >
                {language === 'es' ? 'Enviar Mensaje' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900/90 border-t border-cyan-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-cyan-400/80 font-['Rajdhani']">
            © 2024 José Ortega. {language === 'es' ? 
            'Todos los derechos reservados | Desarrollado con React y ☕' : 
            'All rights reserved | Built with React and ☕'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;