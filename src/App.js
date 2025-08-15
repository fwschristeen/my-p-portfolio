import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import Education from "./components/Education";
import ContactMe from "./components/contactme";
import Footer from "./components/footer";
import bgImage from "./assets/bg1.png";
import AboutMe from "./components/aboutme";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Refs
  const navbarRef = useRef(null);
  const desktopLinksRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Navbar + desktop link animation
  useEffect(() => {
    if (navbarRef.current) {
      const tl = gsap.timeline();
      tl.from(navbarRef.current, {
        y: -20,
        opacity: 1, // keep visible
        duration: 0.6,
        ease: "power2.out",
      }).fromTo(
        desktopLinksRef.current,
        { x: -20, opacity: 0.5 }, // semi-visible
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power2.out" },
        "-=0.2" // overlap timing
      );
    }
  }, []);

  // Animate mobile menu when it opens
  useEffect(() => {
    if (menuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -10, opacity: 0.5 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
      );

      gsap.fromTo(
        mobileMenuRef.current.querySelectorAll("li"),
        { x: -10, opacity: 0.5 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.1,
        }
      );
    }
  }, [menuOpen]);

  // Animate hamburger rotation
  useEffect(() => {
    if (hamburgerRef.current) {
      gsap.to(hamburgerRef.current, {
        rotate: menuOpen ? 90 : 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [menuOpen]);

  return (
   /* <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundAttachment: "fixed",
      }}
      className="text-black font-sans p-8"
    >*/
     <section className="bg-[#e0f2fe] text-black py-16 px-2 ">

      <header
        ref={navbarRef}
        className="sticky top-6 z-50 flex justify-between items-center mb-10"
      >
        <div className="flex-1 flex justify-center">
          <nav className="bg-[#2563eb] text-white rounded-3xl shadow-md flex items-center px-4 py-3 w-full max-w-4xl">
            {/* Logo */}
            <div className="text-lg font-bold">Christeen</div>

            {/* Desktop Menu */}
            <ul
              className="hidden md:flex space-x-6 ml-auto"
              ref={(el) => {
                if (el) {
                  desktopLinksRef.current = Array.from(
                    el.querySelectorAll("li")
                  );
                }
              }}
            >
              <li>
                <a
                  href="#projects"
                  className="px-3 py-1 hover:bg-gray-600 transition-colors duration-300 rounded-lg"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="px-3 py-1 hover:bg-gray-600 transition-colors duration-300 rounded-lg"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#Education"
                  className="px-3 py-1 hover:bg-gray-600 transition-colors duration-300 rounded-lg"
                >
                  Educational Qualifications
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="px-3 py-1 hover:bg-gray-600 transition-colors duration-300 rounded-lg"
                >
                  Contact Me
                </a>
              </li>
            </ul>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden ml-auto"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              ref={hamburgerRef}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12" // X icon
                      : "M4 6h16M4 12h16M4 18h16" // Hamburger
                  }
                />
              </svg>
            </button>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul
              className="bg-[#2563eb] text-white rounded-3xl shadow-md flex flex-col space-y-3 mt-2 p-4 max-w-4xl w-full absolute top-20 left-1/2 transform -translate-x-1/2 md:hidden z-50"
              ref={mobileMenuRef}
            >
              <li>
                <a
                  href="#projects"
                  className="block px-3 py-2 hover:bg-gray-600 rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block px-3 py-2 hover:bg-gray-600 rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#Education"
                  className="block px-3 py-2 hover:bg-gray-600 rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  Educational Qualifications
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block px-3 py-2 hover:bg-gray-600 rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Me
                </a>
              </li>
            </ul>
          )}
        </div>
      </header>

      <main>
        <HeroSection />
        <AboutMe/>
        <SkillsSection />
        <ProjectsSection />
        <Education />
        <ContactMe />
        <Footer />
      </main>
    </section>
    
  );
}

export default App;
