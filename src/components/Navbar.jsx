import { UserButton, useUser } from "@clerk/clerk-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isSignedIn } = useUser();
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

  // Modified NavLink component to handle children and conditional rendering
  const NavLink = ({ to, text, onClick, isButton, children, className = "" }) => {
    const handleClick = (e) => {
      if (onClick) {
        onClick();
      } else if (to) {
        if (location.pathname === to) {
          e.preventDefault(); // Prevent default link behavior if on the same page
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: 0 },
            ease: "power2.out",
          });
        } else {
          navigate(to);
        }
      }
      setMenuOpen(false);
    };

    if (isButton) {
      return (
        <button onClick={handleClick} className={`nav-btn ${className}`}>
          {children || text}
        </button>
      );
    }
    
    // Renders an anchor tag for links, which is the correct semantic element
    return (
      <a href={to || "#"} onClick={handleClick} className={`nav-link ${className}`}>
        {children || text}
      </a>
    );
  };

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
         
        }
        .logo-link {
          text-decoration: none; /* Remove underline from the logo link */
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: nowrap;
          align-items: center;
        }
        .nav-link {
          
          font-weight: 500;
          font-size: 0.875rem;
          color: white;
          background: none;
          border: none;
          cursor: pointer;
        }
        .nav-link:hover { color: #0047FF; }
        
        .nav-btn {
          text-transform: uppercase;
          font-weight: 500;
          font-size: 0.875rem;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          border: 1px solid white;
          background-color: transparent;
          cursor: pointer;
          line-height: 1;
        }
        .nav-btn:hover {
          background-color: #f0f0f0;
          color: black;
        }
        
        .user-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .user-name { font-size: 0.875rem; color: #ccc; }
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
          {/* Logo is now the Home button */}
          <NavLink to="/" className="logo-link">
            <h1 ref={logoRef} className="logo dm-sans-heading ">
              Divuzl
            </h1>
          </NavLink>

          {/* Desktop Nav */}
          <div className="desktop-nav">
            <ul className="nav-links">
              {/* Home button removed */}
              <li>
                <NavLink text="ABOUT US" onClick={scrollToAbout} />
              </li>
              <li>
                <NavLink to="/blogs" text="NEWS" />
              </li>
              <li>
                <NavLink to="/contact" text="CONTACT" />
              </li>
              <li>
                <NavLink to="/services" text="SERVICES" />
              </li>
              <li>
                <NavLink to="/projects" text="PROJECTS" />
              </li>
              <li>
                <NavLink to="/team" text="TEAM" />
              </li>
              <li>
                {isSignedIn ? (
                  <div className="user-links">
                    <UserButton afterSignOutUrl="/" />
                    <span className="user-name">
                      {user.fullName || user.username || user.emailAddresses[0]?.emailAddress}
                    </span>
                  </div>
                ) : (
                  <div className="user-links">
                    <NavLink to="/signup" text="SIGN UP" isButton />
                    <NavLink to="/login" text="LOGIN" isButton />
                  </div>
                )}
              </li>
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
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div ref={mobileMenuRef} className="mobile-nav">
          {menuOpen && (
            <>
              {/* Home link removed from mobile menu */}
              <NavLink text="About Us" onClick={scrollToAbout} />
              <NavLink to="/blogs" text="News" />
              <NavLink to="/contact" text="Contact" />
              <NavLink to="/services" text="Services" />
              <NavLink to="/projects" text="Projects" />
              <NavLink to="/team" text="Team" />
              {isSignedIn ? (
                <div className="user-links">
                  <UserButton afterSignOutUrl="/" />
                  <span className="user-name">
                    {user.fullName || user.username || user.emailAddresses[0]?.emailAddress}
                  </span>
                </div>
              ) : (
                <>
                  <NavLink to="/signup" text="Sign Up" isButton />
                  <NavLink to="/login" text="Login" isButton />
                </>
              )}
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;