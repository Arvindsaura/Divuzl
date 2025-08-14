import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    // ===== Heading animation (replays on scroll) =====
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0, skewY: 5, scale: 1.05 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play reverse play reverse", // <-- replay on scroll back
          },
        }
      );
    }

    // ===== Subtext & CTA animation (replays on scroll) =====
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
            start: "top 85%",
            end: "bottom top",
            toggleActions: "play reverse play reverse", // <-- replay on scroll back
          },
        }
      );
    });

    // ===== Background parallax =====
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
    <div ref={containerRef} className="bg-white font-['Montserrat']">
      <section
        className="relative h-screen flex items-center justify-center text-center px-[12.5vw]"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/9d/c9/7e/9dc97e83995c883fbc7ca6791c723de7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-3xl">
          <p
            className="mt-[40vh] text-sm font-bold uppercase text-white animate-hero-text"
            style={{ textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}
          >
            Digital Marketing that Delivers
          </p>

          <h1
            ref={headingRef}
            className="mt-4 text-[clamp(2.5rem,10vw,4.5rem)] font-bold text-white leading-[0.85] tracking-[-0.03em]"
            style={{ textShadow: "0 3px 8px rgba(0,0,0,0.7)" }}
          >
            Grow Your Brand With Impactful Strategies
          </h1>

          <p
            className="mt-6 text-[clamp(1rem,1.5vw,1.25rem)] font-small text-white animate-hero-text"
            style={{ textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}
          >
            We help businesses boost visibility, drive traffic, and convert
            leads into loyal customers.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 mt-10 text-sm font-semibold bg-[#0047FF] text-white rounded-full hover:bg-black transition-all duration-200 animate-hero-text shadow-lg"
            style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.4)" }}
          >
            Book a Free Consultation
            <svg
              className="w-5 h-5 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13 9l3 3m0 0l-3 3m3-3H8"
              />
            </svg>
          </a>

          <p
            className="mt-6 text-sm text-white animate-hero-text"
            style={{ textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}
          >
            Already with us?{" "}
            <a
              href="/login"
              className="underline text-white hover:text-[#0047FF] transition mb-[10vh]"
            >
              Log in to your account
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
