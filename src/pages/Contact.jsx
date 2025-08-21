import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const [state, handleSubmit] = useForm("mqalllgo");

  // Socials Array (same as Footer)
  const socials = [
    { icon: <FaInstagram />, url: "https://instagram.com/divuzl" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com/company/divuzl" },
    { icon: <FaFacebookF />, url: "https://facebook.com/divuzl" },
    { icon: <FaXTwitter />, url: "https://x.com/Divuzl_" },
    { icon: <FaYoutube />, url: "https://youtube.com/@divuzlglobal?si=GL5g7HKiOytPlyZm" },
    { icon: <FaWhatsapp />, url: "https://wa.me/919220660377" },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-neutral-900 py-16 md:py-24 px-6 md:px-[10vw] space-y-24 md:space-y-32 dm-sans-body">

      {/* Tagline */}
      <div className="text-left">
        <p className="text-sm uppercase tracking-widest text-neutral-400 mb-2">Got an idea?</p>
        <h1 className="text-5xl md:text-6xl  tracking-tight text-black">
          Let’s make something that people remember.
        </h1>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

        {/* Left Section — Form */}
        <div className="space-y-14">
          <div>
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight leading-snug whitespace-pre-line">
              Let’s build something cool together.
            </h2>
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
        <div className="space-y-16 text-sm lg:pl-4">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <p className="text-neutral-500 uppercase text-xs tracking-widest mb-1">WhatsApp</p>
              <p className="text-lg font-medium">+91 9220660377</p>
              <p className="text-neutral-400 text-xs mt-1">10 AM – 7 PM IST, Mon–Sat</p>
            </div>

            <div>
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
            <div>
              <p className="text-neutral-500 uppercase text-xs tracking-widest mb-4">Social</p>
              <div className="flex flex-row gap-4">
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
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Us */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center text-sm w-full max-w-5xl mx-auto pt-12 border-t border-neutral-200 dm-sans-body">
        {[
          { title: "Always Custom", desc: "No templates. No fluff. Just thoughtful design, built for you." },
          { title: "Tech-first", desc: "We blend creativity with performance — powered by code." },
          { title: "Real People", desc: "No agencies, no pipelines. You talk directly to the makers." },
        ].map((item, i) => (
          <div key={i} className="space-y-2 px-4">
            <h4 className="text-base text-[20px] text-black">{item.title}</h4>
            <p className="text-neutral-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="mt-20 md:mt-24 text-center px-6 py-12 md:py-14 rounded-3xl">
        <h2 className="text-xl md:text-2xl font-semibold mb-3">Let’s create your next breakthrough.</h2>
        <p className="text-sm text-neutral-500 mb-6">We’re ready when you are.</p>
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
