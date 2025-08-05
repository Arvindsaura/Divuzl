import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import services from "../data/services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureCarousel from "../components/FeatureCarousel";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const cursorRef = useRef(null);

  // TEXT ANIMATION
  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".animate-text span");

    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reset",
          },
        }
      );
    });
  }, []);

  // PARALLAX ENTRY ON CARD GRID
  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".service-card");

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  // CUSTOM CURSOR
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    cursor.innerText = "*";
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      cursor.remove();
    };
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-white text-black font-[Montserrat]">
      {/* === HEADER === */}
      <div className="px-[12.5vw] pt-24 pb-10 ">
        <h1 className="text-4xl md:text-6xl font-bold animate-text leading-tight tracking-tight mt-10">
          <div>
            We offer <span className="bg-[#0047FF] text-white px-3 py-1 rounded-lg">practical</span>
          </div>
          <div>
            <span className="bg-[#0047FF] text-white px-3 py-1 rounded-lg">reliable</span> services built around you.
          </div>
        </h1>
        <p className="text-lg md:text-xl mt-10 animate-text max-w-xl">
          We listen carefully, work honestly, and focus on getting things done right.
        </p>
      </div>
      <FeatureCarousel services={services} navigate={navigate} />


      {/* === SERVICES GRID === */}
      <div className="px-[12.5vw] pb-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`group relative service-card cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
              index % 2 === 0 ? "translate-y-0" : "sm:-translate-y-6"
            }`}
          >
            <h3 className="text-xl mb-4 font-semibold animate-text tracking-tight">{service.title}</h3>

            <div
              onClick={() => navigate(`/services/${service.slug}`)}
              className="relative h-[280px] rounded-2xl overflow-hidden shadow-md"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 scale-100 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-[#0047FF]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-white text-center text-lg">
                {service.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* === CUSTOM CURSOR === */}
      <style>{`
        #custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          transform: translate(-50%, -50%);
          font-size: 60px;
          font-weight: bold;
          color: #0047FF;
          pointer-events: none;
          z-index: 9999;
          font-family: monospace;
        }
      `}</style>
    </div>
  );
};

export default Services;
