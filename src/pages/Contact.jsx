import React, { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import DecryptedText from "../components/DecryptedText";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Contact() {
  const formRef = useRef();
  const textRef = useRef();
  const [state, handleSubmit] = useForm("mqalllgo");

  // Socials Array (same as Footer)
  const socials = [
    { icon: <FaInstagram />, name: "Instagram", handle: "divuzl", url: "https://instagram.com/divuzl" },
    { icon: <FaLinkedinIn />, name: "LinkedIn", handle: "Divuzl", url: "https://linkedin.com/company/divuzl" },
    { icon: <FaFacebookF />, name: "Facebook", handle: "Divuzl", url: "https://facebook.com/divuzl" },
    { icon: <FaXTwitter />, name: "Twitter (X)", handle: "Divuzl", url: "https://x.com/Divuzl_" },
    { icon: <FaYoutube />, name: "YouTube", handle: "divuzl", url: "https://youtube.com/@divuzlglobal?si=GL5g7HKiOytPlyZm" },
    { icon: <FaWhatsapp />, name: "WhatsApp", handle: "+91 9220660377", url: "https://wa.me/919220660377" },
  ];

  useEffect(() => {
    if (textRef.current) {
      const split = new SplitText(textRef.current, { type: "lines" });
      gsap.from(split.lines, {
        y: 40,
        opacity: 0,
        stagger: 0.07,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });
    }

    gsap.utils.toArray(".animate-text").forEach((el) => {
      const split = new SplitText(el, { type: "lines" });
      gsap.from(split.lines, {
        y: 30,
        opacity: 0,
        stagger: 0.05,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });

    gsap.utils.toArray(".parallax").forEach((el) => {
      gsap.to(el, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-neutral-900 py-16 md:py-24 px-6 md:px-[10vw] space-y-24 md:space-y-32">

      {/* Tagline */}
      <div className="text-left">
        <p className="text-sm uppercase tracking-widest text-neutral-400 mb-2">Got an idea?</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#101010] animate-text">
          Let’s make something that people remember.
        </h1>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

        {/* Left Section — Form */}
        <div ref={formRef} className="space-y-14">
          <div ref={textRef}>
            <DecryptedText
              text={`Let’s build                            \nsomething cool                     \ntogether.`}
              speed={90}
              maxIterations={18}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabca1234567890"
              className="revealed"
              parentClassName="text-3xl lg:text-5xl font-light tracking-tight leading-snug whitespace-pre-line"
              encryptedClassName="encrypted"
            />
          </div>

          {state.succeeded ? (
            <p className="text-green-600 text-base font-medium">Thanks! Your message has been sent.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-sm montserrat-regular">
              <div className="relative group">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full border-b border-neutral-300 bg-transparent py-2 focus:outline-none focus:border-black placeholder:text-neutral-400 font-montserrat"
                />
              </div>

              <div className="relative group">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full border-b border-neutral-300 bg-transparent py-2 focus:outline-none focus:border-black placeholder:text-neutral-400"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Say something interesting..."
                  className="w-full border-b border-neutral-300 bg-transparent py-2 focus:outline-none focus:border-black placeholder:text-neutral-400 resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white hover:bg-[#0047FF] transition duration-300 text-sm"
              >
                <span>Send it</span>
                <span className="text-base">→</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Section — Info */}
        <div className="space-y-16 text-sm lg:pl-4 parallax">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="animate-text">
              <p className="text-neutral-500 uppercase text-xs tracking-widest mb-1">WhatsApp</p>
              <p className="text-lg font-medium">+91 9220660377</p>
              <p className="text-neutral-400 text-xs mt-1">10 AM – 7 PM IST, Mon–Sat</p>
            </div>

            <div className="animate-text">
              <p className="text-neutral-500 uppercase text-xs tracking-widest mb-1">Email</p>
              <div className="space-y-1 text-[15px]">
                {[
                  { label: "Owner", email: "owner@divuzl.com" },
                  { label: "Support", email: "support@divuzl.com" },
                  { label: "Payments", email: "payments@divuzl.com" },
                  { label: "Business", email: "contact@divuzl.com" },
                ].map(({ label, email }, i) => (
                  <div key={i}>
                    <span className="font-medium">{label}:</span>{" "}
                    <a href={`mailto:${email}`} className="text-[#0047FF] hover:underline">
                      {email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials Section */}
            <div className="animate-text">
              <p className="text-neutral-500 uppercase text-xs tracking-widest mb-4">Social</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#0047FF] transition text-[15px] "
                  >
                   <span className="w-8 h-8 flex items-center justify-center text-3xl">
  {s.icon}
</span>

                    <span>{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Us */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center text-sm w-full max-w-5xl mx-auto pt-12 border-t border-neutral-200 parallax dm-sans-body">
        {[
          { title: "Always Custom", desc: "No templates. No fluff. Just thoughtful design, built for you." },
          { title: "Tech-first", desc: "We blend creativity with performance — powered by code." },
          { title: "Real People", desc: "No agencies, no pipelines. You talk directly to the makers." },
        ].map((item, i) => (
          <div key={i} className="space-y-2 px-4 animate-text">
            <h4 className="text-base text-[20px] text-black">{item.title}</h4>
            <p className="text-neutral-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="mt-20 md:mt-24 text-center px-6 py-12 md:py-14 rounded-3xl parallax">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 animate-text">Let’s create your next breakthrough.</h2>
        <p className="text-sm text-neutral-500 mb-6 animate-text">We’re ready when you are.</p>
        <a
          href="mailto:contact@divuzl.com"
          className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-[#0047FF] transition text-sm"
        >
          Start the conversation
        </a>
      </div>
    </div>
  );
}
