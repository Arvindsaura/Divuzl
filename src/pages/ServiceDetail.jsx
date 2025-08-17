import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import services from "../data/services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ServiceDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);

  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const texts = el.querySelectorAll(".gsap-text");
    const images = el.querySelectorAll(".gsap-img");

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

    if (horizontalRef.current) {
      gsap.to(horizontalRef.current, {
        x: () => -(horizontalRef.current.scrollWidth - window.innerWidth * 0.7),
        ease: "power2.out",
        scrollTrigger: {
          trigger: horizontalRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }, []);

  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    cursor.innerText = "*";
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      gsap.to(cursor, {
        duration: 0.2,
        left: e.clientX,
        top: e.clientY,
        ease: "power3.out",
      });
    };

    document.addEventListener("mousemove", moveCursor);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  if (!service) {
    return <div className="text-center text-xl py-20">Service not found.</div>;
  }

  const filtered = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div
      ref={sectionRef}
      className="bg-white text-black font-[Montserrat] min-h-screen px-[12.5vw] py-20 relative"
    >
      {/* Title */}
      <div className="gsap-text text-[2.5rem] font-bold text-[#0047FF] mb-6">
        {service.title}
      </div>

      {/* Description */}
      <p className="gsap-text text-lg mb-12 text-gray-700 max-w-3xl leading-relaxed dm-sans-body">
        {service.description}
      </p>

      {/* Image */}
      <div className="gsap-img w-full h-[400px] rounded-xl overflow-hidden shadow-xl mb-12">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Detailed Content */}
      {service.content && (
        <div className="gsap-text text-md text-gray-800 max-w-4xl leading-[1.8] whitespace-pre-line mb-16">
          {service.content}
        </div>
      )}
{/* Our Process Section (Conditional) */}
{service.process && service.process.length > 0 && (
  <section
    className="w-[75vw]  bg-white text-black py-16"
    ref={sectionRef}
  >
    <h2 className="gsap-text text-3xl font-semibold text-[#0047FF] mb-16">
      Our Process
    </h2>

    {service.process.map((step, idx) => (
      <div
        key={idx}
        className="flex flex-col md:flex-row gap-10 items-start relative mb-20"
      >
        {/* Step number (like stats number) */}
        <div
          className="text-[4.5rem] font-regular leading-[1.1] text-[#0047FF]"
        >
          {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
        </div>

        {/* Step content */}
        <div className="flex flex-col">
          <div className="text-lg font-light mt-2 text-gray-700">
            {step.title || `Step ${idx + 1}`}
          </div>
          <div className="text-lg text-gray-400 mt-1 max-w-md dm-sans-body">
            {step.description || step}
          </div>
        </div>

        {/* Divider line like in stats */}
        {idx < service.process.length - 1 && (
          <div className="divider-line h-px bg-gray-300 w-full absolute -bottom-12 left-0"></div>
        )}
      </div>
    ))}
  </section>
)}


      {/* ==== More Services Section ==== */}
      <div className="relative w-[75vw] mx-auto mt-40">
        <h2 className="text-[2.8rem] font-bold text-[#0047FF] mb-24 tracking-tight leading-none">
          More Services
        </h2>

        <div className="relative flex flex-col md:flex-row items-start gap-12">
          {/* Featured Big Card */}
          <div
            onClick={() => navigate(`/services/${filtered[0].slug}`)}
            className="relative w-full md:w-[60%] h-[500px] cursor-pointer group overflow-hidden rounded-[3rem] bg-[#eaeef7] shadow-[0_0_40px_-10px_#0047ff60]"
          >
            <img
              src={filtered[0].image}
              alt={filtered[0].title}
              className="absolute inset-0 w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-3xl font-semibold mb-2">
                {filtered[0].title}
              </h3>
            </div>
          </div>

          {/* Two Mini Cards */}
          <div className="w-full md:w-[40%] flex flex-col gap-12">
            {[filtered[1], filtered[2]].map((s) => (
              <div
                key={s.slug}
                onClick={() => navigate(`/services/${s.slug}`)}
                className="relative h-[230px] cursor-pointer group overflow-hidden rounded-[2rem] bg-[#f2f4fb] shadow-[0_0_30px_-12px_#0047ff30]"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-5 left-6">
                  <h4 className="text-white text-xl font-medium mb-1">
                    {s.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Cursor & Scrollbar Styles */}
      <style>{`
        #custom-cursor {
          position: fixed;
          pointer-events: none;
          font-size: 4rem;
          color: #0047FF;
          font-weight: bold;
          z-index: 9999;
          transform: translate(-50%, -50%);
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ServiceDetails;
