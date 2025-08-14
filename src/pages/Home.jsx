import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import WhatWeDo from "../components/WhatWeDo";
import Workflow from "../components/Workflow";
import Clients from "../components/Clients";
import BlogSection from "../components/BlogSection";
import FAQ from "../components/FAQ";
import Test from "../components/Test";
import Abouth from "../components/Abouth";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

 useEffect(() => {
  const shouldScroll = sessionStorage.getItem("scrollToAbout");

  if (shouldScroll) {
    const interval = setInterval(() => {
      const section = document.getElementById("about");

      if (section && window.ScrollSmoother && ScrollSmoother.get()) {
        const smoother = ScrollSmoother.get();
        smoother.scrollTo(section, true, "top top"); // GSAP's smooth scroll
        sessionStorage.removeItem("scrollToAbout");
        clearInterval(interval);
      }
    }, 200);

    // Stop if too many attempts
    setTimeout(() => clearInterval(interval), 5000);
  }
}, []);


  return (
    <main className="font-['Montserrat'] bg-white text-black">
      <Hero />
      <Abouth  id="about"/>
      <WhatWeDo />
      <Workflow />
      <Clients />

      {/* Heading with GSAP scroll animation */}
      <div className="flex justify-end px-[12.5vw] mb-16">
        <h2
          ref={titleRef}
          className="text-5xl sm:text-5xl font-bold text-gray-900 leading-tight text-right font-terrat dm-sans-heading"
        >
          We Write What Works: <br />
          Tips, Tricks & Truths <br />
          from the Digital Space
        </h2>
      </div>

      <BlogSection />
      <FAQ />
      <Test />
      <Footer/>
    </main>
  );
};

export default Home;
