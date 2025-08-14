import React, { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const founder = {
  name: "Devang Vikram Singh",
  role: "MD & CEO",
  image: "/images/founder_img.jpg",
  about: [
    "Devang Vikram Singh began his entrepreneurial journey with a clear vision: create solutions that empower businesses to grow without limits. His first step was building marketing and digital strategies for small brands, starting with close contacts and local businesses. Over time, this evolved into providing full-stack business development and consultancy for clients across multiple industries.",
    "Along the way, he saw a recurring challenge: while opportunities are vast, most businesses struggle to connect all the dots — from company setup to branding, technology, marketing, and sales. The variety of services and platforms can be overwhelming, and business owners often lack the time or resources to make them work together seamlessly.",
    "This insight became the driving force behind Divuzl: to be the one-stop partner for everything a business needs to start, grow, and thrive. Devang’s mission is to simplify the growth journey by integrating strategy, creativity, and technology — helping businesses work smarter, scale faster, and create lasting impact in the world.",
  ],
};

const developer = {
  name: "Arvind Puri",
  role: "Developer",
  image: "https://placehold.co/300x300?text=Arvind+Puri",
  note:
    "This website was designed and developed by Arvind Puri with a focus on clarity, performance, and a clean reading experience.",
};

export default function Team() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Founder image fade-up
      gsap.from(".gsap-img", {
        y: 50,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".gsap-img", start: "top 85%", once: true },
      });

      // Founder text fade-up + stagger
      gsap.from(".gsap-text > *", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".gsap-text", start: "top 85%", once: true },
      });

      // Developer credit
      gsap.from(".gsap-dev", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: ".gsap-dev", start: "top 90%", once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative bg-white pt-24 px-[10vw] min-h-screen overflow-hidden"
      >
        {/* Optional subtle blue accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -z-10 translate-x-1/4 -translate-y-1/4"></div>

        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-6">
            <div className="inline-block px-4 py-1 border border-blue-500 text-blue-500 rounded-full text-sm font-semibold">
              Team
            </div>
          </div>

          <h1 className="text-5xl font-light mb-4 text-gray-900">Meet our team</h1>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Meet our exceptional team at Divuzl! Comprising diverse talents and
            expertise, we are a dedicated group committed to delivering excellence
            in every project.
          </p>

          {/* Founder Section */}
          <div className="flex flex-col md:flex-row gap-8 mb-20 items-start">
            {/* Founder Image */}
            <div className="gsap-img w-full md:w-1/2 h-64 sm:h-80 md:h-[87vh] bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Founder Text */}
            <div className="gsap-text w-full md:w-1/2 text-left flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{founder.name}</h2>
              <p className="text-blue-600 font-medium mb-4">{founder.role}</p>
              {founder.about.map((p, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base md:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Developer Credit */}
          <div className="gsap-dev border-t border-black/10 pt-10 flex flex-col md:flex-row items-start gap-5">
            <img
              src={developer.image}
              alt={developer.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="text-sm text-gray-600">Meet the Developer</p>
              <p className="text-[15px] font-medium text-gray-900">
                {developer.name} — {developer.role}
              </p>
              <p className="mt-2 text-gray-700 text-[15px] leading-6 max-w-[60ch]">
                {developer.note}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
