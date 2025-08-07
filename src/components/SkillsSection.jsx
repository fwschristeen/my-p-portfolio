import React from 'react';
import {
  SiJavascript, SiReact, SiTailwindcss,SiFigma,SiHtml5, SiCss3,SiPhp,SiFirebase
} from 'react-icons/si';

import { FaCode } from 'react-icons/fa'; 

const skills = [
  { icon: <SiJavascript size={40} />, label: 'JavaScript' },
  { icon: <SiReact size={40} />, label: 'React' },
  { icon: <SiTailwindcss size={40} />, label: 'Tailwindcss.js' },
  { icon: <SiFigma size={40} />, label: 'Figma' },
  { icon: <SiHtml5 size={40} />, label: 'HTML' },
  { icon: <SiCss3 size={40} />, label: 'CSS' },
  { icon: <SiPhp size={40} />, label: 'Php' },
  { icon: <FaCode size={40} />, label: 'C#' }, 
  { icon: <SiFirebase size={40} />, label: 'Firebase' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-8 bg-[#f3f4f6] text-center mt-10 rounded-2xl mx-6 shadow">
      <p className="text-lg text-gray-800 font-semibold uppercase mb-4">Skills</p>
      <h2 className="text-2xl font-medium mb-6">
        The skills, tools and technologies I am really good at:
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-gray-800 hover:text-black transition">{skill.icon}</div>
            <p className="text-sm mt-2">{skill.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
