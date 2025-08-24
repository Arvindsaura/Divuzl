import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const scrollToAbout = () => {
    const section = document.getElementById("about");
    if (location.pathname === "/") {
      if (section)
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: section, offsetY: 80 },
          ease: "power2.out",
        });
    } else {
      sessionStorage.setItem("scrollToAbout", "true");
      navigate("/");
    }
  };

  const NavLink = ({ to, text, onClick }) => (
    <button
      onClick={() => {
        if (onClick) onClick();
        else {
          if (location.pathname === to)
            gsap.to(window, {
              duration: 1,
              scrollTo: { y: 0 },
              ease: "power2.out",
            });
          else navigate(to);
        }
        setMenuOpen(false);
      }}
      className="nav-link"
    >
      {text}
    </button>
  );

  useEffect(() => {
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

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (menuOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        });
      }
    }
  }, [menuOpen]);

  return (
    <>
      <style>{`
        .navbar {
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          background-color: black;
          color: white;
          z-index: 50;
          padding: 1rem 0;
        }
        .nav-container {
          width: 92%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          cursor: pointer;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: nowrap;
        }
        .nav-link {
          text-transform: uppercase;
          font-weight: 500;
          font-size: 0.875rem;
          color: white;
          background: none;
          border: none;
          cursor: pointer;
        }
        .nav-link:hover { color: #0047FF; }
        .hamburger-btn { background: none; border: none; cursor: pointer; display: none; }
        .hamburger-icon { width: 1.5rem; height: 1.5rem; color: white; }
        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem 3%;
          background-color: black;
          overflow: hidden;
        }
        @media screen and (max-width: 1000px) {
          .desktop-nav { display: none; }
          .hamburger-btn { display: block; }
        }
        @media screen and (min-width: 1001px) {
          .mobile-nav { display: none !important; }
        }
      `}</style>

      <nav ref={navRef} className="navbar">
        <div className="nav-container">
          {/* Logo as Home Button */}
          <h1
            ref={logoRef}
            className="logo dm-sans-heading"
            onClick={() => navigate("/")}
          >
            Divuzl
          </h1>

          {/* Desktop Nav */}
          <div className="desktop-nav">
            <ul className="nav-links">
            
              <li><NavLink text="About Us" onClick={scrollToAbout} /></li>
              <li><NavLink to="/blogs" text="News" /></li>
              <li><NavLink to="/contact" text="Contact" /></li>
              <li><NavLink to="/services" text="Services" /></li>
              <li><NavLink to="/projects" text="Projects" /></li>
              <li><NavLink to="/team" text="Team" /></li>
            </ul>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
            aria-label="Toggle Menu"
          >
            <svg
              className="hamburger-icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          ref={mobileMenuRef}
          className="mobile-nav"
          style={{ alignItems: "flex-start" }}
        >
          {menuOpen && (
            <>
              <NavLink to="/" text="Home" />
              <NavLink text="About Us" onClick={scrollToAbout} />
              <NavLink to="/blogs" text="News" />
              <NavLink to="/contact" text="Contact" />
              <NavLink to="/services" text="Services" />
              <NavLink to="/projects" text="Projects" />
              <NavLink to="/team" text="Team" />
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
