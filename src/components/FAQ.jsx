import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const headingRef = useRef(null);
  const answerRefs = useRef([]);
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Divuzl offer?",
      answer: "Divuzl offers branding, digital marketing, UI/UX design, and web development services tailored to your business needs.",
    },
    {
      question: "How does Divuzl create a custom marketing strategy for my business?",
      answer: "We analyze your business goals, audience, and competitors to craft a tailored plan that maximizes results.",
    },
    {
      question: "How soon can I expect to see results from digital marketing?",
      answer: "Typically, clients begin to see meaningful results within 4–6 weeks, depending on the scope and channels.",
    },
    {
      question: "What industries does Divuzl work with?",
      answer: "We work across industries — from startups to enterprise clients — in tech, FMCG, fashion, and more.",
    },
    {
      question: "Is Divuzl suitable for startups and small businesses?",
      answer: "Absolutely. We specialize in helping small businesses and startups establish a strong online presence.",
    },
    {
      question: "Why should I choose Divuzl over other marketing agencies?",
      answer: "We combine strategy, design, and tech to deliver impactful solutions with transparency and agility.",
    },
  ];

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    });
  }, []);

  const toggleFAQ = (index) => {
    const isOpen = openIndex === index;

    // Close previous one
    if (openIndex !== null && answerRefs.current[openIndex]) {
      gsap.to(answerRefs.current[openIndex], {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    // If clicking same one, just close
    if (isOpen) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
      gsap.fromTo(
        answerRefs.current[index],
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  };

  return (
    <section className="bg-white text-black py-16 px-6 max-w-4xl mx-auto">
      <h2 ref={headingRef} className="text-4xl font-bold mb-10">
        Got Questions? We’ve Got Answers
      </h2>
      <div className="divide-y divide-gray-300">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="text-xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              ref={(el) => (answerRefs.current[index] = el)}
              className="overflow-hidden text-sm text-gray-600"
              style={{
                height: 0,
                opacity: 0,
              }}
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
