import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import ScrollToTop from "./ScrollToTop"; // 👈 import it

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothLayout = ({ children }) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.5,
      effects: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        <ScrollToTop /> {/* 👈 insert it here */}
        {children}
      </div>
    </div>
  );
};

export default SmoothLayout;
