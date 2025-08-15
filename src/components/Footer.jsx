import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socials = [
    { icon: <FaInstagram />, name: "Instagram", handle: "divuzl", url: "https://instagram.com/divuzl" },
    { icon: <FaLinkedinIn />, name: "LinkedIn", handle: "Divuzl", url: "https://linkedin.com/company/divuzl" },
    { icon: <FaFacebookF />, name: "Facebook", handle: "Divuzl", url: "https://facebook.com/divuzl" },
    { icon: <FaXTwitter />, name: "Twitter (X)", handle: "Divuzl", url: "https://x.com/divuzl" },
    { icon: <FaYoutube />, name: "YouTube", handle: "divuzl", url: "https://youtube.com/@divuzl" },
    { icon: <FaWhatsapp />, name: "WhatsApp", handle: "+91 9220660377", url: "https://wa.me/919220660377" },
  ];

  const departments = [
    "Marketing & Advertising",
    "Creative & Design",
    "Technology & Development",
    "Content & Media Production",
    "Legal & Compliance",
    "Client Success & Strategy",
    "SEO & Organic Growth",
    "Social Media Marketing",
    "Paid Advertising & Performance Marketing",
    "Branding & Identity Development",
    "Public Relations & Communications",
    "Data & Analytics",
    "Business Development & Partnerships",
    "Product & Innovation",
  ];

  const legal = [
    ["Terms of Service", "/terms"],
    ["Refund & Cancellation", "/refund-policy"],
    ["Privacy Policy", "/privacy-policy"],
    ["Cookie Policy", "/cookie-policy"],
  ];

  return (
    <footer className="bg-[#111] text-white font-montserrat">
      <div className="w-[75vw] max-w-7xl mx-auto py-16 flex flex-col gap-14">

       {/* SOCIAL */}
<div>
  <p className="uppercase text-sm tracking-widest text-gray-300 mb-2">SOCIAL</p>
  <h2 className="text-3xl font-medium mb-10">Follow us for the latest updates</h2>
  
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
    {socials.map((s, i) => (
      <a
        key={i}
        href={s.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 hover:text-blue-400 transition-colors"
      >
        {/* Left: Icon */}
        <span className="text-5xl flex-shrink-0">{s.icon}</span>

        {/* Right: Name + Handle */}
        <div className="flex flex-col leading-tight">
          <span className="text-xs uppercase tracking-widest">{s.name}</span>
          <span className="text-sm">{s.handle}</span>
        </div>
      </a>
    ))}
  </div>
</div>


        {/* Grid Links */}
<div className="grid grid-cols-1 sm:grid-cols-4 gap-x-10 gap-y-12 text-sm">

  {/* Departments - Column 1 */}
  <div>
    <h4 className="font-semibold mb-3 tracking-tight text-base">DEPARTMENTS</h4>
    <ul className="space-y-2">
      {departments.slice(0, Math.ceil(departments.length / 2)).map((dept, index) => (
        <li key={index}>{dept}</li>
      ))}
    </ul>
  </div>

  {/* Departments - Column 2 */}
  <div className="pt-7 sm:pt-0"> {/* Small offset so headings align nicely */}
    <ul className="space-y-2">
      {departments.slice(Math.ceil(departments.length / 2)).map((dept, index) => (
        <li key={index}>{dept}</li>
      ))}
    </ul>
  </div>

  {/* Let's Connect */}
  <div>
    <h4 className="font-semibold mb-3 tracking-tight text-base">LET’S CONNECT</h4>
    <ul className="space-y-2">
      <li>
        <a href="mailto:contact@divuzl.com" className="hover:text-blue-400 transition-colors">
          Email: contact@divuzl.com
        </a>
      </li>
      <li>
        <a href="tel:+919220660377" className="hover:text-blue-400 transition-colors">
          Phone: +91 9220660377
        </a>
      </li>
    </ul>
  </div>

  {/* Legal */}
  <div>
    <h4 className="font-semibold mb-3 tracking-tight text-base">LEGAL</h4>
    <ul className="space-y-2">
      {legal.map(([text, to], index) => (
        <li key={index}>
          <Link to={to} className="hover:text-blue-400 transition-colors">
            {text}
          </Link>
        </li>
      ))}
    </ul>
  </div>

</div>

      </div>

      {/* Bottom Bar */}
<div className="border-t border-gray-700 py-6 px-[4vw] flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6 text-sm text-gray-400">
  
  {/* Left: Logo */}
  <div className="flex-shrink-0 flex items-center">
    <h1 className="dm-sans-heading text-2xl">Divuzl</h1>
  </div>

 {/* Middle: Copyright & Policy Links */}
<div className="flex flex-col items-start gap-2 text-left ">
  <div className="whitespace-nowrap">©2025 Divuzl Digital Solutions Private Limited . All rights reserved.</div>
  <div className="flex flex-wrap justify-start gap-x-4 gap-y-1">
    <a href="#" className="hover:text-white">Privacy Notice</a>
    <a href="#" className="hover:text-white">Cookie Policy</a>
    <a href="#" className="hover:text-white">Accessibility Declaration</a>
    <a href="#" className="hover:text-white">Disclaimer</a>
    <a href="#" className="hover:text-white">Security Policy</a>
    <a href="#" className="hover:text-white">California Notice at Collection</a>
    <a href="#" className="hover:text-white">Customize Cookies</a>
  </div>
</div>


  {/* Right: Social Icons */}
  <div className="flex items-center gap-5 text-lg">
    {socials.map((s, i) => (
      <a
        key={i}
        href={s.url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        {s.icon}
      </a>
    ))}
  </div>
</div>

    </footer>
  );
};

export default Footer;
