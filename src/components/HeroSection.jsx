import React from "react";
import profileImage from "../assets/profile1.jpeg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-6 gap-8 lg:gap-12 text-left">
      
      {/* Left: Text Content */}
      <div className="flex-1 space-y-6 text-[#1e293b]">
        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold"
        >
          Welcome,<br/>
          I’m Christeen Fernando
        </motion.h2>

        {/* Tagline */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl md:text-3xl font-medium leading-snug max-w-2xl"
        >
          Building modern UI/UX, responsive front-end websites, and cross-platform mobile apps.
        </motion.h3>
       

        {/* Bio */}
        <p className="text-lg text-gray-700 max-w-2xl font-semibold">
          Hello! I’m a third-year Software Engineering student at
          NSBM Green University, studying under the Plymouth University curriculum.
          My primary focus is on UI/UX design, front-end development,
          and mobile app development. Whether I’m working with Figma, React, or Flutter,
          I enjoy bringing clean, thoughtful design to life through code.
        </p>

        <a
           href="/cv.pdf"  
           download="cv.pdf"
           className="inline-block border bg-[#2563eb] px-4 py-2 rounded-full text-sm hover:bg-black text-white transition-colors duration-300 hover:text-gray-500">
        Download CV
       </a>

      </div>

      {/* Right: Profile Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={profileImage}
          alt="Christeen Fernando"
          className="w-80 h-80 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
