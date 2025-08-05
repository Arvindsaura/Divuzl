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
    )
      .fromTo(
        [quoteRef.current, nameRef.current, titleRef.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
        "-=0.3"
      );
  }, [active]);

  const handleNext = () => {
    console.log("➡️ Next clicked");
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    console.log("⬅️ Prev clicked");
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[#0027cc] text-white py-20 w-full">
      <div className="mx-[15vw] w-[70vw]">
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
<div className="p-8 h-[340px] rounded-xl bg-[#001f99] bg-opacity-90 shadow-lg relative flex flex-col justify-between transition-all duration-500 ease-in-out">
  <div key={active} ref={contentRef}>
    <p
      ref={quoteRef}
      className="text-[17px] md:text-[18px] leading-relaxed relative z-10 text-white"
    >
      <span className="text-4xl font-bold mr-2">“</span>
      {testimonials[active].text}
         <span className="text-4xl font-bold mr-2">’’</span>
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

      <div className="ml-auto text-white/70 flex gap-4">
        <button
          onClick={handlePrev}
          className="text-2xl font-bold hover:text-white transition-all duration-200"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="text-2xl font-bold hover:text-white transition-all duration-200"
        >
          →
        </button>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Test;
