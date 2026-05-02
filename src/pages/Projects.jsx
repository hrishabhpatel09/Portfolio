import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section className="bg-[#e0e0e0] dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-700 dark:text-gray-200 sm:text-6xl font-poetsen" style={{ textShadow: '1px 1px 2px #c7c7c7, -1px -1px 2px #f9f9f9' }}>
            My Projects
          </h2>
          <p className="mt-5 text-xl text-gray-500 dark:text-gray-400 font-poetsen">
            A showcase of my passion for building things.
          </p>
        </div>
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
