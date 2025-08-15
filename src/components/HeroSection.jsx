import React, { useEffect, useRef } from "react";
import profileImage from "../assets/profile4.jpeg";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ReactTyped} from "react-typed";
import Tilt from "react-parallax-tilt";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gsap-image", {
        scrollTrigger: {
          trigger: ".gsap-image",
          start: "top 90%",
        },
        scale: 0.85,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div
      ref={heroRef}
      className="w-full flex flex-col-reverse lg:flex-row items-center justify-center px-24 py-16 gap-12 text-center lg:text-left"
    >
      {/* Left: Text Content */}
      <div className="flex-1 space-y-6 max-w-2xl text-[#1e293b] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          <ReactTyped
          strings={["Welcome,<br/> I’m Christeen Fernando 👋🏻"]}

          typeSpeed={30}
          showCursor={true}
          />
          
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl md:text-3xl font-medium leading-snug text-[#334155]"
        >
            A Software Engineering student passionate about building reliable, scalable and imapactful applications for diverse platforms.      
        </motion.h3>
        
        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}       
          className="text-lg text-[#475569] font-medium leading-relaxed">
           "Driven to solve problems, collaborate effectively, and deliver solutions that bring real value to users and businesses."
         <br/>
          🎓 | 👩🏻‍💻 | 🎯
        </motion.h4>

          <Tilt
            tiltMaxAngleX={30}
            tiltMaxAngleY={20}
            scale={1.05}
            transitionSpeed={800}
            glareEnable={false}
            glareMaxOpacity={0.2}
            className="inline-block"
          >           

        <a
          href={`${process.env.PUBLIC_URL}/cv.pdf`}
          download="F.W.S.Christeen.pdf"
          className="inline-block border bg-[#2563eb] px-5 py-2 rounded-full text-sm hover:bg-black text-white transition-colors duration-300 hover:text-gray-300"
        >
          Download CV
        </a>
        </Tilt>
      </div>

      {/* Right: Profile Image with spinning ring */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full">
          <div className="absolute inset-0 border-4 border-[#2563eb] rounded-full animate-spin-slow"></div>
          <img
            src={profileImage}
            alt="Christeen Fernando"
            className="w-full h-full rounded-full object-cover relative z-10 shadow-lg gsap-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
