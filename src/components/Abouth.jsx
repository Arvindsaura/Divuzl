import { useEffect, useRef, useState } from "react";

const Abouth = () => {
  const [showMore, setShowMore] = useState(false);
  const [projects, setProjects] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [experience, setExperience] = useState(0);

  const statsRef = useRef(null);
  const readMoreRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.gsap) {
      window.gsap.registerPlugin(window.ScrollTrigger, window.ScrollSmoother);
      window.ScrollSmoother.create({ smooth: 1.2, effects: true });
    }
  }, []);

  useEffect(() => {
    if (!window.gsap || !sectionRef.current) return;
    const elements = sectionRef.current.querySelectorAll(".animate-text");
    window.gsap.set(elements, { opacity: 0, y: 40 });
    elements.forEach((el, i) => {
      window.gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: i * 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });
    });
  }, []);

  useEffect(() => {
    if (!window.gsap || !sectionRef.current) return;
    const images = sectionRef.current.querySelectorAll(".about-image");
    window.gsap.set(images, { opacity: 0, y: 40, scale: 0.95 });
    images.forEach((img) => {
      window.gsap.to(img, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      });
      window.gsap.to(img, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  useEffect(() => {
    const animateValue = (setter, end, speed) => {
      let start = 0;
      const increment = end < 50 ? 1 : Math.ceil(end / 50);
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          setter(end);
          clearInterval(interval);
        } else {
          setter(start);
        }
      }, speed);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animateValue(setProjects, 50, 20);
        animateValue(setCustomers, 30, 15);
        animateValue(setExperience, 2, 150);
        if (window.gsap && statsRef.current) {
          window.gsap.fromTo(statsRef.current, { y: 40, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          });
        }
      }
    }, { threshold: 0.5 });

    if (statsRef.current) observer.observe(statsRef.current);
    return () => statsRef.current && observer.unobserve(statsRef.current);
  }, []);

  useEffect(() => {
    if (!window.gsap) return;
    if (showMore && readMoreRef.current) {
      window.gsap.fromTo(readMoreRef.current, { opacity: 0, y: 30 }, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    }
  }, [showMore]);

  return (
    <section ref={sectionRef} className="py-16 px-[12.5vw] text-black bg-white dm-sans-heading" id="about">
      <p className="text-xs border w-fit border-[#0047FF] text-[#0047FF] py-2 px-6 rounded-full font-semibold hover:bg-[#0047FF] hover:text-white transition mb-6 animate-text">About Us</p>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0047FF] text-left w-full animate-text dm-sans-heading">Who We Are?</h2>

      <div className="flex flex-col lg:flex-row justify-between gap-8 my-10 animate-text">
        <div className="lg:w-1/2 text-left">
          <p className="text-lg md:text-xl font-semibold text-gray-900 leading-tight dm-sans-body">Providing the best services with <br className="lg:hidden" /> out-of-the-box ideas.</p>
        </div>
        <div className="lg:w-1/2 text-left">
          <p className="text-base md:text-lg text-gray-600 leading-relaxed dm-sans-body">At Divuzl, we blend bold creativity with smart strategy to craft digital campaigns that stand out and convert. No fluff — just results.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-10 w-full lg:w-[75vw] mx-auto h-[40vh]">
        <div className="relative w-full lg:w-1/2 h-full overflow-hidden rounded-lg shadow-lg group">
          <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/594e2d2c-9a7f-47bc-b388-e668c1471b3a.png" alt="hands typing on laptop" className="object-cover w-full h-full about-image" />
          <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-center p-4">
            <p className="text-lg font-medium">Crafting digital strategies that make your brand stand out.</p>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 h-full overflow-hidden rounded-lg shadow-lg group">
          <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b09087c4-2eb2-4da4-9e30-d1fcdc119e4b.png" alt="marble texture" className="object-cover w-full h-full about-image" />
          <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-center p-4">
            <p className="text-lg font-medium">Turning data into decisions — welcome to your digital transformation partner.</p>
          </div>
        </div>
      </div>

      {showMore && (
        <p ref={readMoreRef} className="text-base md:text-lg text-gray-600 text-justify mx-auto mt-6 animate-text dm-sans-body">
          We at Divuzl believe that creativity should not be limited by convention. Our team of experts merges innovative ideas with real-world insights to deliver solutions that not only impress but perform. Whether it's branding, marketing, or strategy — we take your business to the next level.
        </p>
      )}

      <button onClick={() => setShowMore(!showMore)} className="mt-6 flex items-center gap-2 text-sm uppercase tracking-wide font-medium text-[#0047FF] hover:text-[#002db3] transition animate-text">
        {showMore ? "Read Less" : "Read More"}
        <svg className={`w-4 h-4 transform transition-transform duration-300 ${showMore ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div ref={statsRef} className="mt-16 w-[75vw] mx-auto flex flex-col sm:flex-row justify-evenly items-center border border-gray-300 rounded-[30px] px-6 py-6 sm:py-4 gap-6 sm:gap-0 bg-white/80 backdrop-blur-md animate-text">
        <div className="flex items-center gap-4 text-sm text-gray-600 w-full sm:w-auto">
          <span className="text-4xl font-bold text-[#0047FF] text-center">{projects}+</span>
          <div className="text-left">
            <div className="font-medium text-gray-700">Successful</div>
            <div className="text-gray-500 -mt-1">Projects</div>
          </div>
        </div>

        <div className="hidden sm:block h-10 w-px bg-gray-300"></div>

        <div className="flex items-center gap-4 text-sm text-gray-600 w-full sm:w-auto">
          <span className="text-4xl font-bold text-[#0047FF] text-center">{customers}+</span>
          <div className="text-left">
            <div className="font-medium text-gray-700">Happy</div>
            <div className="text-gray-500 -mt-1">Customers</div>
          </div>
        </div>

        <div className="hidden sm:block h-10 w-px bg-gray-300"></div>

        <div className="flex items-center gap-4 text-sm text-gray-600 w-full sm:w-auto">
          <span className="text-4xl font-bold text-[#0047FF] text-center">{experience}+</span>
          <div className="text-left">
            <div className="font-medium text-gray-700">Years of</div>
            <div className="text-gray-500 -mt-1">Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abouth;