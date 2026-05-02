import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-3xl bg-[#e0e0e0] dark:bg-gray-800 p-1 shadow-[7px_7px_15px_#bebebe,-7px_-7px_15px_#ffffff] dark:shadow-[7px_7px_15px_#1f2937,-7px_-7px_15px_#4a5568] transition-all duration-300 hover:shadow-[4px_4px_10px_#bebebe,-4px_-4px_10px_#ffffff] dark:hover:shadow-[4px_4px_10px_#1f2937,-4px_-4px_10px_#4a5568]">
      <div className="h-56 rounded-t-3xl overflow-hidden">
        <iframe
          src={project.livePreviewUrl}
          title={project.title}
          className="w-full h-full object-cover"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-poetsen">{project.title}</h3>
        <p className="mt-3 text-gray-600 dark:text-gray-300 h-20 overflow-y-auto font-poetsen">{project.description}</p>
        <div className="mt-4">
          <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 font-poetsen">Technologies:</span>
          <div className="flex flex-wrap mt-2">
            {project.languages.map((lang, index) => (
              <span
                key={index}
                className="text-xs font-semibold mr-2 mb-2 px-3 py-1 rounded-full bg-[#e0e0e0] shadow-[inset_3px_3px_5px_#bebebe,inset_-3px_-3px_5px_#ffffff] dark:bg-gray-700 dark:shadow-none font-poetsen"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_5px_#bebebe,inset_-3px_-3px_5px_#ffffff] dark:shadow-none dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 font-poetsen"
          >
            GitHub
          </a>
          <a
            href={project.livePreviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_5px_#bebebe,inset_-3px_-3px_5px_#ffffff] dark:shadow-none dark:bg-indigo-600 dark:hover:bg-indigo-700 transition-all duration-300 font-poetsen"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
