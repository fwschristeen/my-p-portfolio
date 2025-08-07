import React from "react";
import HeroSection from "./components/HeroSection";
import ContactLinks from "./components/Socials";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import Education from "./components/Education";
import ContactMe from "./components/contactme";
import Footer from "./components/footer";
import bgImage from "./assets/bg1.png"; 

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundAttachment:"fixed",
      }}
      className="text-black font-sans p-8"
    >
      <header className="sticky top-2 z-50 flex justify-between items-center mb-10">
        <div className="flex-1 flex justify-center">
          <nav className="space-x-6 hidden md:flex items-center bg-[#2563eb] px-6 py-4 shadow-md text-white rounded-3xl">
            <a
              href="#projects"
              className="px-3 py-1 hover:bg-gray-600 transition-colors duration-300 rounded-lg"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="px-3 py-1 hover:bg-gray-600 transition-colors duration-300 rounded-lg"
            >
              Skills
            </a>
            <a
              href="#Education"
              className="px-3 py-1 hover:bg-gray-600 transition-colors duration-300 rounded-lg"
            >
              Educational Qualifications
            </a>
            <a
              href="#contact"
              className="px-3 py-1 hover:bg-gray-600 transition-colors duration-300 rounded-lg"
            >
              Contact Me
            </a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <ContactLinks />
        <SkillsSection />
        <ProjectsSection />
        <Education />
        <ContactMe />
        <Footer />
      </main>
    </div>
  );
}

export default App;
