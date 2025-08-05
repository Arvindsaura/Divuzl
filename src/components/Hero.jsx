import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const textElements = gsap.utils.toArray('.animate-hero-text');

    textElements.forEach((el, i) => {
      // Scroll-in animation
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Parallax scroll
      gsap.to(el, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    // Image parallax
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Fade + slide in image
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imgRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <div className="bg-white font-['Montserrat']" ref={containerRef}>
      <section className="bg-white py-16 sm:py-20 lg:py-28 mt-[5vh]">
        <div className="px-[12.5vw] grid lg:grid-cols-2 ...">

          {/* Text Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-[#0047FF] animate-hero-text">
              Digital Marketing that Delivers
            </p>
            <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.5rem)] font-semibold text-black leading-tight animate-hero-text">
              Grow Your Brand With Impactful Strategies
            </h1>
            <p className="mt-6 text-[clamp(1rem,1.5vw,1.25rem)] text-black/70 animate-hero-text">
              We help businesses boost visibility, drive traffic, and convert leads into loyal customers.
            </p>

            {/* CTA */}
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 mt-10 text-sm font-medium bg-[#0047FF] text-white rounded-full hover:bg-black transition-all duration-200 animate-hero-text"
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

            {/* Login Link */}
            <p className="mt-6 text-sm text-black/60 animate-hero-text">
              Already with us?{' '}
              <a
                href="/login"
                className="underline text-black hover:text-[#0047FF] transition"
              >
                Log in to your account
              </a>
            </p>
          </div>

          {/* Image */}
          <div className="w-full">
            <img
              ref={imgRef}
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
              alt="Hero"
              className="w-full object-contain rounded-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
