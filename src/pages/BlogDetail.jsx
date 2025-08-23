import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogs from "../data/blogs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import SplitType from "split-type";
import BlogSection from "../components/BlogSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const headingSplitRef = useRef(null);
  const imageRef = useRef(null);
  const paragraphRef = useRef(null);

  const blog = blogs.find((b) => b.id === id);

  useEffect(() => {
    if (!ScrollSmoother.get()) {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
      });
    }

    const animateText = (target) => {
      if (!target) return;
      const split = new SplitType(target, { types: "words" });
      gsap.from(split.words, {
        y: 40,
        opacity: 0,
        stagger: 0.05,
        ease: "power3.out",
        duration: 1,
        scrollTrigger: {
          trigger: target,
          start: "top 85%",
        },
      });
    };

    animateText(titleRef.current);
    animateText(headingSplitRef.current);

    if (contentRef.current) {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
      });
    }

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { y: 0 },
        {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    if (paragraphRef.current) {
      gsap.from(paragraphRef.current, {
        y: 30,
        opacity: 0,
        ease: "power2.out",
        duration: 0.8,
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 90%",
        },
      });
    }
  }, []);

  if (!blog) {
    return (
      <div className="text-center text-[#111] py-20">
        <h1 className="text-3xl font-bold mb-4 font-terrat">Blog not found</h1>
        <button
          onClick={() => navigate("/blogs")}
          className="bg-[#0047FF] text-white py-2 px-6 rounded-full font-terrat hover:bg-blue-600 transition"
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div id="smooth-wrapper" className="bg-white text-[#111] font-terrat">
      <div id="smooth-content">
        {/* Hero */}
        <section className="h-[50vh] sm:h-[40vh] px-[12vw] flex flex-col items-center justify-center text-center space-y-4">
          <h1
            ref={titleRef}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            {blog.title}
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            Published on {blog.date}
          </p>
          <p className="text-black font-bold text-lg">
            {blog.author || "Unknown Author"}
          </p>
        </section>

        {/* Blog Image */}
        <section className="w-[75vw] mx-auto">
          <img
            ref={imageRef}
            src={blog.image}
            alt={blog.title}
            className="rounded-3xl shadow-xl object-cover w-full aspect-video"
          />
        </section>

        {/* Blog Content */}
        <section className="py-24 px-[12vw]">
          <div
            ref={contentRef}
            className="w-full flex flex-col justify-center space-y-8"
          >
            <p className="text-lg text-gray-700">{blog.description}</p>
          </div>

          <div className="mt-12 whitespace-pre-line text-[#444] text-base leading-7 dm-sans-body">
            {blog.content}
          </div>
        </section>

        {/* Visual Section */}
        <section className="px-[12vw] py-32 flex flex-col md:flex-row items-center gap-16 bg-white">
          <div className="md:w-1/2 w-full">
            <h2
              ref={headingSplitRef}
              className="text-3xl md:text-4xl font-regular mb-6 leading-tight"
            >
              Built Different,<br />Designed for the Future.
            </h2>
            <p
              ref={paragraphRef}
              className="text-base text-[#444] leading-relaxed"
            >
              Speed meets elegance. Our platform delivers an intuitive experience
              crafted for productivity and performance. No distractions—just
              smooth, seamless usability that scales with you.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="rounded-3xl overflow-hidden w-full aspect-video">
              <img
                src="https://i.pinimg.com/1200x/71/dc/0f/71dc0f02ac6f9179fa3791ffd5ba2304.jpg"
                className="w-full h-full object-cover"
                alt="Preview"
              />
            </div>
          </div>
        </section>

        {/* More Blogs */}
        <section className="px-[12vw] py-20 rounded-t-[2rem]">
          <h2 className="text-3xl md:text-4xl font-regular mb-4">
            Loved This? <br />Here Are More Blogs You’ll Definitely Enjoy
          </h2>
          <div className="fixed top-[-10vh] right-[-10vw] w-[300px] h-[300px] rounded-full blur-[100px] opacity-40 -z-10" />
          <BlogSection />
        </section>
      </div>
    </div>
  );
};

export default BlogDetail;
