// src/Components/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ title, description, repoLink, demoLink }) => {
  return (
    <div className="group relative border rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 bg-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 text-sm mb-4">{description}</p>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white rounded-2xl">
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 rounded mb-2 hover:bg-gray-600 transition"
          >
            GitHub
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
