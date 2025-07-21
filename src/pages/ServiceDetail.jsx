import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import services from "../data/services";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".gsap-fade");
    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  if (!service) return <div className="text-center text-white py-20">Service not found</div>;

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white p-6 md:p-12"
    >
      {/* Hero Section */}
      <div className="text-center py-12 md:py-20 gsap-fade">
        <h1 className="text-5xl md:text-6xl font-black text-blue-400 mb-4">
          {service.title}
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
          {service.description}
        </p>
      </div>

      {/* Toggle Switch Illustration */}
      <div className="flex justify-center items-center mb-16 gsap-fade">
        <div className="w-24 h-14 bg-blue-600 rounded-full relative shadow-inner">
          <div className="w-12 h-12 bg-yellow-300 rounded-full absolute top-1 left-1 flex items-center justify-center shadow-lg">
            <span className="text-black font-bold">⚡</span>
          </div>
        </div>
      </div>

      {/* Service Explanation */}
      <div className="max-w-3xl mx-auto text-center text-gray-300 mb-20 gsap-fade">
        <h2 className="text-3xl font-semibold mb-4">Why this service?</h2>
        <p className="text-lg leading-relaxed">
          Our {service.title} service is designed to break the clutter. We don’t believe in overwhelming you — just what’s essential. It’s not about more. It’s about meaning.
        </p>
      </div>

      {/* Other Services Section */}
      <div className="mt-16 border-t border-gray-700 pt-10">
        <h3 className="text-2xl font-bold text-center text-blue-300 mb-8 gsap-fade">
          Explore Other Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 gsap-fade">
          {services
            .filter((s) => s.slug !== slug)
            .map((other) => (
              <div
                key={other.id}
                onClick={() => navigate(`/services/${other.slug}`)}
                className="bg-gray-900 hover:bg-gray-800 p-6 rounded-2xl shadow-md transition cursor-pointer"
              >
                <h4 className="text-xl font-bold text-blue-400 mb-2">
                  {other.title}
                </h4>
                <p className="text-sm text-gray-400">{other.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;