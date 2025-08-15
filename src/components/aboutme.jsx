import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-12 px-8 bg-[#f3f4f6] text-center mt-10 rounded-2xl mx-6 shadow"
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg text-center text-gray-700 leading-relaxed max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        
        <p className="text-lg leading-relaxed text-gray-700">
  
  
  I’m <span className="font-semibold text-[#2563eb]">Christeen Fernando</span>, 
  an ambitious and adaptable software engineering student with a passion for creating innovative, high-quality, and reliable digital solutions.  
  I am currently pursuing my <span className="font-semibold">Software Engineering</span> degree at 
  NSBM Green University under the Plymouth University curriculum, where I continue to refine my technical expertise, problem-solving abilities, 
  and collaborative skills.
  <br /><br />
  My journey in software development is driven by curiosity and a commitment to continuous learning.  
  I thrive on tackling complex challenges, breaking them down into manageable steps, and delivering solutions that align with user expectations 
  and business objectives.  
  Whether working independently or as part of a team, I bring a positive attitude, strong analytical thinking, and a focus on producing 
  results that make a meaningful impact.
  <br /><br />
  I enjoy participating in the entire software development lifecycle — from gathering requirements and planning solutions to 
  testing, refining, and deploying final products.  
  I believe in building software that is not only functional but also sustainable, scalable, and adaptable to future needs.
  <br /><br />
  Beyond technical skills, I value clear communication, effective teamwork, and the ability to adapt quickly to evolving project demands.  
  I aim to contribute to an environment where innovation and collaboration drive success.  
  I’m currently seeking an <span className="font-semibold">internship opportunity</span> <br/>
   to apply my skills in real-world scenarios, gain hands-on industry experience, and contribute meaningfully to forward-thinking teams and organisations.


</p>


      </motion.p>
    </section>
  );
};

export default AboutMe;
