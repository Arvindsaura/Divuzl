import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// This component assumes you have a standard React project setup
// and have installed the required dependencies:
// npm install gsap react
// and have configured Tailwind CSS.

gsap.registerPlugin(ScrollTrigger);

/**
 * A responsive hero section component with GSAP animations.
 * It features text that animates in on scroll and a parallax background effect.
 * The layout is fully responsive, adjusting for mobile, tablet, and desktop screens.
 */
export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    // This effect handles the GSAP animations for the text and the background.
    // The animations are triggered by the ScrollTrigger plugin.

    // Animate each text element with the "animate-hero-text" class
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
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Animate the background position for a parallax effect
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
  }, []); // The empty dependency array ensures this effect runs only once on mount.

  return (
    <div ref={containerRef} className="bg-white">
      <section
        // The component's height is now 65vh on smaller screens (below 1024px)
        // and h-screen on larger screens.
        className="relative h-[65vh] lg:h-screen px-6 pb-16 flex items-end justify-start px-[12.5vw]"
        style={{
          // The original background image path is restored here.
          backgroundImage: "url('/images/contactbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for improved text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* This container manages the responsive stacking of content and the button */}
        <div className="relative w-full max-w-[1200px] mx-auto flex flex-col items-start lg:flex-row lg:items-end lg:justify-between text-left">
          {/* Left Text Content */}
          <div className="lg:w-1/2 space-y-4">
            <p className="text-base font-normal text-white animate-hero-text dm-sans-body">
              Welcome to ,
            </p>

            <h1 className="text-[clamp(3rem,12vw,5rem)] font-bold text-white leading-[0.85] animate-hero-text libertinus-serif-bold">
              Divuzl
            </h1>

            <p className="text-base text-white animate-hero-text dm-sans-body">
              We partner with ambitious brands, startups, and institutions to solve complex business 
challenges. Our team uses creativity, technology, and innovation to craft powerful growth 
strategies and build impactful digital ecosystems that drive real results
            </p>
          </div>

          {/* Call to action button, positioned below the text on small screens */}
          <a
  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1WzHi4ZCeLjsSFTIAiIXddZNYe2awtv3z8dvhIJHQZzMeoVtZQajBJfgOQeMNr-dGfpUDFxyd3?gv=true"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 lg:mt-0 inline-flex items-center px-6 py-3 text-lg bg-black text-white rounded-full text-base hover:bg-white hover:text-black transition-colors duration-300 dm-sans-body"
>
  Book a Free Consultation
</a>

        </div>
      </section>
    </div>
  );
}
