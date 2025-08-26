import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { services, servicePillars } from "../data/services"; // Updated import
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureCarousel from "../components/FeatureCarousel";
import Footer from "../components/Footer";
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
          duration: 0.6,
          ease: "power3.out",
          delay: i * 0.05,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  // CUSTOM CURSOR
  

  return (
    <>
      <div ref={sectionRef} className="min-h-screen bg-white text-black dm-sans-heading">
        {/* === HEADER === */}
        <div className="px-[12.5vw] pt-24 pb-10">
          <h1 className="text-4xl md:text-6xl font-bold animate-text leading-tight tracking-tight mt-10">
            <div>
              We offer <span className="bg-[#0047FF] text-white px-3 py-1 rounded-lg">practical</span>
            </div>
            <div>
              <span className="bg-[#0047FF] text-white px-3 py-1 rounded-lg">reliable</span> services built around you.
            </div>
          </h1>
          <p className="text-lg md:text-xl mt-10 animate-text max-w-xl dm-sans-body">
            We listen carefully, work honestly, and focus on getting things done right.
          </p>
        </div>

        <FeatureCarousel services={services} navigate={navigate} />

        {/* === SERVICES BY PILLAR GRID === */}
        {servicePillars.map((pillar) => (
          <section key={pillar.slug} className="px-[12.5vw] pb-32">
            <div className="flex justify-between items-end mb-16 mt-20">
              <div className="max-w-xl">
                <h2
                  onClick={() => navigate(`/services/${pillar.slug}`)}
                  className="text-4xl md:text-5xl font-bold cursor-pointer hover:underline underline-offset-4 decoration-2 animate-text mb-4"
                >
                  {pillar.name}
                </h2>
                <p className="text-lg md:text-xl text-gray-700 animate-text dm-sans-body">{pillar.description}</p>
              </div>
              <button
                onClick={() => navigate(`/services/${pillar.slug}`)}
                className="bg-[#0047FF] text-white py-3 px-6 rounded-full font-medium transition-colors duration-300 hover:bg-black"
              >
                See in detail
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 items-start">
              {pillar.services.map((service, index) => (
                <div
                  key={service.id}
                  className={`group relative service-card cursor-pointer transition-all duration-300 hover:scale-[1.02] flex flex-col h-full ${
                    index % 2 === 0 ? "translate-y-0" : "sm:-translate-y-6"
                  }`}
                >
                  <h3 className="text-xl mb-4 font-semibold animate-text tracking-tight min-h-[3.5rem] flex items-center">
                    {service.title}
                  </h3>
                  <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-md mt-auto">
                    <div
                      className="absolute inset-0 transition-transform duration-700 scale-100 group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="absolute inset-0 bg-[#0047FF]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-white text-center text-lg dm-sans-body">
                      <p className="line-clamp-6">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

      </div>
    </>
  );
};

export default Services;