import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
  const { id: slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const wordRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const statRefs = useRef([]);
  const labelRefs = useRef([]);
  const lineRefs = useRef([]);

  if (!project) {
    return (
      <div className="p-10 text-center text-red-600">
        Project Not Found
      </div>
    );
  }

  const totalProjects = projects.length;
  const uniqueServices = [...new Set(projects.map((p) => p.service))].length;
  const uniqueIndustries = [...new Set(projects.map((p) => p.industry))].length;

  const stats = [
    {
      label: "Projects Completed",
      value: totalProjects,
      description: "Total successful client projects we’ve delivered.",
    },
    {
      label: "Services Offered",
      value: uniqueServices,
      description: "Unique types of services we’ve provided across projects.",
    },
    {
      label: "Industries Served",
      value: uniqueIndustries,
      description: "Different industries we’ve worked with and delivered for.",
    },
  ];

  const relatedProjects = projects.filter(
    (p) => p.industry === project.industry && p.slug !== project.slug
  );

  // Hover letters animation
  useEffect(() => {
    if (!wordRef.current) return;
    const letters = wordRef.current.querySelectorAll(".hover-letter");
    if (!letters.length) return;

    letters.forEach((letter, i) => {
      letter.addEventListener("mouseenter", () => {
        letters.forEach((l, j) => {
          const distance = Math.abs(i - j);
          const scaleX = Math.max(2 - distance * 0.5, 1);
          const translateY = -Math.max(8 - distance * 4, 0);
          l.style.transform = `scaleX(${scaleX}) translateY(${translateY}px)`;
          l.style.transition = "transform 0.25s ease";
        });
      });
      letter.addEventListener("mouseleave", () => {
        letters.forEach((l) => {
          l.style.transform = "scaleX(1) translateY(0)";
        });
      });
    });
  }, [project]);

  // Image scroll zoom
  useEffect(() => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      scale: 1.2,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
      ease: "power1.out",
    });
  }, [project]);

  // Stats animation
  useEffect(() => {
    if (!sectionRef.current || !statRefs.current.length) return;

    stats.forEach((stat, index) => {
      const ref = statRefs.current[index];
      const label = labelRefs.current[index];
      const line = lineRefs.current[index];

      if (!ref) return;

      const obj = { val: 0 };
      gsap.to(obj, {
        val: stat.value,
        duration: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        onUpdate: () => {
          if (ref) ref.innerText = Math.floor(obj.val);
        },
      });

      if (label)
        gsap.from(label, {
          opacity: 0,
          y: 20,
          delay: 0.2,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        });

      if (line)
        gsap.from(line, {
          scaleX: 0,
          transformOrigin: "left center",
          delay: 0.3,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
          },
        });
    });
  }, [project, stats]);

  return (
    <>
      <Navbar />
      <div className="bg-white font-montserrat min-h-screen text-black">
        {/* Title */}
        <section className="w-[75vw] mx-auto pt-24 pb-10 text-left">
          <h1
            className="text-[clamp(2.5rem,5vw,4rem)] font-regular tracking-tight leading-snug text-neutral-800 mb-[5vh]"
            ref={wordRef}
          >
            {project.title}
          </h1>
        </section>

        {/* Image */}
        <div className="flex justify-center">
          <img
            ref={imageRef}
            src={project.image}
            alt={project.title}
            className="object-cover w-[68vw] sm:h-[50vh] md:h-[60vh] max-[1000px]:h-[20vh] mb-5"
          />
        </div>

        {/* Description */}
        <section className="px-[12.5vw] py-20">
          <p className="text-[1.1rem] text-gray-700 leading-relaxed max-w-2xl w-[70vw] dm-sans-body">
            {project.description}
          </p>
        </section>

        {/* Stats Section */}
        <section
          className="w-[100vw] px-[12.5vw] bg-white text-black py-16"
          ref={sectionRef}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row gap-10 items-start relative mb-20"
            >
              <div
                ref={(el) => (statRefs.current[idx] = el)}
                className="stat-number text-[4.5rem] font-regular leading-[1.1]"
              >
                0
              </div>

              <div
                ref={(el) => (labelRefs.current[idx] = el)}
                className="text-lg font-light mt-2 label-text text-gray-700"
              >
                {stat.label}
              </div>

              <div className="text-lg text-gray-400 mt-1 max-w-md dm-sans-body">
                {stat.description}
              </div>

              {idx < stats.length - 1 && (
                <div
                  ref={(el) => (lineRefs.current[idx] = el)}
                  className="divider-line h-px bg-gray-300 w-full absolute -bottom-12 left-0"
                ></div>
              )}
            </div>
          ))}
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="px-[12vw] py-24 bg-[#fcfcfc]">
            <h2 className="text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight font-medium mb-16 text-neutral-900 text-center">
              Related Projects
            </h2>

            <div className="grid sm:grid-cols-2 gap-y-24 gap-x-12">
              {relatedProjects.map((proj, idx) => (
                <Link
                  key={idx}
                  to={`/projects/${proj.slug}`}
                  className="group relative block cursor-pointer hover:-translate-y-2 transition-transform duration-500 ease-out"
                >
                  <div className="relative w-full aspect-[3/2] overflow-hidden rounded-[1.25rem] border border-neutral-300">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="mt-6 flex flex-col gap-2">
                    <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
                      {proj.title}
                    </h3>
                  </div>
                  <div className="absolute -top-5 -left-5 w-5 h-5 bg-black group-hover:bg-neutral-800 transition-all duration-300 rounded-full" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;
