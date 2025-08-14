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
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="font-montserrat flex flex-col bg-white rounded-2xl p-6  hover:border-[#0047FF] transition-colors duration-300"
    >
      {/* Image */}
      <Link to={`/blogs/${blog.id}`} className="block overflow-hidden rounded-xl">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
        />
      </Link>

      {/* Text */}
      <div className="mt-6 flex flex-col flex-1 gap-4">
        <Link to={`/blogs/${blog.id}`}>
          <h2 className="text-xl font-semibold text-neutral-900 leading-snug hover:text-[#0047FF] transition-colors">
            {blog.title}
          </h2>
        </Link>

        <p className="text-neutral-600 text-sm leading-relaxed flex-1">
          {blog.description}
        </p>

        {/* Read More */}
        <Link
          to={`/blogs/${blog.id}`}
          className="text-[#0047FF] text-sm font-medium hover:underline inline-flex items-center gap-1"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
