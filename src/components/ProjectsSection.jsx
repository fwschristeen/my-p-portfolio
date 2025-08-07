import React from "react";
import Slider from "react-slick";
import { FaExternalLinkAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    name: "Blood Donation System",
    description:
      "A Windows Forms application for managing donor records, blood inventory,and hospital requests, designed to streamline blood donation processes efficiently.",
    images: [
      "/assets/IMG_6569.jpg",
      "/assets/IMG_6570.jpg",
    ],
    tags: [
      "C#","MySql"
    ],
  },
  {
    name: "Skylink",
    description:
      "A mobile application that allows users to find licensed drone operators and access a marketplace to buy and sell drones. It simplifies drone-related services and trading through a user-friendly interface.",
    images: [
        "/assets/sky1.png",
        "/assets/sky2.png",
        "/assets/sky3.png",
        "/assets/sky4.png",
        "/assets/sky5.png",
        "/assets/sky6.png",
    ],
    tags: [
      "Dart","Firebase"
    ],
  },
    {
    name: "Resturent Reservation System",
    description:
      "A web-based restaurant reservation system that enables users to browse available time slots and book tables online. It allows restaurant managers to manage bookings, update table availability, and streamline the reservation process efficiently.",
    images: [
        "/assets/res1.png",
        "/assets/res2.png",
        "/assets/res3.png",
        "/assets/res4.png",
        "/assets/res5.png",
        "/assets/res6.png",
    ],
    tags: [
      "HTML","CSS","JSP","JavaScript","Bootstrap","Java",
    ],
  },
   {
    name: "Movie Booking System",
    description:
      "a web application that lets users view showtimes, select seats, and book  tickets online. It also manages movies, schedules, and payments.",
    images: [
        "/assets/mv1.jpg",
        "/assets/mv2.jpg",
        "/assets/mv3.jpg",
    ],
    tags: [
      "HTML","CSS","JSP","JavaScript","Bootstrap","Java",
    ],
  },
];

const ProjectsSection = () => {
  const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,    // 3 seconds between slides
  pauseOnHover: false, 
  };

  return (
    <section id="projects" className="py-8 bg-[#f3f4f6] text-center mt-10 rounded-2xl mx-6 shadow">
      <p className="text-sm text-gray-500 font-semibold uppercase mb-2">Work</p>
      <h2 className="text-2xl font-medium mb-10">
        Some of the noteworthy projects I have built:
      </h2>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10 max-w-6xl mx-auto`}
          >
            {/* Image or Slider */}
            <div className="w-full md:w-1/2 rounded-xl shadow-lg bg-gray-300">
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
            </div>

            {/* Project Info */}
            <div className="text-left md:w-1/2 bg-gray-100 rounded-lg py-6 px-4">
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
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1"
              >
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
