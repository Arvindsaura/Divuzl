import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper to animate text letter-by-letter
  const AnimatedLink = ({ to, text }) => (
    <Link to={to} className="group inline-block overflow-hidden">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block transition duration-300 ease-in-out group-hover:text-[#0047FF]"
          style={{
            transitionDelay: `${i * 40}ms`,
          }}
        >
          {char}
        </span>
      ))}
    </Link>
  );

  return (
    <nav className="w-full px-6 py-4 border-b border-gray-300 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-black font-bold text-lg tracking-wide">DIVUZL</h1>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-6 uppercase text-sm font-medium tracking-wider text-black">
          <li><AnimatedLink to="/" text="Home" /></li>
          <li><AnimatedLink to="/about" text="About Us" /></li>
          <li><AnimatedLink to="/blogs" text="News" /></li>
          <li><AnimatedLink to="/contact" text="Contact" /></li>
          <li><AnimatedLink to="/services" text="Services" /></li>
          <li><AnimatedLink to="/projects" text="Projects" /></li>
        </ul>
        <button className="bg-black text-white px-5 py-1.5 rounded-full text-sm tracking-widest font-mono hover:bg-[#6ba9ff] transition-colors duration-300">
          LOGIN
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden z-20">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4 md:hidden z-10">
          <AnimatedLink to="/" text="Home" />
          <AnimatedLink to="/about" text="About Us" />
          <AnimatedLink to="/news" text="News" />
          <AnimatedLink to="/contact" text="Contact" />
          <AnimatedLink to="/services" text="Services" />
          <AnimatedLink to="/projects" text="Projects" />
          <button className="bg-black text-white px-5 py-1.5 rounded-full text-sm tracking-widest font-mono hover:bg-[#FF6B6B] transition-colors duration-300">
            LOGIN
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
