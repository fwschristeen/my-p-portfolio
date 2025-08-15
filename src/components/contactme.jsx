import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
  const sectionRef = useRef(null);
  const detailRefs = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      detailRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        delay: 0.4,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-8 bg-[#f3f4f6] text-center mt-10 rounded-2xl mx-6 shadow mb-16"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <p className="text-center text-gray-600 mb-12">
          Currently seeking a challenging internship to gain hands-on experience and contribute to meaningful projects. Let’s connect!
        </p>

        <div className="space-y-6 text-center">
          <p ref={(el) => (detailRefs.current[0] = el)}>
            📧 Email:{" "}
            <a href="mailto:shenoli1120@gmail.com" className="text-blue-600 hover:underline">
              shenoli1120@gmail.com
            </a>
          </p>
          <p ref={(el) => (detailRefs.current[1] = el)}>
            💼 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/shenoli-christeen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/shenoli-christeen
            </a>
          </p>
          <p ref={(el) => (detailRefs.current[2] = el)}>
            💻 GitHub:{" "}
            <a
              href="https://github.com/fwschristeen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/fwschristeen
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
