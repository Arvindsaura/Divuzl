// src/pages/ProjectDetail.jsx
import { useParams } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetail = () => {
  const { id: slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-10 text-center text-red-600 font-montserrat">Project Not Found</div>;
  }

  return (
    <div className="min-h-screen bg-white p-12 font-montserrat max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto rounded-xl mb-6 object-cover"
      />
      <p className="text-lg">{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
