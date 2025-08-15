import React, { useEffect, useRef } from 'react';
import {
  SiJavascript, SiReact, SiTailwindcss, SiFigma, SiHtml5, SiCss3,
  SiPhp, SiFirebase,SiMysql
} from 'react-icons/si';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaJava } from "react-icons/fa";          // Java icon (Font Awesome)
import { TbBrandCSharp } from "react-icons/tb"; 

gsap.registerPlugin(ScrollTrigger);

// Add JSP & backend/db items you use
const skills = [
  { icon: <SiJavascript />, label: 'JavaScript' },
  { icon: <SiReact />, label: 'React' },
  { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
  { icon: <SiHtml5 />, label: 'HTML' },
  { icon: <SiCss3 />, label: 'CSS' },
  { icon: <SiMysql />, label: 'MySQL' },
  { icon: <SiFirebase />, label: 'Firebase' },
  { icon: <SiPhp />, label: 'PHP' },
  { icon: <SiFigma />, label: 'Figma' },
  { icon: <FaJava />, label: "Java / JSP" },         
  { icon: <TbBrandCSharp />, label: "C#" }, 
  
];

const SkillsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Respect user preference for reduced motion
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) return;

      const items = gsap.utils.toArray('.skill-item');
      items.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 16, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: 'power1.out',
            delay: i * 0.06,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true, // animate once
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-12 px-8 bg-[#f3f4f6] text-center mt-10 rounded-2xl mx-6 shadow"
      aria-labelledby="skills-heading"
    >
      <p className="text-lg text-gray-800 font-semibold uppercase mb-2">Skills</p>
      <h2 id="skills-heading" className="text-2xl font-medium mb-6">
        The skills, tools, and technologies I’m confident with
      </h2>

      <ul
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto"
        role="list"
      >
        {skills.map((skill) => (
          <li
            key={skill.label}
            className="skill-item flex flex-col items-center p-4 rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-110 transform-gpu focus-within:scale-110 outline-none"
          >
            {/* Icon inherits font-size, so we do responsive sizes via text classes */}
            <span
              className="text-5xl md:text-6xl lg:text-7xl text-slate-800 hover:text-black transition-colors"
              aria-hidden="true"
            >
              {skill.icon}
            </span>
            <span
              className="text-sm mt-3 font-semibold text-slate-800"
              aria-label={skill.label}
            >
              {skill.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
