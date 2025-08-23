import React, { useLayoutEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { servicePillars } from "../data/services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const pillar = servicePillars.find((p) => p.slug === slug);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!pillar || !sectionRef.current) return;

    pillar.services.forEach((service) => {
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

      images.forEach((img) => {
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
  }, [pillar]);

  if (!pillar)
    return <div className="text-center text-xl py-20">Pillar not found.</div>;

  // Other pillars excluding current
  const otherPillars = servicePillars.filter((p) => p.slug !== slug);

  return (
    <div ref={sectionRef} className="bg-white text-black dm-sans-body min-h-screen relative">
      <div className="px-[12.5vw] py-20">
        {/* Main Pillar Title and Description */}
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

      {/* Services */}
      {pillar.services.map((service, index) => (
        <div key={service.id} className="relative py-20">
          <div className="px-[12.5vw]">
            <div
              className={`grid md:grid-cols-2 gap-16 md:gap-24 items-start ${
                index % 2 !== 0 ? "md:grid-cols-2 md:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 !== 0 ? "md:col-start-2" : ""}>
                <h2 className={`gsap-text-${service.id} text-[2.5rem] font-bold text-gray-900 mb-6`}>
                  {service.title}
                </h2>
                <p className={`gsap-text-${service.id} text-lg text-gray-700 leading-relaxed dm-sans-body`}>
                  {service.description}
                </p>
              </div>

              <div className={`gsap-img-${service.id} w-full`}>
                <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* What We Offer */}
            {service.whatWeOffer?.length > 0 && (
              <div className="mt-16 mb-16">
                <h3 className={`gsap-text-${service.id} text-4xl font-semibold text-black mb-6 dm-sans-heading`}>
                  What We Offer
                </h3>
                <ul className={`gsap-text-${service.id} list-disc list-inside space-y-2 text-lg text-gray-700 leading-relaxed dm-sans-body`}>
                  {service.whatWeOffer.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Content */}
            {service.content && (
              <div className={`gsap-text-${service.id} text-md text-gray-800 max-w-4xl leading-[1.8] whitespace-pre-line dm-sans-body mb-16`}>
                {service.content}
              </div>
            )}

            {/* Process */}
            {service.process?.length > 0 && (
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
                      <div className="text-lg font-light mt-2 text-gray-900">
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

      {/* Other Services Section */}
{otherPillars.length > 0 && (
  <section className="py-32 bg-gray-50 relative">
    <div className="px-[12.5vw]">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
        Other Services You’ll Love
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        {otherPillars.map((p) => {
          const firstServiceImage = p.services[0]?.image || "/images/default-service.jpg";
          return (
            <div
              key={p.slug}
              onClick={() => navigate(`/services/${p.slug}`)}
              className="relative group cursor-pointer overflow-hidden "
            >
              {/* Image Card */}
              <div className="w-full h-80 overflow-hidden rounded-[2rem]">
                <img
                  src={firstServiceImage}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Outside the Card */}
              <h3 className="mt-4 text-2xl md:text-2xl font-bold text-gray-900  transition-transform duration-500 group-hover:text-[#0047FF]">
                {p.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  </section>
)}

    </div>
  );
};

export default ServiceDetails;
