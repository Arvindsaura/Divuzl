import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const steps = [
  {
    title: "Discover",
    image: "/images/work1.jpg",
    text: "We begin by thoroughly understanding your needs, market, and goals to craft a focused strategy."
  },
  {
    title: "Design",
    image: "/images/work6.jpg",
    text: "Our design team transforms insights into beautiful, intuitive interfaces and experiences."
  },
  {
    title: "Develop",
    image: "/images/work3.jpg",
    text: "Using cutting-edge tech, we build fast, scalable, and secure digital products tailored to you."
  },
  {
    title: "Deploy",
    image: "/images/work4.jpg",
    text: "We deploy solutions seamlessly while ensuring performance, security, and reliability."
  },
  {
    title: "Deliver",
    image: "/images/work5.jpg",
    text: "We don’t just deliver projects; we ensure success with support, analytics, and continuous improvement."
  }
];

const cursorImages = steps.map((step) => step.image);

const Workflow = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);
  const cursorRef = useRef(null);
  const lastX = useRef(0);
  const currentIndex = useRef(0);
  const [cursorImage, setCursorImage] = useState(cursorImages[0]);

  // Scroll-triggered fade + slide + scale for steps
  useEffect(() => {
    stepsRef.current.forEach((step, i) => {
      gsap.set(step, { opacity: 0, y: 80, scale: 0.98 });

      gsap.fromTo(
        step,
        { opacity: 0, y: 80, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  // Hover tilt + scale effect for each step
  useEffect(() => {
    stepsRef.current.forEach((step) => {
      step.addEventListener("mousemove", (e) => {
        const rect = step.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 4;
        const rotateY = ((x - centerX) / centerX) * 4;
        gsap.to(step, { rotateX, rotateY, scale: 1.02, duration: 0.3 });
      });

      step.addEventListener("mouseleave", () => {
        gsap.to(step, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.5 });
      });
    });
  }, []);

  // Cursor movement effect
  useEffect(() => {
    const section = sectionRef.current;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (Math.abs(e.clientX - lastX.current) > 25) {
        currentIndex.current = (currentIndex.current + 1) % cursorImages.length;
        setCursorImage(cursorImages[currentIndex.current]);
        lastX.current = e.clientX;
      }

      gsap.to(cursorRef.current, {
        x,
        y,
        duration: 0.25,
        ease: "power3.out"
      });
    };

    const showCursor = () => {
      gsap.to(cursorRef.current, { opacity: 1, duration: 0.2 });
    };

    const hideCursor = () => {
      gsap.to(cursorRef.current, { opacity: 0, duration: 0.2 });
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", showCursor);
    section.addEventListener("mouseleave", hideCursor);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", showCursor);
      section.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  // Update cursor image
  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.backgroundImage = `url(${cursorImage})`;
    }
  }, [cursorImage]);

  // Optional ScrollSmoother
  useEffect(() => {
    const smoother = ScrollSmoother.create({ smooth: 1.2, effects: true });
    return () => smoother.kill();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-white text-black font-[Montserrat] px-[12.5vw] py-24 overflow-hidden"
    >
      {/* Heading */}
      <div className="text-5xl font-bold mb-20 relative z-10 w-fit">
        <p className="text-xs border w-[8vw] border-[#0047FF] text-[#0047FF] py-2 px-6 rounded-[30px] font-semibold hover:bg-[#0047FF] hover:text-white transition mb-6 uppercase tracking-wide">
          Workflow
        </p>
        How do we work?
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-24 relative z-10">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (stepsRef.current[index] = el)}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Text Section */}
            <div className="md:w-1/2 w-full">
              <h3 className="text-3xl font-semibold text-[#0047FF] mb-4 transition-all duration-300 hover:text-black hover:scale-[1.05] hover:uppercase">
                {step.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {step.text}
              </p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 w-full h-[300px] relative rounded-xl overflow-hidden group">
              <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${step.image})` }}
              />
            </div>
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default Workflow;
