import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother"; // ✅ Import

import WhatWeDo from "../components/WhatWeDo";
import Workflow from "../components/Workflow";
import Clients from "../components/Clients";
import BlogSection from "../components/BlogSection";
import FAQ from "../components/FAQ";
import Test from "../components/Test";
import Abouth from "../components/Abouth";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother); // ✅ Register both

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
    const tryScroll = () => {
      const section = document.getElementById("about");

      if (section) {
        if (ScrollSmoother.get()) {
          // ✅ Smooth GSAP scroll
          ScrollSmoother.get().scrollTo(section, true, "top top");
        } else {
          // ✅ Smooth native scroll
          window.scrollTo({
            top: section.getBoundingClientRect().top + window.scrollY,
            behavior: "smooth"
          });
        }
        sessionStorage.removeItem("scrollToAbout");
        return true;
      }
      return false;
    };

    // Wait for section + smoother to be ready
    const interval = setInterval(() => {
      if (tryScroll()) clearInterval(interval);
    }, 100);

    // Safety stop after 5s
    setTimeout(() => clearInterval(interval), 5000);
  }
}, []);


  return (
    <main className="font-['Montserrat'] bg-white text-black">
      <Hero />
      {/* ✅ Make sure Abouth actually uses this id */}
      <Abouth id="about" />
      <WhatWeDo />
      <Workflow />
      <Clients />
      <div className="flex justify-end px-[12.5vw] mb-16">
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight text-right font-terrat dm-sans-heading"
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
