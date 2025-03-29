import React from 'react';

const ProjectsSection = ({ data, language }: any) => (
  <section className="py-16 px-4">
    <div className="container mx-auto max-w-4xl">
      <h3 className="text-3xl font-bold mb-8 text-center">
        {language === 'es' ? 'Proyectos' : 'Projects'}
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        {data.portfolio.map((project: any) => (
          <div key={project.title} className="bg-gray-800 rounded-lg p-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h4 className="text-xl font-bold">{project.title}</h4>
              <p className="mt-2 text-cyan-300">{project.description[language]}</p>
              <a
                href={project.link}
                target="_blank"
                className="mt-4 inline-block text-cyan-400 hover:text-cyan-300"
              >
                {language === 'es' ? 'Ver proyecto →' : 'View project →'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;