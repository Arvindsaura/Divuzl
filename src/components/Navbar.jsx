import { UserButton, useUser } from "@clerk/clerk-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isSignedIn } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);
  const logoRef = useRef(null);

  const scrollToAbout = () => {
    sessionStorage.setItem("scrollToAbout", "true");
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      const section = document.getElementById("about");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavLink = ({ to, text, onClick }) => (
    <button
      onClick={() => {
        if (onClick) onClick();
        else {
          navigate(to);
          setMenuOpen(false);
        }
      }}
      className="relative text-sm uppercase tracking-wide font-medium text-white hover:text-[#0047FF] transition-all duration-300"
    >
      <span className="hover-underline">{text}</span>
    </button>
  );

  useEffect(() => {
    // Animate entire navbar
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: navRef.current,
          start: "top top",
          toggleActions: "play none none none",
        },
      }
    );

    // Parallax effect on logo
    gsap.to(logoRef.current, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: navRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="w-75vw py-5 bg-black text-white fixed top-0 left-0 z-30 pl-[3vw]  dm-sans-heading "
    >
      <div className="w-[100vw] flex justify-between items-center px-8">
        {/* Logo */}
        <h1
          ref={logoRef}
          className="text-2xl font-bold  tracking-wider "
         
        >
          Divuzl
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items- gap-5">
          <ul className="flex gap-6">
            <li><NavLink to="/" text="Home" /></li>
            <li><NavLink text="About Us" onClick={scrollToAbout} /></li>
            <li><NavLink to="/blogs" text="News" /></li>
            <li><NavLink to="/contact" text="Contact" /></li>
            <li><NavLink to="/services" text="Services" /></li>
            <li><NavLink to="/projects" text="Projects" /></li>
            <li><NavLink to="/team" text="Team" /></li>
          </ul>

          <div className="flex items-center gap-4 ml-6">
            {isSignedIn ? (
              <>
                <UserButton afterSignOutUrl="/" />
                <span className="text-sm text-gray-500 font-medium">
                  {user.fullName || user.username || user.emailAddresses[0]?.emailAddress}
                </span>
              </>
            ) : (
              <>
                <NavLink to="/signup" text="Sign Up" />
                <NavLink to="/login" text="Login" />
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-8 space-y-4 pb-4">
          <NavLink to="/" text="Home" />
          <NavLink text="About Us" onClick={() => { scrollToAbout(); setMenuOpen(false); }} />
          <NavLink to="/blogs" text="News" />
          <NavLink to="/contact" text="Contact" />
          <NavLink to="/services" text="Services" />
          <NavLink to="/projects" text="Projects" />
          <NavLink to="/team" text="Team" />
          {isSignedIn ? (
            <div className="flex items-center gap-3">
              <UserButton afterSignOutUrl="/" />
              <span className="text-sm text-gray-500">
                {user.fullName || user.username || user.emailAddresses[0]?.emailAddress}
              </span>
            </div>
          ) : (
            <>
              <NavLink to="/signup" text="Sign Up" />
              <NavLink to="/login" text="Login" />
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
