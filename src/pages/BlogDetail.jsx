import { useParams } from "react-router-dom";
import blogs from '../data/blogs'; // ✅ Correct for default export


const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <div className="text-white p-10">Blog not found</div>;

  return (
    <div className="bg-white text-black font-montserrat min-h-screen px-6 lg:px-20 py-12">
      <h1 className="text-4xl font-bold text-center">{blog.title}</h1>
      <p className="text-sm text-center text-gray-500 mt-2">Published on {blog.date}</p>

      <div className="mt-8 flex items-center gap-4 justify-center">
        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">{blog.author.charAt(0)}</div>
        <div className="text-sm">
          <p className="font-semibold">{blog.author}</p>
          <p className="text-gray-500">Web Developer</p>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <img src={blog.img} alt={blog.title} className="rounded-xl w-full max-w-2xl object-cover" />
      </div>

      <div className="max-w-3xl mx-auto mt-10 text-lg leading-7 text-gray-800 whitespace-pre-line">
        {blog.content}
      </div>
    </div>
  );
};

export default BlogDetails;
