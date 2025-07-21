import React, { useEffect, useRef } from "react";
import services from "../data/services";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".animate-fade");

    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.1,
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

  return (
    <div ref={sectionRef} className="bg-black">
      {/* Hero Banner */}
      <div
        className="h-72 md:h-[80vh] bg-cover bg-center text-white flex items-center justify-center rounded-b-3xl shadow-xl"
        style={{ backgroundImage: `url('src/images/services-hero.jpg')` }}
      >
        <div className="text-center animate-fade">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">Our Services</h1>
          <div className="text-base mt-2 text-gray-200 font-medium">Home &gt; Services</div>
        </div>
      </div>

 {/* Intro Section */}
<div className="relative bg-black text-white py-20 px-6 flex justify-center items-center max-w-7xl mx-auto overflow-hidden h-[60vh]">
  {/* Blue M as background image in left bottom */}
  <div
    className="absolute left-10 bottom-0 w-80 md:w-100 h-64 md:h-96 bg-no-repeat bg-contain bg-left z-0"
    style={{ backgroundImage: `url('src/images/blue-m.png')` }}
  ></div>

  <div className="relative z-10 max-w-2xl ml-auto px-4 animate-fade space-y-6 text-lg text-gray-300">
    <p>
      We offer services that are{" "}
      <mark className="bg-white text-black px-1 rounded">practical</mark>,{" "}
      <mark className="bg-white text-black px-1 rounded">reliable</mark>,
      and built around your needs.
    </p>
    <p>
      We listen carefully, work honestly, and focus on getting things done
      right. There’s no overpromising – just clear{" "}
      <mark className="bg-white text-black px-1 rounded">work that speaks for itself</mark>.
      Our aim is to make your experience smooth, simple, and worthwhile.
    </p>
  </div>
</div>




      {/* Services Grid */}
      <div className="bg-white rounded-t-3xl p-6 sm:p-10 max-w-7xl mx-auto">
        <h2 className="text-center text-blue-600 font-medium animate-fade">Featured Services</h2>
        <h3 className="text-3xl md:text-5xl text-center font-extrabold mb-12 animate-fade">
          Solutions We Specialize In
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="cursor-pointer bg-black text-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:-translate-y-3 border border-gray-800 animate-fade"
              onClick={() => navigate(`/services/${service.id}`)}
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{service.description}</p>
              <div className="text-right">
                <span className="inline-block p-2 rounded-full bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
