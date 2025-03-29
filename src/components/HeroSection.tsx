import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

interface HeroSectionProps {
  data: any;
  language: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data, language }) => (
  <section className="pt-24 pb-16 px-4 fade-in">
    <div className="container mx-auto max-w-4xl">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-['Orbitron']">
          {data.about.title[language]}
        </h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto font-['Oxygen']">
          {data.about.description[language]}
        </p>
      </div>
      <div className="flex justify-center gap-6 mt-8">
        <a
          href="https://github.com/joseorteha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-[#FF5733] dark:hover:text-[#3498DB] transition-colors"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://linkedin.com/in/josé-ortega-497387321"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-[#FF5733] dark:hover:text-[#3498DB] transition-colors"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://instagram.com/mr.orteg4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-[#FF5733] dark:hover:text-[#3498DB] transition-colors"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;