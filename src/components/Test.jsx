import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const quoteRef = useRef(null);

  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
      [quoteRef.current],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
      "-=0.3"
    );
  }, [active]);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActive((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

  return (
    <section className="bg-[#0027cc] text-white py-20 w-full dm-sans-heading">
      <div className="mx-[12.5vw] w-[75vw] relative">
        {/* Heading */}
        <div className="mb-8">
          <div className="inline-block px-4 py-1 border border-white text-white rounded-full text-sm font-semibold mb-4">
            Testimonials
          </div>
          <h2 ref={headingRef} className="text-white text-4xl md:text-5xl font-semibold">
            What our clients say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="p-8 h-[380px] rounded-xl bg-[#001f99] bg-opacity-90 shadow-lg flex flex-col justify-start overflow-hidden relative">
            {/* Quote */}
            <div key={active} ref={contentRef} className="pr-16 mb-24">
              <p ref={quoteRef} className="text-[17px] md:text-[18px] leading-relaxed relative z-10 text-white">
                <span className="text-4xl font-bold mr-2">“</span>
                {testimonials[active].text}
                <span className="text-4xl font-bold ml-1">’’</span>
              </p>
            </div>

            {/* Fixed person details at bottom left */}
            <div className="absolute bottom-6 left-6 flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0027cc] font-bold">
                {testimonials[active].name[0]}
              </div>
              <div>
                <p className="font-bold text-white">{testimonials[active].name}</p>
                <p className="text-sm text-white/70">{testimonials[active].title}</p>
              </div>
            </div>

            {/* Navigation Dots at bottom center */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === active ? "bg-white" : "bg-white/50"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;
