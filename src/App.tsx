import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

// Estilos cyberpunk
const neon = {
  pink: '#FF10F0',
  cyan: '#0FF0FC',
  orange: '#FF6B35'
};

const App = () => {
  const [darkMode, setDarkMode] = useState(true); // Forzamos dark mode pa' que quede más perris
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  // Define the ContentData type
  type ContentData = {
    skills: Record<string, string[]>;
  };
  
  const [data, setData] = useState<ContentData | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Efecto de partículas chingonas
  const particlesInit = async (engine: any) => await loadFull(engine);

  const SkillsSection = () => (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 to-transparent mix-blend-screen" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-6xl"
      >
        <h3 className="text-5xl font-bold mb-12 text-center font-['Bebas_Neue'] tracking-wider bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          {language === 'es' ? 'HABILIDADES PRO' : 'LEET SKILLS'}
          <div className="mt-2 h-1 bg-gradient-to-r from-cyan-400 to-pink-600 w-1/4 mx-auto" />
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(data!.skills).map(([category, items], idx) => (
            <div
              key={category}
              className="bg-black/40 backdrop-blur-lg border border-cyan-400/20 p-6 rounded-xl shadow-2xl hover:border-cyan-400/40 transition-all duration-300 group"
            >
              <h4 className="text-xl font-bold mb-4 font-['Rajdhani'] text-cyan-400 flex items-center gap-2">
                <span className="text-pink-400">{`// ${idx + 1}`}</span>
                {category.toUpperCase()}
              </h4>
              
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <motion.span
                    whileHover={{ scale: 1.1, textShadow: `0 0 10px ${neon.cyan}` }}
                    key={skill}
                    className="px-4 py-2 rounded-full bg-black/60 border border-cyan-400/20 text-sm font-['Rajdhani'] text-cyan-300 cursor-default hover:border-cyan-400/40 hover:bg-black/80 hover:text-cyan-100 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );

  const ContactSection = () => {
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      emailjs.sendForm('service_xyz', 'template_123', e.target as HTMLFormElement, 'abc123')
        .then(() => alert(language === 'es' ? '🔥 Mensaje enviado con éxito' : '🔥 Message sent!'))
        .catch(() => alert('💥 Error: Intenta de nuevo más tarde'));
      (e.target as HTMLFormElement).reset();
    };

    return (
      <section className="relative py-20 px-4 bg-gradient-to-br from-black via-blue-900/20 to-purple-900/10">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-xl bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 border border-cyan-400/20 shadow-2xl"
          >
            <h3 className="text-4xl font-bold mb-8 text-center font-['Bebas_Neue'] bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent tracking-wider">
              {language === 'es' ? 'CONTACTO 1337' : 'HACK MY INBOX'}
            </h3>
            
            <form onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block font-['Rajdhani'] text-cyan-300 mb-3">
                  {language === 'es' ? 'NOMBRE:' : 'ALIAS:'}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-gray-400 font-['Rajdhani'] transition-all"
                  placeholder={language === 'es' ? 'Tu nombre aquí...' : 'Enter your alias...'}
                />
              </div>
              
              <div>
                <label className="block font-['Rajdhani'] text-cyan-300 mb-3">EMAIL:</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-gray-400 font-['Rajdhani'] transition-all"
                  placeholder="user@1337.com"
                />
              </div>
              
              <div>
                <label className="block font-['Rajdhani'] text-cyan-300 mb-3">
                  {language === 'es' ? 'MENSAJE SECRETO:' : 'ENCRYPTED MESSAGE:'}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-gray-400 font-['Rajdhani'] transition-all"
                  placeholder={language === 'es' ? 'Escribe tu mensaje aquí...' : 'Type your secret message...'}
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-lg font-bold font-['Bebas_Neue'] text-xl tracking-wider text-black hover:from-cyan-300 hover:to-pink-300 transition-all"
              >
                {language === 'es' ? 'ENVIAR CODIGO' : 'SEND ENCRYPTED'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-cyan-100 overflow-x-hidden">
      {/* Progress bar con estilo cyberpunk */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 to-pink-400 origin-left z-50"
      />
      
      {/* Partículas de fondo */}
      <Particles
        init={particlesInit}
        options={{
          particles: {
            number: { value: 50 },
            move: { enable: true, speed: 0.5 },
            size: { value: 1 },
            opacity: { value: 0.5 },
            links: {
              enable: true,
              color: neon.cyan,
              distance: 150
            }
          }
        }}
        className="absolute inset-0 z-0"
      />

      <Header 
        darkMode={darkMode}
        language={language}
        setDarkMode={setDarkMode}
        setLanguage={(lang: string) => setLanguage(lang as 'es' | 'en')}
      />

      <main className="relative z-10">
        <HeroSection data={data} language={language} />
        
        <SkillsSection />
        
        <ProjectsSection
          data={data}
          darkMode={darkMode}
          language={language}
        />

        <ContactSection />
      </main>

      <Footer darkMode={darkMode} language={language} />
    </div>
  );
};
// Asegúrate que esta línea esté al final del archivo
export default App;