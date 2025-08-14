import React, { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import DecryptedText from "../components/DecryptedText";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Contact() {
  const formRef = useRef();
  const textRef = useRef();
  const [state, handleSubmit] = useForm("mqalllgo");

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

    // Animate all other text elements
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

    // Parallax effect
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
    <>
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
              text={`Let’s build\nsomething cool\ntogether.`}
              speed={90}
              maxIterations={18}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
              className="revealed"
              parentClassName="text-3xl lg:text-5xl font-light tracking-tight leading-snug whitespace-pre-line"
              encryptedClassName="encrypted"
            />
          </div>

          {state.succeeded ? (
            <p className="text-green-600 text-base font-medium">Thanks! Your message has been sent.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-sm">
              <div className="relative group">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full border-b border-neutral-300 bg-transparent py-2 focus:outline-none focus:border-black placeholder:text-neutral-400"
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
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white hover:bg-neutral-900 transition duration-300 text-sm"
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
                    <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
                      {email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-text">
              <p className="text-neutral-500 uppercase text-xs tracking-widest mb-1">Instagram</p>
              <a
                href="https://instagram.com/divuzl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-[15px]"
              >
                @divuzl
              </a>
            </div>
          </div>

         
        </div>
      </div>

      {/* Why Us — Minimal Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center text-sm w-full max-w-5xl mx-auto pt-12 border-t border-neutral-200 parallax">
        {[
          { title: "Always Custom", desc: "No templates. No fluff. Just thoughtful design, built for you." },
          { title: "Tech-first", desc: "We blend creativity with performance — powered by code." },
          { title: "Real People", desc: "No agencies, no pipelines. You talk directly to the makers." },
        ].map((item, i) => (
          <div key={i} className="space-y-2 px-4 animate-text">
            <h4 className="text-base font-medium text-black">{item.title}</h4>
            <p className="text-neutral-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Final CTA Stripe */}
      <div className="mt-20 md:mt-24 text-center px-6 py-12 md:py-14 rounded-3xl  parallax">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 animate-text">Let’s create your next breakthrough.</h2>
        <p className="text-sm text-neutral-500 mb-6 animate-text">We’re ready when you are.</p>
        <a
          href="mailto:contact@divuzl.com"
          className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-900 transition text-sm"
        >
          Start the conversation
        </a>
      </div>
    </div>
    <Footer/>
    </>

  );
}
