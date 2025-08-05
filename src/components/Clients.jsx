import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  { name: "Client 1", logo: "images/logo1.png" },
  { name: "Client 2", logo: "images/logo2.png" },
  { name: "Client 3", logo: "images/logo3.png" },
  { name: "Client 4", logo: "images/logo4.png" },
  { name: "Client 5", logo: "images/logo5.png" },
  { name: "Client 6", logo: "images/logo6.png" },
  { name: "Client 7", logo: "images/logo7.png" },
  { name: "Client 8", logo: "images/logo8.png" },
  { name: "Client 9", logo: "images/logo9.png" },
];

const Clients = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(".gsap-fade");
      gsap.fromTo(
        targets,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-white font-[Montserrat] px-[12.5vw]"
    >
      {/* Label */}
      <div className="absolute top-10 left-[12.5vw] z-20">
        <div className="inline-block px-4 py-1 border border-[#0047FF] text-[#0047FF] rounded-full text-sm font-semibold animate-pulse bg-white/80 backdrop-blur-md">
          Clients
        </div>
      </div>

      {/* Heading */}
      <div className="relative z-10 text-left mb-16 gsap-fade">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Our Clients
        </h2>
        <p className="text-lg text-gray-600 mt-3">
          Trusted by brands, agencies, and startups worldwide.
        </p>
      </div>

      {/* Logo Grid */}
      <div className="relative z-10 gsap-fade">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {clients.map((client, i) => (
            <LogoCard key={i} logo={client.logo} name={client.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

const LogoCard = ({ logo, name }) => (
  <div className="bg-white/40 backdrop-blur-lg border border-gray-200 rounded-2xl w-85 h-24 flex items-center justify-center transition-all hover:scale-105 hover:shadow-xl duration-300">
    <img
      src={logo}
      alt={name}
      className="h-10 object-contain max-w-[40%]"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "/fallback.png";
      }}
    />
  </div>
);

export default Clients;
