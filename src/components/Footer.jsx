import React from "react";
import { Link } from "react-router-dom";
 import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa6";


const Footer = () => {


const socials = [
  { icon: <FaFacebookF />, name: "Facebook", handle: "Divuzl", url: "https://facebook.com/divuzl" },
  { icon: <FaLinkedinIn />, name: "LinkedIn", handle: "Divuzl", url: "https://linkedin.com/company/divuzl" },
  { icon: <FaXTwitter />, name: "Twitter (X)", handle: "Divuzl", url: "https://x.com/Divuzl_" },
  { icon: <FaInstagram />, name: "Instagram", handle: "divuzl", url: "https://instagram.com/divuzl" },
  { icon: <FaYoutube />, name: "YouTube", handle: "divuzl", url: "https://www.youtube.com/@divuzl" },
  { icon: <FaEnvelope />, name: "Mail", handle: "info@divuzl.com", url: "mailto:info@divuzl.com" },
];



  const legal = [
    ["Terms of Service", "/terms"],
    ["Refund & Cancellation", "/refund-policy"],
    ["Privacy Policy", "/privacy-policy"],
    ["Cookie Policy", "/cookie-policy"],
  ];

  return (
    <footer className="bg-[#111] text-white font-montserrat">
      <div className="w-[90vw] max-w-7xl mx-auto py-16 flex flex-col gap-14">

    {/* Top Section with Socials */}
<div>
  <p className="uppercase text-sm tracking-widest text-gray-300 mb-2">SOCIAL</p>
  <h2 className="text-3xl font-medium mb-8 sm:mb-10">
    Follow us for the latest updates
  </h2>

  <div className="flex flex-wrap gap-4 sm:gap-6 justify-start">
    {socials.map((s, i) => (
      <a
        key={i}
        href={s.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-14 h-14 sm:w-16 sm:h-16 bg-transparent hover:text-[#0047FF] transition-colors"
      >
        <span className="text-3xl sm:text-4xl flex  justify-left w-full h-full">
          {s.icon}
        </span>
      </a>
    ))}
  </div>
</div>



        {/* Legal Links */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {legal.map(([text, to], index) => (
            <Link key={index} to={to} className="hover:text-[#0047FF] transition-colors text-sm">
              {text}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 px-[4vw] flex flex-col sm:flex-row-reverse sm:items-center justify-between gap-4 text-sm text-gray-400">
        {/* Right: Copyright */}
        <div className="text-left sm:text-right">
          <span>
            ©{new Date().getFullYear()} Divuzl Digital Solutions Private Limited. All rights reserved.
          </span>
        </div>

        {/* Left: Logo */}
        <div className="flex-shrink-0 flex items-center">
          <h1 className="dm-sans-heading text-2xl text-white">Divuzl</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
