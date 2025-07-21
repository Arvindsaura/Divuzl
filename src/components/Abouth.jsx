import { useEffect, useRef, useState } from "react";

const Abouth = () => {
  const [showMore, setShowMore] = useState(false);
  const [projects, setProjects] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [experience, setExperience] = useState(0);
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateValue(setProjects, 50, 20);
          animateValue(setCustomers, 100, 15);
          animateValue(setExperience, 2, 150);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.5, // Adjust based on how much visibility you want before triggering
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);
  return (
    <section className="text-center py-12 px-4 md:px-20 border-2 border-[#0047FF] rounded-xl">
      <div className="flex-1 max-w-md">
      <p className="mt-2 mb-10 text-xs border w-30 border-[#0047FF] text-[#0047FF]  py-2 rounded-full font-semibold hover:bg-[#0047FF] hover:text-white transition">
          About Us
        </p>
        <h2 className="text-7xl font-bold text-[#0047FF] text-left ">Who We Are ?</h2>
     <section class="w-[90vw] mx-auto">
    <div class="flex flex-col md:flex-row md:items-start justify-between mb-6">
      <div class="flex flex-col items-start justify-center text-left md:w-1/2">
        <p class="text-4xl font-semibold text-gray-900 leading-tight">
          Providing the best services with <br /> out of the box Ideas
        </p>
      </div>
      <div class="hidden md:flex md:w-1/2 justify-end">
        <p class="text-sm max-w-md text-gray-600 leading-relaxed">
          At Divuzl, we blend bold creativity with smart strategy to craft digital campaigns that stand out and convert. No fluff — just results.
        </p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
      <img 
        src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/594e2d2c-9a7f-47bc-b388-e668c1471b3a.png" 
        alt="Black and white close-up photo of hands typing on a laptop keyboard in a modern workspace"
        class="w-full md:w-1/3 rounded-lg shadow-lg object-cover"
        onError="this.style.display='none'"
      />
      <img 
        src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b09087c4-2eb2-4da4-9e30-d1fcdc119e4b.png" 
        alt="Abstract close-up image of black marble texture swirled pattern with modern artistic style"
        class="w-full md:w-1/3 rounded-lg shadow-lg object-cover"
        onError="this.style.display='none'"
      />
    </div>
    
 </section>
 </div>

      {showMore && (
        <p className="text-sm max-w-xl mx-auto mt-6 text-gray-600 transition-opacity duration-500 ease-in-out">
          We at Divuzl believe that creativity should not be limited by convention. Our team of experts merges
          innovative ideas with real-world insights to deliver solutions that not only impress but perform. Whether
          it's branding, marketing, or strategy — we take your business to the next level.
        </p>
      )}

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-6 text-[#0047FF] underline font-medium hover:text-[#002db3] transition"
      >
        {showMore ? "Read Less" : "Read More"}
      </button>

 <div
        ref={statsRef}
        className="mt-12 flex flex-col pl-0 pr-0 sm:flex-row justify-center items-center gap-12 text-sm text-gray-600 border border-gray-300"
      >
        <div>
          <span className="text-3xl font-bold text-black">{projects}+</span>
          <br />
          Successful Projects
        </div>
        <div>
          <span className="text-3xl font-bold text-black">{customers}+</span>
          <br />
          Happy Customers
        </div>
        <div>
          <span className="text-3xl font-bold text-black">{experience}+</span>
          <br />
          Years of Experience
        </div>
      </div>
    </section>
  );
};

export default Abouth;
