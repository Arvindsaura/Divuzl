import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgVideo from '../images/4218bbb371d925d316775b2301e8f33b (1).mp4';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll('.animate-text');

    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reset', // trigger every scroll
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* Background video section */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0" />
      </div>

      {/* Content section with animation refs */}
      <section
  ref={containerRef}
  className="min-h-[60vh] bg-[#000] text-white p-8  flex flex-col md:flex-row items-center justify-between"
>

        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-text">
            turning digital <br />
            <span className="text-white">chaos into business growth.</span>
          </h1>
          <p className="text-sm max-w-md animate-text">
            We bring the creative heat, digital brains, and strategy to scale
            loud and fast.
          </p>
          <div className="mt-6 space-x-4 animate-text">
            <button className="border border-white px-4 py-2 rounded-full">
              About Us
            </button>
            <button className="bg-black px-4 py-2 rounded-full">
              Services
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
