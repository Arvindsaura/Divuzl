import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const columnsRef = useRef([]);

 

  const sections = [
    {
      title: "COMPANY",
      links: [
        ["About Us", "/about"],
        ["Our Services", "/services"],
        ["How We Work", "/how-we-work"],
        ["Blog", "/blogs"],
        ["Careers", "/careers"],
        ["Contact Us", "/contact"],
      ],
    },
    {
      title: "SERVICES",
      links: [
        ["SEO & Organic Growth", "/services/seo-growth"],
        ["Social Media Marketing", "/services/social-media"],
        ["Paid Advertising", "/services/paid-ads"],
        ["Content Strategy", "/services/content-strategy"],
        ["Branding & Design", "/services/branding"],
        ["Web Development", "/services/web-development"],
      ],
    },
    {
      title: "LET’S CONNECT",
      links: [
        ["hello@divuzl.com", "mailto:hello@divuzl.com"],
        ["+91-XXXXXXXXXX", "tel:+91XXXXXXXXXX"],
      ],
      extra: (
        <p className="text-sm text-gray-500 mt-2 leading-snug">
          Mumbai, India <br />
          <span className="text-xs">(Available Globally 🌍)</span>
        </p>
      ),
    },
    {
      title: "FOLLOW US",
      links: [
        ["Instagram", "https://instagram.com/divuzl"],
        ["LinkedIn", "https://linkedin.com/company/divuzl"],
        ["Twitter", "https://twitter.com/divuzl"],
        ["YouTube", "https://youtube.com/@divuzl"],
      ],
      external: true,
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-white text-[#1e1e1e] font-montserrat py-20 border-t border-gray-200"
    >
      <div className="w-[70vw] max-w-7xl mx-auto flex flex-col gap-14">
        {/* CTA */}
        <div className="text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight leading-tight">
            You Heard <span className="text-blue-600">ENOUGH?</span>
          </h2>
          <Link
            to="/contact"
            className="group inline-block px-6 py-2 bg-blue-600 text-white rounded-full text-base font-medium transition-all duration-300 hover:bg-black"
          >
            Consult Us{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </div>

        {/* Subtext */}
        <p className="text-gray-600 text-center md:text-left text-sm md:text-base leading-relaxed max-w-2xl">
          Embracing creativity and pushing the boundaries of what’s possible.
        </p>

        {/* Grid Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10 gap-y-12 text-sm text-black">
          {sections.map((section, i) => (
            <div key={i} ref={(el) => (columnsRef.current[i] = el)}>
              <h4 className="font-semibold mb-3 tracking-tight text-base">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map(([text, to], index) =>
                  section.external ? (
                    <li key={index}>
                      <a
                        href={to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors duration-200"
                      >
                        {text}
                      </a>
                    </li>
                  ) : (
                    <li key={index}>
                      <Link
                        to={to}
                        className="hover:text-blue-600 transition-colors duration-200"
                      >
                        {text}
                      </Link>
                    </li>
                  )
                )}
              </ul>
              {section.extra && section.extra}
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center text-sm font-medium text-gray-600 pt-6 border-t border-gray-200">
          <p>Smart Strategy. Bold Creativity. Real Results. That’s Divuzl.</p>
          <p className="mt-1 text-gray-500">
            © 2025 Divuzl. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
