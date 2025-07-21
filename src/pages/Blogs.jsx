// src/pages/Blog.jsx
import BlogCard from "../components/BlogCard";
import blogs from '../data/blogs'; // ✅ Correct for default export

import "../index.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const titleRef = useRef(null);
  const subscribeRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
    });
    gsap.from(subscribeRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: subscribeRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="p-8 font-terrat space-y-16 bg-black text-white">
      {/* Newsroom Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Newsroom</h1>
        <p className="text-sm text-gray-400 mt-1">news and resources from the frontiers of digital marketing”</p>
      </div>

      {/* Featured Blog Section */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-900 text-white rounded-xl p-6 flex flex-col justify-between shadow-lg">
          <div>
            <p className="text-xs uppercase text-blue-400">Insight</p>
            <h2 className="text-xl font-bold mt-2 leading-tight">Why Your Business Needs Digital Marketing in 2025</h2>
            <p className="text-sm mt-2 text-gray-300">Discover how the digital shift is reshaping customer engagement and growth.</p>
          </div>
          <p className="text-xs mt-4 text-gray-500">July 12, 2025</p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/newsroom-main.png"
            alt="Newsroom Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Most Loved Title + Cards */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 ref={titleRef} className="text-3xl font-bold text-white">
            Most Loved by Our Readers
          </h2>
          <p className="text-sm text-blue-500 cursor-pointer hover:underline">Read now...</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Popular Blog 1 */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="/images/blog-loved-1.png" alt="Loved Blog 1" className="w-full h-full object-cover" />
          </div>
          {/* Popular Blog 2 */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="/images/blog-loved-2.png" alt="Loved Blog 2" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <div
        ref={subscribeRef}
        className="p-6 bg-gray-100 rounded-xl shadow-inner text-center space-y-4 text-gray-800"
      >
        <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
        <p>Get the latest blogs delivered straight to your inbox.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-full w-full sm:w-72 border border-gray-400 focus:outline-none"
          />
          <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 font-terrat">
            Subscribe
          </button>
        </div>
      </div>

      {/* All Blogs Grid */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
