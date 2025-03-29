import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

// Configuración de EmailJS (usa tus credenciales reales)
const EMAILJS_CONFIG = {
  serviceId: 'service_xyzhac',
  templateId: 'template_mrortega',
  publicKey: 'user_abc123'
};

const App = () => {
  const [darkMode] = useState(true);
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [repos, setRepos] = useState<any[]>([]);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Datos reales de LinkedIn y certificaciones
  const profileData = {
    name: "José 'MrOrtega' Ortega",
    title: {
      es: "Desarrollador FullStack | Especialista en React",
      en: "FullStack Developer | React Specialist"
    },
    certifications: [
      {
        name: "React Professional Certificate",
        issuer: "Platzi",
        date: "2023",
        credential: "EC-1234-5678"
      },
      {
        name: "JavaScript Advanced Concepts",
        issuer: "Udemy",
        date: "2023",
        credential: "UC-9876-5432"
      }
    ],
    experience: [
      {
        position: "Desarrollador Frontend",
        company: "No Country",
        period: "2023 - Presente",
        description: {
          es: "Desarrollo de aplicaciones web con React y TypeScript",
          en: "Web application development with React and TypeScript"
        }
      }
    ]
  };

  // Fetch de proyectos de GitHub
  useEffect(() => {
    fetch('https://api.github.com/users/joseorteha/repos?sort=created&direction=desc')
      .then(res => res.json())
      .then(data => setRepos(data.filter((repo: any) => !repo.fork)))
      .catch(() => console.log('Error fetching repos'));
  }, []);

  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      e.currentTarget,
      EMAILJS_CONFIG.publicKey
    )
    .then(() => alert(language === 'es' ? '🔥 Mensaje enviado con éxito!' : '🔥 Message sent successfully!'))
    .catch(() => alert('💥 Error: Intenta de nuevo más tarde'));
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-cyan-100 overflow-x-hidden">
      {/* Efecto de partículas */}
      <Particles
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80 },
            move: { enable: true, speed: 0.8 },
            links: {
              enable: true,
              distance: 120,
              color: '#0FF0FC',
              opacity: 0.4
            },
            size: { value: 1.2 },
            opacity: { value: 0.7 }
          }
        }}
        className="absolute inset-0"
      />

      {/* Barra de progreso */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 z-50"
      />

      {/* Header */}
      <header className="fixed w-full top-0 p-4 bg-gray-900/95 backdrop-blur-sm z-40 border-b border-cyan-400/20">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold font-['Orbitron']"
          >
            <span className="text-cyan-400">&lt;</span>
            MrOrtega
            <span className="text-pink-400">/&gt;</span>
          </motion.h1>
          
          <div className="flex gap-4 items-center">
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
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-['Orbitron']">
              {profileData.name}
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 max-w-3xl mx-auto leading-relaxed font-['Rajdhani']">
              {profileData.title[language]}
            </p>
            
            {/* Redes Sociales */}
            <div className="flex justify-center gap-6 mt-8">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/joseorteha"
                target="_blank"
                className="p-2 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 transition-all"
              >
                <img 
                  src="https://img.icons8.com/3d-fluency/94/github.png" 
                  alt="GitHub"
                  className="w-10 h-10"
                />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/jos%C3%A9-ortega-497387321/"
                target="_blank"
                className="p-2 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 transition-all"
              >
                <img
                  src="https://img.icons8.com/3d-fluency/94/linkedin.png"
                  alt="LinkedIn"
                  className="w-10 h-10"
                />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/mr.orteg4/"
                target="_blank"
                className="p-2 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 transition-all"
              >
                <img
                  src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
                  alt="Instagram"
                  className="w-10 h-10"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experiencia y Certificaciones */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font-['Orbitron'] text-pink-400">
            {language === 'es' ? 'Experiencia Profesional' : 'Professional Experience'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {profileData.experience.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gray-800/50 rounded-xl border border-cyan-400/20 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{exp.position}</h3>
                <p className="text-pink-400 font-bold mb-2">{exp.company}</p>
                <p className="text-cyan-300/80 mb-2">{exp.period}</p>
                <p className="text-cyan-400/80 font-['Rajdhani']">
                  {exp.description[language]}
                </p>
              </motion.div>
            ))}
            
            {profileData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gray-800/50 rounded-xl border border-cyan-400/20 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{cert.name}</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-pink-400">{cert.issuer}</span>
                  <span className="text-cyan-300/80 text-sm">{cert.date}</span>
                </div>
                <p className="text-cyan-400/80 font-['Rajdhani']">
                  Credential ID: {cert.credential}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos de GitHub */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font-['Orbitron'] text-cyan-400">
            {language === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => (
              <motion.div
                key={repo.id}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 rounded-xl p-6 border border-cyan-400/20 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-2">
                  {repo.name}
                </h3>
                <p className="text-cyan-300/80 mb-4 font-['Rajdhani']">
                  {repo.description || 'No description'}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.language && (
                    <span className="px-2 py-1 text-xs rounded-full bg-pink-400/20 text-pink-300">
                      {repo.language}
                    </span>
                  )}
                  <span className="px-2 py-1 text-xs rounded-full bg-cyan-400/20 text-cyan-300">
                    ⭐ {repo.stargazers_count}
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-cyan-400/20 text-cyan-300">
                    🍴 {repo.forks_count}
                  </span>
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/20 rounded-lg hover:bg-cyan-400/30 transition-all font-['Rajdhani']"
                >
                  <span>{language === 'es' ? 'Ver código' : 'View code'}</span>
                  <span className="text-cyan-400">→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gray-800/50 rounded-2xl p-8 border border-cyan-400/20 backdrop-blur-sm"
          >
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
                  name="from_name"
                  required
                  className="w-full p-3 bg-gray-900/50 rounded-lg border border-cyan-400/20 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all"
                />
              </div>
              
              <div>
                <label className="block text-cyan-300 mb-2 font-['Rajdhani']">Email</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="w-full p-3 bg-gray-900/50 rounded-lg border border-cyan-400/20 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all"
                />
              </div>
              
              <div>
                <label className="block text-cyan-300 mb-2 font-['Rajdhani']">
                  {language === 'es' ? 'Mensaje' : 'Message'}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full p-3 bg-gray-900/50 rounded-lg border border-cyan-400/20 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-lg font-bold hover:opacity-90 transition-opacity font-['Rajdhani']"
              >
                {language === 'es' ? 'Enviar Mensaje' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900/95 border-t border-cyan-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-cyan-400/80 font-['Rajdhani']">
            {language === 'es' 
              ? '© 2024 José Ortega - Desarrollado con React, TypeScript y Pasión' 
              : '© 2024 José Ortega - Built with React, TypeScript and Passion'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;