import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  const headingRef = useRef(null);
  const pillRef = useRef(null);
  const contentRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const quoteRef = useRef(null);

  const [active, setActive] = useState(0);

  const testimonials = [
    {
      text: "Working with Divuzl was transformative. I came with just an idea. Within weeks, I had a fully registered company, a strong brand, a polished online presence, and paying clients. Devang and the team didn’t just consult—they executed. Zenith Productions is now a name ready to grow",
      name: "Shivansh Saxena",
      title: "Founder & Director, Zenith Productions",
    },
    {
      text: "Zenith Productions was a project close to my heart. Shivansh came with vision, clarity, and ambition—but needed a structured launch partner. We treated this as more than a service—it was a startup we wanted to succeed like our own. Case Study: How Divuzl Built Zenith Productions from Zero to Market 3 At Divuzl, we believe in execution over advice. Seeing Zenith go from concept to client-ready in months proved that with the right structure, any idea can become a market player.",
      name: "Devang Vikram Singh",
      title: "Managing Director & CEO , Divuzl Digital Solutions Pvt. Ltd.",
    },
  ];

  // GSAP animation on active testimonial change
  useEffect(() => {
    if (!contentRef.current) return;

    const tl = gsap.timeline();
    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    ).fromTo(
      [quoteRef.current, nameRef.current, titleRef.current],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
      "-=0.3"
    );
  }, [active]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[#0027cc] text-white py-20 w-full">
      <div className="mx-[12.5vw] w-[75vw] relative">
        {/* Pill and Heading */}
        <div className="mb-8">
          <div
            ref={pillRef}
            className="inline-block px-4 py-1 border border-white text-white rounded-full text-sm font-semibold mb-4"
          >
            Testimonials
          </div>
          <h2
            ref={headingRef}
            className="text-white text-xl md:text-2xl font-semibold"
          >
            What our clients say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="p-8 h-[380px] rounded-xl bg-[#001f99] bg-opacity-90 shadow-lg flex flex-col justify-between overflow-hidden">
            <div key={active} ref={contentRef} className="pr-16">
              <p
                ref={quoteRef}
                className="text-[17px] md:text-[18px] leading-relaxed relative z-10 text-white"
              >
                <span className="text-4xl font-bold mr-2">“</span>
                {testimonials[active].text}
                <span className="text-4xl font-bold ml-1">’’</span>
              </p>

              <div className="flex items-center gap-4 mt-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0027cc] font-bold">
                  {testimonials[active].name[0]}
                </div>
                <div>
                  <p ref={nameRef} className="font-bold text-white">
                    {testimonials[active].name}
                  </p>
                  <p ref={titleRef} className="text-sm text-white/70">
                    {testimonials[active].title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Arrows (vertically centered) */}
          <div className="absolute top-3/4 right-4 -translate-y-1/2 flex flex-col gap-4 z-20">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/40 transition-all"
            >
              {/* Up Arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/40 transition-all"
            >
              {/* Down Arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;
