import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const headingRef = useRef(null);
  const answerRefs = useRef([]);
  const faqRefs = useRef([]);
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Divuzl offer?",
      answer:
        "Divuzl offers branding, digital marketing, UI/UX design, and web development services tailored to your business needs.",
    },
    {
      question: "How does Divuzl create a custom marketing strategy for my business?",
      answer:
        "We analyze your business goals, audience, and competitors to craft a tailored plan that maximizes results.",
    },
    {
      question: "How soon can I expect to see results from digital marketing?",
      answer:
        "Typically, clients begin to see meaningful results within 4–6 weeks, depending on the scope and channels.",
    },
    {
      question: "What industries does Divuzl work with?",
      answer:
        "We work across industries — from startups to enterprise clients — in tech, FMCG, fashion, and more.",
    },
    {
      question: "Is Divuzl suitable for startups and small businesses?",
      answer:
        "Absolutely. We specialize in helping small businesses and startups establish a strong online presence.",
    },
    {
      question: "Why should I choose Divuzl over other marketing agencies?",
      answer:
        "We combine strategy, design, and tech to deliver impactful solutions with transparency and agility.",
    },
  ];

  const toggleFAQ = (index) => {
    const isOpen = openIndex === index;

    if (openIndex !== null && answerRefs.current[openIndex]) {
      gsap.to(answerRefs.current[openIndex], {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    }

    if (isOpen) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
      gsap.fromTo(
        answerRefs.current[index],
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }
  };

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );
    }

    faqRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: index * 0.05,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          }
        );
      }
    });
  }, []);

  return (
   <section className="bg-white py-24 w-[90vw] sm:w-[85vw] lg:w-[75vw] mx-auto px-4 sm:px-6 dm-sans-heading">


      {/* Tag */}
      <div className="flex justify-start mb-4">
        <div className="inline-block px-4 py-1 border border-blue-500 text-blue-500 rounded-full text-sm font-semibold">
          FAQ
        </div>
      </div>

      {/* Heading */}
      <h2
        ref={headingRef}
        className="text-5xl md:text-6xl font-bold mb-10 leading-tight"
      >
        Got Questions? We’ve Got Answers
      </h2>

      {/* FAQs */}
      <div className="divide-y divide-gray-300">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="py-4"
            ref={(el) => (faqRefs.current[index] = el)}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left transition-all duration-300"
            >
              <span className="text-base md:text-lg font-medium text-black">
                {faq.question}
              </span>
              <span className="text-xl font-bold text-blue-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              ref={(el) => (answerRefs.current[index] = el)}
              className="overflow-hidden text-sm text-gray-600"
              style={{ height: 0, opacity: 0 }}
            >
              <p className="mt-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
