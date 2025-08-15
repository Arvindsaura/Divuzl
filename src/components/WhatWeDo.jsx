import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const services = [
  { id: "01", title: "Business Incorporation & Legal", description: "Complete legal setup for your business from registration, PAN/TAN/GST, trademarks, and founder documentation." },
  { id: "02", title: "Branding & Identity Design", description: "Memorable logos, brand kits, color psychology, packaging, and visual identity that resonates." },
  { id: "03", title: "Website Design & Development", description: "Responsive, high-converting websites for portfolio, SaaS, e-commerce, and blogs." },
  { id: "04", title: "Pitch Decks & Fundraising", description: "Investor-ready pitch decks, TAM analysis, financial projections, and storytelling for funding success." },
  { id: "05", title: "Social Media Management", description: "Strategic social content, posting plans, analytics, and growth tactics to dominate your niche." },
  { id: "06", "title": "Product UI/UX Design", description: "User-centric product interfaces, design systems, and research-backed UX for maximum conversions." },
  { id: "07", "title": "Business Incorporation & Legal", description: "Complete legal setup for your business from registration, PAN/TAN/GST, trademarks, and founder documentation." },
  { id: "08", "title": "Branding & Identity Design", description: "Memorable logos, brand kits, color psychology, packaging, and visual identity that resonates." },
  { id: "09", "title": "Website Design & Development", description: "Responsive, high-converting websites for portfolio, SaaS, e-commerce, and blogs." },
  { id: "10", "title": "Pitch Decks & Fundraising", description: "Investor-ready pitch decks, TAM analysis, financial projections, and storytelling for funding success." },
  { id: "11", "title": "Social Media Management", description: "Strategic social content, posting plans, analytics, and growth tactics to dominate your niche." },
  { id: "12", "title": "Product UI/UX Design", description: "User-centric product interfaces, design systems, and research-backed UX for maximum conversions." },
];

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

 useEffect(() => {
  // Only run on desktop
  gsap.matchMedia().add("(min-width: 1000px)", () => {
    const smoother = ScrollSmoother.create({ smooth: 1.2, effects: true });

    const animateCards = () => {
      const cards = sectionRef.current.querySelectorAll(".service-card");
      gsap.set(cards, { opacity: 0, y: 40, scale: 0.98 });

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            delay: i * 0.05,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        // 3D tilt hover effect
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * 4;
          const rotateY = ((x - centerX) / centerX) * 4;
          gsap.to(card, { rotateX, rotateY, scale: 1.02, duration: 0.3 });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.5 });
        });
      });
    };

    animateCards();

    return () => smoother.kill();
  });
}, [showAll]);


  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-[12.5vw] bg-black text-white dm-sans-heading"
    >
      {/* Heading */}
      <div className="text-left mb-16 px-6 lg:px-0">
        <p className="text-xs border border-[#0047FF] px-4 py-1 rounded-full w-fit text-[#0047FF] mb-4 animate-text hover:bg-[#0047FF] hover:text-white transition">
          Services
        </p>
        <h2 className="text-5xl md:text-6xl mb-4 animate-text font-semibold dm-sans-heading">
          What We Do at Divuzl
        </h2>
        <p className="text-gray-400 md:text-xl animate-text w-full lg:w-[40%]">
          We craft strategies and products with clarity, simplicity, and precision.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 dm-sans-body px-6 lg:px-0">
        {(showAll ? services : services.slice(0, 6)).map((service, idx) => (
          <div
            key={idx}
            className="service-card relative border border-[#0047FF]/20 rounded-3xl p-8 cursor-pointer shadow-lg transition-all duration-500 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#0047FF]/5 rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-500"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <p className="text-3xl text-[#0047FF] mb-2">{service.id}</p>
              <h3 className="text-2xl mb-4 group-hover:text-[#0047FF] transition-all duration-300 font-normal dm-sans-heading">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm group-hover:text-white transition-all duration-300 font-normal dm-sans-body">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-16 flex justify-center gap-6">
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 rounded-full border border-[#0047FF] text-[#0047FF] hover:bg-[#0047FF] hover:text-white transition font-normal"
          >
            Read More
          </button>
        )}
        <button
          onClick={() => navigate("/services")}
          className="px-6 py-2 rounded-full border border-[#0047FF] text-[#0047FF] hover:bg-[#0047FF] hover:text-white transition font-normal"
        >
          See All Services
        </button>
      </div>
    </section>
  );
};

export default WhatWeDo;
