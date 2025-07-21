import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [serviceFilter, setServiceFilter] = useState("All");
  const [industryFilter, setIndustryFilter] = useState("All");
  const projectRefs = useRef([]);
  const textRefs = useRef([]);

  const filteredProjects = projects.filter((proj) => {
    const serviceMatch = serviceFilter === "All" || proj.service === serviceFilter;
    const industryMatch = industryFilter === "All" || proj.industry === industryFilter;
    return serviceMatch && industryMatch;
  });

  useEffect(() => {
    projectRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });

    textRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });
  }, [filteredProjects]);

  return (
    <div className="bg-[#0047FF] text-black font-montserrat">
      <div className="w-full min-h-[60vh] flex items-center justify-center text-gray-500 italic bg-[#0047FF]">
        *a video would be added here
      </div>

      <div className="text-white px-4 sm:px-6 md:px-20 py-16">
        <p ref={(el) => textRefs.current.push(el)} className="text-base sm:text-lg md:text-xl mb-2">
          The digital landscape has chnaged.
        </p>
        <h1 ref={(el) => textRefs.current.push(el)} className="text-2xl sm:text-4xl md:text-5xl font-bold">
          Don’t get left behind.
        </h1>
      </div>

      <div className="bg-black text-white px-4 sm:px-6 md:px-20 py-12 rounded-t-3xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">Our Recent Work</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <div>
              <label className="block text-sm">Filter by Service</label>
              <select
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                className="bg-white text-black p-2 rounded-md w-full"
              >
                <option value="All">All</option>
                <option value="Branding">Branding</option>
                <option value="Advertising">Advertising</option>
                <option value="Strategy">Strategy</option>
              </select>
            </div>
            <div>
              <label className="block text-sm">Filter by Industry</label>
              <select
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
                className="bg-white text-black p-2 rounded-md w-full"
              >
                <option value="All">All</option>
                <option value="FMCG">FMCG</option>
                <option value="Tech">Tech</option>
                <option value="Fashion">Fashion</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((proj, i) => (
            <Link to={`/projects/${proj.slug}`} key={proj.slug}>
              <div
                ref={(el) => (projectRefs.current[i] = el)}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-64 sm:h-72 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <h2 className="text-white text-lg sm:text-xl font-semibold text-center px-2 sm:px-4">
                    {proj.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center py-12 px-4 sm:px-6 md:px-20 bg-white text-black">
        <p className="text-sm sm:text-base">Hi, thanks for visiting Divuzl !</p>
        <p className="text-sm sm:text-base">
          We’d love to hear from you, so send us a note, and we’ll be in touch.
        </p>
      </div>
    </div>
  );
};

export default Projects;
