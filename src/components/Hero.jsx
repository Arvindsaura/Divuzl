import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
 

    gsap.utils.toArray(".animate-hero-text").forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play",
          },
        }
      );
    });

    if (containerRef.current) {
      gsap.to(containerRef.current, {
        backgroundPositionY: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="bg-white dm-sans-heading">
      <section
        className="relative h-screen px-[12.5vw] pb-16 flex items-end justify-start"
        style={{
          backgroundImage: "url('/images/contactbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Left Text */}
        <div className="relative w-full max-w-[1200px] flex flex-col lg:flex-row items-start justify-between">
          <div className="text-left lg:w-1/2 space-y-4">
            <p className="text-[1em] font-regular text-white animate-hero-text">
              Welcome to ,
            </p>

            <h1
         
              className="text-[clamp(2.5rem,10vw,5rem)] font-bold text-white leading-[0.85] ml-[-0.25vw] libertinus-serif-bold animate-hero-text"
            >
              Divuzl
            </h1>

            <p className="text-[1em] text-white animate-hero-text ">
              We Partner With Ambitious Brands, Startups, And Institutions To Craft Powerful Growth Strategies, Build Impactful Digital Ecosystems, And Solve Complex Business Challenges With Creativity, Technology, And Innovation.


            </p>
          </div>
        </div>

        {/* Bottom Right Button */}
        <a
          href="/contact"
          className="absolute bottom-20 right-[12.5vw] inline-flex items-center px-6 py-3 text-lg bg-black text-white rounded-full   text-[1em]"
        
        >
          Book a Free Consultation
         
        </a>
      </section>
    </div>
  );
}
