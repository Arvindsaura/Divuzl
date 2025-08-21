import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Test= () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const quoteRef = useRef(null);

  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      text: "Working with Divuzl was transformative. I came with just an idea. Within weeks, I had a fully registered company, a strong brand, a polished online presence, and paying clients. Devang and the team didn’t just consult—they executed. Zenith Productions is now a name ready to grow.",
      name: "Shivansh Saxena",
      title: "Founder & Director, Zenith Productions",
    },
    {
      text: "Zenith Productions was a project close to my heart. Shivansh came with vision, clarity, and ambition—but needed a structured launch partner. We treated this as more than a service—it was a startup we wanted to succeed like our own. Case Study: How Divuzl Built Zenith Productions from Zero to Market 3 At Divuzl, we believe in execution over advice. Seeing Zenith go from concept to client-ready in months proved that with the right structure, any idea can become a market player.",
      name: "Devang Vikram Singh",
      title: "Managing Director & CEO , Divuzl ",
    },
  ];

  // GSAP animation to smoothly transition testimonial content
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

  // Autoplay function to automatically cycle through testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      // Only auto-advance if the user is not hovering over the component
      if (!isHovered) {
        setActive((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);

    // Clean up the interval when the component unmounts or dependencies change
    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

  return (
    <section className="bg-[#0027cc] text-white py-20 w-full dm-sans-heading">
      <div className="mx-auto  relative max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="mb-8 text-center md:text-left">
          <div className="inline-block px-4 py-1 border border-white text-white rounded-full text-sm mb-4">
            Testimonials
          </div>
          <h2
            ref={headingRef}
            className="text-white text-5xl md:text-6xl font-semibold"
          >
            What our clients say
          </h2>
        </div>

        {/* Testimonial Card Section */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="p-8 h-[400px] md:h-[350px] rounded-xl bg-[#001f99] bg-opacity-90 shadow-lg flex flex-col justify-between overflow-hidden relative">
            {/* The testimonial quote text */}
            <div key={active} ref={contentRef} className="flex-1">
              <p
                ref={quoteRef}
                // Ensure text is regular (not bold) and has correct quote formatting
                className="text-lg md:text-xl leading-relaxed relative z-10 text-white font-normal"
              >
                <span className="text-4xl mr-2 dm-sans-body">"</span>
                {testimonials[active].text}
                <span className="text-4xl ml-1">"</span>
              </p>
            </div>

            {/* Person details and navigation dots at the bottom */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-0">
              {/* Person's initial and name/title */}
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0027cc] dm-sans-body text-xl">
                  {testimonials[active].name[0]}
                </div>
                <div>
                  <p className="font-normal text-white dm-sans-body">
                    {testimonials[active].name}
                  </p>
                  <p className="text-sm text-white/70 dm-sans-body">
                    {testimonials[active].title}
                  </p>
                </div>
              </div>

              {/* Navigation dots to cycle through testimonials */}
              <div className="flex gap-3">
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
      </div>
    </section>
  );
};

export default Test;
