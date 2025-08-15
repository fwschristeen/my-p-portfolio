import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const educationData = [
    {
      title: "BSc (Hons) Software Engineering",
      place: "Plymouth University, UK (2023 – Present)",
      desc: "Currently pursuing. Focused on UI/UX, frontend development, and mobile application development.",
    },
    {
      title: "Higher Diploma in Software Development",
      place: "INFORMATICS (2021 – 2022)",
      desc: "Covered software development systems including real client project practicals.",
    },
    {
      title: "English Diploma",
      place: "Aquinas College of Higher Studies (2023 – 2024)",
      desc: "Covered English language and Literature.",
    },
    {
      title: "Industry Preparation Training (IPT) Program",
      place: "NSBM Green University (2025)",
      desc: "Gained practical insights into the IT industry, sharpened technical and professional skills.",
    },
    {
      title: "G.C.E. Advanced Level",
      place: "Holy Family Convent (2020 – 2022)",
      desc: "3 A's in Commerce Section (Accounting, Economics, IT)",
    },
    {
      title: "G.C.E. Ordinary Level",
      place: "Holy Family Convent (2018 – 2019)",
      desc: "7 A's, 2 B's",
    },
  ];

  return (
    <section
      id="Education"
      className="py-12 px-6 bg-[#f3f4f6] text-center mt-10 rounded-2xl mx-6 shadow"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg text-gray-800 font-semibold uppercase mb-8">
          Educational Qualifications
        </h2>

        <div className="space-y-8">
          {educationData.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="bg-white p-6 rounded-xl shadow-md opacity-0 translate-y-6"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.place}</p>
              <p className="text-gray-700 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
