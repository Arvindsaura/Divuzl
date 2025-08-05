import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: '01',
    title: 'Business Incorporation & Legal',
    description:
      'Start your business strong with everything from company registration, PAN, TAN, GST setup, trademark filings, to legal documentation for founders.',
  },
  {
    id: '02',
    title: 'Branding & Identity Design',
    description:
      'Build a memorable brand identity with logo systems, visual styles, brand story development, color psychology, packaging mockups, and full brand kits.',
  },
  {
    id: '03',
    title: 'Website Design & Development',
    description:
      'We craft visually stunning, technically robust websites tailored for performance, storytelling, and lead conversion — whether portfolio, e-commerce, SaaS, or blogs.',
  },
  {
    id: '04',
    title: 'Pitch Decks & Fundraising Collateral',
    description:
      'Investor-ready collateral crafted to raise capital — pitch decks, TAM analysis, traction storytelling, business models, risk analysis, financial projections, and pitch coaching.',
  },
  {
    id: '05',
    title: 'Social Media Management & Growth',
    description:
      'We help you dominate your niche online — with content that engages, formats that work on each platform, and consistent posting strategies powered by analytics.',
  },
  {
    id: '06',
    title: 'Product UI/UX Strategy & Design',
    description:
      'Create intuitive, modern, and scalable digital product experiences — with research-backed UX, high-conversion interfaces, and pixel-perfect design systems.',
  },
  {
    id: '07',
    title: 'Business Incorporation & Legal',
    description:
      'Start your business strong with everything from company registration, PAN, TAN, GST setup, trademark filings, to legal documentation for founders.',
  },
  {
    id: '08',
    title: 'Branding & Identity Design',
    description:
      'Build a memorable brand identity with logo systems, visual styles, brand story development, color psychology, packaging mockups, and full brand kits.',
  },
  {
    id: '09',
    title: 'Website Design & Development',
    description:
      'We craft visually stunning, technically robust websites tailored for performance, storytelling, and lead conversion — whether portfolio, e-commerce, SaaS, or blogs.',
  },
  {
    id: '10',
    title: 'Pitch Decks & Fundraising Collateral',
    description:
      'Investor-ready collateral crafted to raise capital — pitch decks, TAM analysis, traction storytelling, business models, risk analysis, financial projections, and pitch coaching.',
  },
  {
    id: '11',
    title: 'Social Media Management & Growth',
    description:
      'We help you dominate your niche online — with content that engages, formats that work on each platform, and consistent posting strategies powered by analytics.',
  },
  {
    id: '12',
    title: 'Product UI/UX Strategy & Design',
    description:
      'Create intuitive, modern, and scalable digital product experiences — with research-backed UX, high-conversion interfaces, and pixel-perfect design systems.',
  },
];

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const cursorRef = useRef(null);
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      const bounds = section.getBoundingClientRect();
      const inside =
        e.clientX >= bounds.left &&
        e.clientX <= bounds.right &&
        e.clientY >= bounds.top &&
        e.clientY <= bounds.bottom;

      if (inside) {
        cursor.style.display = 'block';
        gsap.to(cursor, {
          x: e.pageX,
          y: e.pageY,
          duration: 0.2,
          ease: 'power3.out',
        });
      } else {
        cursor.style.display = 'none';
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.fade-up').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none reset',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white py-20 overflow-hidden font-[Montserrat]"
    >
      {/* Floating Cursor */}
      <div
        ref={cursorRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          fontSize: '48px',
          fontWeight: '700',
          color: '#0047FF',
          fontFamily: 'monospace',
          zIndex: 9999,
          display: 'none',
        }}
      >
        *
      </div>

      {/* Content Wrapper */}
      <div className="mx-auto max-w-[75vw]">
        {/* Heading */}
        <div className="text-left mb-20 fade-up">
          <div className="text-[#0047FF] text-8xl md:text-9xl font-medium leading-none">*</div>
          <p className="text-xs border border-[#0047FF] text-[#0047FF] px-4 py-1 rounded-full w-fit font-semibold hover:bg-[#0047FF] hover:text-white transition mt-4">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-6">What do we <br/>do at Divuzl?</h2>
          <h3 className="mt-2 text-[#0047FF] w-[20vw] text-regular">
           We don’t just run campaigns — we build strategies that convert, scale, and make your brand unmissable.
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-20">
  {services.slice(0, 6).map((service, idx) => (
    <div
      key={idx}
      className="fade-up bg-white text-black border border-blue-500 p-4 md:p-8 h-[280px] md:h-[320px] rounded-2xl transition-all duration-300 hover:bg-black hover:text-white group flex flex-col justify-between"
    >
      <div>
        <p className="text-3xl text-blue-500 font-mono mb-10">{service.id}</p>
        <h3 className="text-2xl font-bold text-black group-hover:text-blue-400 mb-2 w-[20vw]">
          {service.title}
        </h3>
        <p className="text-sm text-gray-700 group-hover:text-gray-300">
          {service.description}
        </p>
      </div>
      <div className="h-2" /> {/* Spacer for bottom gap */}
    </div>
  ))}
</div>


        {/* Read More Section */}
        {showAll && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            {services.slice(6).map((service, idx) => (
               <div
      key={idx}
      className="fade-up bg-white text-black border border-blue-500 p-4 md:p-8 h-[280px] md:h-[320px] rounded-2xl transition-all duration-300 hover:bg-black hover:text-white group flex flex-col justify-between"
    >
      <div>
        <p className="text-3xl text-blue-500 font-mono mb-10">{service.id}</p>
        <h3 className="text-2xl font-bold text-black group-hover:text-blue-400 mb-2 w-[20vw]">
          {service.title}
        </h3>
        <p className="text-sm text-gray-700 group-hover:text-gray-300">
          {service.description}
        </p>
      </div>
      <div className="h-2" /> {/* Spacer for bottom gap */}
    </div>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="mt-16 flex justify-center gap-6 fade-up">
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="text-sm font-semibold border border-blue-500 text-[#0047FF] px-6 py-2 rounded-full hover:bg-[#0047FF] hover:text-white transition"
            >
              Read More
            </button>
          )}

          <button
            onClick={() => navigate('/services')}
            className="text-sm font-semibold border border-blue-500 text-[#0047FF] px-6 py-2 rounded-full hover:bg-[#0047FF] hover:text-white transition"
          >
            See All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
