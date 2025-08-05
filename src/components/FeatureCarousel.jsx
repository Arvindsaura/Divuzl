import { useEffect, useRef, useState } from "react";

const FeatureCarousel = ({ services, navigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const totalSlides = Math.min(services.length, 5); // Show max 5

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 2000);

    return () => clearInterval(intervalRef.current);
  }, [totalSlides]);

  return (
    <div className="px-[12vw] mb-20">
      <div className="relative w-full h-[400px] rounded-3xl overflow-hidden group cursor-pointer">
        {services.slice(0, totalSlides).map((service, i) => (
          <div
            key={i}
            onClick={() => navigate(`/services/${service.slug}`)}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${service.image})` }}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-[#0047FF]/80 transition duration-500 flex items-end p-6">
              <div className="text-white space-y-2">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* === Dots === */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-[#0048ff]/10" : "bg-gray-400"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureCarousel;
