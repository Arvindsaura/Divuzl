import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blogsData from "../data/blogs"; // ✅ import all blogs
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
  const pillRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);
  const navigate = useNavigate();

  const featuredBlogs = [
    {
      title: "The Power of SEO in 2025",
      desc: "Discover how modern SEO strategies can drive traffic, build authority, and increase conversions...",
      img: "/images/blogsection1.jpg",
    },
    {
      title: "Social Media Marketing That Actually Works",
      desc: "Learn how to craft social campaigns that boost engagement...",
      img: "/images/blogsection2.jpg",
    },
    {
      title: "Content Is Still King — But Strategy Is the Kingdom",
      desc: "Learn how a smart content marketing approach can build trust...",
      img: "/images/blogsection3.jpg",
    },
  ];

  const [randomBlogs, setRandomBlogs] = useState([]);

  useEffect(() => {
    // GSAP Animations
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

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
          delay: index * 0.2,
        }
      );
    });

    // Select 3 random blogs from imported data
    const shuffled = [...blogsData].sort(() => 0.5 - Math.random());
    setRandomBlogs(shuffled.slice(0, 3));
  }, []);

  return (
    <section className="bg-white  w-[75vw] mx-auto">

      {/* Pill */}
      <div className="mb-4 flex justify-end">
        <div
          ref={pillRef}
          className="inline-block px-4 py-1 border border-blue-500 text-blue-500 rounded-full text-sm font-semibold animate-text"
        >
          Blogs
        </div>
      </div>

    
      {/* More Blogs Section */}
      <div >
       

        <div className="flex flex-col lg:flex-row gap-8">
          {randomBlogs.map((blog, i) => (
            <div
              key={i}
              onClick={() => navigate(`/blogs/${blog.id}`)}
              className="w-full lg:w-1/3 bg-white shadow-md rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 hover:text-blue-600 transition">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
