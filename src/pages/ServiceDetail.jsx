import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { servicePillars } from "../data/services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ServiceDetails = () => {
  const { slug } = useParams();
  const pillar = servicePillars.find((p) => p.slug === slug);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !pillar) return;

    // We loop through each service to apply animations
    pillar.services.forEach((service, index) => {
      const el = sectionRef.current;
      const texts = el.querySelectorAll(`.gsap-text-${service.id}`);
      const images = el.querySelectorAll(`.gsap-img-${service.id}`);
      const processes = el.querySelectorAll(`.gsap-process-${service.id}`);
      
      texts.forEach((text, i) => {
        gsap.fromTo(
          text,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: text,
              start: "top 85%",
              toggleActions: "play none none reset",
            },
          }
        );
      });

      images.forEach((img, i) => {
        gsap.fromTo(
          img,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 90%",
              toggleActions: "play none none reset",
            },
          }
        );
      });

      if (processes.length > 0) {
        gsap.fromTo(
          processes,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: processes[0],
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, [slug, pillar]);

  if (!pillar) {
    return <div className="text-center text-xl py-20">Pillar not found.</div>;
  }

  return (
    <div ref={sectionRef} className="bg-white text-black dm-sans-body min-h-screen relative">
      <div className="px-[12.5vw] py-20">
        {/* === Main Pillar Title and Description === */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mt-10">
          <div>
            Services for{" "}
            <span className="bg-[#0047FF] text-white px-3 py-1 rounded-lg">
              {pillar.name}
            </span>
          </div>
        </h1>
        <p className="text-lg md:text-xl mt-10 max-w-xl dm-sans-body">
          {pillar.description}
        </p>
      </div>

      {/* Loop through each service to create the detailed view */}
      {pillar.services.map((service, index) => (
        <div key={service.id} className="relative py-20">
          <div className="px-[12.5vw]">
            {/* Main Image and Description Row */}
            <div className={`grid md:grid-cols-2 gap-16 md:gap-24 items-start ${index % 2 !== 0 ? "md:grid-cols-2 md:grid-flow-col-dense" : ""}`}>
              {/* Text Content Section */}
              <div className={index % 2 !== 0 ? "md:col-start-2" : ""}>
                <h2 className={`gsap-text-${service.id} text-[2.5rem] font-bold text-gray-900 mb-6`}>
                  {service.title}
                </h2>
                <p className={`gsap-text-${service.id} text-lg text-gray-700 leading-relaxed dm-sans-body`}>
                  {service.description}
                </p>
              </div>

              {/* Image Section */}
              <div className={`gsap-img-${service.id} w-full`}>
                <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* What We Offer Section (positioned below the main row) */}
            {service.whatWeOffer && service.whatWeOffer.length > 0 && (
              <div className="mt-16 mb-16">
                <h3 className={`gsap-text-${service.id} text-4xl font-semibold text-black mb-6 dm-sans-heading`}>What We Offer</h3>
                <ul className={`gsap-text-${service.id} list-disc list-inside space-y-2 text-lg text-gray-700 leading-relaxed dm-sans-bod`}>
                  {service.whatWeOffer.map((item, i) => (
                    <li key={i}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {service.content && (
              <div className={`gsap-text-${service.id} text-md text-gray-800 max-w-4xl leading-[1.8] whitespace-pre-line dm-sans-body mb-16`}>
                {service.content}
              </div>
            )}
            
            {/* Our Process Section (Conditional) */}
            {service.process && service.process.length > 0 && (
              <section className="bg-white text-black py-16">
                <h3 className={`gsap-text-${service.id} text-4xl font-semibold text-black mb-6 dm-sans-heading`}>
                  Our Process
                </h3>
                {service.process.map((step, idx) => (
                  <div key={idx} className={`gsap-process-${service.id} flex md:flex-row gap-10 items-start relative mb-10`}>
                    <div className="text-[4.5rem] font-regular leading-[1.1] text-[#0047FF]">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </div>
                    <div className="flex flex-col">
                      <div className="text-lg font-light mt-2 text-gray-00">
                        {step.title || `Step ${idx + 1}`}
                      </div>
                      <div className="text-lg text-gray-500 mt-1 max-w-md dm-sans-body">
                        {step.description || step}
                    </div>
                    </div>
                    {idx < service.process.length - 1 && (
                      <div className="divider-line h-px bg-gray-300 w-full absolute -bottom-5 left-0"></div>
                    )}
                  </div>
                ))}
              </section>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceDetails;