import React, { useEffect, useRef } from 'react';

const WhatWeDo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = () => {
      const script2 = document.createElement('script');
      script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      script2.onload = () => {
        window.gsap.registerPlugin(window.ScrollTrigger);
        const elements = containerRef.current.querySelectorAll('.animate-text');
        elements.forEach((el) => {
          window.gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                toggleActions: 'play none none reset',
              },
            }
          );
        });
      };
      document.head.appendChild(script2);
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const services = [
    {
      id: "01",
      title: "Business Incorporation & Legal",
      description: "Helping businesses start with legal clarity and compliance from day one.",
    },
    {
      id: "02",
      title: "Web Development",
      description: "Designing ultra-fast, modern websites that impress and convert.",
    },
    {
      id: "03",
      title: "Branding & Identity Design",
      description: "We craft distinct brand identities that leave a lasting mark.",
    },
    {
      id: "04",
      title: "Digital Marketing",
      description: "Grow your audience and drive leads with data-driven digital strategies.",
    },
    {
      id: "05",
      title: "Domain & Hosting",
      description: "Reliable and secure hosting with smooth domain management.",
    },
    {
      id: "06",
      title: "Social Media Management",
      description: "From content to growth, we handle all your social needs.",
    },
  ];

  const leftServices = services.filter((_, i) => i % 2 === 0);
  const rightServices = services.filter((_, i) => i % 2 === 1);

  return (
    <section ref={containerRef} className="bg-black text-white py-20 px-6 md:px-12 relative">
      

    
      <div className="max-w-5xl mx-auto text-left animate-text mb-20">
       <div className="text-blue-500 text-9xl font-medium leading-none">*</div>
        <p className="text-xs inline-block border border-[#0047FF] text-[#0047FF] px-4 py-1 rounded-full font-semibold hover:bg-[#0047FF] hover:text-white transition">
          Services
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold mt-6 text-white">
          What do we do at Divuzl
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold mt-2 text-[#0047FF]">
          We make brands unforgettable.
        </h3>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12">
        {/* Left Column */}
        <div className="flex flex-col gap-5 animate-text">
          {leftServices.map((service, i) => (
            <div
              key={i}
              className="bg-[#111] border border-blue-500 p-8 h-60 rounded-2xl hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
            >
              <p className="text-sm text-blue-500 font-mono mb-2">{service.id}</p>
              <h3 className="text-2xl font-bold text-[#0047FF] mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Right Column (offset) */}
        <div className="flex flex-col gap-5 animate-text mt-24 md:mt-32">
          {rightServices.map((service, i) => (
            <div
              key={i}
              className="bg-white text-black border border-blue-500 p-8 h-60 rounded-2xl hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
            >
              <p className="text-sm text-blue-500 font-mono mb-2">{service.id}</p>
              <h3 className="text-2xl font-bold text-[#0047FF] mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
