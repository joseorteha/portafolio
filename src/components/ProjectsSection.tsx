import React from 'react';

interface ProjectsSectionProps {
  data: any;
  darkMode: boolean;
  language: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ data, darkMode, language }) => (
  <section className="py-16 px-4 fade-in">
    <div className="container mx-auto max-w-4xl">
      <h3 className="text-3xl font-bold mb-8 text-center font-['Orbitron']">
        {language === 'es' ? 'Proyectos' : 'Projects'}
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        {data.portfolio.map((project: any) => (
          <div
            key={project.title}
            className={`rounded-lg overflow-hidden shadow-lg ${
              darkMode ? 'bg-[#1a1a1a]' : 'bg-white'
            } transition-transform hover:scale-105`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="opacity-90 mb-4">{project.description[language]}</p>
              <div className="flex gap-2">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-sm rounded bg-opacity-20 bg-current"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm underline hover:text-[#FF5733] dark:hover:text-[#3498DB]"
              >
                {language === 'es' ? 'Ver proyecto' : 'View project'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;