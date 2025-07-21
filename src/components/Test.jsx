import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      text: "This is the highest level of professionalism I have ever encountered in the years that I have been hiring people in this field. You have the distinct impression that you are a part of a productive team.",
      name: "Arvind Puri",
      title: "Web Developer",
    },
    {
      text: "Divuzl transformed our digital presence. Their team is proactive, highly skilled, and easy to work with.",
      name: "Sneha Verma",
      title: "Marketing Lead",
    },
    {
      text: "A powerhouse agency. From branding to execution, everything was seamless and high quality.",
      name: "Karan Mehta",
      title: "Startup Founder",
    },
  ];

  const animateChange = () => {
    const tl = gsap.timeline();
    tl.to(contentRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        // Change content after fade out
        setTimeout(() => {
          tl.to(contentRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        }, 50);
      },
    });
  };

  const handleNext = () => {
    animateChange();
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    animateChange();
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="bg-[#0033FF] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto bg-opacity-90 bg-cover bg-center p-8 rounded-lg relative min-h-[300px] flex flex-col justify-between">
        <div ref={headingRef} className="text-sm mb-3 text-white/80">
          Testimonials
        </div>

        {/* Animated Review Content */}
        <div ref={contentRef} className="transition-all duration-500 ease-in-out">
          <div className="text-2xl font-semibold leading-snug relative z-10 min-h-[140px]">
            <span className="text-4xl font-bold mr-2">“</span>
            {testimonials[active].text}
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div>
              <p className="font-bold">{testimonials[active].name}</p>
              <p className="text-sm text-white/70">{testimonials[active].title}</p>
            </div>
            <div className="ml-auto text-white/70 flex gap-4">
              <button onClick={handlePrev} className="text-xl font-bold">←</button>
              <button onClick={handleNext} className="text-xl font-bold">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;
