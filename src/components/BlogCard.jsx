import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../index.css";

gsap.registerPlugin(ScrollTrigger);

const BlogCard = ({ blog }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="rounded-2xl border border-gray-200 p-5 bg-white shadow-sm hover:shadow-md duration-300 text-black font-['Montserrat'] flex flex-col"
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="rounded-xl w-full h-44 object-cover mb-4"
      />

      <div className="flex-1">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">{blog.title}</h2>
        <p className="text-gray-600 text-sm sm:text-base mb-5">{blog.description}</p>
      </div>

      <Link to={`/blogs/${blog.id}`} className="mt-auto">
        <button className="bg-[#0047FF] text-white px-5 py-2 text-sm rounded-full hover:bg-black transition-all duration-300">
          Read More →
        </button>
      </Link>
    </div>
  );
};

export default BlogCard;
