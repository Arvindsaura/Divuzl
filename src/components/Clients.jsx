import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const logoRefs = useRef([]);

  useEffect(() => {
    const smoother = ScrollSmoother.create({ smooth: 1.2, effects: true });

    // Label pill animation
    if (labelRef.current) {
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, y: 20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: labelRef.current,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

    // Heading animation (word-by-word)
    if (headingRef.current) {
      const text = headingRef.current.querySelector("h2");
      const words = text.innerText
        .split(" ")
        .map((word) => `<span class='word inline-block mr-2'>${word}</span>`)
        .join(" ");
      text.innerHTML = words;

      gsap.fromTo(
        headingRef.current.querySelectorAll(".word"),
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

    // Subheading animation
    if (subheadingRef.current) {
      gsap.fromTo(
        subheadingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subheadingRef.current,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

    // Logo cards animation
    logoRefs.current.forEach((logo, i) => {
      gsap.set(logo, { opacity: 0, y: 40, scale: 0.95 });
      gsap.fromTo(
        logo,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: logo,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Hover tilt + scale
      logo.addEventListener("mousemove", (e) => {
        const rect = logo.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 4;
        const rotateY = ((x - centerX) / centerX) * 4;
        gsap.to(logo, { rotateX, rotateY, scale: 1.05, duration: 0.3 });
      });
      logo.addEventListener("mouseleave", () => {
        gsap.to(logo, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.5 });
      });
    });

    return () => smoother.kill();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-white font-[Montserrat] px-[12.5vw]"
    >
      {/* Label */}
      <div ref={labelRef} className="absolute top-10 left-[12.5vw] z-20">
        <div className="inline-block px-4 py-1 border border-[#0047FF] text-[#0047FF] rounded-full text-sm font-semibold animate-pulse bg-white/80 backdrop-blur-md">
          Clients
        </div>
      </div>

      {/* Heading */}
      <div ref={headingRef} className="relative z-10 text-left mb-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Our Clients</h2>
      </div>

      {/* Subheading */}
      <p ref={subheadingRef} className="text-lg text-gray-600 mb-16">
        Trusted by brands, agencies, and startups worldwide.
      </p>

      {/* Logo Grid */}
      <div className="relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {clients.map((client, i) => (
            <div
              key={i}
              ref={(el) => (logoRefs.current[i] = el)}
              className="bg-white/40 backdrop-blur-lg border border-gray-200 rounded-2xl w-85 h-24 flex items-center justify-center transition-all hover:shadow-xl duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 object-contain max-w-[40%]"
                onError={(e) => { e.target.onerror = null; e.target.src = "/fallback.png"; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
