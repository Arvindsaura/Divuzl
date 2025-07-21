import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  const blogs = [
    {
      title: "The Power of SEO in 2025",
      desc: "Discover how modern SEO strategies can drive traffic, build authority, and increase conversions...",
      img: "src/images/blogsection1.jpg",
    },
    {
      title: "Social Media Marketing That Actually Works",
      desc: "Learn how to craft social campaigns that boost engagement...",
      img: "src/images/blogsection2.jpg",
    },
    {
      title: "Content Is Still King — But Strategy Is the Kingdom",
      desc: "Learn how a smart content marketing approach can build trust...",
      img: "src/images/blogsection3.jpg",
    },
  ];

  useEffect(() => {
    // Animate right-side heading
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    });

    // Animate cards
    cardRefs.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <section className="bg-white py-24 px-6">
     <div className="flex-1 lg:pt-10">
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight text-center lg:text-right"
          >
            We Write What Works: <br />
            Tips, Tricks & Truths <br />
            from the Digital Space
          </h2>
        </div>
        {/* Left: Blog Cards */}
        <div className="flex-1 mx-35 my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <div
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition duration-300 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-3 right-3 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17l9.2-9.2M17 17V7H7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 hover:text-blue-600 transition">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{blog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Heading */}
        
  
    </section>
  );
};

export default BlogSection;
