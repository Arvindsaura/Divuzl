const ServiceTags = () => {
  const tags = ["Content Marketing", "Social Media Marketing", "Search Engine Optimization"];
  return (
    <div className="flex justify-around bg-gray-100 py-4 text-sm font-medium font-mono">
      {tags.map((tag, i) => (
        <span key={i} className="flex items-center space-x-2">
          <span className="text-blue-500 text-xl">✱</span> <span>{tag}</span>
        </span>
      ))}
    </div>
  );
};

export default ServiceTags;
