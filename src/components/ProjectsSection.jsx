import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tilt from "react-parallax-tilt";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Blood Donation System",
    description:
      "A Windows Forms application for managing donor records, blood inventory,and hospital requests, designed to streamline blood donation processes efficiently.",
    images: [
      `${process.env.PUBLIC_URL}/assets/IMG_6569.jpg`,
      `${process.env.PUBLIC_URL}/assets/IMG_6570.jpg`,
    ],
    tags: ["C#", "MySql"],
  },
  {
    name: "Skylink",
    description:
      "A mobile application that allows users to find licensed drone operators and access a marketplace to buy and sell drones. It simplifies drone-related services and trading through a user-friendly interface.",
    images: [
      `${process.env.PUBLIC_URL}/assets/sky1.png`,
      `${process.env.PUBLIC_URL}/assets/sky2.png`,
      `${process.env.PUBLIC_URL}/assets/sky3.png`,
      `${process.env.PUBLIC_URL}/assets/sky4.png`,
      `${process.env.PUBLIC_URL}/assets/sky5.png`,
      `${process.env.PUBLIC_URL}/assets/sky6.png`,
    ],
    tags: ["Dart", "Firebase"],
  },
  {
    name: "Resturent Reservation System",
    description:
      "A web-based restaurant reservation system that enables users to browse available time slots and book tables online. It allows restaurant managers to manage bookings, update table availability, and streamline the reservation process efficiently.",
    images: [
      `${process.env.PUBLIC_URL}/assets/res1.png`,
      `${process.env.PUBLIC_URL}/assets/res2.png`,
      `${process.env.PUBLIC_URL}/assets/res3.png`,
      `${process.env.PUBLIC_URL}/assets/res4.png`,
      `${process.env.PUBLIC_URL}/assets/res5.png`,
      `${process.env.PUBLIC_URL}/assets/res6.png`,
    ],
    tags: ["HTML", "CSS", "JSP", "JavaScript", "Bootstrap", "Java"],
  },
  {
    name: "Movie Booking System",
    description:
      "a web application that lets users view showtimes, select seats, and book  tickets online. It also manages movies, schedules, and payments.",
    images: [
      `${process.env.PUBLIC_URL}/assets/mv1.jpg`,
      `${process.env.PUBLIC_URL}/assets/mv2.jpg`,
      `${process.env.PUBLIC_URL}/assets/mv3.jpg`,
    ],
    tags: ["HTML", "CSS", "JSP", "JavaScript", "Bootstrap", "Java"],
  },
];

const ProjectsSection = () => {
  const containerRefs = useRef([]);

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      containerRefs.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power1.out",
        stagger: 0.8,
        scrollTrigger: {
          trigger: containerRefs.current,
          start: "top 60%",
          toggleActions: "play none play none", // runs once on scroll down only
        },
      }
    );
  }, containerRefs);

  return () => ctx.revert();
}, []);




  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <section
      id="projects"
      className="py-12 px-8 bg-[#f3f4f6] text-center mt-10 rounded-2xl mx-6 shadow"
    >
      <p className="text-sm text-gray-500 font-semibold uppercase mb-2">Work</p>
      <h2 className="text-2xl font-medium mb-10">
        Some of the noteworthy projects I have built:
      </h2>

      <div className="space-y-16 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (containerRefs.current[index] = el)}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10 bg-white rounded-xl shadow-lg p-6`}
          >
            {/* Image or Slider */}
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
             <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={20}
                scale={1.20}
                transitionSpeed={1000}
                glareEnable={true}
                glareMaxOpacity={0.2}
                className="rounded-xl  shadow-lg"
              >
              {project.images ? (
                <Slider {...sliderSettings}>
                  {project.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${project.name} screenshot ${idx + 1}`}
                      className="rounded-xl w-full h-64 object-contain"
                    />
                  ))}
                </Slider>
              ) : (

                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-xl w-full h-64 object-cover"
                />
                
              )}
              </Tilt>
            </div>

            {/* Project Info */}
            <div className="text-left md:w-1/2">
              <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
