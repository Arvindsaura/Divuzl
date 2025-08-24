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
  const scrollContainer = useRef(null);

  const filteredProjects = projects.filter((proj) => {
    const serviceMatch = serviceFilter === "All" || proj.service === serviceFilter;
    const industryMatch = industryFilter === "All" || proj.industry === industryFilter;
    return serviceMatch && industryMatch;
  });

  useEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());

    // ✅ Smooth Scroll effect (Projects only)
    const ctx = gsap.context(() => {
      gsap.to(scrollContainer.current, {
        y: 0,
        ease: "power4.out",
        overwrite: true,
        duration: 1.2,
      });

      // Animate project cards
      projectRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.to(el.querySelector("img"), {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Animate text
      textRefs.current.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, scrollContainer);

    projectRefs.current = [];
    textRefs.current = [];

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <div ref={scrollContainer} className="text-black scroll-smooth">
      {/* Hero Section */}
      <div
        className="relative w-screen h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/projectbg.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-40 flex items-center">
          <div className="text-white text-left w-[80vw] ml-[10vw]">
            <p
              ref={(el) => el && textRefs.current.push(el)}
              className="text-base sm:text-lg md:text-xl mb-2"
            >
              The digital landscape has changed.
            </p>
            <h1
              ref={(el) => el && textRefs.current.push(el)}
              className="text-2xl sm:text-4xl md:text-5xl font-bold"
            >
              Don’t get left behind.
            </h1>
          </div>
        </div>
      </div>

      {/* Filter + Content Section */}
      <div className="bg-black text-white mt-[-5vh] py-12">
        <div className="w-[80vw] ml-[10vw]">
          {/* Filters */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-[5vh]">
            <h2 className="text-5xl font-semibold">Our Recent Work</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Service Filter */}
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
              {/* Industry Filter */}
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

          {/* Project Cards */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj, i) => (
              <Link to={`/projects/${proj.slug}`} key={proj.slug}>
                <div
                  ref={(el) => el && projectRefs.current.push(el)}
                  className="relative rounded-2xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-[40vh] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <h2 className="text-white text-xl font-semibold text-center px-4 leading-snug tracking-wide">
                      {proj.title}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-20 text-white text-4xl dm-sans-body text-left tracking-wide">
            We’d love to hear from you, so send us a note, and we’ll be in touch.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
