import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blogsData from "../data/blogs";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
  const pillRef = useRef(null);
  const titleRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const navigate = useNavigate();
  const [randomBlogs, setRandomBlogs] = useState([]);

  useEffect(() => {
    // Animate pill
    if (pillRef.current) {
      gsap.fromTo(
        pillRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: pillRef.current,
            start: "top 90%",
          },
        }
      );
    }

    // Animate title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
          },
        }
      );
    }

    // Animate cards
    if (cardsContainerRef.current) {
      const cards = cardsContainerRef.current.querySelectorAll(".blog-card");
      if (cards.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }

    // Select 3 random blogs
    const shuffled = [...blogsData].sort(() => 0.5 - Math.random());
    setRandomBlogs(shuffled.slice(0, 3));
  }, []);

  return (
    <section className="bg-white w-[75vw] mx-auto dm-sans-heading py-12">
      {/* Pill */}
      <div className="mb-4 flex justify-end">
        <div
          ref={pillRef}
          className="inline-block px-4 py-1 border border-blue-500 text-blue-500 rounded-full text-sm font-semibold animate-text mb-[2vh]"
        >
          Blogs
        </div>
      </div>

      {/* Blog Cards */}
      <div ref={cardsContainerRef} className="flex flex-col lg:flex-row gap-8">
        {randomBlogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => navigate(`/blogs/${blog.id}`)}
            className="blog-card w-full lg:w-1/3 bg-white shadow-md rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer mb-10"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-58 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-900 mb-2 hover:text-blue-600 transition">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm dm-sans-body">
                {blog.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
