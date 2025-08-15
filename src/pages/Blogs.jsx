// src/pages/Blog.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import blogs from "../data/blogs";
import Footer from "../components/Footer";
import "../index.css";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const featuredRef = useRef(null);
  const subscribeRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
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
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="relative bg-white text-neutral-900 font-montserrat overflow-hidden">
      {/* 🔵 Minimal floating blue shape */}
      <div className="absolute top-[20vh] left-[10vw] w-[25vw] h-[25vw] bg-blue-500/10 blur-[120px] rounded-full z-0" />

      {/* Header */}
      <header className="px-[12.5vw] pt-28 pb-12 relative z-10 flex flex-col gap-3">
        <span className="bg-blue-500/10 text-blue-700 text-xs font-semibold py-1 px-4 rounded-full w-fit">
          Blogs
        </span>
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight">
          Newsroom
        </h1>
        <p className="text-neutral-500 max-w-md">
          News and resources from the frontiers of digital marketing
        </p>
      </header>

      {/* Featured Blog */}
      <section
        ref={featuredRef}
        className="px-[12.5vw] relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-8 items-stretch bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-200">
          {/* Text */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase text-blue-500 mb-2">Insight</p>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                Why Your Business Needs Digital Marketing in 2025
              </h2>
              <p className="mt-3 text-neutral-600">
                Discover how the digital shift is reshaping customer engagement and growth.
              </p>
            </div>
            <p className="text-xs mt-6 text-neutral-400">July 12, 2025</p>
          </div>
          {/* Image */}
          <div className="w-full h-full">
            <img
              src="/images/newsroom-main.jpg"
              alt="Newsroom Visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Most Loved */}
      <section className="px-[12.5vw] py-20 relative z-10">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold">
            Most Loved by Our Readers
          </h2>
          <Link
            to="/blogs"
            className="text-sm text-blue-600 hover:underline"
          >
            Read now...
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {["/images/popular1.png", "/images/popular2.png"].map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-neutral-200 hover:scale-[1.02] transition-transform duration-300 ease-in-out"
            >
              <img src={img} alt={`Loved Blog ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section
        ref={subscribeRef}
        className="px-[12.5vw] pb-20 relative z-10"
      >
        <div className="p-10 bg-neutral-50 rounded-3xl border border-neutral-200 text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="text-neutral-600">
            Get the latest blogs delivered straight to your inbox.
          </p>
          <form
            action="https://formspree.io/f/xovlkqyp"
            method="POST"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="p-3 rounded-full w-full sm:w-72 border border-neutral-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* All Blogs Grid */}
      <section ref={gridRef} className="px-[12.5vw] pb-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200 hover:scale-[1.02] transition-transform duration-300"
            >
              <BlogCard blog={blog} index={index} />
            </div>
          ))}
        </div>
      </section>

    
    </div>
  );
};

export default Blog;
