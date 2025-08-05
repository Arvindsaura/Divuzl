// src/pages/Blog.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import BlogCard from "../components/BlogCard";
import blogs from "../data/blogs";
import "../index.css";
import Footer from "../components/Footer";

const Blog = () => {
  const featuredRef = useRef(null);
  const subscribeRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    // Minimal scroll animation for major sections
    [featuredRef, subscribeRef, gridRef].forEach((ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative px-[12.5vw] py-16 font-montserrat space-y-24 bg-black text-white overflow-hidden">
      {/* 🔵 Parallax-style blur div */}
      <div className="absolute top-[20vh] left-0 w-[30vw] h-[30vh] bg-blue-800/30 blur-[100px] rounded-full z-0" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between w-full gap-4 relative z-10">
        <div className="bg-white text-black text-xs font-semibold py-1 px-4 rounded-full shadow-md">
          Blogs
        </div>
        <div className="text-right space-y-2 min-w-[200px]">
          <h1 className="text-4xl md:text-5xl font-bold mt-[5vw]">Newsroom</h1>
          <p className="text-sm md:text-base text-gray-400 max-w-sm">
            News and resources from the frontiers of digital marketing
          </p>
        </div>
      </div>

     <div
  ref={featuredRef}
  className="flex flex-col lg:flex-row bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg relative z-10"
>
  <div className="flex-1 p-6 flex flex-col justify-between min-h-[300px]">
    <div>
      <p className="text-xs uppercase text-blue-400 mb-2">Insight</p>
      <h2 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
        Why Your Business Needs Digital Marketing in 2025
      </h2>
      <p className="text-sm md:text-base text-gray-300">
        Discover how the digital shift is reshaping customer engagement and growth.
      </p>
    </div>
    <p className="text-xs mt-4 text-gray-500">July 12, 2025</p>
  </div>

  <div className="w-full lg:w-1/2 aspect-[16/10] lg:aspect-auto">
    <img
      src="/images/newsroom-main.jpg"
      alt="Newsroom Visual"
      className="w-full h-full object-cover"
    />
  </div>
</div>


      {/* Most Loved */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">
            Most Loved by Our Readers
          </h2>
          <p className="text-sm text-blue-500 cursor-pointer hover:underline">
            Read now...
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.01] transition-all duration-300 ease-in-out">
            <img
              src="/images/popular1.png"
              alt="Loved Blog 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.01] transition-all duration-300 ease-in-out">
            <img
              src="/images/popular2.png"
              alt="Loved Blog 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
<div
  ref={subscribeRef}
  className="p-6 bg-gray-100 rounded-xl shadow-inner text-center space-y-4 text-gray-800 relative z-10"
>
  <h2 className="text-2xl md:text-3xl font-bold">Subscribe to Our Newsletter</h2>
  <p className="text-sm md:text-base">
    Get the latest blogs delivered straight to your inbox.
  </p>

  {/* ✅ Add Formspree form */}
  <form
    action="https://formspree.io/f/xovlkqyp"
    method="POST"
    className="flex flex-col sm:flex-row items-center justify-center gap-4"
  >
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      required
      className="p-2 rounded-full w-full sm:w-72 border border-gray-400 focus:outline-none"
    />
    <button
      type="submit"
      className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 font-terrat text-sm md:text-base"
    >
      Subscribe
    </button>
  </form>
</div>


      {/* All Blogs Grid */}
      <div ref={gridRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
  key={blog.id}
  className="blog-card bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg flex flex-col h-full hover:scale-[1.01] transition-all duration-300 ease-in-out"
>
  <div className="flex flex-col justify-between h-full">
    <BlogCard blog={blog} index={index} />
  </div>
</div>

          ))}
        </div>
      </div>
    
    </div>
  );
};

export default Blog;
