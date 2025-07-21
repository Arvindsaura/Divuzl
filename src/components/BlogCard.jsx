import { Link } from "react-router-dom";
import "../index.css";

const borderVariants = [
  "border-blue-400",
  "border-green-400",
  "border-pink-400",
  "border-yellow-400",
  "border-purple-400",
];

const BlogCard = ({ blog, index }) => {
  const randomBorder = borderVariants[index % borderVariants.length];

  return (
    <Link to={`/blogs/${blog.id}`} className="block group transition-transform hover:scale-105">
      <div className={`rounded-xl border-2 ${randomBorder} p-4 bg-white`}>
        <img
          src={blog.image}
          alt={blog.title}
          className="rounded-xl w-full h-48 object-cover mb-4"
        />
        <h2 className="font-terrat text-xl font-bold mb-2 text-gray-800 group-hover:underline">
          {blog.title}
        </h2>
        <p className="text-gray-600 font-terrat mb-4">{blog.description}</p>
        <span className="bg-black text-white py-2 px-4 rounded-full text-sm font-terrat inline-block">
          Read More →
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
