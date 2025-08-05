// src/components/ProjectGrid.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "FIRST",
    image: "/assets/first.jpg",
    slug: "first",
  },
  {
    title: "KUTE",
    image: "/assets/kute.jpg",
    slug: "kute",
  },
  {
    title: "IT'S FUN",
    image: "/assets/fun.jpg",
    slug: "its-fun",
  },
  {
    title: "STOMPY",
    image: "/assets/stompy.jpg",
    slug: "stompy",
  },
  {
    title: "BU SHY",
    image: "/assets/bushy.jpg",
    slug: "bu-shy",
  },
  {
    title: "SEVEN UP",
    image: "/assets/sevenup.jpg",
    slug: "seven-up",
  },
  {
    title: "FASHION",
    image: "/assets/fashion.jpg",
    slug: "fashion",
  },
  {
    title: "SPRITE",
    image: "/assets/sprite.jpg",
    slug: "sprite",
  },
];

const ProjectGrid = () => {
  return (
    <div className="bg-black text-white py-16 px-6 sm:px-12 rounded-t-3xl">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between mb-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Our Recent <br />
              Work
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-0">
            <div>
              <label className="text-sm text-gray-300">Filter by Service</label>
              <select className="w-full rounded-full px-4 py-2 bg-black border border-gray-500 text-white">
                <option>All</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-300">Filter by Industry</label>
              <select className="w-full rounded-full px-4 py-2 bg-black border border-gray-500 text-white">
                <option>All</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
