// src/components/ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.slug}`}>
      <div className="relative group overflow-hidden rounded-2xl aspect-[4/5]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
          <span className="text-white text-xl font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.title}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
